"use client";

import React, { useState } from 'react';
import { FaClock, FaVideo, FaCertificate, FaSearch, FaWhatsapp, FaCheckCircle, FaFileAlt } from 'react-icons/fa';
import { contact } from '@/lib/site';

const courses = [
  {
    id: 1,
    category: 'SST & Normativa',
    title: 'Seguridad y Salud en el Trabajo (SST) en Obras',
    description: 'Aprende a implementar y gestionar el plan de SST bajo la Ley N° 29783 y Norma G.050 para prevenir riesgos laborales.',
    duration: '24 horas académicas',
    modality: 'Online en Vivo',
    certificate: 'Condición por confirmar',
    badge: 'SST y normativa',
    badgeColor: 'bg-red-600 text-white',
    price: 'Consultar',
    oldPrice: '',
    syllabus: [
      'Ley 29783 y Reglamentación G.050',
      'Elaboración de la Matriz IPERC en Obra',
      'Planes de Contingencia y Primeros Auxilios',
      'Fiscalización e Inspecciones SUNAFIL'
    ]
  },
  {
    id: 2,
    category: 'Gestión de Obras',
    title: 'Gestión y Residencia de Obras Públicas',
    description: 'Domina las herramientas y procedimientos administrativos, cuaderno de obra digital y liquidación de contratos con el Estado (OSCE).',
    duration: '30 horas académicas',
    modality: 'Online / Grabado',
    certificate: 'Condición por confirmar',
    badge: 'Gestión aplicada',
    badgeColor: 'bg-amber-500 text-white',
    price: 'Consultar',
    oldPrice: '',
    syllabus: [
      'Ley de Contrataciones del Estado (OSCE)',
      'Gestión del Cuaderno de Obra Digital',
      'Valorizaciones y Reajustes de Precios (K)',
      'Liquidación Técnica y Financiera de Obra'
    ]
  },
  {
    id: 3,
    category: 'Expedientes Técnicos',
    title: 'Elaboración de Expedientes Técnicos',
    description: 'Conoce la estructura, normativas MVCS/PRONIED y metodologías para formular expedientes técnicos de infraestructura pública.',
    duration: '40 horas académicas',
    modality: 'Presencial / Transmitido',
    certificate: 'Condición por confirmar',
    badge: 'Expedientes técnicos',
    badgeColor: 'bg-[#1e3a8a] text-white',
    price: 'Consultar',
    oldPrice: '',
    syllabus: [
      'Estructura Estándar de Expediente Técnico',
      'Memorias Descriptivas y Especificaciones',
      'Presupuesto y Análisis de Precios (S10)',
      'Términos de Referencia y Licencias'
    ]
  },
  {
    id: 4,
    category: 'Diseño & Planos',
    title: 'Lectura de Planos: Arquitectura y Estructuras',
    description: 'Capacitación práctica desde cero para interpretar correctamente planos multidisciplinarios, cortes y detalles en edificaciones.',
    duration: '20 horas académicas',
    modality: 'Online 24/7',
    certificate: 'Condición por confirmar',
    badge: 'Lectura de planos',
    badgeColor: 'bg-emerald-600 text-white',
    price: 'Consultar',
    oldPrice: '',
    syllabus: [
      'Simbología Arquitectónica y Escalas',
      'Cimentaciones, Columnas y Vigas',
      'Instalaciones Sanitarias y Eléctricas',
      'Metrados Básicos desde Plano'
    ]
  },
  {
    id: 5,
    category: 'Hidráulica & Agua',
    title: 'Modelamiento Hidráulico con HEC-RAS 1D/2D',
    description: 'Aprende a simular el comportamiento de ríos, inundaciones y delimitación de fajas marginales exigidas por la ANA.',
    duration: '35 horas académicas',
    modality: 'Online en Vivo',
    certificate: 'Condición por confirmar',
    badge: 'Modelamiento hidráulico',
    badgeColor: 'bg-blue-600 text-white',
    price: 'Consultar',
    oldPrice: '',
    syllabus: [
      'Configuración de Geometría en HEC-RAS',
      'Simulación Unidimensional 1D y Flujo Variable',
      'Modelamiento Bidimensional 2D de Inundaciones',
      'Exportación de Mapas de Riesgo a GIS'
    ]
  },
  {
    id: 6,
    category: 'BIM & Estructuras',
    title: 'Diseño Estructural Avanzado con ETABS & SAP2000',
    description: 'Domina el análisis sísmico y diseño sismorresistente de edificaciones de concreto armado bajo la norma E.030 y E.060.',
    duration: '45 horas académicas',
    modality: 'Online en Vivo',
    certificate: 'Condición por confirmar',
    badge: 'Diseño estructural',
    badgeColor: 'bg-red-600 text-white',
    price: 'Consultar',
    oldPrice: '',
    syllabus: [
      'Modelamiento Dinámico y Espectro Sísmico (E.030)',
      'Diseño de Elementos de Concreto Armado (E.060)',
      'Verificación de Derivas y Rigidez',
      'Detallado de Planos de Refuerzo'
    ]
  }
];

export default function TrainingList() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSyllabusModal, setActiveSyllabusModal] = useState<typeof courses[0] | null>(null);

  const categories = ['Todos', 'SST & Normativa', 'Gestión de Obras', 'Expedientes Técnicos', 'Diseño & Planos', 'Hidráulica & Agua', 'BIM & Estructuras'];

  const filteredCourses = courses.filter(c => {
    const matchesCategory = selectedCategory === 'Todos' || c.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section bg-[#fbfaf7]">
      <div className="site-wrapper max-w-[1240px]">
        {/* Encabezado */}
        <div className="grid gap-7 border-b border-slate-300 pb-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
          <p className="technical-label text-[#9a6410]">OFERTA FORMATIVA</p>
          <h2 className="editorial-title mt-5">Cursos y capacitaciones</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Mantente actualizado con las normativas, software especializado y metodologías técnicas exigidas por el sector público y privado.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#9a6410]">Programación referencial. Fechas, modalidad, docentes, certificación, precio y disponibilidad se confirman por escrito antes de cualquier pago.</p>

          {/* Buscador de Cursos */}
          </div>
          <div className="relative w-full lg:w-80">
            <div className="relative flex items-center">
              <FaSearch className="absolute left-4 text-gray-400 text-sm pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar curso (ej. SST, HEC-RAS, ETABS, Planos)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="min-h-12 w-full border border-slate-400 bg-transparent py-3 pl-11 pr-4 text-sm focus:border-[#102a43] focus:outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-xs font-bold text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-1 rounded-md"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filtros de Categoría */}
        <div className="flex gap-2 overflow-x-auto border-b border-slate-300 py-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`min-h-11 shrink-0 border px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
                selectedCategory === cat 
                  ? 'bg-[#102a43] text-white border-[#102a43]' 
                  : 'bg-transparent text-slate-600 border-slate-300 hover:border-[#102a43]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 gap-px bg-slate-300 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="group relative flex flex-col justify-between overflow-hidden bg-[#fbfaf7] p-7 transition-colors hover:bg-white lg:p-9"
            >
              {/* Top Gradient Accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-[#e5a72a]"></div>
              
              {/* Badge Comercial */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[0.7rem] font-bold text-gray-400 uppercase tracking-wider">
                  {course.category}
                </span>
                <span className="border border-slate-300 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-slate-600">
                  {course.badge}
                </span>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold leading-snug text-[#102a43]">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Detalles de Duración, Modalidad y Certificado */}
                <div className="mb-6 space-y-2 border-y border-slate-300 py-4 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-600 shrink-0" />
                    <span>Duración: <strong className="text-gray-900">{course.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaVideo className="text-emerald-600 shrink-0" />
                    <span>Modalidad: <strong className="text-gray-900">{course.modality}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCertificate className="text-amber-500 shrink-0" />
                    <span>Certificado: <strong className="text-gray-900">{course.certificate}</strong></span>
                  </div>
                </div>
              </div>

              <div>
                {/* Precios y Botón Temario */}
                <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 line-through mr-2">{course.oldPrice}</span>
                    <span className="text-2xl font-black text-[#1e3a8a]">{course.price}</span>
                  </div>
                  <button
                    onClick={() => setActiveSyllabusModal(course)}
                    className="flex min-h-10 items-center gap-1.5 border border-[#102a43] px-3 py-1.5 text-xs font-bold text-[#102a43]"
                  >
                    <FaFileAlt className="text-xs" /> Ver Temario
                  </button>
                </div>

                {/* Botón WhatsApp */}
                <a 
                  href={`${contact.whatsapp}?text=${encodeURIComponent(`Hola CIVILAM, solicito información y el enlace de matrícula para el curso: ${course.title}`)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 bg-[#102a43] px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#071b2c]"
                >
                  <FaWhatsapp className="text-lg" />
                  Inscribirme por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Temario */}
        {activeSyllabusModal && (
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
            onClick={() => setActiveSyllabusModal(null)}
          >
            <div 
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveSyllabusModal(null)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold"
              >
                ✕
              </button>

              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase mb-3 inline-block">
                Temario del Curso
              </span>
              <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4 leading-tight">
                {activeSyllabusModal.title}
              </h3>

              <div className="space-y-3 mb-6">
                {activeSyllabusModal.syllabus.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <FaCheckCircle className="text-emerald-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href={`${contact.whatsapp}?text=${encodeURIComponent(`Hola CIVILAM, deseo información del curso ${activeSyllabusModal.title}`)}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-sm py-3.5 rounded-xl shadow-md"
              >
                <FaWhatsapp className="text-lg" /> Solicitud Inmediata por WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
