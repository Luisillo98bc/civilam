import Image from 'next/image';

const values = [
  ['01', 'Rigor técnico', 'Documentamos decisiones, coordinamos especialidades y verificamos entregables antes de cada presentación.'],
  ['02', 'Transparencia', 'Comunicamos alcances, riesgos y avances con claridad para facilitar decisiones oportunas.'],
  ['03', 'Cumplimiento', 'Trabajamos considerando normativa, requisitos de la entidad y condiciones reales del proyecto.'],
  ['04', 'Trabajo integrado', 'Articulamos campo, diseño y documentación para evitar vacíos entre disciplinas.'],
];

export default function AboutInfo() {
  return (
    <>
      <section className="section bg-[#fbfaf7]">
        <div className="site-wrapper grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
            <Image src="/nosotros-coordinacion-obra.png" alt="Ingenieros coordinando un proyecto de construcción en obra" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover saturate-[.75]" />
            <span className="absolute bottom-0 left-0 bg-[#e5a72a] px-5 py-4 font-mono text-xs font-bold text-[#102a43]">INGENIERÍA · DISEÑO · CONSTRUCCIÓN</span>
          </div>
          <div>
            <p className="technical-label text-[#9a6410]">QUIÉNES SOMOS</p>
            <h2 className="editorial-title mt-5">Ingeniería orientada a decisiones que sí se pueden ejecutar</h2>
            <p className="mt-7 text-lg leading-8 text-[#102a43]">CIVILAM es una empresa especializada en consultoría, diseño, ejecución y supervisión de proyectos de ingeniería civil.</p>
            <p className="mt-5 text-base leading-7 text-slate-600">Acompañamos el proyecto desde la información de campo hasta los documentos finales, coordinando especialidades y manteniendo trazabilidad sobre alcances, criterios y entregables.</p>
            <dl className="mt-10 grid border-y border-slate-300 sm:grid-cols-2">
              <div className="py-5 sm:border-r sm:pr-6"><dt className="technical-label text-slate-500">BASE OPERATIVA</dt><dd className="mt-2 font-semibold text-[#102a43]">Huancayo, Perú</dd></div>
              <div className="py-5 sm:pl-6"><dt className="technical-label text-slate-500">COBERTURA</dt><dd className="mt-2 font-semibold text-[#102a43]">Atención a nivel nacional</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section className="section bg-[#f4f2ed]">
        <div className="site-wrapper">
          <div className="grid gap-px bg-slate-300 lg:grid-cols-2">
            <article className="bg-[#f4f2ed] p-8 sm:p-12 lg:p-16">
              <span className="font-mono text-xs font-bold text-[#9a6410]">01 · PROPÓSITO</span>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-.035em] text-[#102a43]">Nuestra misión</h2>
              <p className="mt-7 text-base leading-8 text-slate-700">Transformar el entorno y desarrollar infraestructura eficiente mediante soluciones integrales de consultoría, diseño, supervisión y ejecución de proyectos de ingeniería.</p>
              <p className="mt-5 text-base leading-8 text-slate-600">Nos guiamos por el criterio técnico, la integración de herramientas como BIM y CAD, y la revisión de la normativa aplicable para cada alcance.</p>
            </article>
            <article className="bg-[#f4f2ed] p-8 sm:p-12 lg:p-16">
              <span className="font-mono text-xs font-bold text-[#9a6410]">02 · HORIZONTE</span>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-.035em] text-[#102a43]">Nuestra visión</h2>
              <p className="mt-7 text-base leading-8 text-slate-700">Consolidarnos como una empresa referente en ingeniería y construcción a nivel nacional, reconocida por la precisión de sus expedientes técnicos, la innovación tecnológica y la confiabilidad en la entrega de proyectos.</p>
              <p className="mt-5 text-base leading-8 text-slate-600">Buscamos impulsar infraestructura que contribuya al desarrollo de las organizaciones, comunidades y territorios donde intervenimos.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section bg-[#102a43] text-white">
        <div className="site-wrapper grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div><p className="technical-label text-[#e5a72a]">PRINCIPIOS DE TRABAJO</p><h2 className="editorial-title mt-5 text-white">Cómo abordamos cada encargo</h2></div>
          <div className="grid gap-px bg-white/20 sm:grid-cols-2">
            {values.map(([number, title, text]) => <article key={number} className="bg-[#102a43] p-8"><span className="font-mono text-xs text-[#e5a72a]">{number}</span><h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3><p className="mt-4 text-sm leading-6 text-slate-300">{text}</p></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
