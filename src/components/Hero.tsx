import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[610px] overflow-hidden bg-[#102a43] text-white sm:min-h-[660px] lg:min-h-[720px]">
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

      <div className="site-wrapper relative z-10 flex min-h-[610px] items-center pb-10 pt-12 sm:min-h-[660px] sm:pb-12 sm:pt-20 lg:min-h-[720px] lg:pb-16 lg:pt-28">
        <div className="max-w-[720px] hero-rise">
          <p className="technical-label mb-4 text-white/70 hero-rise hero-rise-delay-1 sm:mb-5">INGENIERÍA CIVIL · INGENIERIA AMBIENTAL · ARQUITECTURA</p>
          <div className="mb-6 flex w-fit max-w-full items-center gap-3 rounded-sm bg-white px-4 py-3 text-[#102a43] shadow-[0_12px_35px_rgba(0,0,0,.18)] sm:mb-8 sm:gap-5 sm:px-7 sm:py-5 hero-rise hero-rise-delay-1">
            <Image
              src="/logo.png"
              alt=""
              width={82}
              height={82}
              className="h-[58px] w-[58px] shrink-0 object-contain sm:h-[82px] sm:w-[82px]"
            />
            <div className="border-l border-slate-200 pl-3 sm:pl-5">
              <h1 className="brand-name-hero">CIVILAM</h1>
              <p className="brand-tagline text-slate-500">INGENIERÍA Y CONSTRUCCIÓN</p>
            </div>
          </div>
          <div className="max-w-[650px] border-l-2 border-[#e5a72a] pl-4 text-slate-200 hero-rise hero-rise-delay-2 sm:pl-5">
            <p className="text-lg font-semibold leading-tight text-white sm:text-xl md:text-2xl">“LIDERANDO LA INGENIERÍA DEL FUTURO”</p>
            <p className="mt-3 text-[0.98rem] leading-6 md:mt-4 md:text-lg md:leading-8">
              Integramos experiencia, conocimiento, innovación y ciencia para diseñar, ejecutar y supervisar proyectos de ingeniería.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row hero-rise hero-rise-delay-3">
            <Link href="/contacto#cotizador" className="btn-primary min-h-12 rounded-sm px-7 py-3.5">
              Solicitar evaluación
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/proyectos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/45 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#102a43]">
              Ver proyectos ejecutados
            </Link>
          </div>
          <div className="mt-8 grid max-w-[720px] grid-cols-1 border-y border-white/20 sm:mt-11 sm:grid-cols-3 hero-rise hero-rise-delay-4">
            {[
              ['01', 'Evaluación técnica inicial'],
              ['02', 'Especialistas por disciplina'],
              ['03', 'Acompañamiento integral'],
            ].map(([number, label]) => (
              <div key={number} className="flex items-center gap-4 border-white/20 py-3 sm:border-r sm:px-5 sm:py-4 first:pl-0 last:border-r-0">
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
