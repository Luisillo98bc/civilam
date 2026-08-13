'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { analyticsConsentKey } from '@/lib/site';

declare global {
  interface Window { dataLayer?: unknown[][]; gtag?: (...args: unknown[]) => void }
}

export default function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!measurementId) return;
    const syncConsent = () => setEnabled(localStorage.getItem(analyticsConsentKey) === 'accepted');
    syncConsent();
    window.addEventListener('civilam-consent-change', syncConsent);
    return () => window.removeEventListener('civilam-consent-change', syncConsent);
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !enabled) return;
    const trackConversion = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest('a');
      const href = link?.getAttribute('href') || '';
      if (href.startsWith('https://wa.me/')) window.gtag?.('event', 'whatsapp_click');
      if (href.startsWith('tel:')) window.gtag?.('event', 'phone_click');
      if (href.startsWith('mailto:')) window.gtag?.('event', 'email_click');
    };
    document.addEventListener('click', trackConversion);
    return () => document.removeEventListener('click', trackConversion);
  }, [enabled, measurementId]);

  if (!measurementId || !enabled) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){dataLayer.push(arguments);};
        gtag('js', new Date());
        gtag('config', '${measurementId}', { anonymize_ip: true });
      `}</Script>
    </>
  );
}
