import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Plus, ArrowRight, Printer, Book, Layers, FileText } from "lucide-react";

export const Route = createFileRoute("/servicos/midia-impressa")({
  head: () => ({
    meta: [
      { title: "Mídia Impressa — Murilo Ortega" },
      { name: "description", content: "Catálogos, diagramação e materiais institucionais com alta performance gráfica." },
    ],
  }),
  component: MidiaImpressaPage,
});

function MidiaImpressaPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="bg-background pt-32 pb-32">
      {/* Hero */}
      <section className="site-section border-t-0 pt-0 pb-24">
        <div className="site-container">
          <div className="max-w-4xl">
            <span className="site-label mb-8">Service 04</span>
            <h1 className="site-title mb-12">
              Mídia Impressa:<br />
              Onde sua marca<br />
              ganha <span className="italic">peso</span> real.
            </h1>
            <p className="text-xl md:text-2xl text-secondary uppercase font-medium leading-tight mb-12">
              Catálogos físicos e digitais, diagramação, linha editorial e materiais institucionais. Entregamos qualidade gráfica que tangibiliza a autoridade da sua marca no mundo físico.
            </p>
            <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Iniciar projeto gráfico <Plus size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="site-section py-32 bg-off-white">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
             {[
               { title: "Catálogos Físicos & Digitais", icon: <Book size={24} /> },
               { title: "Diagramação Editorial", icon: <Layers size={24} /> },
               { title: "Materiais Institucionais", icon: <FileText size={24} /> },
               { title: "Flyers & Peças Promocionais", icon: <FileText size={24} /> },
               { title: "Cartões de Visita Premium", icon: <Plus size={24} /> },
               { title: "Finalização & Fechamento", icon: <Printer size={24} /> }
             ].map((item, i) => (
               <div key={i} className="bg-background p-12 space-y-6 group hover:bg-foreground hover:text-background transition-all duration-500">
                  <div className="w-12 h-12 border border-border flex items-center justify-center mb-4 group-hover:border-background/20 transition-colors">
                     {item.icon}
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tighter leading-tight">{item.title}</h4>
                  <p className="text-xs text-secondary group-hover:text-background/60 uppercase">Alta performance gráfica e fechamento de arquivo técnico.</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Case Marco Boni */}
      <section className="site-section py-32">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
             <div className="lg:col-span-6">
                <Link to="/marco-boni" className="block shadow-2xl overflow-hidden group">
                   <img 
                     src="/assets/projects/marco-boni/print/1.jpg" 
                     alt="Marco Boni Catalog" 
                     className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                   />
                </Link>
             </div>
             <div className="lg:col-span-6">
                <Link to="/marco-boni" className="inline-block mb-8 hover:scale-105 transition-transform">
                   <img src="/src/assets/logos/marcoboni.svg" alt="Marco Boni Logo" className="h-12 w-auto object-contain" />
                </Link>
                <span className="site-label mb-8 block">Case em Destaque</span>
                <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">Marco Boni: O Desafio dos 1000 Produtos</h2>
                <p className="site-body mb-8">
                   Produzi o catálogo nacional de produtos da marca, desde a fotografia e tratamento de imagens de mais de 1000 itens até a linha editorial, identidade visual e diagramação completa.
                </p>
                <div className="space-y-4 mb-12">
                   {["Fotografia & Tratamento", "Design Thinking & Exibição", "Direção Visual & Diagramação"].map((task, i) => (
                     <div key={i} className="flex items-center gap-4">
                        <div className="w-4 h-[1px] bg-foreground" />
                        <span className="text-xs font-mono uppercase tracking-widest">{task}</span>
                     </div>
                   ))}
                </div>
                <Link to="/marco-boni" className="btn btn-arrow">Ver detalhes do projeto <span className="arrow" /></Link>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 bg-foreground text-background">
        <div className="site-container text-center">
          <h2 className="text-[10vw] font-bold uppercase tracking-tighter leading-[0.8] mb-12">O material que sua marca merece.</h2>
          <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn-primary bg-background text-foreground px-12 py-6 text-lg">
            Solicitar orçamento gráfico <Plus size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default MidiaImpressaPage;
