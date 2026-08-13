'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsData from '@/../content/projects.json';

export default function Projects() {
  const [category, setCategory] = useState('Todos');
  const [query, setQuery] = useState('');
  const categories = ['Todos', ...Array.from(new Set(projectsData.map(project => project.category)))];
  const projects = useMemo(() => projectsData.filter(project => (category === 'Todos' || project.category === category) && `${project.title} ${project.location} ${project.client}`.toLowerCase().includes(query.toLowerCase().trim())), [category, query]);

  return (
    <section className="section bg-[#fbfaf7]">
      <div className="site-wrapper">
        <div className="grid gap-7 border-b border-slate-300 pb-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="technical-label text-[#9a6410]">PORTAFOLIO TÉCNICO</p><h2 className="editorial-title mt-5">Experiencia por especialidad y territorio</h2></div>
          <label className="block"><span className="sr-only">Buscar proyectos</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar proyecto o ubicación" className="min-h-12 w-full border border-slate-400 bg-transparent px-4 text-sm outline-none focus:border-[#102a43] lg:w-72" /></label>
        </div>
        <div className="flex gap-2 overflow-x-auto border-b border-slate-300 py-5" aria-label="Filtrar por especialidad">
          {categories.map(item => <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`min-h-11 shrink-0 border px-4 text-xs font-bold uppercase tracking-wide ${category === item ? 'border-[#102a43] bg-[#102a43] text-white' : 'border-slate-300 text-slate-600 hover:border-[#102a43]'}`}>{item}</button>)}
        </div>
        {projects.length ? <div className="grid gap-px bg-slate-300 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <article key={project.id} className="group bg-[#fbfaf7] p-5 lg:p-7"><Link href={`/proyectos/${project.id}`}><div className="relative aspect-[4/3] overflow-hidden bg-slate-200"><Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover saturate-[.75] transition duration-700 group-hover:scale-[1.035] group-hover:saturate-100" /><span className="absolute left-0 top-0 bg-[#e5a72a] px-3 py-2 font-mono text-[10px] font-bold text-[#102a43]">PRJ-{String(index + 1).padStart(2, '0')}</span></div><p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-slate-500">{project.category} · {project.year}</p><h3 className="mt-3 text-2xl font-semibold leading-tight text-[#102a43]">{project.title}</h3><p className="mt-3 text-sm text-slate-600">{project.location}</p><span className="mt-6 inline-flex border-b border-[#102a43] pb-1 text-sm font-semibold text-[#102a43]">Ver ficha técnica →</span></Link></article>)}</div> : <p className="py-16 text-center text-slate-600">No encontramos proyectos con esos criterios.</p>}
      </div>
    </section>
  );
}
