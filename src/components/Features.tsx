import Image from 'next/image';

export default function Features() {
  type Feature = {
    title: string;
    description: string;
    icon: React.ReactNode;
    illustration?: string;
    image?: string;
    layout: string;
  };

  const features: Feature[] = [
    {
      title: "Experiencia Técnica",
      description: "Más de 10 años desarrollando proyectos de ingeniería y construcción.",
      icon: null,
      illustration: "/porque_elegirnos/experiencia.webp",
      layout: "tall"
    },
    {
      title: "Cumplimiento Normativo",
      description: "Proyectos alineados con normativas MVCS y estándares vigentes.",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>,
      illustration: "/porque_elegirnos/cumplimiento.webp",
      layout: "horizontal"
    },
    {
      title: "Entrega Garantizada",
      description: "Cumplimos plazos con seguimiento y control en cada etapa del proyecto.",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
      illustration: "/porque_elegirnos/entrega.webp",
      layout: "horizontal"
    },
    {
      title: "Atención Personalizada",
      description: "Acompañamiento técnico desde la evaluación inicial hasta la entrega del proyecto.",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
      illustration: "/porque_elegirnos/atenc%20personalizada.webp",
      layout: "vertical"
    },
    {
      title: "Tecnología Avanzada",
      description: "Utilizamos CAD, BIM y software especializado para diseños precisos.",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
      illustration: "/porque_elegirnos/tecnologia.webp",
      layout: "vertical"
    },
    {
      title: "Cobertura Nacional",
      description: "Ejecutamos proyectos en zonas urbanas y rurales en todo el país.",
      icon: null,
      image: "/porque_elegirnos/cobertura.webp",
      layout: "wide-image"
    }
  ];

  const getCardClasses = (index: number) => {
    switch (index) {
      case 0: return "col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2 !p-0";
      case 1: return "col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 !p-0";
      case 2: return "col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 !p-0";
      case 3: return "col-span-1 sm:col-span-1 lg:col-span-1 row-span-1 !p-0";
      case 4: return "col-span-1 sm:col-span-1 lg:col-span-1 row-span-1 !p-0";
      case 5: return "col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 !p-0";
      default: return "";
    }
  };

  const renderCardContent = (feature: Feature, index: number) => {
    // Card 1: Tall
    if (index === 0) {
      return (
        <div className="flex flex-col h-full bg-gradient-to-b from-[#7A98CA] to-[#1e3a8a] text-white p-8 sm:p-10 rounded-[1.5rem] w-full relative overflow-hidden group">
          <div className="flex-1 relative w-full min-h-[250px] mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
             <Image src={feature.illustration!} alt={feature.title} fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="mt-auto relative z-10">
            <h3 className="text-[1.8rem] font-bold mb-3 leading-tight">{feature.title}</h3>
            <p className="text-[#e2e8f0] text-[1.05rem] leading-relaxed max-w-[90%]">{feature.description}</p>
          </div>
        </div>
      );
    }

    // Card 6: Background Image
    if (index === 5) {
      return (
        <div className="flex flex-col h-full p-8 sm:p-10 rounded-[1.5rem] w-full relative overflow-hidden group justify-end">
          <Image src={feature.image!} alt={feature.title} fill className="object-cover z-0 transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/90 via-[#1e3a8a]/40 to-transparent z-[1]" />
          <div className="relative z-[2] mt-auto">
            <h3 className="text-[1.8rem] font-bold text-white mb-3 leading-tight">{feature.title}</h3>
            <p className="text-[#e2e8f0] text-[1.05rem] leading-relaxed max-w-[90%]">{feature.description}</p>
          </div>
        </div>
      );
    }

    // Horizontal Cards (2 and 3)
    if (index === 1 || index === 2) {
      return (
        <div className="flex flex-col sm:flex-row h-full w-full bg-white border border-gray-200 rounded-[1.5rem] p-6 sm:p-8 relative overflow-hidden group hover:border-[#cbd5e1] hover:shadow-xl transition-all duration-300">
          <div className="flex-1 flex flex-col justify-center pr-4">
            <div className="w-11 h-11 rounded-full bg-[#f0f4f8] flex items-center justify-center text-[#3b82f6] mb-5 border border-[#e2e8f0]">
              {feature.icon}
            </div>
            <h3 className="text-[1.35rem] font-bold text-[#1e3a8a] mb-2 leading-tight">{feature.title}</h3>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed max-w-[95%]">{feature.description}</p>
          </div>
          <div className="w-full sm:w-[45%] h-[160px] sm:h-full mt-6 sm:mt-0 relative group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
             <Image src={feature.illustration!} alt={feature.title} fill className="object-contain p-2" sizes="(max-width: 768px) 100vw, 30vw" />
          </div>
        </div>
      );
    }

    // Vertical Cards (4 and 5)
    return (
      <div className="flex flex-col h-full w-full bg-white border border-gray-200 rounded-[1.5rem] p-6 sm:p-8 relative overflow-hidden group hover:border-[#cbd5e1] hover:shadow-xl transition-all duration-300">
        <div className="w-11 h-11 rounded-full bg-[#f0f4f8] flex items-center justify-center text-[#3b82f6] mb-6 border border-[#e2e8f0]">
          {feature.icon}
        </div>
        <div className="w-full h-[150px] relative mb-6 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
          <Image src={feature.illustration!} alt={feature.title} fill className="object-contain p-2" sizes="(max-width: 768px) 100vw, 25vw" />
        </div>
        <h3 className="text-[1.25rem] font-bold text-[#1e3a8a] mb-2 leading-tight">{feature.title}</h3>
        <p className="text-gray-500 text-[0.95rem] leading-relaxed">{feature.description}</p>
      </div>
    );
  };

  return (
    <section id="nosotros" className="section bg-slate-50/50">
      <div className="site-wrapper">
        <h4 className="section-subtitle">¿POR QUÉ ELEGIRNOS?</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(220px,auto)] lg:auto-rows-[minmax(260px,auto)] gap-5 lg:gap-6 mt-16 max-w-[1200px] mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`rounded-[1.5rem] w-full h-full flex ${getCardClasses(index)}`}
            >
              {renderCardContent(feature, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
