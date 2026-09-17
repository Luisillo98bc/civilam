import Hero from '@/components/Hero';
import SectorStrip from '@/components/SectorStrip';
import ClientsMarquee from '@/components/ClientsMarquee';
import BrochureServices from '@/components/BrochureServices';
import FeaturedProjects from '@/components/FeaturedProjects';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectorStrip />
      <ClientsMarquee />
      <BrochureServices />
      <FeaturedProjects />
      <FAQ />
      <CTA />
    </main>
  );
}
