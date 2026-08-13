import Image from 'next/image';
import Link from 'next/link';

const families = [
  {
    number: '01',
    title: 'Expedientes técnicos',
    image: '/expedientes-tecnicos.png',
    items: ['Agua potable y alcantarillado MVCS', 'Carreteras, puentes y pavimentación urbana', 'Drenaje pluvial, defensas ribereñas y encauzamiento', 'Colegios PRONIED, centros de salud PRONIS y complejos deportivos', 'Presas, reservorios, canales y riego tecnificado', 'Siembra y cosecha de agua, habilitación urbana y terminales', 'Viviendas, parques, áreas verdes y muros de contención'],
  },
  {
    number: '02',
    title: 'Viviendas y trámites municipales',
    image: '/viviendas-tramites.jpg',
    items: ['Planos de ubicación, arquitectura y estructuras', 'Planos de instalaciones eléctricas y sanitarias', 'Memorias de cálculo y planos perimétricos', 'Licencias de construcción, habilitación urbana y otros trámites'],
  },
  {
    number: '03',
    title: 'Agua potable y saneamiento',
    image: '/agua potable.png',
    items: ['Captación, conducción, PTAP y reservorios', 'Aducción, redes de distribución y conexiones domiciliarias', 'Alcantarillado, colectores, buzones y PTAR', 'UBS, cámaras rompe presión, válvulas de purga y aire'],
  },
  {
    number: '04',
    title: 'Hidrología e hidráulica',
    image: '/hidraulico.jpg',
    items: ['Estudios para carreteras, puentes, alcantarillas y badenes', 'Defensas ribereñas, saneamiento, riego y represas', 'Centrales hidroeléctricas y disponibilidad hídrica superficial', 'Modelamiento hidrológico HEC-HMS y caudales máximos de diseño'],
  },
  {
    number: '05',
    title: 'Modelamiento hidráulico y redes',
    image: '/modelado 2d hibraulica.png',
    items: ['HEC-RAS 1D/2D, IBER y transporte de sedimentos', 'Inundaciones, flujo en cauces y rotura de presas', 'Drenaje pluvial urbano con SWMM', 'WaterCAD, WaterGEMS, SewerCAD y SewerGEMS'],
  },
  {
    number: '06',
    title: 'Medio ambiente y riesgos',
    image: '/medio-ambiente-riesgos-realista.png',
    items: ['EVAR para sismos, lluvias, inundaciones, deslizamientos y erupciones', 'Expedientes de relleno sanitario, reforestación y restauración', 'FITSA, FTA, PGAS y caracterización de residuos sólidos', 'DIA, EIA-sd, EIA-d, MEIA, ITS, PAMA, PMA, DAA, IGAC y PAA'],
  },
  {
    number: '07',
    title: 'Mapas y sistemas SIG',
    image: '/sig-cartografia.png',
    items: ['DEM topográfico y batimétrico, ubicación y catastro', 'Mapas de cuencas, riesgo, vulnerabilidad y peligros', 'Cartografía geológica, geomorfológica, cobertura vegetal y ecosistemas', 'Mapas arqueológicos, mineros, petroleros y pasivos ambientales'],
  },
  {
    number: '08',
    title: 'Arqueología',
    image: '/arqueologia.jpg',
    items: ['CIRA para carreteras, agua, puentes, riego y edificaciones', 'Plan de Monitoreo Arqueológico (PMA)', 'Proyecto de Evaluación Arqueológica (PEA)', 'Acompañamiento arqueológico para proyectos de infraestructura'],
  },
];

export default function BrochureServices() {
  return (
    <section className="section bg-[#f4f2ed]" aria-labelledby="brochure-services-title">
      <div className="site-wrapper">
        <div className="mb-10 grid gap-6 border-b border-slate-300 pb-10 lg:grid-cols-2 lg:items-end">
          <div><p className="technical-label text-[#9a6410]">CATÁLOGO AMPLIADO</p><h2 id="brochure-services-title" className="editorial-title mt-5">Todas las especialidades de CIVILAM</h2></div>
          <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">Este resumen incorpora los servicios descritos en el brochure institucional. El alcance, entregables y requisitos se confirman para cada proyecto.</p>
        </div>
        <div className="grid gap-px bg-slate-300 md:grid-cols-2 lg:grid-cols-4">
          {families.map((family) => (
            <article key={family.number} className="group bg-[#fbfaf7] p-5 sm:p-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200"><Image src={family.image} alt={`Servicio de ${family.title} de CIVILAM`} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" /></div>
              <span className="mt-6 block font-mono text-xs text-[#9a6410]">{family.number}</span>
              <h3 className="mt-3 text-xl font-semibold leading-tight text-[#102a43]">{family.title}</h3>
              <ul className="mt-5 border-t border-slate-300 pt-4">{family.items.map((item) => <li key={item} className="mb-2 flex gap-2 text-sm leading-5 text-slate-600"><span className="text-[#9a6410]">—</span>{item}</li>)}</ul>
              <Link href="/contacto" className="mt-5 inline-flex border-b border-[#102a43] pb-1 text-sm font-semibold text-[#102a43]">Consultar alcance →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
