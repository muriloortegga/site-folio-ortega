import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";
import { Maximize2, ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/symplice")({
  head: () => ({
    meta: [
      { title: "Symplice — Murilo Ortega" },
      { name: "description", content: "Identidade Visual para Symplice — Facilitando o complexo." },
    ],
  }),
  component: ProjetoSymplice,
});

function ProjetoSymplice() {
  const [activeService, setActiveService] = useState("marca");

  const services = [
    { id: "marca", label: "Id Visual" }
  ];

  const metaData = [
    { label: "Cliente", value: "Symplice" },
    { label: "Ano", value: "2024" },
    { label: "Foco", value: "Startup & SaaS" },
    { label: "Skills", value: "Id Visual, Branding" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="Symplice"
        phrase="Clareza Digital"
        description="Para marcas que operam na complexidade, a Symplice entrega simplicidade estratégica. Uma identidade visual limpa, direta e focada na experiência do usuário."
        niche="Branding & Design System"
        meta={metaData}
      />

      <ServiceSelector 
        options={services} 
        activeId={activeService} 
        onChange={setActiveService} 
      />

      <div className="anim-fade-in site-container pb-32">
         <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden border border-border group cursor-ns-resize ">
           <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center pointer-events-none">
              <div className="bg-background/80 backdrop-blur px-6 py-3 border border-border  opacity-0 group-hover:opacity-100 transition-all">
                 <Maximize2 size={16} className="inline-block" />
                 <span className="ml-2 text-[10px] font-mono uppercase tracking-widest">Scroll para explorar</span>
              </div>
           </div>
           <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
              <img src="/hero-brandding.jpg" alt="Symplice Branding" className="w-full h-auto" />
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200" alt="Symplice Detail" className="w-full h-auto" />
           </div>
         </div>
      </div>

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-primary gap-2">
            <ArrowLeft size={16} /> Voltar Projetos
          </Link>
          <Link to="/natrave" className="btn btn-primary gap-2">
            Próximo Projeto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoSymplice;
