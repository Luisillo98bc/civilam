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
    default: "CIVILAM | Ingeniería, construcción y saneamiento",
    template: "%s | CIVILAM"
  },
  description: "CIVILAM desarrolla proyectos de ingeniería, construcción y saneamiento en Perú: expedientes técnicos, hidráulica, topografía, ambiente y arqueología.",
  keywords: ["CIVILAM", "ingeniería civil", "construcción", "saneamiento", "expedientes técnicos", "topografía", "hidrología e hidráulica", "modelamiento hidráulico", "evaluación de riesgos", "impacto ambiental", "arqueología", "Huancayo", "Perú"],
  authors: [{ name: "CIVILAM" }],
  creator: "CIVILAM",
  publisher: "CIVILAM Ingeniería y Construcción",
  applicationName: "CIVILAM",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "CIVILAM | Ingeniería, construcción y saneamiento",
    description: "Expedientes técnicos, saneamiento, hidráulica, topografía, gestión ambiental y arqueología para proyectos en todo el Perú.",
    url: siteUrl,
    siteName: "CIVILAM",
    locale: "es_PE",
    type: "website",
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CIVILAM — Ingeniería, construcción y saneamiento' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CIVILAM | Ingeniería, construcción y saneamiento",
    description: "Proyectos de ingeniería y saneamiento con calidad y seguridad en todo el Perú.",
    images: ["/og.png"],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": company.name,
      "legalName": company.legalName,
      ...(company.taxId ? { "taxID": company.taxId } : {}),
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/icon.png`,
        "width": 512,
        "height": 512
      },
      "image": `${siteUrl}/og.png`,
      "description": company.description,
      "telephone": contact.phoneInternational,
      "email": contact.email,
      "sameAs": [contact.social.facebook, contact.social.instagram],
      "areaServed": { "@type": "Country", "name": "Perú" },
      "knowsAbout": [
        "Expedientes técnicos",
        "Topografía, geodesia y fotogrametría",
        "Mantenimiento de agua y saneamiento",
        "Hidrología e hidráulica",
        "Modelamiento hidráulico y redes",
        "Evaluación de riesgos (EVAR)",
        "Monitoreos ambientales",
        "Estudios de Impacto Ambiental",
        "Mapas base y sistemas SIG",
        "Servicios en arqueología"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      "name": company.name,
      "url": siteUrl,
      "parentOrganization": { "@id": `${siteUrl}/#organization` },
      "image": `${siteUrl}/og.png`,
      "logo": `${siteUrl}/icon.png`,
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "CIVILAM",
      "alternateName": "CIVILAM Ingeniería y Construcción",
      "description": "Ingeniería, construcción y saneamiento para proyectos en todo el Perú.",
      "publisher": { "@id": `${siteUrl}/#organization` },
      "inLanguage": "es-PE"
    }
  ]
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
            <a className="skip-link" href="#main-content">Saltar al contenido principal</a>
            <Script
              id="global-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="flex min-h-screen flex-col pt-[78px] xl:pt-[118px]">
              <Header />
              <div id="main-content" className="flex-grow" tabIndex={-1}>
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
