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
    id: 'viviendas',
    title: 'Edificaciones y construcción',
    description: 'Diseño, licenciamiento, ejecución y supervisión de edificaciones con coordinación técnica entre arquitectura e ingenierías.',
    image: '/contruc.jpeg',
    features: ['Diseño estructural', 'Licencias de edificación', 'Ejecución y control de obra'],
  },
  {
    id: 'agua',
    title: 'Agua y saneamiento',
    description: 'Sistemas de agua potable, alcantarillado y tratamiento planteados según demanda, condiciones del terreno y normativa aplicable.',
    image: '/construccion_mante.jpeg',
    features: ['Redes y reservorios', 'Alcantarillado sanitario', 'Plantas de tratamiento'],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section bg-[#fbfaf7]">
      <div className="site-wrapper">
        <div className="grid gap-5 border-b border-slate-300 pb-9 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="technical-label text-[#9a6410]">CAPACIDADES TÉCNICAS</p>
            <h2 className="editorial-title mt-4">Servicios principales</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">Integramos estudios, diseño, documentación y ejecución para reducir vacíos entre especialidades y facilitar decisiones.</p>
        </div>
        <div className="grid gap-px bg-slate-300 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="group flex h-full flex-col bg-[#fbfaf7] transition-colors hover:bg-white">
              <Link href={`/servicios#${service.id}`} className="flex h-full flex-col">
                <div className="relative h-[240px] overflow-hidden bg-slate-200">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover saturate-[.75] transition duration-700 group-hover:scale-[1.035] group-hover:saturate-100" />
                </div>
                <div className="flex grow flex-col p-7 lg:p-9">
                  <span className="technical-label text-[#9a6410]">{service.id.toUpperCase()}</span>
                  <h3 className="mt-4 text-2xl font-semibold text-[#102a43]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>
                  <ul className="my-7 grow border-t border-slate-200 pt-5">
                    {service.features.map((feature) => <li key={feature} className="mb-2 flex gap-3 text-sm text-slate-700"><span className="text-[#9a6410]">—</span>{feature}</li>)}
                  </ul>
                  <span className="inline-flex items-center gap-3 self-start border-b border-[#102a43] pb-1 text-sm font-semibold text-[#102a43]">Ver alcance <span>→</span></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
