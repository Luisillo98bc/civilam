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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/15 pb-6" data-reveal="reveal-left">
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
      <div className="relative w-full overflow-hidden flex items-center py-4" data-reveal="reveal-scale" data-reveal-delay="1">
        {/* Left and Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0a192f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0a192f] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee whitespace-nowrap min-w-full">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              aria-hidden={idx >= clientsData.length}
              className="group flex w-44 flex-shrink-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-transform duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/[0.06] md:w-56"
            >
              <div className="relative flex h-20 w-full items-center justify-center md:h-24">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 176px, 224px"
                  quality={75}
                  className="object-contain p-2 filter drop-shadow-sm transition-transform group-hover:scale-105"
                />
              </div>
              <span title={client.name} className="mt-3 min-h-10 w-full text-center text-xs font-semibold leading-5 tracking-[-0.01em] text-white/95 line-clamp-2 md:text-[13px]">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
