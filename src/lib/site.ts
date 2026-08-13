const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const configuredLegalName = process.env.COMPANY_LEGAL_NAME?.trim();
const configuredTaxId = process.env.COMPANY_TAX_ID?.trim();

export const siteUrl = (configuredUrl || 'https://www.civilam.com').replace(/\/$/, '');

export const contact = {
  phoneDisplay: '+51 989 746 162',
  phoneInternational: '+51989746162',
  email: process.env.CONTACT_EMAIL || 'civilamingenieros@gmail.com',
  whatsapp: 'https://wa.me/51989746162',
  city: 'Huancayo',
  region: 'Junín',
  country: 'Perú',
  address: 'Av. San Carlos y Jr. Santa Lucía S/N., Huancayo - Junín',
  social: {
    facebook: 'https://www.facebook.com/CIVILAMIngenieriayConstruccion',
    instagram: 'https://www.instagram.com/CIVILAM_IngenieriaConstr',
  },
} as const;

export const company = {
  name: 'CIVILAM Ingeniería y Construcción',
  tagline: 'Liderando la ingeniería del futuro',
  description: 'Integramos experiencia, conocimiento, innovación y ciencia para diseñar, ejecutar y supervisar proyectos de ingeniería.',
  mission: 'Brindar servicios de consultoría, diseño, ejecución y supervisión de proyectos de ingeniería con altos estándares de calidad, integrando tecnología, innovación y conocimiento técnico.',
  vision: 'Ser una empresa líder en el sector de la ingeniería a nivel nacional, reconocida por la excelencia de nuestros proyectos y la confiabilidad de nuestros servicios.',
  legalName: configuredLegalName || 'CIVILAM Ingeniería y Construcción',
  taxId: configuredTaxId || '',
} as const;

export const productionReadiness = {
  hasSiteUrl: Boolean(configuredUrl),
  hasTaxId: Boolean(configuredTaxId),
  hasResend: Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL && process.env.RESEND_FROM_EMAIL),
} as const;

export const analyticsConsentKey = 'civilam-analytics-consent';
