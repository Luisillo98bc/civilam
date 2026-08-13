'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { analyticsConsentKey } from '@/lib/site';

type Consent = 'accepted' | 'rejected';

export default function CookieConsent() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!measurementId) return;
    const timer = window.setTimeout(() => {
      setVisible(localStorage.getItem(analyticsConsentKey) === null);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [measurementId]);

  if (!measurementId || !visible) return null;

  const save = (consent: Consent) => {
    localStorage.setItem(analyticsConsentKey, consent);
    window.dispatchEvent(new CustomEvent('civilam-consent-change', { detail: consent }));
    setVisible(false);
  };

  return (
    <aside aria-label="Preferencias de analítica" className="fixed inset-x-4 bottom-4 z-[10001] mx-auto max-w-3xl border border-slate-700 bg-[#071826] p-5 text-white shadow-2xl sm:flex sm:items-center sm:gap-6 sm:p-6">
      <div className="grow">
        <p className="font-semibold">Tu privacidad importa</p>
        <p className="mt-1 text-sm leading-6 text-slate-300">
          Usamos analítica opcional para entender qué contenidos resultan útiles. No se activa hasta que la aceptes. Consulta la{' '}
          <Link href="/privacidad#cookies" className="underline underline-offset-2">política de privacidad</Link>.
        </p>
      </div>
      <div className="mt-4 flex shrink-0 gap-2 sm:mt-0">
        <button type="button" onClick={() => save('rejected')} className="min-h-11 border border-white/40 px-4 text-sm font-semibold hover:bg-white/10">Rechazar</button>
        <button type="button" onClick={() => save('accepted')} className="min-h-11 bg-[#e5a72a] px-4 text-sm font-bold text-[#102a43] hover:bg-[#f0b53b]">Aceptar</button>
      </div>
    </aside>
  );
}
