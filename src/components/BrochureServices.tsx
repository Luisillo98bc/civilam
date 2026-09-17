import Image from 'next/image';
import Link from 'next/link';

const families = [
  {
    number: '01',
    id: 'expedientes',
    title: 'Expedientes técnicos',
    image: '/expedientes-tecnicos.png',
    items: [
      'Agua potable y alcantarillado MVCS',
      'Carreteras, puentes y pavimentación urbana',
      'Drenaje pluvial, defensas ribereñas y muros de contención',
      'Colegios PRONIED, centros de salud PRONIS y complejos deportivos',
      'Presas, reservorios, redes de riego y sistemas de riego tecnificado',
      'Siembra y cosecha de agua, habilitación urbana y terminal terrestre'
    ],
  },
  {
    number: '02',
    id: 'topografia',
    title: 'Topografía, geodesia y fotogrametría',
    image: '/sig-cartografia.png',
    items: [
      'Levantamientos topográficos, urbanizaciones y lotizaciones',
      'Levantamientos de pistas, veredas y control topográfico de obras',
      'Parcelaciones, nivelaciones y tecnología RTK',
      'Monumentación de puntos geodésicos (IGN) y fotogrametría con drones'
    ],
  },
  {
    number: '03',
    id: 'mantenimiento',
    title: 'Mantenimiento de agua y saneamiento',
    image: '/construccion_mante.jpeg',
    items: [
      'Mantenimiento y limpieza de captaciones y reservorios',
      'Desinfección con cloro, lavado de paredes y redes de agua',
      'Mantenimiento de plantas de tratamiento de agua potable (PTAP)',
      'Mantenimiento de plantas de tratamiento de agua residual (PTAR)'
    ],
  },
  {
    number: '04',
    id: 'hidrologia',
    title: 'Hidrología e hidráulica',
    image: '/hidraulico.jpg',
    items: [
      'Estudios para carreteras, puentes, alcantarillas, badenes y cunetas',
      'Defensas ribereñas, saneamiento, agua potable y represas',
      'Estudios para proyectos de riego, pistas, veredas e hidroeléctricas',
      'Acreditación de disponibilidad hídrica superficial ante ANA'
    ],
  },
  {
    number: '05',
    id: 'modelamiento',
    title: 'Modelamiento hidráulico y redes',
    image: '/modelado 2d hibraulica.png',
    items: [
      'Modelamiento 1D/2D con HEC-RAS e IBER para ríos y cauces',
      'Transporte de sedimentos, inundaciones y rotura de presas',
      'Modelamiento de drenaje pluvial urbano con SWMM',
      'Redes de agua potable y alcantarillado con WaterCAD, WaterGEMS, SewerCAD y SewerGEMS'
    ],
  },
  {
    number: '06',
    id: 'evar',
    title: 'Evaluación de riesgos (EVAR)',
    image: '/medio-ambiente-riesgos-realista.png',
    items: [
      'EVAR por deslizamientos, sismos, lluvias intensas e inundaciones',
      'EVAR por descensos de temperatura, erupciones volcánicas y pandemias',
      'EVAR para inversión pública: defensas ribereñas, agua y saneamiento',
      'EVAR para carreteras, riego, colegios, hospitales, puentes, pistas y veredas'
    ],
  },
  {
    number: '07',
    id: 'monitoreos',
    title: 'Monitoreos ambientales',
    image: '/medio ambiente.avif',
    items: [
      'Monitoreo de la calidad del agua superficial y subterránea',
      'Monitoreo de la calidad del aire y emisiones atmosféricas',
      'Monitoreo de la calidad del suelo',
      'Monitoreo del ruido ambiental y ocupacional'
    ],
  },
  {
    number: '08',
    id: 'impacto',
    title: 'Estudios de Impacto Ambiental (EIA)',
    image: '/impacto-ambiental.png',
    items: [
      'Consultora Ambiental registrada ante el SENACE (RNC-00272-2026)',
      'Subsectores: Agricultura, Transportes, Residuos Sólidos, Vivienda y Construcción',
      'DIA, EIA-sd, EIA-d, MEIA e Informe Técnico Sustentatorio (ITS)',
      'PAMA, PMA, DAA, IGAC y PAA'
    ],
  },
  {
    number: '09',
    id: 'ambiental',
    title: 'Servicios en medio ambiente',
    image: '/medio-ambiente-riesgos.png',
    items: [
      'Expedientes de relleno sanitario, reforestación y restauración ambiental',
      'Ficha Técnica Socioambiental (FITSA) para carreteras y puentes',
      'Ficha Técnica Ambiental (FTA) para saneamiento MVCS y riego',
      'Planes de áreas degradadas, residuos sólidos y PGAS'
    ],
  },
  {
    number: '10',
    id: 'mapas',
    title: 'Mapas base y sistemas SIG',
    image: '/sig-cartografia.png',
    items: [
      'DEM topográfico/batimétrico, mapas catastrales y de cuencas',
      'Mapas de riesgos, vulnerabilidad, peligros, viento y red vial',
      'Mapas para EIA, catastro minero, cobertura vegetal, ecorregiones y suelos',
      'Mapas geológicos, geomorfológicos, arqueológicos, petroleros y Qhapaq Ñan'
    ],
  },
  {
    number: '11',
    id: 'arqueologia',
    title: 'Servicios en Arqueología',
    image: '/arqueologia.jpg',
    items: [
      'CIRAS para carreteras, agua, puentes, riego, hospitales y escuelas',
      'Elaboración del Plan de Monitoreo Arqueológico (PMA)',
      'Elaboración del Proyecto de Evaluación Arqueológica (PEA)',
      'Gestión y seguimiento de autorizaciones ante el Ministerio de Cultura'
    ],
  },
];

export default function BrochureServices() {
  return (
    <section className="section bg-[#f4f2ed]" aria-labelledby="brochure-services-title">
      <div className="site-wrapper">
        <div className="mb-10 grid gap-6 border-b border-slate-300 pb-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="technical-label text-[#9a6410]">CATÁLOGO DE ESPECIALIDADES</p>
            <h2 id="brochure-services-title" className="editorial-title mt-5">Todas las especialidades de CIVILAM</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Explora las 11 familias especializadas de ingeniería, estudios hídricos, medio ambiente y arqueología desarrolladas por CIVILAM a nivel nacional.
          </p>
        </div>
        <div className="grid gap-px bg-slate-300 md:grid-cols-2 lg:grid-cols-3">
          {families.map((family) => (
            <article key={family.number} className="group bg-[#fbfaf7] p-5 sm:p-7 flex flex-col justify-between hover:bg-white transition-colors">
              <Link href={`/servicios#${family.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 rounded-lg">
                  <Image
                    src={family.image}
                    alt={`Servicio de ${family.title} de CIVILAM`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="mt-6 block font-sans text-xs font-bold text-[#9a6410]">{family.number}</span>
                <h3 className="mt-2 text-lg font-bold leading-tight text-[#102a43] group-hover:text-[#1e3a8a] transition-colors">{family.title}</h3>
                <ul className="mt-4 border-t border-slate-300 pt-3">
                  {family.items.map((item, idx) => (
                    <li key={idx} className="mb-2 flex gap-2 text-xs leading-relaxed text-slate-600">
                      <span className="text-[#9a6410] shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Link>
              <Link
                href={`/servicios#${family.id}`}
                className="mt-5 inline-flex items-center gap-1.5 border-b border-[#102a43] pb-1 text-xs font-bold text-[#102a43] group-hover:text-[#1e3a8a] group-hover:border-[#1e3a8a] transition-colors"
              >
                Ver detalle en catálogo →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
