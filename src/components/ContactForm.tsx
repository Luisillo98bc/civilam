"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCalculator, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { contact } from '@/lib/site';
import { isValidEmail, isValidPhone, normalizeText } from '@/lib/form-validation';
import peruLocations from '@/lib/peru-locations.json';

const locationNameOverrides: Record<string, string> = {
  AMAZONAS: 'Amazonas', ANCASH: 'Áncash', APURIMAC: 'Apurímac', AREQUIPA: 'Arequipa',
  AYACUCHO: 'Ayacucho', CAJAMARCA: 'Cajamarca', CALLAO: 'Callao', CUSCO: 'Cusco',
  HUANCAVELICA: 'Huancavelica', HUANUCO: 'Huánuco', ICA: 'Ica', JUNIN: 'Junín',
  'LA LIBERTAD': 'La Libertad', LAMBAYEQUE: 'Lambayeque', LIMA: 'Lima', LORETO: 'Loreto',
  'MADRE DE DIOS': 'Madre de Dios', MOQUEGUA: 'Moquegua', PASCO: 'Pasco', PIURA: 'Piura',
  PUNO: 'Puno', 'SAN MARTIN': 'San Martín', TACNA: 'Tacna', TUMBES: 'Tumbes', UCAYALI: 'Ucayali',
};

function displayLocationName(name: string) {
  return locationNameOverrides[name] || name.toLocaleLowerCase('es-PE').replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<'express' | 'standard'>('express');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Estados del Cotizador Express
  const [expressService, setExpressService] = useState('');
  const [expressRegion, setExpressRegion] = useState('');
  const [expressProvince, setExpressProvince] = useState('');
  const [expressDistrict, setExpressDistrict] = useState('');
  const [expressEntityType, setExpressEntityType] = useState('Entidades Privadas');

  const selectedRegion = peruLocations.find((region) => region.code === expressRegion);
  const selectedProvince = selectedRegion?.provinces.find((province) => province.code === expressProvince);
  const expressLocation = [selectedRegion?.name, selectedProvince?.name, expressDistrict]
    .filter(Boolean)
    .map((location) => displayLocationName(location as string))
    .join(' / ');
  const isExpressReady = Boolean(expressService.trim() && selectedProvince && expressDistrict && expressEntityType);

  useEffect(() => {
    const syncTabWithHash = () => {
      if (window.location.hash === '#mensaje') setActiveTab('standard');
      if (window.location.hash === '#cotizador') setActiveTab('express');
    };
    syncTabWithHash();
    window.addEventListener('hashchange', syncTabWithHash);
    return () => window.removeEventListener('hashchange', syncTabWithHash);
  }, []);

  const handleStandardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const name = normalizeText(formData.get('name'), 100);
    const phone = normalizeText(formData.get('phone'), 30);
    const email = normalizeText(formData.get('email'), 254).toLowerCase();
    const service = normalizeText(formData.get('service'), 80);
    const message = normalizeText(formData.get('message'), 3000);
    const consent = formData.get('privacy') === 'on';
    const serviceField = e.currentTarget.elements.namedItem('service');
    const serviceLabel = serviceField instanceof HTMLSelectElement
      ? serviceField.selectedOptions[0]?.textContent?.trim() || service
      : service;

    if (name.length < 2 || !isValidPhone(phone) || !isValidEmail(email) || !service || message.length < 10 || !consent) {
      setErrorMessage('Revisa los campos obligatorios y acepta la política de privacidad.');
      setIsSubmitting(false);
      return;
    }

    const whatsappMessage = [
      '*NUEVA SOLICITUD DE EVALUACIÓN*',
      '━━━━━━━━━━━━━━━━━━━━',
      '🏗️ *CIVILAM · Contacto web*',
      '',
      '👤 *Nombre:* ' + name,
      '📞 *Teléfono:* ' + phone,
      '✉️ *Correo:* ' + email,
      '🧭 *Servicio solicitado:* ' + serviceLabel,
      '',
      '📝 *Detalles del proyecto*',
      message,
      '',
      '✅ *Consentimiento:* El cliente acepta el tratamiento de sus datos para atender esta solicitud.',
      '',
      '_Mensaje recibido desde civilam.com_'
    ].join('\n');
    const url = contact.whatsapp + '?text=' + encodeURIComponent(whatsappMessage);

    setWhatsappUrl(url);
    setIsSuccess(true);
    window.gtag?.('event', 'contact_form_whatsapp', { service });
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
  };

  const getExpressWhatsappUrl = () => {
    const text = [
      '*SOLICITUD DE COTIZACIÓN EXPRESS*',
      '━━━━━━━━━━━━━━━━━━━━',
      '🏗️ *CIVILAM · Evaluación inicial*',
      '',
      '🧰 *Servicio requerido*',
      expressService,
      '',
      '📍 *Ubicación del proyecto*',
      expressLocation,
      '',
      '🏢 *Tipo de entidad:* ' + expressEntityType,
      '',
      '📌 *Siguiente paso*',
      'Deseo recibir una orientación inicial sobre alcance, entregables y próximos pasos.',
      '',
      '_Solicitud preparada desde civilam.com_'
    ].join('\n');
    return contact.whatsapp + '?text=' + encodeURIComponent(text);
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Selector de Pestañas: Cotizador Express vs Formulario Tradicional */}
      <div id="cotizador" className="flex w-full max-w-xl gap-2 scroll-mt-32">
        <button
          type="button"
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
          type="button"
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
                <label htmlFor="express-service" className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">1. Tipo de Servicio Requerido</label>
                <textarea
                  id="express-service"
                  value={expressService}
                  onChange={(e) => setExpressService(e.target.value)}
                  rows={3}
                  maxLength={300}
                  placeholder="Escribe el servicio que necesitas, por ejemplo: expediente técnico para una carretera..."
                      className="w-full resize-y rounded-sm border border-gray-200 bg-slate-50 p-3 text-sm text-gray-800 transition-all placeholder:text-gray-400 focus:border-[#1e3a8a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
                <p className="mt-2 text-[0.7rem] text-gray-500">Describe brevemente el servicio para orientarte mejor.</p>
              </div>

              {/* Paso 2: Ubicación jerárquica */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">2. Ubicación del proyecto</label>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <div>
                    <label htmlFor="express-region" className="mb-1.5 block text-[0.7rem] font-semibold text-gray-600">Región / Departamento</label>
                    <select
                      id="express-region"
                      value={expressRegion}
                      onChange={(e) => {
                        setExpressRegion(e.target.value);
                        setExpressProvince('');
                        setExpressDistrict('');
                      }}
                      className="w-full rounded-sm border border-gray-200 bg-slate-50 p-3 text-xs font-bold text-gray-800 focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="">Busca o selecciona una región...</option>
                      {peruLocations.map((region) => <option key={region.code} value={region.code}>{displayLocationName(region.name)}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="express-province" className="mb-1.5 block text-[0.7rem] font-semibold text-gray-600">Provincia</label>
                    <select
                      id="express-province"
                      value={expressProvince}
                      disabled={!selectedRegion}
                      onChange={(e) => {
                        setExpressProvince(e.target.value);
                        setExpressDistrict('');
                      }}
                      className="w-full rounded-sm border border-gray-200 bg-slate-50 p-3 text-xs font-bold text-gray-800 focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">{selectedRegion ? 'Busca o selecciona una provincia...' : 'Primero elige una región'}</option>
                      {selectedRegion?.provinces.map((province) => <option key={province.code} value={province.code}>{displayLocationName(province.name)}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="express-district" className="mb-1.5 block text-[0.7rem] font-semibold text-gray-600">Distrito</label>
                    <select
                      id="express-district"
                      value={expressDistrict}
                      disabled={!selectedProvince}
                      onChange={(e) => setExpressDistrict(e.target.value)}
                      className="w-full rounded-sm border border-gray-200 bg-slate-50 p-3 text-xs font-bold text-gray-800 focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">{selectedProvince ? 'Busca o selecciona un distrito...' : 'Primero elige una provincia'}</option>
                      {selectedProvince?.districts.map((district) => <option key={district} value={district}>{displayLocationName(district)}</option>)}
                    </select>
                  </div>
                </div>
                <p className="mt-2 text-[0.7rem] text-gray-500">Selecciona en orden: región, provincia y distrito. En cada lista puedes escribir las primeras letras para encontrarla rápidamente.</p>
              </div>

              {/* Paso 3: Entidad */}
              <div>
                <label htmlFor="express-entity" className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">3. Entidad / Cliente</label>
                <select
                  id="express-entity"
                  value={expressEntityType}
                  onChange={(e) => setExpressEntityType(e.target.value)}
                  className="w-full rounded-sm border border-gray-200 bg-slate-50 p-3 text-xs font-bold text-gray-800 focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-100"
                >
                  <option value="Entidades Públicas">Entidades Públicas</option>
                  <option value="Entidades Privadas">Entidades Privadas</option>
                </select>
                <p className="mt-2 text-[0.7rem] text-gray-500">Elige el tipo de cliente para personalizar la orientación inicial.</p>
              </div>

              {/* Botón WhatsApp Express */}
              <a
                href={isExpressReady ? getExpressWhatsappUrl() : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!isExpressReady}
                onClick={(e) => {
                  if (!isExpressReady) e.preventDefault();
                }}
                className={`w-full inline-flex items-center justify-center gap-2.5 rounded-sm px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-all ${isExpressReady ? 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-xl' : 'cursor-not-allowed bg-gray-300'}`}
              >
                <FaWhatsapp className="text-xl" />
                {isExpressReady ? 'Enviar Cotización a WhatsApp' : 'Completa los datos para continuar'}
              </a>
            </div>
          ) : isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center h-full p-8">
              <div className="text-[#10B981] mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 className="text-2xl text-primary-blue mb-2">WhatsApp listo para enviar</h3>
              <p className="text-text-gray leading-relaxed">Preparamos tu consulta y abrimos el WhatsApp de CIVILAM. Revisa el mensaje y pulsa <strong>Enviar</strong> para que llegue a la empresa.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary bg-[#25D366] hover:bg-[#1fb855]">Abrir WhatsApp <FaWhatsapp aria-hidden="true" /></a>}
                <button type="button" className="btn-secondary" onClick={() => { setIsSuccess(false); setWhatsappUrl(''); }}>Editar mensaje</button>
              </div>
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
                  <input className="w-full px-6 py-3.5 border border-border-color rounded-sm bg-bg-light font-inherit text-[0.95rem] text-text-dark transition-all duration-300 focus:outline-none focus:border-accent-red focus:shadow-[0_0_0_3px_var(--accent-red-glow)] focus:bg-bg-white" type="text" id="name" name="name" autoComplete="name" required placeholder="Ej. Juan Pérez" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[0.85rem] font-semibold text-text-dark ml-2">Teléfono / Celular</label>
                  <input className="w-full px-6 py-3.5 border border-border-color rounded-sm bg-bg-light font-inherit text-[0.95rem] text-text-dark transition-all duration-300 focus:outline-none focus:border-accent-red focus:shadow-[0_0_0_3px_var(--accent-red-glow)] focus:bg-bg-white" type="tel" id="phone" name="phone" autoComplete="tel" inputMode="tel" required placeholder="Ej. 987 654 321" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[0.85rem] font-semibold text-text-dark ml-2">Correo Electrónico</label>
                <input className="w-full px-6 py-3.5 border border-border-color rounded-sm bg-bg-light font-inherit text-[0.95rem] text-text-dark transition-all duration-300 focus:outline-none focus:border-accent-red focus:shadow-[0_0_0_3px_var(--accent-red-glow)] focus:bg-bg-white" type="email" id="email" name="email" autoComplete="email" inputMode="email" required placeholder="juan@ejemplo.com" />
              </div>

              <label className="flex items-start gap-3 text-sm text-text-gray">
                <input type="checkbox" name="privacy" required className="mt-1 size-4 accent-red-600" />
                <span>Acepto el tratamiento de mis datos para atender esta solicitud según la <Link href="/privacidad" className="text-secondary-blue underline">política de privacidad</Link>.</span>
              </label>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-[0.85rem] font-semibold text-text-dark ml-2">Servicio de Interés</label>
                <select className="w-full px-6 py-3.5 border border-border-color rounded-sm bg-bg-light font-inherit text-[0.95rem] text-text-dark transition-all duration-300 focus:outline-none focus:border-accent-red focus:shadow-[0_0_0_3px_var(--accent-red-glow)] focus:bg-bg-white appearance-none relative" id="service" name="service" required defaultValue="" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%234b5563\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.2rem' }}>
                  <option value="" disabled>Selecciona un servicio...</option>
                  <option value="expedientes">Expedientes Técnicos</option>
                  <option value="topografia">Topografía, Geodesia y Fotogrametría</option>
                  <option value="mantenimiento">Mantenimiento, Limpieza y Desinfección de Sistemas de Agua Potable y Saneamiento</option>
                  <option value="hidrologia">Estudios de Hidrología e Hidráulica</option>
                  <option value="modelamiento">Modelamiento Hidrológico e Hidráulico</option>
                  <option value="evar">Evaluación de Riesgos (EVAR)</option>
                  <option value="monitoreos">Monitoreos de Agua, Aire, Suelo y Ruido</option>
                  <option value="impacto">Estudios de Impacto Ambiental (EIA)</option>
                  <option value="ambiental">Servicios en Medio Ambiente</option>
                  <option value="mapas">Mapas Base y Temáticos</option>
                  <option value="arqueologia">Servicios en Arqueología</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[0.85rem] font-semibold text-text-dark ml-2">Detalles del Proyecto</label>
                <textarea className="w-full px-6 py-4 border border-border-color rounded-sm bg-bg-light font-inherit text-[0.95rem] text-text-dark transition-all duration-300 focus:outline-none focus:border-accent-red focus:shadow-[0_0_0_3px_var(--accent-red-glow)] focus:bg-bg-white resize-y min-h-[140px]" id="message" name="message" rows={4} required placeholder="Cuéntanos un poco sobre tu necesidad..."></textarea>
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
