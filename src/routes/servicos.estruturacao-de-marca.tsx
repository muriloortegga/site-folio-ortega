import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Plus, BookOpen, PenTool, Search, Layout } from "lucide-react";

export const Route = createFileRoute("/servicos/estruturacao-de-marca")({
  head: () => ({
    meta: [
      { title: "Estruturação de Marca — Murilo Ortega" },
      { name: "description", content: "Construindo a base sólida que sua marca precisa para liderar." },
    ],
  }),
  component: EstruturacaoMarcaPage,
});

function EstruturacaoMarcaPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="bg-background pt-32 pb-32">
      {/* Hero */}
      <section className="site-section border-t-0 pt-0 pb-24">
        <div className="site-container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-[0.95]">
              Estruturação de Marca:<br />
              A base de tudo o que<br />
              você <span className="italic">entrega</span>.
            </h1>
            <p className="text-lg md:text-xl text-secondary uppercase font-medium leading-tight mb-12 max-w-2xl">
              Do diagnóstico ao brandbook completo. Construímos identidades que confrontam o comum e elevam o valor percebido do seu negócio.
            </p>
            <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Iniciar estruturação <Plus size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="site-section py-32 bg-off-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border border border-border">
            {[
              { 
                num: "01", 
                title: "Diagnóstico & Estratégia", 
                desc: "Entendimento profundo do mercado, público e diferenciais competitivos. Definimos o território que sua marca irá ocupar.",
                icon: <Search size={24} />
              },
              { 
                num: "02", 
                title: "Naming & Tom de Voz", 
                desc: "Damos nome à sua visão e definimos como ela fala com o mundo. Personalidade e clareza em cada palavra.",
                icon: <PenTool size={24} />
              },
              { 
                num: "03", 
                title: "Identidade Visual", 
                desc: "Construção de logo, tipografia, paleta de cores e sistema visual completo que comunica autoridade instantânea.",
                icon: <Layout size={24} />
              },
              { 
                num: "04", 
                title: "Brandbook & Manual", 
                desc: "A bíblia da sua marca. Todas as regras e diretrizes documentadas para garantir consistência em qualquer canal.",
                icon: <BookOpen size={24} />
              }
            ].map((p, i) => (
              <div key={i} className="lg:col-span-6 bg-background p-12 md:p-16 space-y-8 group hover:bg-foreground hover:text-background transition-all duration-700">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 border border-border group-hover:border-background/20 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-mono opacity-40">{p.num}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">{p.title}</h3>
                  <p className="site-body group-hover:text-background/70">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Section */}
      <section className="site-section py-32">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6">
               <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95] mb-8">Solid +: Fintech Identity & Systems</h2>
               <p className="site-body mb-12">
                 Construímos uma identidade que equilibra a solidez institucional com a agilidade das startups do Reino Unido. Um sistema completo de marca que permitiu a escala global da operação.
               </p>
               <Link to="/solid" className="btn btn-arrow">Ver case completo <span className="arrow" /></Link>
            </div>
            <div className="lg:col-span-6">
              <div className="shadow-2xl overflow-hidden rounded-xl">
                <img src="/solid-full.png" alt="Solid+ Brandbook" className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-foreground text-background">
        <div className="site-container text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] mb-12">Sua marca pronta para o topo.</h2>
          <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn-primary bg-background text-foreground px-12 py-6 text-lg hover:bg-background/90 rounded-full">
            Solicitar orçamento <Plus size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default EstruturacaoMarcaPage;
