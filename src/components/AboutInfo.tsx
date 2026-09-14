import Image from 'next/image';
import { FaAward, FaBalanceScale, FaHandshake, FaLeaf, FaLightbulb, FaUsers } from 'react-icons/fa';

const values = [
  ['01', 'Integridad y Profesionalidad', 'Actuamos con ética, transparencia y responsabilidad en cada proyecto, garantizando servicios confiables y de alta calidad para nuestros clientes.', FaAward],
  ['02', 'Compromiso con los Resultados', 'Trabajamos con eficiencia y precisión para cumplir cada objetivo planteado.', FaHandshake],
  ['03', 'Innovación Tecnológica', 'Incorporamos herramientas, software y metodologías modernas (BIM) que permiten desarrollar proyectos más exactos, seguros y adaptados a las exigencias actuales del sector.', FaLightbulb],
  ['04', 'Respeto por las Normas Vigentes', 'Cumplimos con las normativas legales y técnicas para garantizar servicios responsables y confiables.', FaBalanceScale],
  ['05', 'Cuidado del Medio Ambiente', 'Ejecutamos nuestras actividades minimizando el impacto ambiental y promoviendo prácticas sostenibles.', FaLeaf],
  ['06', 'Trabajo en Equipo y Buen Clima Laboral', 'Fomentamos la colaboración, la comunicación y el respeto entre nuestros profesionales, creando un entorno laboral productivo, seguro y orientado a la mejora continua.', FaUsers],
] as const;

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
            <p className="mt-7 text-lg leading-8 text-[#102a43]">CIVILAM INGENIERÍA Y CONSTRUCCIÓN es una empresa especializada en la consultoría, diseño, ejecución y supervisión de proyectos de ingeniería.</p>
            <p className="mt-5 text-base leading-7 text-slate-600">Ofrecemos el máximo nivel de calidad en cada etapa, desde la recolección de datos en campo hasta la entrega final de los estudios, asegurando siempre la confiabilidad y la seguridad.</p>
            <dl className="mt-10 grid border-y border-slate-300 sm:grid-cols-2">
              <div className="py-5 sm:border-r sm:pr-6"><dt className="technical-label text-slate-500">BASE OPERATIVA</dt><dd className="mt-2 font-semibold text-[#102a43]">Huancayo, Perú</dd></div>
              <div className="py-5 sm:pl-6"><dt className="technical-label text-slate-500">COBERTURA</dt><dd className="mt-2 font-semibold text-[#102a43]">Atención a nivel nacional</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section className="section bg-[#f4f2ed]" aria-labelledby="values-title">
        <div className="site-wrapper">
          <div className="mx-auto max-w-3xl text-center">
            <p className="technical-label text-[#9a6410]">NUESTROS VALORES</p>
            <h2 id="values-title" className="editorial-title mt-5">Principios que construyen confianza</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">Cada proyecto refleja la forma en que trabajamos: con responsabilidad, innovación y respeto por las personas, las normas y el entorno.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map(([number, title, text, Icon]) => (
              <article key={number} className="group rounded-sm border border-slate-200 bg-[#fbfaf7] p-7 transition hover:-translate-y-1 hover:border-[#e5a72a] hover:shadow-[0_12px_30px_rgba(16,42,67,.08)] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#e5a72a]/15 text-xl text-[#b87808] transition group-hover:bg-[#e5a72a] group-hover:text-[#102a43]"><Icon aria-hidden="true" /></span>
                  <span className="font-mono text-xs font-bold text-[#9a6410]">{number}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#102a43]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
