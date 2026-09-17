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
          <p className="technical-label mb-5 text-white/70">INGENIERÍA CIVIL · INGENIERIA AMBIENTAL · ARQUITECTURA</p>
          <div className="mb-8 flex w-fit max-w-full items-center gap-4 rounded-sm bg-white px-5 py-4 text-[#102a43] shadow-[0_12px_35px_rgba(0,0,0,.18)] sm:gap-5 sm:px-7 sm:py-5">
            <Image
              src="/logo.png"
              alt=""
              width={82}
              height={82}
              className="h-[66px] w-[66px] shrink-0 object-contain sm:h-[82px] sm:w-[82px]"
            />
            <div className="border-l border-slate-200 pl-4 sm:pl-5">
              <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-none tracking-[-.055em]">CIVILAM</h1>
              <p className="mt-2 text-[0.62rem] font-bold leading-tight tracking-[0.16em] text-slate-500 sm:text-xs">INGENIERÍA Y CONSTRUCCIÓN</p>
            </div>
          </div>
          <div className="max-w-[650px] border-l-2 border-[#e5a72a] pl-5 text-slate-200">
            <p className="text-xl font-semibold leading-tight text-white md:text-2xl">“LIDERANDO LA INGENIERÍA DEL FUTURO”</p>
            <p className="mt-4 text-base leading-7 md:text-lg md:leading-8">
              Integramos experiencia, conocimiento, innovación y ciencia para diseñar, ejecutar y supervisar proyectos de ingeniería.
            </p>
          </div>
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
                <span className="font-sans text-xs text-[#e5a72a]">{number}</span>
                <span className="text-sm font-medium text-slate-200">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
