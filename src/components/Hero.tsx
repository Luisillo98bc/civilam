import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[680px] overflow-hidden bg-[#102a43] text-white lg:min-h-[720px]">
      <Image
        src="/nosotros-hero-ingenieria.png"
        alt="Equipo técnico trabajando en un proyecto de ingeniería civil"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,24,38,.98)_0%,rgba(8,24,38,.88)_42%,rgba(8,24,38,.30)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,38,.18)_0%,transparent_35%,rgba(8,24,38,.35)_100%)]" />
      <div className="absolute inset-0 blueprint-grid opacity-15" />

      <div className="site-wrapper relative z-10 flex min-h-[680px] items-center pb-12 pt-28 lg:min-h-[720px] lg:pb-16">
        <div className="max-w-[720px]">
          <p className="technical-label mb-7 text-white/70">INGENIERÍA CIVIL · HUANCAYO · COBERTURA NACIONAL</p>
          <h1 className="max-w-[720px] text-[clamp(2.7rem,5.5vw,5.1rem)] font-bold leading-[.98] tracking-[-.055em] text-white">
            Proyectos complejos.<br />Soluciones <span className="text-[#e5a72a]">ejecutables.</span>
          </h1>
          <p className="mt-7 max-w-[620px] text-base leading-7 text-slate-200 md:text-lg md:leading-8">
            Desarrollamos expedientes técnicos, saneamiento, hidráulica, construcción y supervisión con criterio técnico, control documental y acompañamiento en cada etapa.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contacto#cotizador" className="btn-primary min-h-12 rounded-sm px-7 py-3.5">
              Solicitar evaluación
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/proyectos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/45 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#102a43]">
              Ver proyectos ejecutados
            </Link>
          </div>
          <div className="mt-11 grid max-w-[720px] grid-cols-1 border-y border-white/20 sm:grid-cols-3">
            {[
              ['01', 'Evaluación técnica inicial'],
              ['02', 'Especialistas por disciplina'],
              ['03', 'Acompañamiento integral'],
            ].map(([number, label]) => (
              <div key={number} className="flex items-center gap-4 border-white/20 py-4 sm:border-r sm:px-5 first:pl-0 last:border-r-0">
                <span className="font-mono text-xs text-[#e5a72a]">{number}</span>
                <span className="text-sm font-medium text-slate-200">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
