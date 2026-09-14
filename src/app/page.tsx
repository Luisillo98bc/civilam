import Hero from '@/components/Hero';
import SectorStrip from '@/components/SectorStrip';
import Services from '@/components/Services';
import FeaturedProjects from '@/components/FeaturedProjects';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectorStrip />
      <Services />
      <FeaturedProjects />
      <FAQ />
      <CTA />
    </main>
  );
}
