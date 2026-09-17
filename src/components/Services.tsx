import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'expedientes',
    title: 'Expedientes técnicos',
    description: 'Documentación integral para proyectos de infraestructura pública y privada, coordinada desde los estudios básicos hasta el presupuesto.',
    image: '/expedientes-tecnicos.png',
    features: ['Memorias y estudios', 'Planos y especialidades', 'Metrados y presupuesto'],
  },
  {
    id: 'topografia',
    title: 'Topografía, geodesia y fotogrametría',
    description: 'Levantamiento y procesamiento de información territorial para sustentar diseños, expedientes, obras y decisiones técnicas.',
    image: '/sig-cartografia.png',
    features: ['Levantamientos con GNSS', 'Fotogrametría con drones', 'Modelos digitales de elevación'],
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento de agua y saneamiento',
    description: 'Limpieza, desinfección y mantenimiento preventivo de sistemas para conservar su operación y salubridad.',
    image: '/construccion_mante.jpeg',
    features: ['Limpieza de reservorios', 'Desinfección de redes', 'Diagnóstico y mantenimiento'],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section bg-[#fbfaf7]" data-reveal="reveal-scale">
      <div className="site-wrapper">
        <div className="grid gap-5 border-b border-slate-300 pb-9 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="technical-label text-[#9a6410]">CAPACIDADES TÉCNICAS</p>
            <h2 className="editorial-title mt-4">Servicios principales</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">Integramos estudios, diseño, documentación y ejecución para reducir vacíos entre especialidades y facilitar decisiones.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-slate-200 bg-white shadow-[0_12px_30px_-24px_rgba(16,42,67,.55)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_42px_-24px_rgba(16,42,67,.6)]" data-reveal="reveal-scale" data-reveal-delay={(services.indexOf(service) % 5) + 1}>
              <Link href={`/servicios#${service.id}`} className="flex h-full flex-col">
                <div className="relative h-[220px] overflow-hidden bg-slate-200 sm:h-[240px]">
                  <Image src={service.image} alt={service.title} fill loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" quality={75} className="object-cover saturate-[.78] transition duration-700 ease-out group-hover:scale-[1.035] group-hover:saturate-100" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102a43]/35 via-transparent to-transparent opacity-80" />
                </div>
                <div className="flex grow flex-col border-t-4 border-[#e5a72a] p-6 sm:p-7 lg:p-8">
                  <span className="technical-label text-[#9a6410]">{service.id.toUpperCase()}</span>
                  <h3 className="mt-3 text-[1.45rem] font-bold leading-tight text-[#102a43] transition-colors group-hover:text-[#c72c2c] sm:text-2xl">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>
                  <ul className="my-6 grow border-t border-slate-200 pt-5">
                    {service.features.map((feature) => <li key={feature} className="mb-2 flex gap-3 text-sm leading-6 text-slate-700"><span aria-hidden="true" className="mt-1 text-[#9a6410]">—</span><span>{feature}</span></li>)}
                  </ul>
                  <span className="inline-flex min-h-11 items-center gap-3 self-start border-b border-[#102a43] pb-1 text-sm font-semibold text-[#102a43] transition-colors group-hover:border-[#c72c2c] group-hover:text-[#c72c2c]">Ver alcance <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
