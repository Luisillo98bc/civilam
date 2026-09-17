import { Metadata } from 'next';
import HeroInner from '@/components/HeroInner';
import Projects from '@/components/Projects';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Proyectos Destacados',
  description: 'Explora el portafolio de CIVILAM por especialidad, ubicación y alcance técnico desarrollado.',
  alternates: { canonical: '/proyectos' },
};

export default function ProyectosPage() {
  return (
    <main>
      <HeroInner 
        title="Proyectos y experiencia aplicada" 
        eyebrow="PORTAFOLIO · CASOS DE PROYECTO"
        image="/construccion_mante.jpeg"
      />
      <Projects />
      <CTA />
    </main>
  );
}
