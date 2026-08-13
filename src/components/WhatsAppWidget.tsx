"use client";

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { contact } from '@/lib/site';

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);
  const message = "Hola, me gustaría solicitar información sobre sus servicios.";
  const url = `${contact.whatsapp}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex items-center justify-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] no-underline group"
      aria-label="Chat en WhatsApp"
    >
      <div className={`hidden md:block absolute right-[calc(100%+15px)] top-1/2 -translate-y-1/2 translate-x-2.5 bg-bg-white text-text-dark py-2.5 px-4 rounded-md text-[0.85rem] font-semibold whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.15)] opacity-0 pointer-events-none transition-all duration-300 border border-border-color group-hover:opacity-100 group-hover:translate-x-0 after:content-[''] after:absolute after:top-1/2 after:-right-[5px] after:-translate-y-1/2 after:border-[5px] after:border-y-transparent after:border-r-transparent after:border-l-bg-white before:content-[''] before:absolute before:top-1/2 before:-right-[6px] before:-translate-y-1/2 before:border-[6px] before:border-y-transparent before:border-r-transparent before:border-l-border-color ${showTooltip ? '!opacity-100 !translate-x-0' : ''}`}>
        ¿Necesitas ayuda? Escríbenos
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#25D366] rounded-full z-[1] animate-[pulse-ring_2s_infinite]"></div>
      <div className="relative w-full h-full bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] z-[2] transition-transform duration-300 group-hover:scale-110 [&>svg]:w-7 [&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8">
        <FaWhatsapp size={32} />
      </div>
    </a>
  );
}
