"use client";

import Image from 'next/image';

const clients = [
  {
    name: "Ministerios",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16"/><path d="M4 18h16"/><path d="M6 18v-8"/><path d="M10 18v-8"/><path d="M14 18v-8"/><path d="M18 18v-8"/><path d="m2 10 10-6 10 6"/></svg>
  },
  {
    name: "Gobiernos Regionales",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> // Escudo/Shield
  },
  {
    name: "",
    icon: <Image src="/muni_Huancayo.png" alt="Municipalidad de Huancayo" width={240} height={80} className="h-16 md:h-24 w-auto object-contain" />
  },
  {
    name: "",
    icon: <Image src="/jass.png" alt="JASS (Saneamiento)" width={240} height={80} className="h-16 md:h-24 w-auto object-contain" />
  },
  {
    name: "Comunidades Campesinas",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20L8 9l3 4" /><path d="M22 20l-5-7-2 3" /><path d="M10 20v-4" /><path d="M18 20v-4" /><path d="M8 16l6-5 6 5" /><path d="M2 20h20" /><path d="M13 20v-2a1 1 0 0 1 2 0v2" /><circle cx="15" cy="5" r="2" /></svg> // Montañas y choza
  },
  {
    name: "Empresas Privadas",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg> // Edificio
  },
  {
    name: "Sector Industrial",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg> // Fábrica
  }
];

export default function ClientsMarquee() {
  return (
    <section className="bg-bg-white py-8 md:py-12 border-b border-border-color overflow-hidden">
      <div className="site-wrapper">
        <p className="text-center text-[0.85rem] font-bold tracking-[0.15em] text-text-gray mb-8 uppercase">Respaldan la calidad de nuestros servicios</p>
      </div>
      <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-16 hover:[animation-play-state:paused]">
          {/* Duplicamos la lista para crear un loop infinito continuo */}
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-3 text-center text-[1.1rem] md:text-xl font-extrabold text-text-gray uppercase tracking-tight transition-colors duration-300 cursor-default hover:text-accent-red group">
              <span className="flex items-center justify-center text-accent-red opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">{client.icon}</span>
              {client.name && <span>{client.name}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
