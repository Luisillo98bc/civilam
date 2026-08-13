import type { Metadata } from 'next';
import Link from 'next/link';
import { company, contact } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Información sobre el tratamiento de datos personales enviados a CIVILAM.',
  alternates: { canonical: '/privacidad' },
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#fbfaf7] py-20 lg:py-28">
      <article className="site-wrapper max-w-3xl">
        <div className="mb-8 border-l-2 border-[#e5a72a] bg-[#f4f2ed] p-5 text-sm leading-6 text-slate-700"><strong>Responsable informado en el brochure:</strong> {company.legalName}. Atención operativa: {contact.address}. Correo: <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>. El RUC y la razón social inscrita no aparecen en el brochure remitido y deben completarse antes de publicar.</div>
        <p className="technical-label text-[#9a6410]">INFORMACIÓN LEGAL</p>
        <h1 className="editorial-title mt-5">Política de privacidad</h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">Esta política explica cómo CIVILAM trata la información recibida mediante este sitio. Antes de publicar, la razón social, RUC y domicilio legal del responsable deben incorporarse en este apartado.</p>

        <div className="article-content mt-10 text-slate-700">
          <h2>Responsable y contacto</h2>
          <p>El responsable del tratamiento es CIVILAM, con atención operativa en {contact.address}. Las consultas sobre privacidad y el ejercicio de derechos pueden dirigirse a <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>

          <h2>Datos y finalidades</h2>
          <p>Podemos recibir nombre, teléfono, correo electrónico, servicio de interés, ubicación general y detalles del proyecto. Se utilizan para responder consultas, evaluar requerimientos, preparar propuestas y mantener la comunicación solicitada.</p>
          <p>La suscripción al boletín se utiliza únicamente para enviar novedades relacionadas con ingeniería, construcción y capacitaciones. Puedes retirarla escribiendo al correo indicado.</p>

          <h2>Base y carácter de la información</h2>
          <p>El tratamiento se realiza con el consentimiento expresado al enviar el formulario. Los campos marcados como obligatorios son necesarios para atender la solicitud; no proporcionarlos impide procesarla. No se adoptan decisiones automatizadas ni se elaboran perfiles comerciales mediante estos formularios.</p>

          <h2>Encargados, transferencias y seguridad</h2>
          <p>La información puede ser procesada por proveedores tecnológicos necesarios para operar el sitio y entregar correos, como el servicio de alojamiento y Resend. Estos proveedores pueden operar infraestructura fuera del Perú. CIVILAM debe mantener accesos restringidos y medidas razonables de seguridad.</p>

          <h2>Conservación</h2>
          <p>Las consultas y propuestas se conservarán hasta por 24 meses desde la última interacción, salvo que exista una relación contractual u obligación legal que justifique un plazo distinto. Los datos del boletín se conservarán hasta que se solicite la baja.</p>

          <h2>Derechos sobre tus datos</h2>
          <p>Puedes solicitar acceso, rectificación, cancelación u oposición, así como revocar tu consentimiento, escribiendo a <a href={`mailto:${contact.email}`}>{contact.email}</a>. Incluye tu nombre, el derecho solicitado y la información necesaria para identificar la solicitud.</p>
          <p>También puedes consultar la orientación oficial de la <a href="https://www.gob.pe/9270" target="_blank" rel="noopener noreferrer">Autoridad Nacional de Protección de Datos Personales</a>.</p>

          <h2 id="cookies">Cookies y analítica</h2>
          <p>El sitio puede usar almacenamiento local estrictamente necesario para recordar el tema visual y tu elección sobre analítica. Google Analytics solo se carga cuando existe un identificador configurado y eliges “Aceptar”. Puedes retirar el consentimiento eliminando los datos del sitio desde tu navegador.</p>

          <h2>Actualizaciones</h2>
          <p>Esta versión fue actualizada el 8 de agosto de 2026. Los cambios relevantes se publicarán en esta misma página.</p>
        </div>

        <Link href="/contacto" className="btn-primary mt-10">Contactar a CIVILAM</Link>
      </article>
    </main>
  );
}
