'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import projectsData from '@/../content/projects.json';

export default function Projects() {
  const [category, setCategory] = useState('Todos');
  const [query, setQuery] = useState('');
  const categories = ['Todos', ...Array.from(new Set(projectsData.map(project => project.category)))];
  
  const projects = useMemo(() => {
    return projectsData.filter(project => 
      (category === 'Todos' || project.category === category) &&
      `${project.title} ${project.numberTitle}`.toLowerCase().includes(query.toLowerCase().trim())
    );
  }, [category, query]);

  return (
    <section className="section bg-[#fbfaf7]">
      <div className="site-wrapper">
        <div className="grid gap-7 border-b border-slate-300 pb-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="technical-label text-[#dc2626] font-bold">PORTAFOLIO TÉCNICO</p>
            <h2 className="editorial-title mt-2">Nuestros Proyectos</h2>
          </div>
          <label className="block">
            <span className="sr-only">Buscar proyectos</span>
            <input 
              value={query} 
              onChange={event => setQuery(event.target.value)} 
              placeholder="Buscar proyecto..." 
              className="min-h-12 w-full border border-slate-400 bg-white px-4 text-sm outline-none focus:border-[#dc2626] lg:w-72" 
            />
          </label>
        </div>

        <div className="flex flex-wrap gap-2.5 border-b border-slate-300 py-5" aria-label="Filtrar por especialidad">
          {categories.map(item => (
            <button 
              key={item} 
              onClick={() => setCategory(item)} 
              aria-pressed={category === item} 
              className={`py-2.5 px-4 rounded-md border text-xs font-bold uppercase tracking-wide transition-all ${
                category === item 
                  ? 'border-[#dc2626] bg-[#dc2626] text-white shadow-sm' 
                  : 'border-slate-300 bg-white text-slate-700 hover:border-[#dc2626] hover:text-[#dc2626]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {projects.length ? (
          <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id} 
                className="bg-white border border-gray-200 p-5 md:p-6 shadow-sm flex flex-col justify-between"
              >
                {/* Header title in Red */}
                <h3 className="text-[#dc2626] font-bold text-sm md:text-base uppercase tracking-wide mb-4 line-clamp-2 min-h-[3rem]">
                  {project.numberTitle}
                </h3>

                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 border border-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Full Project Description */}
                <p className="mt-5 text-[#111827] font-semibold text-xs leading-relaxed tracking-wide uppercase">
                  {project.title}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-slate-600">No encontramos proyectos con esos criterios.</p>
        )}
      </div>
    </section>
  );
}
