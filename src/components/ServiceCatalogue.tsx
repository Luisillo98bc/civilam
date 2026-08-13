import Link from 'next/link';

const groups = [
  ['01', 'Expedientes técnicos', 'Formulación y desarrollo documental para infraestructura pública y privada.', ['Estudios básicos', 'Memorias y cálculos', 'Planos por especialidad', 'Metrados y presupuesto']],
  ['02', 'Agua y saneamiento', 'Diseño de sistemas considerando demanda, topografía, operación y normativa sectorial.', ['Agua potable', 'Alcantarillado', 'Reservorios', 'PTAR']],
  ['03', 'Hidrología e hidráulica', 'Evaluación del comportamiento del agua para diseño, protección y gestión de riesgos.', ['Modelamiento hidráulico', 'Drenaje pluvial', 'Fajas marginales', 'Defensas ribereñas']],
  ['04', 'Edificaciones', 'Coordinación de arquitectura e ingenierías para diseño, licencia y construcción.', ['Arquitectura', 'Estructuras', 'Instalaciones', 'Licencias']],
  ['05', 'Supervisión de obra', 'Control técnico, documental y contractual durante la etapa de ejecución.', ['Calidad', 'Valorizaciones', 'Seguridad', 'Control de avance']],
  ['06', 'Estudios especializados', 'Información de base para sustentar decisiones de diseño y viabilidad.', ['Topografía', 'Mecánica de suelos', 'Evaluación ambiental', 'Diagnóstico técnico']],
];

export default function ServiceCatalogue() {
  return (
    <section className="section bg-[#fbfaf7]">
      <div className="site-wrapper">
        <div className="grid gap-7 border-b border-slate-300 pb-10 lg:grid-cols-2 lg:items-end"><div><p className="technical-label text-[#9a6410]">CATÁLOGO DE SERVICIOS</p><h2 className="editorial-title mt-5">Especialidades coordinadas alrededor del proyecto</h2></div><p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">El alcance definitivo se establece después de revisar antecedentes, ubicación, requisitos y etapa actual.</p></div>
        <div className="grid gap-px bg-slate-300 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(([number, title, description, items]) => <article id={String(title).toLowerCase().includes('expediente') ? 'expedientes' : undefined} key={String(number)} className="bg-[#fbfaf7] p-8 lg:p-10"><span className="font-mono text-xs text-[#9a6410]">{number as string}</span><h3 className="mt-5 text-2xl font-semibold text-[#102a43]">{title as string}</h3><p className="mt-4 min-h-20 text-sm leading-6 text-slate-600">{description as string}</p><ul className="mt-6 border-t border-slate-300 pt-5">{(items as string[]).map(item => <li key={item} className="mb-2 flex gap-3 text-sm text-slate-700"><span className="text-[#9a6410]">—</span>{item}</li>)}</ul><Link href="/contacto" className="mt-7 inline-flex border-b border-[#102a43] pb-1 text-sm font-semibold text-[#102a43]">Consultar alcance →</Link></article>)}
        </div>
      </div>
    </section>
  );
}
