import { Metadata } from 'next';
import HeroInner from '@/components/HeroInner';
import TrainingList from '@/components/TrainingList';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Capacitaciones y Cursos',
  description: 'Cursos de especialización en ingeniería, construcción, seguridad y gestión de obras dictados por profesionales altamente capacitados.',
  alternates: { canonical: '/capacitaciones' },
};

export default function CapacitacionesPage() {
  return (
    <main>
      <Script id="training-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Capacitaciones técnicas CIVILAM',
          itemListElement: { '@type': 'ListItem', position: 1, name: 'Cursos de ingeniería y construcción' },
        })}
      </Script>
      <HeroInner 
        title="Formación técnica aplicada" 
        subtitle="Cursos orientados a normativa, gestión, diseño y herramientas utilizadas en proyectos reales de ingeniería y construcción."
        eyebrow="CAPACITACIONES · DESARROLLO PROFESIONAL"
        image="/experiencia.png"
      />
      <TrainingList />
    </main>
  );
}
