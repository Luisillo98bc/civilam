const sectors = ['Entidades públicas', 'Empresas privadas', 'Contratistas', 'Comunidades y JASS'];

export default function SectorStrip() {
  return (
    <section aria-label="Sectores atendidos" className="border-b border-slate-300 bg-[#fbfaf7]">
      <div className="site-wrapper grid md:grid-cols-[220px_1fr]">
        <div className="flex items-center border-b border-slate-300 py-5 md:border-b-0 md:border-r">
          <span className="technical-label text-[#9a6410]">SECTORES ATENDIDOS</span>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {sectors.map((sector) => <li key={sector} className="flex min-h-16 items-center border-r border-slate-300 px-4 text-sm font-semibold text-[#102a43] last:border-r-0 md:justify-center">{sector}</li>)}
        </ul>
      </div>
    </section>
  );
}
