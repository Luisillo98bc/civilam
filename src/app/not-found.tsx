import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página no encontrada - 404',
  description: 'Lo sentimos, la página que buscas no existe o ha sido movida.',
};

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-120px-400px)] flex items-center justify-center py-16 px-8 bg-bg-light">
      <div className="text-center max-w-[600px] bg-bg-white p-16 px-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-border-color">
        <h1 className="text-[6rem] font-black text-accent-blue leading-none mb-4 tracking-[-0.05em]">404</h1>
        
        <h2 className="text-[1.75rem] font-bold text-primary-blue mb-4">Página no encontrada</h2>
        
        <p className="text-text-gray text-[1.05rem] leading-[1.6] mb-10">
          Lo sentimos, la página que estás buscando no existe, ha sido movida o está temporalmente inactiva.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-primary no-underline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            Volver al Inicio
          </Link>
          <Link href="/contacto" className="btn-secondary no-underline">
            Contactar Soporte
          </Link>
        </div>
      </div>
    </main>
  );
}
