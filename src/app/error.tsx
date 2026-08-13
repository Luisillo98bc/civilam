'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <main className="flex min-h-[65vh] items-center bg-[#fbfaf7] py-20">
      <div className="site-wrapper max-w-2xl text-center">
        <p className="technical-label text-[#9a6410]">ERROR TEMPORAL</p>
        <h1 className="editorial-title mt-5 text-[#102a43]">No pudimos cargar esta sección</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600">Intenta nuevamente o escríbenos directamente para continuar con tu consulta.</p>
        <div className="mt-8 flex justify-center gap-3"><button type="button" onClick={() => reset()} className="btn-primary">Intentar nuevamente</button><Link href="/contacto" className="btn-secondary">Contactar</Link></div>
      </div>
    </main>
  );
}
