import Image from 'next/image';

interface HeroInnerProps { title: string; subtitle?: string; image?: string; eyebrow?: string; waveColorClass?: string }

export default function HeroInner({ title, subtitle, image = '/nosotros-hero-ingenieria.png', eyebrow = 'CIVILAM · INGENIERÍA CIVIL' }: HeroInnerProps) {
  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-[#102a43] text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center saturate-[.7]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,38,.94)_0%,rgba(7,24,38,.72)_55%,rgba(7,24,38,.32)_100%)]" />
      <div className="absolute inset-0 blueprint-grid opacity-15" />
      <div className="site-wrapper relative z-10 flex min-h-[520px] items-end pb-16 pt-28 lg:pb-20">
        <div className="max-w-4xl">
          <p className="technical-label text-[#e5a72a]">{eyebrow}</p>
          <h1 className="mt-6 text-[clamp(2.8rem,6vw,5.7rem)] font-bold leading-[.96] tracking-[-.055em] text-white">{title}</h1>
          {subtitle && <p className="mt-7 max-w-2xl border-l-2 border-[#e5a72a] pl-5 text-lg leading-8 text-slate-200">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
