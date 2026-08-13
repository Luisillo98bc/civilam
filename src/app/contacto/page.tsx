import { Metadata } from 'next';
import HeroInner from '@/components/HeroInner';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Contacto',
  description: '¿Tienes un proyecto en mente? Escríbenos y nuestro equipo de ingenieros se pondrá en contacto contigo para brindarte soluciones.',
  alternates: { canonical: '/contacto' },
};

export default function ContactoPage() {
  return (
    <main>
      <HeroInner 
        title="Evaluemos tu proyecto" 
        subtitle="Comparte la ubicación, el tipo de proyecto y la etapa actual. Con esa información podremos orientar mejor la primera conversación."
        eyebrow="CONTACTO · EVALUACIÓN INICIAL"
        image="/nosotros-coordinacion-obra.png"
        waveColorClass="fill-bg-light"
      />
      <section className="section bg-[#f4f2ed]">
        <div className="site-wrapper">
          <div className="mb-12 grid gap-6 border-b border-slate-300 pb-10 lg:grid-cols-2 lg:items-end">
            <div><p className="technical-label text-[#9a6410]">CANAL DE ATENCIÓN</p><h2 className="editorial-title mt-5">Cuéntanos qué necesitas resolver</h2></div>
            <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">Puedes enviar una consulta detallada o preparar un resumen y continuar directamente por WhatsApp.</p>
          </div>
          <div id="contacto-formulario">
            <ContactForm />
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
