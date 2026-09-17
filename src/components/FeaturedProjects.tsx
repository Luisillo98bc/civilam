import Image from 'next/image';
import projectsData from '@/../content/projects.json';
import { formatProjectText, splitProjectHeading } from '@/lib/format-text';

export default function FeaturedProjects() {
  return (
    <section className="section bg-white text-gray-900 border-t border-gray-100">
      <div className="site-wrapper">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-end" data-reveal="reveal-left">
          <div>
            <p className="technical-label text-[#dc2626] font-bold">EXPERIENCIA APLICADA</p>
            <h2 className="editorial-title mt-2 text-[#102a43]">Nuestros Proyectos</h2>
          </div>
        </div>

        {/* Grid of Static Cards (3 columns) */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => {
            const heading = splitProjectHeading(project.numberTitle);

            return (
            <div
              key={project.id}
              className="group relative flex h-full flex-col overflow-hidden border border-[#cbd5df] bg-[#fbfaf7] transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#c72c2c] hover:bg-white hover:shadow-[0_20px_44px_-28px_rgba(16,42,67,.65)]"
              data-reveal="reveal-scale"
              data-reveal-delay={(project.id % 5) || 5}
            >
              <div className="relative flex min-h-[112px] items-start gap-4 border-b-4 border-[#e5a72a] bg-[#102a43] px-5 py-6 text-white md:px-6">
                <span className="pt-1 font-mono text-xs font-bold tracking-[0.14em] text-[#e5a72a]" aria-hidden="true">{heading.number.padStart(2, '0')}</span>
                <h3 className="line-clamp-3 flex-1 text-[0.98rem] font-extrabold leading-6 tracking-[0.01em] text-white transition-colors group-hover:text-[#e5a72a] md:text-[1.05rem]" title={heading.title}>
                  {heading.title}
                </h3>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102a43]/25 via-transparent to-transparent opacity-70" />
              </div>

              {/* Project Name / Full Description */}
              <div className="flex min-h-[156px] flex-1 flex-col justify-center border-t border-slate-200 bg-[#f4f2ed] px-5 py-6 md:px-6">
                <p className="break-words text-pretty text-[0.82rem] font-medium leading-7 tracking-[0.01em] text-[#102a43]">
                  {formatProjectText(project.title)}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
