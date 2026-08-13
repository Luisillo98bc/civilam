import Link from 'next/link';

const needs = [
  ['01', 'Elaborar un expediente técnico', 'Estudios, memorias, planos, metrados, presupuesto y documentación para evaluación o ejecución.', '/servicios#expedientes'],
  ['02', 'Diseñar o construir una edificación', 'Arquitectura, estructuras, instalaciones, licencias, modelamiento y ejecución de obra.', '/servicios#viviendas'],
  ['03', 'Desarrollar saneamiento o hidráulica', 'Agua potable, alcantarillado, reservorios, PTAR y modelamiento hidráulico.', '/servicios#agua'],
  ['04', 'Evaluar hidrología y riesgos', 'Estudios de cuenca, inundaciones, fajas marginales y modelamiento hidráulico 1D/2D.', '/servicios#hidrologia'],
];

export default function NeedsGrid() {
  return (
    <section className="section bg-[#f4f2ed]">
      <div className="site-wrapper">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="technical-label text-[#9a6410]">PUNTO DE PARTIDA</p>
            <h2 className="editorial-title mt-5">¿Qué necesita desarrollar?</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">Ubica rápidamente el tipo de solución que requiere tu proyecto y revisa el alcance técnico disponible.</p>
            <Link href="/servicios" className="mt-8 inline-flex items-center gap-3 border-b border-[#102a43] pb-1 font-semibold text-[#102a43]">Explorar todos los servicios <span>→</span></Link>
          </div>
          <div className="border-t border-slate-300">
            {needs.map(([number, title, description, href]) => (
              <Link key={number} href={href} className="group grid gap-4 border-b border-slate-300 py-7 transition hover:bg-white/70 sm:grid-cols-[48px_1fr_36px] sm:px-4">
                <span className="font-mono text-xs text-[#9a6410]">{number}</span>
                <span>
                  <strong className="block text-xl text-[#102a43] sm:text-2xl">{title}</strong>
                  <span className="mt-2 block max-w-2xl text-sm leading-6 text-slate-600">{description}</span>
                </span>
                <span className="text-2xl text-[#102a43] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
