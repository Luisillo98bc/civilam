"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaProjectDiagram, FaLaptopCode, FaLeaf, FaSearch, FaMapMarkedAlt, FaMonument, FaCheckCircle, FaAward, FaWhatsapp, FaShieldAlt, FaClock, FaCheckDouble, FaTools } from 'react-icons/fa';
import { contact } from '@/lib/site';

const categories = [
  {
    id: 'expedientes',
    label: 'Expedientes Técnicos',
    icon: <FaFileAlt />,
    title: 'Elaboración de Expedientes Técnicos',
    description: 'Elaboramos expedientes técnicos completos para una amplia gama de proyectos de infraestructura pública y privada, aptos para aprobación gubernamental y licitaciones.',
    image: '/expedientes-tecnicos.png',
    type: 'CONSULTORÍA & ESTUDIOS',
    items: [
      'Sistema de Agua Potable y Alcantarillado (MVCS)',
      'Carreteras y Pavimentación Urbana',
      'Infraestructura Educativa (PRONIED)',
      'Viviendas e Infraestructura Urbana',
      'Presas, Reservorios y Canales de Riego',
      'Sistemas de Riego Tecnificado',
      'Defensas Ribereñas y Encauzamiento',
      'Drenaje Pluvial y Muros de Contención',
      'Centros de Salud y Hospitales (PRONIS)',
      'Complejos Deportivos y Parques',
      'Siembra y Cosecha de Agua',
      'Habilitaciones Urbanas y Terminales'
    ]
  },
  {
    id: 'topografia',
    label: 'Topografía, Geodesia y Fotogrametría',
    icon: <FaMapMarkedAlt />,
    title: 'Topografía, Geodesia y Fotogrametría',
    description: 'Levantamos y procesamos información territorial con precisión para sustentar diseños, expedientes, obras y decisiones técnicas.',
    image: '/sig-cartografia.png',
    type: 'TOPOGRAFÍA & GEOMÁTICA',
    items: [
      'Levantamientos topográficos con estación total y GNSS',
      'Georreferenciación y control de puntos',
      'Levantamientos con drones y fotogrametría',
      'Ortomosaicos y modelos digitales de elevación',
      'Curvas de nivel y perfiles longitudinales',
      'Replanteo y verificación de obras'
    ]
  },
  {
    id: 'mantenimiento',
    label: 'Mantenimiento, Limpieza y Desinfección de Sistemas de Agua Potable y Saneamiento',
    icon: <FaTools />,
    title: 'Mantenimiento, limpieza y desinfección de sistemas de agua potable y saneamiento',
    description: 'Mantenemos las estructuras y redes en condiciones adecuadas de operación, salubridad y continuidad del servicio.',
    image: '/construccion_mante.jpeg',
    type: 'OPERACIÓN & MANTENIMIENTO',
    items: [
      'Limpieza y desinfección de reservorios',
      'Lavado y desinfección de redes de agua potable',
      'Limpieza de cámaras, captaciones y estructuras',
      'Mantenimiento preventivo de sistemas',
      'Diagnóstico de fallas y recomendaciones',
      'Protocolos y constancias de servicio'
    ]
  },
  {
    id: 'hidrologia',
    label: 'Estudios de Hidrología e Hidráulica',
    icon: <FaProjectDiagram />,
    title: 'Estudios de Hidrología e Hidráulica',
    description: 'Evaluamos el comportamiento del agua en cuencas y cauces para sustentar diseños, obras de protección y gestión de riesgos.',
    image: '/hidraulico.jpg',
    type: 'ESTUDIOS ESPECIALIZADOS',
    items: [
      'Estudios hidrológicos e hidrogeológicos de cuencas',
      'Diseño hidráulico de presas y represas',
      'Delimitación de fajas marginales (ANA)',
      'Defensas ribereñas y muros de gaviones',
      'Estudios de socavación en puentes y obras de arte',
      'Análisis de caudales máximos y disponibilidad hídrica'
    ]
  },
  {
    id: 'modelamiento',
    label: 'Modelamiento Hidrológico e Hidráulico (HEC-HMS, HEC-RAS, IBER, SWMM)',
    icon: <FaLaptopCode />,
    title: 'Modelamiento hidrológico e hidráulico',
    description: 'Simulamos escenarios de lluvia, escorrentía, cauces y drenaje urbano con herramientas especializadas para tomar decisiones seguras.',
    image: '/modelado 2d hibraulica.png',
    type: 'SIMULACIÓN DIGITAL',
    items: [
      'Modelamiento hidrológico con HEC-HMS',
      'Simulación hidráulica 1D y 2D con HEC-RAS',
      'Modelamiento de cauces y planicies con IBER',
      'Modelamiento de drenaje urbano con SWMM',
      'Mapas de inundación y escenarios de riesgo',
      'Calibración, interpretación y reportes técnicos'
    ]
  },
  {
    id: 'evar',
    label: 'Evaluación de Riesgos Originados por Fenómenos Naturales (EVAR)',
    icon: <FaShieldAlt />,
    title: 'Evaluación de riesgos originados por fenómenos naturales (EVAR)',
    description: 'Identificamos peligros, vulnerabilidades y niveles de riesgo para orientar medidas de prevención y reducción en cada proyecto.',
    image: '/medio-ambiente-riesgos-realista.png',
    type: 'GESTIÓN DEL RIESGO',
    items: [
      'Identificación de peligros naturales',
      'Evaluación de vulnerabilidad y exposición',
      'Escenarios de riesgo por inundaciones, huaicos y movimientos en masa',
      'Mapas de peligros y riesgo',
      'Medidas de prevención y reducción del riesgo',
      'Informe técnico de evaluación de riesgos (EVAR)'
    ]
  },
  {
    id: 'monitoreos',
    label: 'Monitoreos de Agua, Aire, Suelo y Ruido',
    icon: <FaSearch />,
    title: 'Monitoreos de agua, aire, suelo y ruido',
    description: 'Planificamos y ejecutamos monitoreos ambientales para conocer las condiciones del entorno y verificar el cumplimiento de compromisos.',
    image: '/medio ambiente.avif',
    type: 'MONITOREO AMBIENTAL',
    items: [
      'Monitoreo de calidad de agua superficial y subterránea',
      'Monitoreo de calidad de aire y emisiones',
      'Monitoreo de calidad de suelo',
      'Monitoreo de ruido ambiental y ocupacional',
      'Diseño de puntos y frecuencia de muestreo',
      'Informes de resultados y comparación normativa'
    ]
  },
  {
    id: 'impacto',
    label: 'Estudios de Impacto Ambiental (EIA)',
    icon: <FaLeaf />,
    title: 'Estudios de Impacto Ambiental (EIA)',
    description: 'Evaluamos los impactos ambientales y sociales de cada proyecto para definir medidas de manejo, prevención, mitigación y seguimiento.',
    image: '/impacto-ambiental.png',
    type: 'EVALUACIÓN AMBIENTAL',
    items: [
      'Línea base ambiental y social',
      'Identificación y valoración de impactos',
      'Estudios de Impacto Ambiental semidetallados y detallados',
      'Plan de manejo ambiental',
      'Programa de monitoreo y seguimiento',
      'Auditorías y fiscalización ambiental'
    ]
  },
  {
    id: 'ambiental',
    label: 'Servicios en Medio Ambiente',
    icon: <FaLeaf />,
    title: 'Servicios integrales en medio ambiente',
    description: 'Acompañamos a proyectos públicos y privados en el cumplimiento ambiental y en la gestión responsable de sus actividades.',
    image: '/medio-ambiente-riesgos.png',
    type: 'GESTIÓN AMBIENTAL',
    items: [
      'Declaración de Impacto Ambiental (DIA)',
      'Instrumentos de gestión ambiental',
      'Planes de manejo y adecuación ambiental',
      'Supervisión y cumplimiento de compromisos',
      'Planes de cierre y post cierre',
      'Asesoría ambiental para proyectos'
    ]
  },
  {
    id: 'mapas',
    label: 'Mapas Base y Temáticos (ArcGIS, QGIS y ArcGIS Pro)',
    icon: <FaMapMarkedAlt />,
    title: 'Mapas base y temáticos',
    description: 'Elaboramos cartografía técnica y análisis geoespacial para comunicar información territorial con claridad y precisión.',
    image: '/sig-cartografia.png',
    type: 'GEOMÁTICA & SIG',
    items: [
      'Cartografía base y mapas temáticos',
      'Geoprocesamiento en ArcGIS, QGIS y ArcGIS Pro',
      'Modelos digitales de elevación y terreno',
      'Mapas de riesgos, vulnerabilidad y uso de suelo',
      'Bases de datos geográficas y georreferenciación',
      'Diseño e impresión de mapas técnicos'
    ]
  },
  {
    id: 'arqueologia',
    label: 'Servicios en Arqueología',
    icon: <FaMonument />,
    title: 'Servicios en arqueología y gestión del patrimonio',
    description: 'Gestionamos los estudios y autorizaciones arqueológicas necesarios para facilitar el desarrollo responsable de proyectos de infraestructura.',
    image: '/arqueologia.jpg',
    type: 'PATRIMONIO CULTURAL',
    items: [
      'Certificado de Inexistencia de Restos Arqueológicos (CIRA)',
      'Plan de Monitoreo Arqueológico (PMA)',
      'Proyecto de Evaluación Arqueológica (PEA)',
      'Proyecto de Rescate Arqueológico (PRA)',
      'Supervisión y acompañamiento arqueológico en obra',
      'Gestión y seguimiento ante el Ministerio de Cultura'
    ]
  }
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && categories.some(c => c.id === hash)) {
      setTimeout(() => {
        setActiveTab(hash);
      }, 0);
    }

    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash && categories.some(c => c.id === currentHash)) {
        setActiveTab(currentHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeCategory = categories.find(c => c.id === activeTab) || categories[0];
  const selectCategory = (id: string) => {
    setActiveTab(id);
    window.history.replaceState(null, '', `${window.location.pathname}#${id}`);
  };

  // Buscador inteligente
  const filteredCategories = searchQuery.trim() === ''
    ? categories
    : categories.filter(cat =>
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.items.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <section id="catalogo-servicios" className="section scroll-mt-28 bg-slate-50/70 !py-16">
      <div className="site-wrapper">

        {/* Encabezado */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dc2626] bg-red-50 px-4 py-1.5 rounded-full border border-red-100 inline-block mb-3">
            Especialidades de Ingeniería
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-4 tracking-tight">
            Nuestros Servicios Integrales
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Explora nuestro catálogo de servicios especializados en ingeniería civil, saneamiento, estudios hídricos, medio ambiente y arquitectura.
          </p>

          {/* Buscador de Servicios */}
          <div className="mt-8 relative max-w-md mx-auto">
            <div className="relative flex items-center">
              <FaSearch className="absolute left-4 text-gray-400 text-lg pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar servicio (ej. CIRA, PTAR, Carreteras)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm shadow-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-xs font-bold text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-1 rounded-md"
                >
                  Limpiar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Indicadores de Confianza / Métricas de Garantía */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px] mx-auto mb-10">
          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e3a8a] flex items-center justify-center text-lg shrink-0">
              <FaShieldAlt />
            </div>
            <div>
              <span className="block text-xs font-bold text-gray-900">Normativa Vigente</span>
              <span className="text-[0.75rem] text-gray-500">RNE, AASHTO, ASCE, ACI, AISC</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center text-lg shrink-0">
              <FaCheckDouble />
            </div>
            <div>
              <span className="block text-xs font-bold text-gray-900">Control técnico</span>
              <span className="text-[0.75rem] text-gray-500">Revisión de entregables</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg shrink-0">
              <FaMapMarkedAlt />
            </div>
            <div>
              <span className="block text-xs font-bold text-gray-900">Cobertura Nacional</span>
              <span className="text-[0.75rem] text-gray-500">Todo el Perú</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg shrink-0">
              <FaClock />
            </div>
            <div>
              <span className="block text-xs font-bold text-gray-900">Plazos Rigurosos</span>
              <span className="text-[0.75rem] text-gray-500">Entregas a tiempo</span>
            </div>
          </div>
        </div>

        {/* Pestañas (Tabs) */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-[1150px] mx-auto">
          {filteredCategories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                className={`py-3 px-5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 flex items-center gap-2.5 shadow-sm border ${isActive
                    ? 'bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white border-transparent shadow-lg shadow-blue-900/20 -translate-y-0.5'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:text-[#1e3a8a] hover:bg-blue-50/50'
                  }`}
                onClick={() => selectCategory(category.id)}
                aria-pressed={isActive}
              >
                <span className={`text-base ${isActive ? 'text-white' : 'text-[#dc2626]'}`}>
                  {category.icon}
                </span>
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Contenido Activo animado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            id={activeCategory.id}
            className="scroll-mt-32 bg-white rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-gray-200/80 min-h-[520px] max-w-[1150px] mx-auto"
          >
            {/* Detalle Textual */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between h-full">
              <div>
                <span className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white text-[0.7rem] font-extrabold py-1.5 px-3.5 rounded-full tracking-wider inline-block mb-4 uppercase shadow-sm">
                  {activeCategory.type}
                </span>
                <h3 className="text-2xl sm:text-3xl text-[#1e3a8a] mb-4 font-extrabold leading-tight tracking-tight">
                  {activeCategory.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  {activeCategory.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Alcances y Entregables del Servicio:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 list-none p-0">
                    {activeCategory.items.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-800 text-sm group">
                        <FaCheckCircle className="text-[#dc2626] mt-0.5 mr-2.5 shrink-0 group-hover:scale-110 transition-transform text-base" />
                        <span className="group-hover:text-[#1e3a8a] transition-colors font-medium leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Botón de Cotización por WhatsApp */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500">¿Tienes dudas sobre esta especialidad?</span>
                <a
                  href={`${contact.whatsapp}?text=${encodeURIComponent(`Hola CIVILAM, quisiera solicitar una cotización o información detallada sobre el servicio de: ${activeCategory.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="text-lg" />
                  Cotizar este Servicio
                </a>
              </div>
            </div>

            {/* Imagen Destacada Seamless */}
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-hidden group">
              <Image
                src={activeCategory.image}
                alt={activeCategory.title}
                fill
                sizes="(max-width: 992px) 100vw, 40vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Watermark Logo Badge (Top-Left) */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5 border border-white/50">
                <Image
                  src="/logo.png"
                  alt="CIVILAM Logo"
                  width={26}
                  height={26}
                  className="object-contain"
                />
                <span className="font-extrabold text-xs tracking-wider text-[#1e3a8a]">CIVILAM</span>
              </div>

              {/* Badge Garantía de Proyecto (Bottom) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute bottom-5 right-5 left-5 sm:left-auto bg-slate-950/80 backdrop-blur-md border border-white/20 text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 z-10"
              >
                <div className="bg-[#dc2626] p-2.5 rounded-xl text-white shadow-inner shrink-0">
                  <FaAward size={20} />
                </div>
                <div>
                  <span className="block text-[0.65rem] font-bold uppercase tracking-widest text-slate-300">Control de entregables</span>
                  <span className="block font-extrabold text-xs sm:text-sm text-white leading-tight">Calidad y trazabilidad</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
