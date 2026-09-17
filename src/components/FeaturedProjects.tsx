import Image from 'next/image';
import projectsData from '@/../content/projects.json';

export default function FeaturedProjects() {
  return (
    <section className="section bg-white text-gray-900 border-t border-gray-100">
      <div className="site-wrapper">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-end">
          <div>
            <p className="technical-label text-[#dc2626] font-bold">EXPERIENCIA APLICADA</p>
            <h2 className="editorial-title mt-2 text-[#102a43]">Nuestros Proyectos</h2>
          </div>
        </div>

        {/* Grid of Static Cards (3 columns) */}
        <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 p-5 md:p-6 shadow-sm flex flex-col justify-between"
            >
              {/* Header number & title in Red */}
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

              {/* Project Name / Full Description */}
              <p className="mt-5 text-[#111827] font-semibold text-xs leading-relaxed tracking-wide uppercase">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
