'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project { id: number; title: string; category: string; image: string; description: string; client: string; location: string; year: string; gallery?: string[] }

export default function ProjectDetailClient({ project }: { project: Project }) {
  const images = Array.from(new Set([project.image, ...(project.gallery || [])]));
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (active === null) return;
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') setActive((active + 1) % images.length);
      if (event.key === 'ArrowLeft') setActive((active - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, images.length]);

  return (
    <div className="bg-[#fbfaf7]">
      <section className="relative min-h-[620px] bg-[#102a43] text-white">
        <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover saturate-[.75]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,38,.97),rgba(7,24,38,.7)_60%,rgba(7,24,38,.2))]" />
        <div className="absolute inset-0 blueprint-grid opacity-15" />
        <div className="site-wrapper relative z-10 flex min-h-[620px] flex-col justify-end pb-16 pt-32">
          <Link href="/proyectos" className="mb-12 inline-flex w-fit border-b border-white/50 pb-1 text-sm font-semibold text-white">← Volver a proyectos</Link>
          <p className="technical-label text-[#e5a72a]">{project.category} · {project.year}</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.7rem,6vw,5.6rem)] font-bold leading-[.97] tracking-[-.055em] text-white">{project.title}</h1>
          <p className="mt-6 text-lg text-slate-200">{project.location}</p>
        </div>
      </section>

      <section className="section">
        <div className="site-wrapper grid gap-14 lg:grid-cols-[1.35fr_.65fr] lg:gap-20">
          <article>
            <p className="technical-label text-[#9a6410]">DESCRIPCIÓN Y ALCANCE</p>
            <h2 className="editorial-title mt-5">Información del proyecto</h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-700">{project.description}</p>
            <div className="mt-12 grid gap-px bg-slate-300 sm:grid-cols-3">
              {[['Cliente', project.client], ['Ubicación', project.location], ['Año', project.year]].map(([label, value]) => <div key={label} className="bg-[#fbfaf7] p-6"><dt className="technical-label text-slate-500">{label}</dt><dd className="mt-3 font-semibold text-[#102a43]">{value}</dd></div>)}
            </div>
          </article>
          <aside className="h-fit border-t-4 border-[#e5a72a] bg-[#102a43] p-8 text-white lg:sticky lg:top-32">
            <p className="technical-label text-[#e5a72a]">PROYECTO SIMILAR</p>
            <h2 className="mt-5 text-3xl font-semibold text-white">¿Necesitas desarrollar un alcance relacionado?</h2>
            <p className="mt-5 text-sm leading-6 text-slate-300">Comparte ubicación, antecedentes y etapa actual para preparar una primera orientación.</p>
            <Link href="/contacto" className="mt-8 inline-flex min-h-12 w-full items-center justify-center bg-[#e5a72a] px-5 font-bold text-[#102a43]">Solicitar evaluación</Link>
          </aside>
        </div>
      </section>

      <section className="section bg-[#f4f2ed]">
        <div className="site-wrapper">
          <div className="flex items-end justify-between border-b border-slate-300 pb-8"><div><p className="technical-label text-[#9a6410]">REGISTRO VISUAL</p><h2 className="editorial-title mt-5">Galería del proyecto</h2></div><span className="font-mono text-xs text-slate-500">{images.length} IMÁGENES</span></div>
          <div className="grid gap-px bg-slate-300 sm:grid-cols-2 lg:grid-cols-3">{images.map((image, index) => <button key={image} onClick={() => setActive(index)} className="group relative aspect-[4/3] overflow-hidden bg-slate-200" aria-label={`Ampliar imagen ${index + 1}`}><Image src={image} alt={`${project.title}, imagen ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" /></button>)}</div>
        </div>
      </section>

      {active !== null && <div role="dialog" aria-modal="true" aria-label="Galería ampliada" className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#071826]/95 p-4" onClick={() => setActive(null)}><button className="absolute right-5 top-5 min-h-11 border border-white/40 px-4 text-white" onClick={() => setActive(null)}>Cerrar ×</button><button className="absolute left-3 z-10 size-12 bg-white text-[#102a43]" onClick={event => { event.stopPropagation(); setActive((active - 1 + images.length) % images.length); }} aria-label="Imagen anterior">←</button><div className="relative h-[80vh] w-[85vw]" onClick={event => event.stopPropagation()}><Image src={images[active]} alt={`${project.title}, imagen ampliada`} fill sizes="90vw" className="object-contain" /></div><button className="absolute right-3 z-10 size-12 bg-white text-[#102a43]" onClick={event => { event.stopPropagation(); setActive((active + 1) % images.length); }} aria-label="Imagen siguiente">→</button></div>}
    </div>
  );
}
