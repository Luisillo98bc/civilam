import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Juan Pérez',
      role: 'Presidente JASS',
      content: '"El equipo de CIVILAM demostró un nivel técnico excepcional en el diseño y ejecución de nuestra red de agua potable. Cumplieron con los plazos y el presupuesto al pie de la letra."',
      rating: 5,
      avatar: '/logo.png'
    },
    {
      id: 2,
      name: 'María Quispe',
      role: 'Propietaria de Inmueble',
      content: '"Gracias a su asesoría, logramos obtener nuestra licencia de construcción y declaratoria de fábrica sin los típicos dolores de cabeza burocráticos. 100% recomendados."',
      rating: 5,
      avatar: '/logo.png'
    },
    {
      id: 3,
      name: 'Carlos Ramírez',
      role: 'Funcionario Municipal',
      content: '"Los expedientes técnicos elaborados por CIVILAM siempre cumplen con las normativas más estrictas. Su profesionalismo garantiza la viabilidad de las obras públicas."',
      rating: 5,
      avatar: '/logo.png'
    }
  ];

  return (
    <section className="section">
      <div className="site-wrapper">
        <div className="mb-20">
          <h4 className="section-subtitle">TESTIMONIOS</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-bg-white p-8 rounded-lg flex flex-col border border-border-color border-l-[4px] border-l-accent-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-6px_var(--accent-glow)] hover-lift">
                <div className="mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--accent-glow)" stroke="none"><path d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C5.447 7.773 6 9 6 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C-.159 12.322-1.581 10.841-1.581 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" transform="translate(4 2)"/></svg>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ))}
                </div>
                <p className="text-base italic text-text-dark mb-8 flex-grow leading-relaxed">{t.content}</p>
                <div className="flex items-center gap-4">
                  <Image src={t.avatar} alt={t.name} width={50} height={50} className="w-[50px] h-[50px] rounded-full object-cover border-2 border-light-blue" />
                  <div>
                    <h4 className="text-[0.9rem] font-bold text-primary-blue m-0">{t.name}</h4>
                    <p className="text-[0.75rem] text-text-gray m-0">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border-color">
          <h4 className="section-subtitle">NUESTROS CLIENTES</h4>
          
          <div className="max-w-[800px] mx-auto mt-8 text-center">
            <p className="text-[1.15rem] text-text-dark leading-[1.8] mb-4 [&>span]:text-accent-blue [&>span]:font-semibold">
              En <strong>CIVILAM</strong>, nos enorgullece colaborar con entidades clave para el desarrollo del país, incluyendo <span>Ministerios</span>, <span>Gobiernos Regionales y Locales</span>, <span>JASS</span> (Juntas Administradoras de Servicios de Saneamiento), <span>Comunidades Campesinas</span> y diversas <span>empresas privadas del sector construcción e industrial</span>. 
            </p>
            <p className="text-base text-text-gray leading-[1.6]">Su confianza en nuestra capacidad técnica nos motiva a seguir elevando los estándares de ingeniería en cada proyecto.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
