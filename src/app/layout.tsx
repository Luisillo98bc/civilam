import type { Metadata } from "next";
import "./globals.css";

import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import ScrollToTop from '@/components/ScrollToTop';
import Providers from '@/components/Providers';
import UXFeatures from '@/components/UXFeatures';
import Analytics from '@/components/Analytics';
import CookieConsent from '@/components/CookieConsent';
import { company, contact, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: "CIVILAM - Ingeniería, Construcción y Saneamiento",
    template: "%s | CIVILAM"
  },
  description: "Desarrollamos proyectos de ingeniería con altos estándares de calidad, integrando innovación, tecnología y experiencia en Perú. Expedientes técnicos, saneamiento, hidráulica y obras civiles.",
  keywords: ["ingeniería civil", "construcción", "saneamiento", "expediente técnico", "hidrología", "modelamiento hidráulico", "licencia de construcción", "sunarp", "perú", "huancayo"],
  authors: [{ name: "CIVILAM" }],
  creator: "CIVILAM",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "CIVILAM - Ingeniería, Construcción y Saneamiento",
    description: "Servicios de consultoría, diseño, ejecución y supervisión de proyectos de ingeniería en todo el Perú.",
    url: siteUrl,
    siteName: "CIVILAM",
    locale: "es_PE",
    type: "website",
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CIVILAM — Ingeniería, construcción y saneamiento' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CIVILAM - Ingeniería, Construcción y Saneamiento",
    description: "Proyectos de ingeniería y saneamiento con calidad y seguridad en todo el Perú.",
    images: ["/og.png"],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CIVILAM - Ingeniería y Construcción",
  "legalName": company.legalName,
  ...(company.taxId ? { "taxID": company.taxId } : {}),
  "image": `${siteUrl}/og.png`,
  "@id": `${siteUrl}/#localbusiness`,
  "url": siteUrl,
  "telephone": contact.phoneInternational,
  "email": contact.email,
  "areaServed": { "@type": "Country", "name": "Perú" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": contact.city,
    "addressRegion": contact.region,
    "addressCountry": "PE"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-bg-white text-text-dark font-sans selection:bg-accent-red selection:text-white">
        <Providers>
          <UXFeatures />
            <Script
              id="global-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-grow">
                {children}
              </div>
              <Footer />
            </div>
            <WhatsAppWidget />
            <ScrollToTop />
            <Analytics />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
