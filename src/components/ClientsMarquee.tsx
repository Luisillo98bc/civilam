'use client';

import Image from 'next/image';
import Link from 'next/link';
import clientsData from '@/../content/clients.json';

export default function ClientsMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...clientsData, ...clientsData];

  return (
    <section className="py-14 bg-[#0a192f] text-white overflow-hidden border-y border-white/10">
      <div className="site-wrapper mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/15 pb-6">
          <div>
            <p className="technical-label text-[#e5a72a]">RESPALDO INSTITUCIONAL</p>
            <h2 className="editorial-title mt-2 text-white text-2xl md:text-3xl">
              Entidades que confían en CIVILAM
            </h2>
          </div>
          <Link 
            href="/clientes" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#e5a72a] hover:text-white transition-colors"
          >
            Ver todos los clientes <span>→</span>
          </Link>
        </div>
      </div>

      {/* Infinite Logo Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Left and Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0a192f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0a192f] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee whitespace-nowrap min-w-full">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex-shrink-0 w-44 md:w-56 bg-white/95 rounded-lg p-4 flex flex-col items-center justify-center border border-white/20 shadow-md hover:bg-white transition-all hover:scale-105 duration-300 group"
            >
              <div className="relative w-full h-16 md:h-20 flex items-center justify-center">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  sizes="200px"
                  className="object-contain p-1 filter drop-shadow-sm group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="mt-2 text-[11px] font-bold text-[#102a43] text-center line-clamp-1 truncate w-full">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
