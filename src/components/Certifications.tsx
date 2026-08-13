const references = [
  {
    title: 'Reglamento Nacional de Edificaciones',
    description: 'Revisión del marco técnico aplicable a edificaciones y habilitaciones urbanas según el alcance contratado.',
    href: 'https://www.gob.pe/institucion/vivienda/informes-publicaciones/2309793-reglamento-nacional-de-edificaciones-rn',
  },
  {
    title: 'Coordinación por especialidades',
    description: 'Compatibilización de arquitectura, estructuras, instalaciones y documentación antes de cada entrega.',
  },
  {
    title: 'Control documental',
    description: 'Trazabilidad de versiones, observaciones, metrados, planos y entregables definidos para el proyecto.',
  },
];

export default function Certifications() {
  return (
    <section className="section bg-bg-light">
      <div className="site-wrapper">
        <div className="mb-12 max-w-3xl">
          <p className="technical-label text-[#9a6410]">CRITERIOS DE CUMPLIMIENTO</p>
          <h2 className="editorial-title mt-5">Rigor técnico sin promesas genéricas</h2>
          <p className="mt-5 text-base leading-7 text-text-gray">Cada propuesta debe precisar el alcance, la normativa aplicable, los responsables y los entregables. Las acreditaciones específicas se sustentan documentalmente cuando el proceso las requiere.</p>
        </div>
        <div className="grid gap-px bg-border-color md:grid-cols-3">
          {references.map((reference, index) => {
            const content = (
              <>
                <span className="font-mono text-xs text-[#9a6410]">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold text-primary-blue">{reference.title}</h3>
                <p className="mt-4 text-sm leading-6 text-text-gray">{reference.description}</p>
                {reference.href && <span className="mt-6 inline-flex border-b border-primary-blue pb-1 text-sm font-semibold text-primary-blue">Consultar fuente oficial →</span>}
              </>
            );
            return reference.href ? (
              <a key={reference.title} href={reference.href} target="_blank" rel="noopener noreferrer" className="bg-bg-white p-8 transition hover:bg-white">{content}</a>
            ) : (
              <article key={reference.title} className="bg-bg-white p-8">{content}</article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
