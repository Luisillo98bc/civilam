const steps = [
  ['01', 'Evaluación', 'Revisamos ubicación, alcance, antecedentes y objetivo para definir la ruta técnica adecuada.'],
  ['02', 'Estudios', 'Levantamos información, desarrollamos estudios básicos y verificamos condicionantes normativas.'],
  ['03', 'Diseño', 'Coordinamos especialidades y desarrollamos planos, cálculos, metrados y especificaciones.'],
  ['04', 'Entrega', 'Realizamos control documental, presentamos entregables y acompañamos observaciones o ejecución.'],
];

export default function EngineeringProcess() {
  return (
    <section className="section bg-white">
      <div className="site-wrapper">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="technical-label text-[#9a6410]">MÉTODO DE TRABAJO</p>
            <h2 className="editorial-title mt-5">Control técnico de inicio a entrega</h2>
            <p className="mt-6 text-base leading-7 text-slate-600">Un proceso claro permite anticipar observaciones, coordinar disciplinas y mantener trazabilidad sobre las decisiones del proyecto.</p>
          </div>
          <ol className="grid border-l border-slate-300 sm:grid-cols-2">
            {steps.map(([number, title, description]) => (
              <li key={number} className="relative border-b border-r border-slate-300 p-7 sm:p-9">
                <span className="absolute -left-3 top-9 flex size-6 items-center justify-center bg-[#102a43] font-mono text-[9px] text-white">{number}</span>
                <h3 className="text-2xl font-semibold text-[#102a43]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
