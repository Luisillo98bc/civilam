import Link from 'next/link';
import { contact } from '@/lib/site';

export default function CTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[#e5a72a] py-20 text-[#102a43] lg:py-28">
      <div className="absolute inset-0 blueprint-grid opacity-15" />
      <div className="site-wrapper relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="technical-label text-[#102a43]/65">CONVERSEMOS SOBRE TU PROYECTO</p>
          <h2 className="mt-5 max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[.98] tracking-[-.05em]">Revisemos la viabilidad técnica de tu proyecto.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#102a43]/80">Indícanos ubicación, tipo de proyecto y etapa actual. Nuestro equipo revisará la información y te contactará para definir los siguientes pasos.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href="/contacto" className="inline-flex min-h-13 items-center justify-center gap-3 bg-[#102a43] px-8 py-4 font-bold text-white transition hover:bg-[#071b2c]">Solicitar evaluación <span>→</span></Link>
          <a href={`${contact.whatsapp}?text=${encodeURIComponent('Hola CIVILAM, quisiera evaluar un proyecto.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center border border-[#102a43] px-8 py-4 font-bold transition hover:bg-white/30">Enviar por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
