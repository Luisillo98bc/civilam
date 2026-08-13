'use client';

import { useState } from 'react';

type ShareButtonsProps = { title: string };

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => typeof window === 'undefined' ? '' : window.location.href;
  const share = (network: 'whatsapp' | 'facebook' | 'linkedin') => {
    const url = encodeURIComponent(getUrl());
    const text = encodeURIComponent(title);
    const destinations = {
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
    window.open(destinations[network], '_blank', 'noopener,noreferrer,width=640,height=640');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mb-10 flex flex-wrap items-center gap-2 border-y border-border-color py-4" aria-label="Compartir artículo">
      <span className="mr-2 text-sm font-semibold text-text-gray">Compartir:</span>
      <button type="button" onClick={() => share('whatsapp')} className="min-h-10 border border-[#25D366] px-3 text-sm font-semibold text-[#128C4A] transition hover:bg-[#25D366] hover:text-white">WhatsApp</button>
      <button type="button" onClick={() => share('facebook')} className="min-h-10 border border-[#1877F2] px-3 text-sm font-semibold text-[#1877F2] transition hover:bg-[#1877F2] hover:text-white">Facebook</button>
      <button type="button" onClick={() => share('linkedin')} className="min-h-10 border border-[#0A66C2] px-3 text-sm font-semibold text-[#0A66C2] transition hover:bg-[#0A66C2] hover:text-white">LinkedIn</button>
      <button type="button" onClick={copyLink} className="min-h-10 border border-border-color px-3 text-sm font-semibold text-primary-blue transition hover:bg-bg-light">{copied ? 'Enlace copiado' : 'Copiar enlace'}</button>
    </div>
  );
}
