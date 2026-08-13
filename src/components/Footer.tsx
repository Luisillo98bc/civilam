"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { subscribeNewsletter } from '@/app/actions/contact';
import { contact } from '@/lib/site';
import VisitCounter from './VisitCounter';

export default function Footer() {
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleNewsletter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus('sending');
    const formData = new FormData(e.currentTarget);
    try {
      const result = await subscribeNewsletter(null, formData);
      if (result.success) {
        setNewsletterStatus('success');
        window.gtag?.('event', 'newsletter_subscribe');
        e.currentTarget.reset();
        setTimeout(() => setNewsletterStatus('idle'), 4000);
      } else {
        setNewsletterStatus('error');
        setTimeout(() => setNewsletterStatus('idle'), 3000);
      }
    } catch {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-[#030712] text-[#E2E8F0] pt-20 relative overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(30,58,138,0.15)_0%,transparent_70%)] pointer-events-none blur-3xl"></div>
      <div className="site-wrapper relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[2.5fr_1fr_1fr_1.5fr_1.5fr] gap-10 pb-16">
          {/* Column 1: Brand info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white">
                <Image src="/logo.png" alt="CIVILAM Logo" width={40} height={40} className="object-contain" />
              </div>
              <div className="flex flex-col leading-[1.1]">
                <span className="text-2xl font-extrabold tracking-[-0.02em] text-[#F8FAFC]">CIVILAM</span>
                <span className="text-[0.6rem] font-semibold opacity-60 tracking-[0.08em] text-[#94A3B8]">INGENIERÍA Y CONSTRUCCIÓN</span>
              </div>
            </div>
            <p className="text-[0.85rem] opacity-65 leading-relaxed mb-6 max-w-[300px] text-[#94A3B8]">
              Soluciones de ingeniería y construcción con calidad, seguridad y compromiso para un futuro sostenible.
            </p>
            <Link href="/contacto" className="mt-1 inline-flex w-fit items-center gap-2 border-b border-[#94A3B8] pb-1 text-sm font-semibold text-[#E2E8F0]">Solicitar evaluación <span>→</span></Link>
          </div>

          {/* Column 2: Empresa Links */}
          <div className="flex flex-col">
            <h4 className="text-base font-bold mb-6 text-[#F8FAFC] tracking-[0.01em]">Empresa</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-[0.85rem] text-[#94A3B8] transition-all duration-200 inline-block hover:text-accent-red hover:translate-x-1">Inicio</Link></li>
              <li><Link href="/nosotros" className="text-[0.85rem] text-[#94A3B8] transition-all duration-200 inline-block hover:text-accent-red hover:translate-x-1">Nosotros</Link></li>
              <li><Link href="/proyectos" className="text-[0.85rem] text-[#94A3B8] transition-all duration-200 inline-block hover:text-accent-red hover:translate-x-1">Proyectos</Link></li>
              <li><Link href="/blog" className="text-[0.85rem] text-[#94A3B8] transition-all duration-200 inline-block hover:text-accent-red hover:translate-x-1">Blog</Link></li>
              <li><Link href="/contacto" className="text-[0.85rem] text-[#94A3B8] transition-all duration-200 inline-block hover:text-accent-red hover:translate-x-1">Contacto</Link></li>
            </ul>
          </div>

          {/* Column 3: Servicios Links */}
          <div className="flex flex-col">
            <h4 className="text-base font-bold mb-6 text-[#F8FAFC] tracking-[0.01em]">Servicios</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/servicios#expedientes" className="text-[0.85rem] text-[#94A3B8] transition-all duration-200 inline-block hover:text-accent-red hover:translate-x-1">Expedientes Técnicos</Link></li>
              <li><Link href="/servicios#viviendas" className="text-[0.85rem] text-[#94A3B8] transition-all duration-200 inline-block hover:text-accent-red hover:translate-x-1">Construcción de Viviendas</Link></li>
              <li><Link href="/servicios#agua" className="text-[0.85rem] text-[#94A3B8] transition-all duration-200 inline-block hover:text-accent-red hover:translate-x-1">Agua Potable y Saneamiento</Link></li>
              <li><Link href="/servicios#hidrologia" className="text-[0.85rem] text-[#94A3B8] transition-all duration-200 inline-block hover:text-accent-red hover:translate-x-1">Hidrología e Hidráulica</Link></li>
              <li><Link href="/servicios#modelamiento" className="text-[0.85rem] text-[#94A3B8] transition-all duration-200 inline-block hover:text-accent-red hover:translate-x-1">Modelamiento Hidráulico</Link></li>
              <li><Link href="/servicios#ambiental" className="text-[0.85rem] text-[#94A3B8] transition-all duration-200 inline-block hover:text-accent-red hover:translate-x-1">Gestión Ambiental</Link></li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div className="flex flex-col">
            <h4 className="text-base font-bold mb-6 text-[#F8FAFC] tracking-[0.01em]">Contacto</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-[0.85rem] text-[#94A3B8]">
                <a href={`tel:${contact.phoneInternational}`} className="flex items-center gap-3 text-inherit no-underline hover:text-accent-red transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-[#64748B]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[0.85rem] text-[#94A3B8]">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-inherit no-underline hover:text-accent-red transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-[#64748B]"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[0.85rem] text-[#94A3B8]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-[#64748B]"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Huancayo, Perú
              </li>
              <li className="flex items-start gap-3 text-[0.85rem] text-[#94A3B8]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-[#64748B]"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Lun - Sáb: 8:00am - 6:00pm
              </li>
            </ul>
          </div>

          {/* Column 5: Boletín */}
          <div className="flex flex-col">
            <h4 className="text-base font-bold mb-6 text-[#F8FAFC] tracking-[0.01em]">Boletín</h4>
            <p className="text-[0.85rem] text-[#94A3B8] mb-4 leading-relaxed">Suscríbete para recibir novedades y consejos de ingeniería.</p>
            <p className="mb-4 text-[0.8rem] leading-5 text-[#94A3B8]">Recibe novedades, cursos y fechas directamente en tu correo.</p>
            <form className="relative" onSubmit={handleNewsletter} aria-label="Suscripción al boletín">
              <input name="website" type="text" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px]" aria-hidden="true" />
              <input type="email" name="email" placeholder="Tu correo electrónico" required className="w-full bg-white/5 border border-white/10 py-3 pl-4 pr-12 rounded-[10px] text-[#F1F5F9] font-inherit text-[0.85rem] outline-none transition-all duration-300 placeholder:text-[#64748B] focus:border-accent-red focus:shadow-[0_0_0_3px_var(--accent-red-glow)] disabled:opacity-50 disabled:cursor-not-allowed" disabled={newsletterStatus === 'sending'} />
              <button type="submit" className="absolute right-1 top-1 h-[calc(100%-8px)] w-11 bg-gradient-to-br from-accent-red to-accent-red-hover text-white border-none rounded-lg flex items-center justify-center transition-all duration-300 shadow-[0_2px_8px_var(--accent-red-glow)] hover:shadow-[0_4px_14px_rgba(220,38,38,0.4)] hover:-translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none" aria-label="Suscribirse" disabled={newsletterStatus === 'sending'}>
                {newsletterStatus === 'sending' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                )}
              </button>
            </form>
            <p className="mt-2 text-[0.7rem] leading-5 text-[#64748B]">Al suscribirte aceptas el tratamiento descrito en la <Link href="/privacidad" className="underline hover:text-white">política de privacidad</Link>.</p>
            {newsletterStatus === 'success' && (
              <p className="mt-2 text-[0.8rem] text-[#4ade80] font-medium animate-[fadeIn_0.3s_ease]">✓ ¡Gracias por suscribirte!</p>
            )}
            {newsletterStatus === 'error' && (
              <p className="mt-2 text-[0.8rem] text-[#f87171] font-medium animate-[fadeIn_0.3s_ease]">✗ Error al suscribirse. Intenta de nuevo.</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#070D18] py-5 text-[0.75rem] text-[#64748B] border-t border-white/5">
        <div className="site-wrapper">
          <div className="flex justify-between items-center flex-wrap gap-4 flex-col md:flex-row text-center md:text-left">
            <p>© {new Date().getFullYear()} CIVILAM Ingeniería y Construcción. Todos los derechos reservados.</p>
            <div className="flex items-center gap-3">
              <Link href="/privacidad" className="text-[#64748B] transition-colors duration-200 hover:text-accent-red">Política de Privacidad</Link>
              <span className="opacity-30">|</span>
              <Link href="/terminos" className="text-[#64748B] transition-colors duration-200 hover:text-accent-red">Términos</Link>
              <span className="opacity-30">|</span>
              <Link href="/contacto" className="text-[#64748B] transition-colors duration-200 hover:text-accent-red">Contacto</Link>
              <span className="opacity-30">|</span>
              <VisitCounter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
