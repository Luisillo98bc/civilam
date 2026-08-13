"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué es un Expediente Técnico y por qué es indispensable?",
    answer: "El Expediente Técnico es el conjunto de documentos de carácter técnico y económico (planos, memoria descriptiva, especificaciones técnicas, metrados, presupuesto, estudios de suelos, etc.) que definen las características y el costo de una obra. Es indispensable para la correcta ejecución física del proyecto, garantizar la seguridad estructural y cumplir con las normativas municipales y estatales en el Perú."
  },
  {
    question: "¿En qué consiste la Declaratoria de Fábrica y la Independización?",
    answer: "La Declaratoria de Fábrica es el reconocimiento legal de la existencia de una edificación (vivienda, comercio o industria) inscrita en la SUNARP. La Independización permite dividir un inmueble en varias unidades de propiedad exclusiva (como departamentos o pisos), asignándoles una partida registral propia para que puedan ser vendidos o hipotecados por separado."
  },
  {
    question: "¿Tienen cobertura para proyectos fuera de Huancayo?",
    answer: "Sí, en CIVILAM operamos a nivel nacional. Si bien nuestra base principal está en el departamento de Junín, brindamos consultorías, estudios hidrológicos, modelamientos de inundaciones y elaboración de expedientes técnicos para entidades públicas y privadas en todo el Perú."
  },
  {
    question: "¿Qué herramientas emplean para el modelamiento hidráulico y cartografía?",
    answer: "Utilizamos software líder en la industria de la ingeniería civil e hidráulica como HEC-RAS (1D/2D) e Iber para simulaciones de inundación y rotura de presas; WaterCAD y SewerCAD para el diseño de redes de agua potable y alcantarillado; y ArcGIS/QGIS para el procesamiento cartográfico y generación de mapas temáticos."
  },
  {
    question: "¿Cómo es el proceso para cotizar un estudio o proyecto con CIVILAM?",
    answer: "Descríbenos tu requerimiento mediante el formulario o WhatsApp. Revisaremos la información inicial y coordinaremos una llamada o visita técnica cuando sea necesario. El plazo y las condiciones de la propuesta se confirmarán según el alcance y la complejidad del proyecto."
  }
];

import Script from 'next/script';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="section bg-slate-50/50 py-24">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="site-wrapper max-w-[850px]">
        <div className="text-center mb-16">
          <h4 className="section-subtitle">DUDAS COMUNES</h4>
          <h2 className="text-[2rem] md:text-[2.5rem] font-black text-primary-blue mb-4 tracking-tight">Preguntas Frecuentes</h2>
          <p className="text-slate-500 text-[1.1rem] mt-2 max-w-[600px] mx-auto">
            Respuestas claras a las consultas más habituales sobre nuestros servicios de ingeniería, trámites y consultoría.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'border-transparent bg-white shadow-[0_20px_40px_-15px_rgba(30,58,138,0.1)]' : 'border-slate-200/60 bg-white/50 hover:bg-white hover:border-blue-100 hover:shadow-sm'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button 
                  className={`w-full flex justify-between items-center p-6 md:p-7 bg-transparent border-none text-[1.05rem] md:text-[1.15rem] font-bold text-primary-blue text-left transition-colors duration-300 cursor-pointer gap-6 leading-[1.4] ${isOpen ? 'text-accent-red' : 'hover:text-accent-blue'}`} 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className={`transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center shrink-0 w-10 h-10 rounded-full border shadow-sm ${isOpen ? 'rotate-[135deg] bg-accent-red border-transparent text-white shadow-[0_4px_12px_rgba(220,38,38,0.3)]' : 'bg-slate-50 border-slate-200 text-slate-400 group-hover:border-blue-200 group-hover:text-accent-blue'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-7 pb-6 md:pb-7 pt-2">
                        <div className="w-12 h-1 bg-accent-red/20 rounded-full mb-4"></div>
                        <p className="text-slate-500 text-[1rem] leading-[1.7] font-medium">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
