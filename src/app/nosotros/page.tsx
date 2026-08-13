import { Metadata } from 'next';
import HeroInner from '@/components/HeroInner';
import AboutInfo from '@/components/AboutInfo';
import EngineeringProcess from '@/components/EngineeringProcess';
import CTA from '@/components/CTA';
import CompanySnapshot from '@/components/CompanySnapshot';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce más sobre CIVILAM y por qué somos la opción ideal para tu proyecto de ingeniería o construcción en Perú.',
  alternates: { canonical: '/nosotros' },
};

export default function NosotrosPage() {
  return (
    <main>
      <HeroInner 
        title="Ingeniería con criterio y trazabilidad" 
        subtitle="Coordinamos estudios, diseño y documentación para convertir necesidades de infraestructura en soluciones técnicamente ejecutables."
        eyebrow="EMPRESA · FORMA DE TRABAJO"
        image="/nosotros-hero-ingenieria.png"
      />
      <AboutInfo />
      <CompanySnapshot />
      <EngineeringProcess />
      <CTA />
    </main>
  );
}
