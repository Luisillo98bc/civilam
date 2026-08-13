import Hero from '@/components/Hero';
import NeedsGrid from '@/components/NeedsGrid';
import SectorStrip from '@/components/SectorStrip';
import Services from '@/components/Services';
import FeaturedProjects from '@/components/FeaturedProjects';
import EngineeringProcess from '@/components/EngineeringProcess';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectorStrip />
      <NeedsGrid />
      <Services />
      <FeaturedProjects />
      <EngineeringProcess />
      <FAQ />
      <CTA />
    </main>
  );
}
