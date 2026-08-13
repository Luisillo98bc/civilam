import { company, contact } from '@/lib/site';

const values = ['Integridad y profesionalidad', 'Compromiso con los resultados', 'Innovación tecnológica', 'Respeto por las normas vigentes', 'Cuidado del medio ambiente', 'Trabajo en equipo'];

export default function CompanySnapshot() {
  return (
    <section className="section bg-[#fbfaf7]" aria-labelledby="company-snapshot-title">
      <div className="site-wrapper">
        <div className="grid gap-px bg-slate-300 lg:grid-cols-2">
          <article className="bg-[#fbfaf7] p-8 sm:p-12"><p className="technical-label text-[#9a6410]">MISIÓN</p><h2 id="company-snapshot-title" className="mt-5 text-3xl font-semibold text-[#102a43]">Ingeniería con propósito y criterio técnico</h2><p className="mt-6 text-base leading-8 text-slate-700">{company.mission}</p></article>
          <article className="bg-[#fbfaf7] p-8 sm:p-12"><p className="technical-label text-[#9a6410]">VISIÓN</p><h2 className="mt-5 text-3xl font-semibold text-[#102a43]">Una empresa con cobertura nacional</h2><p className="mt-6 text-base leading-8 text-slate-700">{company.vision}</p></article>
        </div>
        <div className="mt-10 grid gap-8 border-y border-slate-300 py-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div><p className="technical-label text-[#9a6410]">DATOS DE CONTACTO</p><p className="mt-4 text-sm leading-7 text-slate-700">{contact.address}<br /><a className="font-semibold text-[#102a43] underline" href={`mailto:${contact.email}`}>{contact.email}</a><br /><a className="font-semibold text-[#102a43] underline" href={`tel:${contact.phoneInternational}`}>{contact.phoneDisplay}</a></p></div>
          <div><p className="technical-label text-[#9a6410]">VALORES</p><div className="mt-4 flex flex-wrap gap-2">{values.map((value) => <span key={value} className="border border-slate-300 px-3 py-2 text-sm text-slate-700">{value}</span>)}</div></div>
        </div>
      </div>
    </section>
  );
}
