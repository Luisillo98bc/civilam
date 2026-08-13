"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { contact } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/capacitaciones', label: 'Capacitaciones' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto#mensaje', label: 'Contacto' },
  ];

  const closeMenu = () => setMenuOpen(false);
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) closeButtonRef.current?.focus();
  }, [menuOpen]);

  return (
    <motion.header 
      className="w-full sticky top-0 z-50"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {/* Top Bar */}
      <div className="bg-primary-blue py-2 text-[0.9rem] text-bg-light hidden lg:block">
        <div className="site-wrapper flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="font-medium">Soluciones de ingeniería y construcción con calidad y compromiso</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Huancayo, Perú</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>Lun - Sáb: 8:00am - 6:00pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`py-4 transition-all duration-300 ${isScrolled ? 'bg-[#fbfaf7]/95 backdrop-blur-md border-b border-slate-300 shadow-sm' : 'bg-[#fbfaf7] border-b border-slate-300'}`}>
        <div className="site-wrapper flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex items-center justify-center shrink-0">
              <Image src="/logo.png" alt="CIVILAM Logo" width={46} height={46} className="object-contain" priority />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span 
                className="text-[1.1rem] xl:text-[1.3rem] font-black text-primary-blue tracking-[-0.03em] whitespace-nowrap leading-none mb-[2px]"
                style={{ fontFamily: 'var(--font-outfit, sans-serif)' }}
              >
                CIVILAM
              </span>
              <span className="text-[0.55rem] xl:text-[0.6rem] font-bold text-slate-500 tracking-[0.15em] whitespace-nowrap leading-none">
                INGENIERÍA Y CONSTRUCCIÓN
              </span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-1 xl:gap-4 items-center shrink-0" aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`border-b-2 px-2 py-2 text-[14px] font-semibold transition-colors ${isActive(item.href) ? 'border-[#c72c2c] text-[#102a43]' : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-[#102a43]'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link href="/contacto#cotizador" className="hidden lg:flex btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Cotizar
            </Link>

            {/* Hamburger Button (mobile only) */}
            <button
              className={`lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 bg-transparent border-none cursor-pointer p-2 rounded-sm transition-colors duration-200 z-[60] hover:bg-bg-light ${menuOpen ? 'hamburgerOpen' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-[22px] h-[2px] bg-text-dark rounded-sm transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
              <span className={`block w-[22px] h-[2px] bg-text-dark rounded-sm transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
              <span className={`block w-[22px] h-[2px] bg-text-dark rounded-sm transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] pointer-events-none transition-opacity duration-350 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <nav aria-label="Navegación móvil" aria-hidden={!menuOpen} inert={!menuOpen} className={`lg:hidden fixed top-0 right-0 w-[min(85vw,380px)] h-[100dvh] bg-bg-white z-[60] flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-[-8px_0_30px_rgba(0,0,0,0.15)] overflow-y-auto ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center py-5 px-6 border-b border-border-color">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex items-center justify-center shrink-0">
              <Image src="/logo.png" alt="CIVILAM Logo" width={38} height={38} className="object-contain" priority />
            </div>
            <div className="flex flex-col leading-[1.1]">
              <span className="text-[1.4rem] font-extrabold text-primary-blue tracking-[-0.02em]">CIVILAM</span>
              <span className="text-[0.75rem] font-semibold text-accent-blue tracking-[0.08em]">INGENIERÍA Y CONSTRUCCIÓN</span>
            </div>
          </Link>
          <button ref={closeButtonRef} className="flex items-center justify-center w-9 h-9 border-none bg-bg-light text-text-dark cursor-pointer rounded-full transition-all duration-200 hover:bg-border-color hover:rotate-90" onClick={closeMenu} aria-label="Cerrar menú">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="flex flex-col py-4 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              tabIndex={menuOpen ? 0 : -1}
              className={`flex items-center py-4 px-6 text-[1.1rem] font-medium transition-all duration-200 ${isActive(item.href) ? 'text-primary-blue bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-primary-blue'}`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="p-6 border-t border-border-color flex flex-col gap-3">
          <Link href="/contacto#cotizador" className="btn-primary w-full no-underline justify-center" onClick={closeMenu}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            Solicitar Cotización
          </Link>
          <a href={`${contact.whatsapp}?text=${encodeURIComponent('Hola, quisiera más información')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 px-6 bg-[#25D366] text-white rounded-md font-semibold text-[0.95rem] transition-all duration-300 no-underline hover:bg-[#1fb855] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(37,211,102,0.3)]" onClick={closeMenu}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
          </a>
          <p className="pt-2 text-center font-mono text-[11px] uppercase tracking-wider text-text-gray">Huancayo · Atención nacional</p>
        </div>
      </nav>
    </motion.header>
  );
}
