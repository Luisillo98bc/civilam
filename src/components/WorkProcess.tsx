import Link from 'next/link';

const phases = [
  {
    number: '01',
    phase: 'Planeamiento',
    title: 'Evaluación y definición del alcance',
    description: 'Revisamos antecedentes, ubicación, objetivo, restricciones y requisitos de la entidad para establecer una ruta de trabajo clara.',
    deliverable: 'Alcance técnico y plan de trabajo',
  },
  {
    number: '02',
    phase: 'Información de base',
    title: 'Levantamiento y estudios básicos',
    description: 'Recopilamos información de campo y desarrollamos los estudios necesarios para sustentar las decisiones posteriores.',
    deliverable: 'Diagnóstico y estudios de base',
  },
  {
    number: '03',
    phase: 'Diseño',
    title: 'Desarrollo y coordinación técnica',
    description: 'Definimos criterios, dimensionamos soluciones y coordinamos arquitectura, estructuras, hidráulica e instalaciones según el proyecto.',
    deliverable: 'Cálculos, modelos y planos coordinados',
  },
  {
    number: '04',
    phase: 'Documentación',
    title: 'Expediente técnico',
    description: 'Estructuramos memorias, especificaciones, metrados, análisis de costos, presupuesto, cronograma y documentación complementaria.',
    deliverable: 'Expediente técnico consolidado',
  },
  {
    number: '05',
    phase: 'Control',
    title: 'Revisión y compatibilización',
    description: 'Verificamos consistencia entre especialidades, trazabilidad de documentos y cumplimiento de requisitos antes de la presentación.',
    deliverable: 'Informe de control y versión final',
  },
  {
    number: '06',
    phase: 'Cierre',
    title: 'Entrega y acompañamiento',
    description: 'Presentamos los entregables y atendemos consultas u observaciones dentro del alcance contratado.',
    deliverable: 'Entrega documentada y soporte técnico',
  },
];

export default function WorkProcess() {
  return (
    <section className="section bg-[#f4f2ed]">
      <div className="site-wrapper">
        <header className="grid gap-8 border-b border-slate-300 pb-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="technical-label text-[#9a6410]">METODOLOGÍA DE TRABAJO</p>
            <h2 className="editorial-title mt-5">Un proceso técnico con entregables definidos</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Organizamos cada encargo en etapas verificables para coordinar especialidades, controlar la documentación y mantener claridad sobre los avances del proyecto.
          </p>
        </header>

        <ol className="relative mt-12 border-t border-slate-400">
          {phases.map((item) => (
            <li key={item.number} className="group grid gap-5 border-b border-slate-300 py-8 md:grid-cols-[90px_180px_1fr_280px] md:items-start md:gap-8 lg:py-10">
              <span className="font-mono text-sm font-bold text-[#9a6410]">{item.number}</span>
              <span className="technical-label text-slate-500">{item.phase}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-.025em] text-[#102a43]">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
              <div className="border-l-2 border-[#e5a72a] pl-5">
                <span className="technical-label text-slate-500">ENTREGABLE PRINCIPAL</span>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#102a43]">{item.deliverable}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-slate-300 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="technical-label text-[#9a6410]">ALCANCE ADAPTABLE</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Las etapas y entregables se ajustan a la naturaleza, complejidad y situación actual de cada proyecto.</p>
          </div>
          <Link href="/contacto" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#102a43] px-7 py-3 font-bold text-white transition hover:bg-[#071b2c]">
            Evaluar un proyecto <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
