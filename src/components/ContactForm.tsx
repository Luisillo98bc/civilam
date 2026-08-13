"use client";

import { useEffect, useState } from 'react';
import { submitContactForm } from '@/app/actions/contact';
import Link from 'next/link';
import { FaCalculator, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { contact } from '@/lib/site';

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<'express' | 'standard'>('express');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Estados del Cotizador Express
  const [expressService, setExpressService] = useState('Expedientes Técnicos');
  const [expressLocation, setExpressLocation] = useState('Junín / Huancayo');
  const [expressEntityType, setExpressEntityType] = useState('Privada / Inmobiliaria');
  const [expressUrgency, setExpressUrgency] = useState('Normal (15-30 días)');

  useEffect(() => {
    const syncTabWithHash = () => {
      if (window.location.hash === '#mensaje') setActiveTab('standard');
      if (window.location.hash === '#cotizador') setActiveTab('express');
    };
    syncTabWithHash();
    window.addEventListener('hashchange', syncTabWithHash);
    return () => window.removeEventListener('hashchange', syncTabWithHash);
  }, []);

  const handleStandardSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    const formData = new FormData(e.currentTarget);

    try {
      const result = await submitContactForm(null, formData);
      if (result.success) {
        setIsSuccess(true);
        window.gtag?.('event', 'contact_form_submit', { service: String(formData.get('service') || 'general') });
      } else {
        setErrorMessage(result.error || 'Hubo un problema enviando el mensaje. Inténtalo nuevamente.');
      }
    } catch {
      setErrorMessage('No pudimos conectar con el servicio. Inténtalo nuevamente o utiliza WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getExpressWhatsappUrl = () => {
    const text = `Hola CIVILAM, quisiera cotizar el siguiente proyecto:\n- Servicio: ${expressService}\n- Ubicación: ${expressLocation}\n- Tipo de Entidad: ${expressEntityType}\n- Plazo Estimado: ${expressUrgency}\n¿Me podrían brindar una estimación o propuesta inicial?`;
    return `${contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Selector de Pestañas: Cotizador Express vs Formulario Tradicional */}
      <div id="cotizador" className="flex w-full max-w-xl gap-2 scroll-mt-32">
        <button
          onClick={() => setActiveTab('express')}
          className={`flex min-h-12 flex-1 items-center justify-center gap-2 border px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition sm:text-sm ${
            activeTab === 'express'
              ? 'bg-[#102a43] text-white border-[#102a43]'
              : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
          }`}
        >
          <FaCalculator className={activeTab === 'express' ? 'text-amber-300' : 'text-blue-600'} />
          Cotizador Express (3 Pasos)
        </button>

        <button
          id="mensaje"
          onClick={() => setActiveTab('standard')}
          className={`flex min-h-12 flex-1 items-center justify-center gap-2 border px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition sm:text-sm ${
            activeTab === 'standard'
              ? 'bg-[#102a43] text-white border-[#102a43]'
              : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
          }`}
        >
          <FaEnvelope className={activeTab === 'standard' ? 'text-amber-300' : 'text-blue-600'} />
          Mensaje Directo
        </button>
      </div>

      <div className="grid max-w-[1100px] grid-cols-1 overflow-hidden border border-slate-300 bg-[#fbfaf7] lg:grid-cols-[.85fr_1.5fr]">
        {/* Contact Info Side */}
        <div className="bg-gradient-to-br from-[rgba(30,58,138,1)] to-[#0F172A] text-[#F1F5F9] p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#dc2626] bg-red-950/60 px-3 py-1 rounded-full border border-red-800/40 inline-block mb-3">
              ATENCIÓN EN TODO EL PERÚ
            </span>
            <h3 className="text-2xl font-bold mb-4 text-[#F8FAFC]">Información de Contacto</h3>
            <p className="text-[0.9rem] opacity-75 mb-10 leading-relaxed text-[#CBD5E1]">
              Revisamos las características de tu proyecto para orientarte sobre alcance, especialidades y próximos pasos.
            </p>
            
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-red shadow-lg shadow-accent-red-glow flex items-center justify-center shrink-0 text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="text-[0.8rem] opacity-60 font-semibold mb-1 text-[#94A3B8]">Llámanos</h4>
                  <a href={`tel:${contact.phoneInternational}`} className="text-[0.95rem] font-medium text-[#E2E8F0] transition hover:text-white hover:underline">{contact.phoneDisplay}</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-red shadow-lg shadow-accent-red-glow flex items-center justify-center shrink-0 text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-[0.8rem] opacity-60 font-semibold mb-1 text-[#94A3B8]">Email</h4>
                  <a href={`mailto:${contact.email}`} className="text-[0.95rem] font-medium text-[#E2E8F0] transition hover:text-white hover:underline">{contact.email}</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-red shadow-lg shadow-accent-red-glow flex items-center justify-center shrink-0 text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="text-[0.8rem] opacity-60 font-semibold mb-1 text-[#94A3B8]">Oficina Central</h4>
                  <p className="text-[0.95rem] font-medium m-0 text-[#E2E8F0]">Huancayo, Perú</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-xs text-slate-400">
            ✔ Respuesta en menos de 24 horas laborables.
          </div>
        </div>

        {/* Form Side */}
        <div className="p-8 lg:p-12 bg-bg-white">
          {activeTab === 'express' ? (
            /* COTIZADOR EXPRESS EN 3 PASOS */
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                  Calculador Rápido
                </span>
                <h3 className="text-2xl font-bold text-primary-blue mb-1">Cotizador Express de Proyectos</h3>
                <p className="text-xs text-gray-500">Selecciona las características de tu proyecto y envía los datos para recibir una propuesta inicial.</p>
              </div>

              {/* Paso 1: Servicio */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">1. Tipo de Servicio Requerido</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Expedientes Técnicos', 'Obras Hidráulicas', 'Saneamiento & PTAR', 'Licencias & Diseños 3D'].map((serv) => (
                    <button
                      key={serv}
                      type="button"
                      onClick={() => setExpressService(serv)}
                      className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                        expressService === serv 
                          ? 'bg-blue-50 border-[#1e3a8a] text-[#1e3a8a] shadow-sm' 
                          : 'bg-slate-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {serv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 2: Ubicación & Entidad */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">2. Ubicación / Región</label>
                  <select 
                    value={expressLocation} 
                    onChange={(e) => setExpressLocation(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-800"
                  >
                    <option value="Junín / Huancayo">Junín / Huancayo</option>
                    <option value="Lima Metropolitano">Lima Metropolitano</option>
                    <option value="Huancavelica / Ayacucho">Huancavelica / Ayacucho</option>
                    <option value="Cusco / Puno">Cusco / Puno</option>
                    <option value="Norte del Perú">Norte del Perú</option>
                    <option value="Otra Región del Perú">Otra Región del Perú</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">Entidad / Cliente</label>
                  <select 
                    value={expressEntityType} 
                    onChange={(e) => setExpressEntityType(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-800"
                  >
                    <option value="Privada / Inmobiliaria">Empresa Privada / Particular</option>
                    <option value="Municipalidad / Gobierno Regional">Municipalidad / Gobierno Regional</option>
                    <option value="Consorcio / Contratista">Consorcio / Contratista de Obra</option>
                  </select>
                </div>
              </div>

              {/* Paso 3: Urgencia */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">3. Urgencia / Plazo de Entrega</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Normal (15-30 días)', 'Urgente (7-15 días)', 'Inmediata (Exprés)'].map((urg) => (
                    <button
                      key={urg}
                      type="button"
                      onClick={() => setExpressUrgency(urg)}
                      className={`p-2.5 rounded-xl border text-[0.7rem] font-bold text-center transition-all ${
                        expressUrgency === urg 
                          ? 'bg-red-50 border-[#dc2626] text-[#dc2626] shadow-sm' 
                          : 'bg-slate-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {urg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Botón WhatsApp Express */}
              <a
                href={getExpressWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <FaWhatsapp className="text-xl" />
                Enviar Cotización a WhatsApp
              </a>
            </div>
          ) : isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center h-full p-8">
              <div className="text-[#10B981] mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 className="text-2xl text-primary-blue mb-2">¡Mensaje Enviado!</h3>
              <p className="text-text-gray leading-relaxed">Gracias por contactarnos. Nos pondremos en comunicación contigo en las próximas 24 horas.</p>
              <button className="btn-primary mt-6" onClick={() => setIsSuccess(false)}>Enviar otro mensaje</button>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleStandardSubmit}>
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Sitio web</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <h3 className="text-2xl font-bold text-primary-blue mb-2">Envíanos un Mensaje</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[0.85rem] font-semibold text-text-dark ml-2">Nombre Completo</label>
                  <input className="w-full px-6 py-3.5 border border-border-color rounded-full bg-bg-light font-inherit text-[0.95rem] text-text-dark transition-all duration-300 focus:outline-none focus:border-accent-red focus:shadow-[0_0_0_3px_var(--accent-red-glow)] focus:bg-bg-white" type="text" id="name" name="name" autoComplete="name" required placeholder="Ej. Juan Pérez" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[0.85rem] font-semibold text-text-dark ml-2">Teléfono / Celular</label>
                  <input className="w-full px-6 py-3.5 border border-border-color rounded-full bg-bg-light font-inherit text-[0.95rem] text-text-dark transition-all duration-300 focus:outline-none focus:border-accent-red focus:shadow-[0_0_0_3px_var(--accent-red-glow)] focus:bg-bg-white" type="tel" id="phone" name="phone" autoComplete="tel" inputMode="tel" required placeholder="Ej. 987 654 321" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[0.85rem] font-semibold text-text-dark ml-2">Correo Electrónico</label>
                <input className="w-full px-6 py-3.5 border border-border-color rounded-full bg-bg-light font-inherit text-[0.95rem] text-text-dark transition-all duration-300 focus:outline-none focus:border-accent-red focus:shadow-[0_0_0_3px_var(--accent-red-glow)] focus:bg-bg-white" type="email" id="email" name="email" autoComplete="email" inputMode="email" required placeholder="juan@ejemplo.com" />
              </div>

              <label className="flex items-start gap-3 text-sm text-text-gray">
                <input type="checkbox" name="privacy" required className="mt-1 size-4 accent-red-600" />
                <span>Acepto el tratamiento de mis datos para atender esta solicitud según la <Link href="/privacidad" className="text-secondary-blue underline">política de privacidad</Link>.</span>
              </label>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-[0.85rem] font-semibold text-text-dark ml-2">Servicio de Interés</label>
                <select className="w-full px-6 py-3.5 border border-border-color rounded-full bg-bg-light font-inherit text-[0.95rem] text-text-dark transition-all duration-300 focus:outline-none focus:border-accent-red focus:shadow-[0_0_0_3px_var(--accent-red-glow)] focus:bg-bg-white appearance-none relative" id="service" name="service" required defaultValue="" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%234b5563\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.2rem' }}>
                  <option value="" disabled>Selecciona un servicio...</option>
                  <option value="expedientes">Expedientes Técnicos</option>
                  <option value="agua">Agua Potable y Saneamiento</option>
                  <option value="mantenimiento">Operación y Mantenimiento</option>
                  <option value="construccion">Construcción en General</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[0.85rem] font-semibold text-text-dark ml-2">Detalles del Proyecto</label>
                <textarea className="w-full px-6 py-4 border border-border-color rounded-3xl bg-bg-light font-inherit text-[0.95rem] text-text-dark transition-all duration-300 focus:outline-none focus:border-accent-red focus:shadow-[0_0_0_3px_var(--accent-red-glow)] focus:bg-bg-white resize-y min-h-[140px]" id="message" name="message" rows={4} required placeholder="Cuéntanos un poco sobre tu necesidad..."></textarea>
              </div>

              {errorMessage && <p role="alert" aria-live="assertive" className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>}
              <button type="submit" className={`btn-primary w-full p-4 text-base mt-2 disabled:opacity-70 disabled:cursor-not-allowed`} disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'} 
                {!isSubmitting && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Google Maps Container */}
      <div className="w-full max-w-[1000px] mx-auto shadow-[0_8px_30px_-6px_rgba(30,58,138,0.08)] rounded-3xl overflow-hidden border border-border-color">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15606.331201509376!2d-75.21557997576595!3d-12.072223846665796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9108e4cd09adbd57%3A0xd64f1d69d2f6ad12!2sHuancayo!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe"
          width="100%"
          height="350"
          className="border-0 block"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zona general de atención de CIVILAM en Huancayo, Perú"
        ></iframe>
      </div>
    </div>
  );
}
