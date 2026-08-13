import type { Metadata } from 'next';
import Link from 'next/link';
import { company, contact } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Términos de uso y capacitaciones',
  description: 'Condiciones generales de uso del sitio, solicitudes de servicios y capacitaciones de CIVILAM.',
  alternates: { canonical: '/terminos' },
};

export default function TermsPage() {
  return (
    <main className="bg-[#fbfaf7] py-20 lg:py-28">
      <article className="site-wrapper max-w-3xl">
        <div className="mb-8 border-l-2 border-[#e5a72a] bg-[#f4f2ed] p-5 text-sm leading-6 text-slate-700"><strong>Empresa:</strong> {company.legalName}. <strong>Atención:</strong> {contact.address}. <strong>Correo:</strong> <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>. El RUC y la razón social inscrita deben confirmarse antes de publicar.</div>
        <p className="technical-label text-[#9a6410]">INFORMACIÓN LEGAL</p>
        <h1 className="editorial-title mt-5">Términos de uso y capacitaciones</h1>
        <div className="article-content mt-10 text-slate-700">
          <h2>Información del sitio</h2>
          <p>El contenido presenta de forma general los servicios y actividades de CIVILAM. No constituye por sí mismo una oferta contractual, certificación técnica, presupuesto ni garantía de aprobación por una entidad.</p>

          <h2>Solicitudes y propuestas</h2>
          <p>Toda contratación requiere una propuesta o documento posterior que defina alcance, entregables, responsables, plazo, precio, forma de pago y condiciones aplicables. La viabilidad y los requisitos dependen de la ubicación, antecedentes y normativa de cada proyecto.</p>

          <h2>Capacitaciones</h2>
          <p>Las fechas, vacantes, modalidad, docentes, contenido, certificación y precio deben confirmarse por escrito antes de pagar. La matrícula se considera confirmada únicamente cuando CIVILAM comunica la recepción del pago y las condiciones del curso.</p>
          <p>Las reglas sobre cambios, cancelaciones, reprogramaciones y devoluciones deben ser informadas al participante antes del pago. Si una capacitación es cancelada por CIVILAM, se ofrecerá reprogramación o devolución según la comunicación correspondiente.</p>

          <h2>Propiedad intelectual</h2>
          <p>Los textos, materiales y elementos propios del sitio no pueden reproducirse con fines comerciales sin autorización. Las marcas y materiales de terceros pertenecen a sus respectivos titulares.</p>

          <h2>Enlaces externos</h2>
          <p>Los enlaces a WhatsApp, mapas, fuentes oficiales u otros servicios conducen a plataformas administradas por terceros y sujetas a sus propias condiciones.</p>

          <h2>Contacto</h2>
          <p>Para consultas sobre estas condiciones escribe a <a href={`mailto:${contact.email}`}>{contact.email}</a>. Antes del lanzamiento deben añadirse la razón social, RUC y domicilio legal de CIVILAM.</p>
        </div>
        <Link href="/contacto" className="btn-primary mt-10">Resolver una consulta</Link>
      </article>
    </main>
  );
}
