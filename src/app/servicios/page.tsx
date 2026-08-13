import { Metadata } from 'next';
import HeroInner from '@/components/HeroInner';
import ServicesTabs from '@/components/ServicesTabs';
import WorkProcess from '@/components/WorkProcess';
import Certifications from '@/components/Certifications';
import CTA from '@/components/CTA';
import BrochureServices from '@/components/BrochureServices';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Servicios de Ingeniería | CIVILAM',
  description: 'Conoce el detalle de nuestras especialidades en expedientes técnicos, ingeniería civil, obras hidráulicas, saneamiento, licencias de edificación y estudios ambientales en todo el Perú.',
  alternates: { canonical: '/servicios' },
};

export default function ServiciosPage() {
  return (
    <main>
      <Script id="services-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Servicios de ingeniería CIVILAM',
          provider: { '@type': 'Organization', name: 'CIVILAM Ingeniería y Construcción' },
          areaServed: { '@type': 'Country', name: 'Perú' },
          serviceType: ['Expedientes técnicos', 'Saneamiento', 'Hidráulica', 'Construcción y supervisión'],
        })}
      </Script>
      <HeroInner 
        title="Capacidades técnicas para cada etapa" 
        subtitle="Estudios, expedientes, saneamiento, hidráulica, edificaciones y supervisión coordinados alrededor de los objetivos del proyecto."
        eyebrow="SERVICIOS · ESPECIALIDADES"
        image="/expedientes-tecnicos.png"
      />
      <section className="bg-[#fbfaf7]">
        <div className="site-wrapper pt-20 lg:pt-28">
          <div className="grid gap-6 border-b border-slate-300 pb-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="technical-label text-[#9a6410]">CATÁLOGO COMPLETO</p>
              <h2 className="editorial-title mt-5">Todo lo que podemos desarrollar</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">Explora cada especialidad, subservicio y entregable. El alcance se adapta a la etapa, ubicación y requerimientos de cada proyecto.</p>
          </div>
        </div>
        <ServicesTabs />
      </section>
      <BrochureServices />
      <WorkProcess />
      <Certifications />
      <CTA />
    </main>
  );
}
