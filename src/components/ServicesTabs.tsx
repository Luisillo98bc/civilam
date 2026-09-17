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
      'Expediente Técnico de Sistema de Agua Potable y Alcantarillado (MVCS)',
      'Expediente Técnico de Carreteras',
      'Expediente Técnico de Puentes',
      'Expediente Técnico de Pavimentación Urbana',
      'Expediente Técnico de Drenaje Pluvial',
      'Expediente Técnico de Colegios (PRONIED)',
      'Expediente Técnico de Salud / Hospitales (PRONIS)',
      'Expediente Técnico de Infraestructura (Viviendas)',
      'Expediente Técnico de Complejos Deportivos',
      'Expediente Técnico de Presas y Reservorios',
      'Expediente Técnico de Redes de Riego',
      'Expediente Técnico de Sistemas de Riego Tecnificado',
      'Expediente Técnico de Siembra y Cosecha de Agua',
      'Expediente Técnico de Balsas Ribereñas',
      'Expediente Técnico de Encauzamiento de Ríos',
      'Expediente Técnico de Muros de Contención por Emergencia',
      'Expediente Técnico de Habilitación Urbana',
      'Expediente Técnico de Parques y Áreas Verdes',
      'Expediente Técnico de Terminal Terrestre'
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
      'Levantamientos topográficos',
      'Levantamientos de urbanizaciones y lotizaciones',
      'Levantamientos de pistas y veredas',
      'Control topográfico de obras civiles',
      'Parcelaciones',
      'Nivelación de obras',
      'Monumentación de puntos geodésicos (IGN)',
      'Levantamientos con tecnología RTK',
      'Fotogrametría con drones'
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
      '1. Mantenimiento y limpieza de captaciones',
      '2. Mantenimiento, limpieza y desinfección de reservorios',
      'Retiro de sedimentos y lodos acumulados',
      'Lavado de paredes, techo y piso',
      'Limpieza de tuberías de ingreso y salida',
      'Desinfección mediante solución clorada',
      'Llenado y puesta en operación del reservorio',
      '3. Mantenimiento y limpieza de plantas de tratamiento de agua potable (PTAP)',
      'Limpieza de desarenadores',
      'Limpieza de sedimentadores',
      'Lavado de filtros',
      'Limpieza de cámaras de contacto',
      'Limpieza de canales y estructuras hidráulicas',
      '4. Mantenimiento y limpieza de plantas de tratamiento de agua residual (PTAR)',
      'Limpieza de rejas y cribas',
      'Limpieza de lagunas, tanques y cámaras',
      'Extracción y manejo de lodos',
      'Limpieza de canales de distribución'
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
      'Estudios de hidrología e hidráulica para carreteras',
      'Estudios de hidrología e hidráulica para puentes, alcantarillas, badenes y cunetas',
      'Estudios de hidrología e hidráulica para defensas ribereñas',
      'Estudios de hidrología e hidráulica para saneamiento y agua potable',
      'Estudios de hidrología e hidráulica para proyectos de riego',
      'Estudios de hidrología e hidráulica para pistas y veredas',
      'Estudios de hidrología e hidráulica para represas',
      'Estudios de hidrología e hidráulica para centrales hidroeléctricas',
      'Estudios hidrológicos para la acreditación de la disponibilidad hídrica superficial'
    ]
  },
  {
    id: 'modelamiento',
    label: 'Modelamiento Hidrológico e Hidráulico (HEC-HMS, HEC-RAS, IBER, SWMM)',
    icon: <FaLaptopCode />,
    title: 'Modelamiento Hidrológico e Hidráulico (HEC-HMS, HEC-RAS, IBER, SWMM)',
    description: 'Simulamos escenarios de lluvia, escorrentía, cauces y drenaje urbano con herramientas especializadas para tomar decisiones seguras.',
    image: '/modelado 2d hibraulica.png',
    type: 'SIMULACIÓN DIGITAL',
    items: [
      '1. Aplicación en Proyectos de Ingeniería',
      'Proyectos de drenaje para carreteras y caminos',
      'Proyectos de puentes y pasos de agua',
      'Proyectos de defensas ribereñas',
      'Proyectos de represas, bocatomas y sistemas de captación',
      'Proyectos hidroeléctricos',
      'Proyectos mineros',
      '2. Modelamiento hidráulico con HEC-RAS e IBER',
      'Modelamiento hidráulico unidimensional y bidimensional (1D y 2D) con HEC-RAS',
      'Modelamiento hidráulico unidimensional y bidimensional (1D y 2D) con IBER',
      'Modelamiento del transporte de sedimentos con HEC-RAS',
      'Modelamiento de inundaciones con IBER',
      'Simulación de rotura de presas con HEC-RAS',
      'Modelamiento del flujo en cauces naturales con HEC-RAS',
      '3. Modelamiento hidráulico de drenaje pluvial urbano con SWMM',
      'Modelamiento de cuencas urbanas',
      'Modelamiento de buzones',
      'Modelamiento de sumideros',
      'Modelamiento de estructuras de conducción y almacenamiento',
      'Modelamiento de sistemas de bombeo',
      'Modelamiento de estructuras de descarga',
      '4. Modelamiento de agua potable y alcantarillado',
      'Modelamiento de sistemas de agua potable con WaterCAD',
      'Modelamiento de sistemas de agua potable con WaterGEMS',
      'Modelamiento de sistemas de alcantarillado con SewerCAD',
      'Modelamiento de sistemas de alcantarillado con SewerGEMS'
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
      '1. Evaluación del Riesgo de Desastres (EVAR)',
      'EVAR por deslizamientos',
      'EVAR por sismos',
      'EVAR por lluvias intensas',
      'EVAR por inundaciones',
      'EVAR por descensos de temperatura',
      'EVAR por erupciones volcánicas',
      'EVAR por pandemias, incluido el COVID-19',
      '2. EVAR para Proyectos de Inversión Pública',
      'EVAR para proyectos de defensas ribereñas',
      'EVAR para proyectos de agua potable y alcantarillado',
      'EVAR para proyectos de carreteras',
      'EVAR para proyectos de riego',
      'EVAR para proyectos de infraestructura, colegios y hospitales',
      'EVAR para proyectos de puentes',
      'EVAR para proyectos de pistas y veredas'
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
      'Monitoreo de la calidad del agua',
      'Monitoreo de la calidad del aire',
      'Monitoreo de la calidad del suelo',
      'Monitoreo del ruido ambiental'
    ]
  },
  {
    id: 'impacto',
    label: 'Estudios de Impacto Ambiental (EIA)',
    icon: <FaLeaf />,
    title: 'Estudios de Impacto Ambiental (EIA)',
    description: 'LA EMPRESA 𝐂𝐈𝐕𝐈𝐋𝐀𝐌 𝐈𝐍𝐆𝐄𝐍𝐈𝐄𝐑𝐈𝐀 𝐘 𝐂𝐎𝐍𝐒𝐓𝐑𝐔𝐂𝐂𝐈𝐎𝐍 SE ENCUENTRA REGISTRADA COMO 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝙊𝙍𝘼 𝘼𝙈𝘽𝙄𝙀𝙉𝙏𝘼𝙇 EN EL 𝑺𝑬𝑵𝑨𝑪𝑬 PARA LA ELABORACION DE ESTUDIOS DE IMPACTO AMBIENTAL EN LOS SIGUIENTES SUBSECTORES:',
    image: '/impacto-ambiental.png',
    type: 'EVALUACIÓN AMBIENTAL',
    items: [
      'Declaración de Impacto Ambiental (DIA)',
      'Estudio de Impacto Ambiental Semidetallado (EIA-sd)',
      'Estudio de Impacto Ambiental Detallado (EIA-d)',
      'Modificación del Estudio de Impacto Ambiental (MEIA)',
      'Informe Técnico Sustentatorio (ITS)',
      'Programa de Adecuación y Manejo Ambiental (PAMA)',
      'Plan de Manejo Ambiental (PMA)',
      'Declaración de Adecuación Ambiental (DAA)',
      'Instrumento de Gestión Ambiental Correctivo (IGAC)',
      'Programa de Adecuación Ambiental (PAA)'
    ],
    extraImages: [
      '/senace-registro-1.png',
      '/senace-registro-2.png'
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
      '1. Elaboración de Expedientes Técnicos de Medio Ambiente',
      'Expediente técnico de relleno sanitario',
      'Expediente técnico de reforestación',
      'Expediente técnico de restauración ambiental',
      '2. Ficha Técnica Socioambiental (FITSA)',
      'Ficha Técnica Socioambiental para proyectos de carreteras',
      'Ficha Técnica Socioambiental para proyectos de puentes',
      '3. Ficha Técnica Ambiental (FTA)',
      'Ficha Técnica Ambiental para proyectos de saneamiento del MVCS',
      'Ficha Técnica Ambiental para proyectos de riego',
      '4. Estudios Ambientales',
      'Plan de recuperación de áreas degradadas por residuos sólidos',
      'Estudio de caracterización de residuos sólidos municipales',
      'Plan de Gestión Ambiental y Social (PGAS)'
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
      'Mapa de Modelo Digital de Elevación (DEM) topográfico y batimétrico',
      'Mapa de ubicación y localización',
      'Mapa catastral',
      'Mapa de cuencas hidrográficas',
      'Mapa de densidad sísmica',
      'Mapa de peligros',
      'Mapa de vulnerabilidad',
      'Mapa de riesgos',
      'Mapa de dirección y velocidad del viento',
      'Mapa de redes viales vecinales, departamentales y nacionales',
      'Mapa de Áreas Naturales Protegidas (ANP)',
      'Mapa de zonas de amortiguamiento',
      'Mapas para Estudios de Impacto Ambiental (EIA)',
      'Mapa de contaminación atmosférica',
      'Mapa de catastro minero',
      'Mapa de cobertura vegetal',
      'Mapa de capacidad de uso mayor de suelos',
      'Mapa de zonas de vida',
      'Mapa de ecorregiones',
      'Mapa de ecosistemas',
      'Mapa de erosión de suelos',
      'Mapa fisiográfico',
      'Mapa geológico',
      'Mapa geomorfológico',
      'Mapa de sitios arqueológicos',
      'Mapa de lotes petroleros',
      'Mapa del Qhapaq Ñan',
      'Mapa de oleoductos',
      'Mapa de pasivos mineros y ambientales'
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
      '1. Certificado de Inexistencia de Restos Arqueológicos en Superficie (CIRAS)',
      'CIRAS para proyectos de carreteras',
      'CIRAS para proyectos de agua potable y alcantarillado',
      'CIRAS para proyectos de puentes',
      'CIRAS para proyectos de riego',
      'CIRAS para proyectos de hospitales',
      'CIRAS para proyectos de instituciones educativas',
      'CIRAS para proyectos de pistas y veredas',
      '2. Plan de Monitoreo Arqueológico (PMA)',
      'Elaboración del Plan de Monitoreo Arqueológico (PMA)',
      '3. Proyecto de Evaluación Arqueológica (PEA)',
      'Elaboración del Proyecto de Evaluación Arqueológica (PEA)'
    ]
  }
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let lastHash = '';

    const handleHashCheck = () => {
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash && currentHash !== lastHash && categories.some(c => c.id === currentHash)) {
        lastHash = currentHash;
        setActiveTab(currentHash);
        
        const scrollToCard = () => {
          const cardAnchor = document.getElementById(currentHash) || document.getElementById('tarjeta-servicio-anchor');
          if (cardAnchor) {
            cardAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        };

        scrollToCard();
        setTimeout(scrollToCard, 80);
        setTimeout(scrollToCard, 250);
      }
    };

    handleHashCheck();

    window.addEventListener('hashchange', handleHashCheck);
    window.addEventListener('popstate', handleHashCheck);
    return () => {
      window.removeEventListener('hashchange', handleHashCheck);
      window.removeEventListener('popstate', handleHashCheck);
    };
  }, []);

  const activeCategory = categories.find(c => c.id === activeTab) || categories[0];
  const selectCategory = (id: string) => {
    setActiveTab(id);
    window.history.replaceState(null, '', `${window.location.pathname}#${id}`);
    setTimeout(() => {
      const cardAnchor = document.getElementById('tarjeta-servicio-anchor');
      if (cardAnchor) {
        cardAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
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
    <section id="catalogo-servicios" className="section scroll-mt-28 bg-slate-50/70 !py-16" data-reveal="reveal-scale">
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

        {/* Anchor de desplazamiento directo a la tarjeta */}
        <div id="tarjeta-servicio-anchor" className="scroll-mt-28 md:scroll-mt-32" />

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
                    {activeCategory.items.map((item, index) => {
                      const matchNumber = item.match(/^(\d+\.)\s*(.*)/);
                      if (matchNumber) {
                        const [, num, text] = matchNumber;
                        return (
                          <li key={index} className="col-span-1 sm:col-span-2 pt-3 pb-1 border-b border-gray-100 flex items-center group">
                            <span className="bg-[#1e3a8a] text-white text-xs font-extrabold px-2.5 py-1 rounded-md mr-2.5 shadow-sm shrink-0">
                              {num}
                            </span>
                            <span className="text-[#1e3a8a] font-extrabold text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                              {text}
                            </span>
                          </li>
                        );
                      }
                      return (
                        <li key={index} className="flex items-start text-gray-800 text-sm group">
                          <FaCheckCircle className="text-[#dc2626] mt-0.5 mr-2.5 shrink-0 group-hover:scale-110 transition-transform text-base" />
                          <span className="group-hover:text-[#1e3a8a] transition-colors font-medium leading-tight">{item}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Imágenes adicionales (ej. Certificación y Registro SENACE) */}
                  {'extraImages' in activeCategory && Array.isArray((activeCategory as { extraImages?: string[] }).extraImages) && (
                    <div className="mt-6 space-y-3.5 pt-4 border-t border-gray-100">
                      {(activeCategory as { extraImages: string[] }).extraImages.map((imgSrc, idx) => (
                        <div key={idx} className="relative w-full rounded-xl overflow-hidden border border-gray-200/90 shadow-sm bg-white p-1.5 transition-all hover:shadow-md">
                          <Image
                            src={imgSrc}
                            alt={`Registro y Certificación SENACE CIVILAM ${idx + 1}`}
                            width={900}
                            height={300}
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  )}
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
