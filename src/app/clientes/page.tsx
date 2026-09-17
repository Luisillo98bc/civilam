import { Metadata } from 'next';
import Image from 'next/image';
import HeroInner from '@/components/HeroInner';
import CTA from '@/components/CTA';
import clientsData from '@/../content/clients.json';

export const metadata: Metadata = {
  title: 'Nuestros Clientes | CIVILAM',
  description: 'Conoce a las entidades públicas, ministerios y gobiernos regionales que respaldan el trabajo de CIVILAM a nivel nacional.',
  alternates: { canonical: '/clientes' },
};

export default function ClientesPage() {
  const ministerios = clientsData.filter(c => c.category === 'Ministerios' || c.category === 'Programas Estatales');
  const regionales = clientsData.filter(c => c.category === 'Gobiernos Regionales');

  return (
    <main>
      <HeroInner 
        title="Nuestros Clientes y Aliados Estratégicos" 
        subtitle="Instituciones públicas, ministerios y gobiernos regionales que confían en CIVILAM para el desarrollo de sus proyectos de infraestructura."
        eyebrow="RESPALDO INSTITUCIONAL · COBERTURA NACIONAL"
        image="/experiencia.png"
      />

      {/* Ministerios & Programas Nacionales */}
      <section className="section bg-[#fbfaf7]">
        <div className="site-wrapper">
          <div className="border-b border-slate-300 pb-6 mb-10">
            <p className="technical-label text-[#dc2626] font-bold">NIVEL NACIONAL</p>
            <h2 className="editorial-title mt-2 text-[#102a43]">Ministerios y Programas del Estado</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ministerios.map((client) => (
              <div 
                key={client.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="relative w-full aspect-[16/10] bg-gray-50 rounded-md p-4 mb-4 flex items-center justify-center border border-gray-100">
                  <Image 
                    src={client.image}
                    alt={client.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#dc2626] font-bold block mb-1">
                    {client.category}
                  </span>
                  <h3 className="text-base font-bold text-[#102a43] leading-snug mb-2">
                    {client.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gobiernos Regionales */}
      <section className="section bg-white border-t border-gray-100">
        <div className="site-wrapper">
          <div className="border-b border-slate-300 pb-6 mb-10">
            <p className="technical-label text-[#dc2626] font-bold">COBERTURA REGIONAL</p>
            <h2 className="editorial-title mt-2 text-[#102a43]">Gobiernos Regionales del Perú</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {regionales.map((client) => (
              <div 
                key={client.id}
                className="bg-[#fbfaf7] border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between hover:border-[#dc2626] transition-colors"
              >
                <div className="relative w-full aspect-[16/10] bg-white rounded-md p-4 mb-4 flex items-center justify-center border border-gray-200">
                  <Image 
                    src={client.image}
                    alt={client.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9a6410] font-bold block mb-1">
                    {client.category}
                  </span>
                  <h3 className="text-base font-bold text-[#102a43] leading-snug mb-2">
                    {client.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
