import { Metadata } from 'next';
import HeroInner from '@/components/HeroInner';
import NeedsGrid from '@/components/NeedsGrid';
import ServicesTabs from '@/components/ServicesTabs';
import CTA from '@/components/CTA';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Servicios de ingeniería',
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
        subtitle="Expedientes técnicos, Topografía, Estudios, Monitoreos Ambientales, Estudios de Impacto Ambiental, Mapas Temáticos y Arqueología."
        eyebrow="SERVICIOS · ESPECIALIDADES"
        image="/expedientes-tecnicos.png"
      />
      <NeedsGrid />
      <section className="bg-[#fbfaf7]">
        <div className="site-wrapper pt-20 lg:pt-28">
          <div className="border-b border-slate-300 pb-10">
            <p className="technical-label text-[#9a6410]">CATÁLOGO COMPLETO</p>
            <h2 className="editorial-title mt-5 max-w-4xl">Todo lo que podemos desarrollar</h2>
          </div>
        </div>
        <ServicesTabs />
      </section>
      <CTA />
    </main>
  );
}
