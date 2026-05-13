import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Plus, ArrowRight, MapPin, Maximize, Target, Settings } from "lucide-react";

export const Route = createFileRoute("/servicos/midia-ooh")({
  head: () => ({
    meta: [
      { title: "Mídia OOH — Murilo Ortega" },
      { name: "description", content: "Mídia Off-Home: Planejamento, design e gestão de campanhas externas de alto impacto." },
    ],
  }),
  component: MidiaOOHPage,
});

function MidiaOOHPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="bg-background pt-32 pb-32">
      {/* Hero */}
      <section className="site-section border-t-0 pt-0 pb-24">
        <div className="site-container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-[0.95]">
              Mídia OOH:<br />
              Dominando a paisagem<br />
              <span className="italic">urbana</span> com impacto.
            </h1>
            <p className="text-lg md:text-xl text-secondary uppercase font-medium leading-tight mb-12 max-w-2xl">
              Do planejamento e orçamento com fornecedores até a administração de budget e entrega final. Criamos campanhas externas que garantem visibilidade massiva e autoridade local.
            </p>
            <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Planejar campanha OOH <Plus size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="site-section py-32 bg-off-white">
        <div className="site-container">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Gestão Completa de Mídia Off</h2>
            </div>
            <p className="site-body max-w-sm">Cuidamos de cada detalhe para que sua marca ocupe o espaço público com estratégia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
             {[
               { title: "Planejamento & Estratégia", icon: <Target size={20} /> },
               { title: "Orçamento & Fornecedores", icon: <Settings size={20} /> },
               { title: "Administração de Budget", icon: <Plus size={20} /> },
               { title: "Direção Visual & Design", icon: <Maximize size={20} /> }
             ].map((item, i) => (
               <div key={i} className="bg-background p-10 space-y-6 group hover:bg-foreground hover:text-background transition-all duration-700 rounded-sm">
                  <div className="w-10 h-10 border border-border group-hover:border-background/20 flex items-center justify-center rounded-md">
                     {item.icon}
                  </div>
                  <h4 className="text-lg font-bold uppercase leading-tight">{item.title}</h4>
                  <p className="text-[10px] text-secondary group-hover:text-background/60 uppercase">Gestão ponta a ponta para máxima eficiência de investimento.</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Case Maxi */}
      <section className="site-section py-32">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
             <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="shadow-2xl overflow-hidden rounded-xl">
                   <img src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1200" alt="Maxi Billboard" className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                </div>
             </div>
             <div className="lg:col-span-6 order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95] mb-8">Colégio Maxi: Visibilidade Urbana</h2>
                <p className="site-body mb-8">
                   Administração completa da mídia off do Colégio Maxi, um dos mais tradicionais de Londrina. Gerenciamos desde o planejamento estratégico até o acompanhamento de fornecedores e entrega gráfica de outdoors e painéis.
                </p>
                <div className="space-y-4 mb-12">
                   {["Planejamento de Roteiros", "Gestão de Fornecedores", "Follow-up & Controle", "Fechamento de Arquivos"].map((task, i) => (
                     <div key={i} className="flex items-center gap-4">
                        <MapPin size={16} className="text-secondary" />
                        <span className="text-xs font-mono uppercase tracking-widest">{task}</span>
                     </div>
                   ))}
                </div>
                <Link to="/maxi" className="btn btn-arrow">Explorar projeto Maxi <span className="arrow" /></Link>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-foreground text-background">
        <div className="site-container text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] mb-12">Sua marca em todos os lugares.</h2>
          <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn-primary bg-background text-foreground px-12 py-6 text-lg hover:bg-background/90 rounded-full">
            Consultar especialistas OOH <Plus size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default MidiaOOHPage;
