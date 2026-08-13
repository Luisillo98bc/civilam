"use server";

import fs from "node:fs";
import path from "node:path";
import { headers } from "next/headers";
import { escapeHtml, isValidEmail, isValidPhone, normalizeText } from "@/lib/form-validation";

export type FormResult = {
  success: boolean;
  message?: string;
  error?: string;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX_REQUESTS || 5);
const attempts = new Map<string, { count: number; resetAt: number }>();

async function isRateLimited(scope: string) {
  const headerStore = await headers();
  const ip = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim()
    || headerStore.get("x-real-ip")
    || "unknown";
  const key = `${scope}:${ip}`;
  const now = Date.now();

  const redisUrl = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, "");
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (redisUrl && redisToken) {
    try {
      const redisKey = encodeURIComponent(`civilam:${key}`);
      const response = await fetch(`${redisUrl}/incr/${redisKey}`, {
        headers: { Authorization: `Bearer ${redisToken}` },
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Rate limit service unavailable");
      const result = Number((await response.json() as { result?: number }).result || 0);
      if (result === 1) {
        await fetch(`${redisUrl}/expire/${redisKey}/${Math.ceil(WINDOW_MS / 1000)}`, {
          headers: { Authorization: `Bearer ${redisToken}` },
          cache: "no-store",
        });
      }
      return result > MAX_REQUESTS;
    } catch {
      // Fallback local para desarrollo o una caída temporal del proveedor.
    }
  }

  const current = attempts.get(key);

  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (attempts.size > 1000) {
    for (const [storedKey, entry] of attempts) {
      if (entry.resetAt <= now) attempts.delete(storedKey);
    }
  }

  current.count += 1;
  return current.count > MAX_REQUESTS;
}

function saveDevelopmentSubmission(fileName: string, data: Record<string, string>) {
  if (process.env.NODE_ENV === "production") return false;

  const directory = path.join(process.cwd(), ".local-data");
  const filePath = path.join(directory, fileName);
  fs.mkdirSync(directory, { recursive: true });
  fs.appendFileSync(filePath, `${JSON.stringify({ ...data, timestamp: new Date().toISOString() })}\n`, "utf8");
  return true;
}

async function sendEmail(subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "CIVILAM Web <onboarding@resend.dev>";

  if (!apiKey || !contactEmail) return false;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8_000);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: fromEmail, to: contactEmail, subject, html }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return response.ok;
  } catch {
    return false;
  }
}

export async function submitContactForm(_prevState: unknown, formData: FormData): Promise<FormResult> {
  if (normalizeText(formData.get("website"), 200)) return { success: true, message: "Mensaje recibido." };
  if (await isRateLimited("contact")) return { success: false, error: "Demasiados intentos. Vuelve a intentarlo en unos minutos." };

  const name = normalizeText(formData.get("name"), 100);
  const phone = normalizeText(formData.get("phone"), 30);
  const email = normalizeText(formData.get("email"), 254).toLowerCase();
  const service = normalizeText(formData.get("service"), 80);
  const message = normalizeText(formData.get("message"), 3000);
  const consent = formData.get("privacy") === "on";

  if (name.length < 2 || !isValidPhone(phone) || !isValidEmail(email) || message.length < 10 || !consent) {
    return { success: false, error: "Revisa los campos obligatorios y acepta la política de privacidad." };
  }

  const safe = Object.fromEntries(
    Object.entries({ name, phone, email, service, message }).map(([key, value]) => [key, escapeHtml(value)]),
  );
  const delivered = await sendEmail(
    `Nuevo mensaje de contacto: ${safe.name}`,
    `<h3>Nuevo mensaje desde civilam.com</h3>
     <p><strong>Nombre:</strong> ${safe.name}</p>
     <p><strong>Teléfono:</strong> ${safe.phone || "No especificado"}</p>
     <p><strong>Email:</strong> ${safe.email}</p>
     <p><strong>Servicio:</strong> ${safe.service || "Consulta general"}</p>
     <p><strong>Mensaje:</strong><br>${safe.message.replace(/\n/g, "<br>")}</p>`,
  );

  if (!delivered && !saveDevelopmentSubmission("contact.ndjson", { name, phone, email, service, message })) {
    return { success: false, error: "No pudimos enviar el mensaje. Escríbenos por WhatsApp o inténtalo nuevamente." };
  }

  return { success: true, message: "Mensaje enviado. Nos pondremos en contacto pronto." };
}

export async function subscribeNewsletter(_prevState: unknown, formData: FormData): Promise<FormResult> {
  if (normalizeText(formData.get("website"), 200)) return { success: true, message: "Suscripción recibida." };
  if (await isRateLimited("newsletter")) return { success: false, error: "Demasiados intentos. Espera unos minutos." };

  const email = normalizeText(formData.get("email"), 254).toLowerCase();
  if (!isValidEmail(email)) return { success: false, error: "Ingresa un correo electrónico válido." };

  const safeEmail = escapeHtml(email);
  const delivered = await sendEmail(
    "Nueva suscripción al boletín",
    `<h3>Nueva suscripción al boletín de CIVILAM</h3><p><strong>Email:</strong> ${safeEmail}</p>`,
  );

  if (!delivered && !saveDevelopmentSubmission("newsletter.ndjson", { email })) {
    return { success: false, error: "No pudimos registrar la suscripción en este momento." };
  }

  return { success: true, message: "Suscripción registrada correctamente." };
}
