import Image from 'next/image';
import Link from 'next/link';
import projectsData from '@/../content/projects.json';

export default function FeaturedProjects() {
  const projects = projectsData.slice(0, 3);
  return (
    <section className="section bg-[#102a43] text-white">
      <div className="site-wrapper">
        <div className="flex flex-col justify-between gap-6 border-b border-white/20 pb-9 md:flex-row md:items-end">
          <div>
            <p className="technical-label text-[#e5a72a]">EXPERIENCIA APLICADA</p>
            <h2 className="editorial-title mt-4 max-w-2xl text-white">Proyectos que explican cómo trabajamos</h2>
          </div>
          <Link href="/proyectos" className="inline-flex items-center gap-3 font-semibold text-white">Ver portafolio completo <span>→</span></Link>
        </div>
        <div className="grid gap-px bg-white/20 md:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.id} className="group bg-[#102a43] py-8 md:px-6 first:pl-0 last:pr-0">
              <Link href={`/proyectos/${project.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover saturate-[.8] transition duration-700 group-hover:scale-[1.035] group-hover:saturate-100" />
                  <span className="absolute left-0 top-0 bg-[#e5a72a] px-3 py-2 font-mono text-[11px] font-bold text-[#102a43]">PRJ-{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="pt-6">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">{project.category} · {project.location} · {project.year}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">{project.title}</h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-300">{project.description}</p>
                  <span className="mt-6 inline-flex items-center gap-3 border-b border-white/40 pb-1 text-sm font-semibold">Revisar proyecto <span>→</span></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
