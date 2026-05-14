import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";
import { Maximize2, X, ArrowLeft, ArrowRight } from "lucide-react";
import { WebsiteScrollShowcase } from "@/components/website-scroll-showcase";
import { CaseContext } from "@/components/case-context";
import { CaseProcess, CaseImpact } from "@/components/case-process";

import { z } from "zod";

const projectSearchSchema = z.object({
  service: z.string().optional().catch("marca"),
});

export const Route = createFileRoute("/kmillion")({
  validateSearch: (search) => projectSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Kmillion — Case Study — Murilo Ortega" },
      { name: "description", content: "Identidade Visual e Inteligência Promocional para Kmillion Promotech." },
    ],
  }),
  component: ProjetoKmillion,
});

function ProjetoKmillion() {
  const { service } = Route.useSearch();
  const [activeService, setActiveService] = useState(service || "marca");
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (isFullScreen) {
      document.body.classList.add("has-fullscreen");
    } else {
      document.body.classList.remove("has-fullscreen");
    }
    return () => document.body.classList.remove("has-fullscreen");
  }, [isFullScreen]);

  const services = [
    { id: "marca", label: "Id Visual" },
    { id: "websites", label: "Websites" }
  ];

  const metaData = [
    { label: "Cliente", value: "Kmillion" },
    { label: "Ano", value: "2024" },
    { label: "Tech", value: "Promotech / Varejo" },
    { label: "Skills", value: "Id Visual, UI/UX" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="Kmillion"
        phrase="Inteligência Adaptável"
        description="Transformando promoções em canais de relacionamento. Inspirada na adaptabilidade do camaleão, a Kmillion entrega autonomia e inteligência para o marketing de varejo."
        niche="Tecnologia & Varejo"
        meta={metaData}
      />

      <ServiceSelector 
        options={services} 
        activeId={activeService} 
        onChange={setActiveService} 
      />

      <CaseContext 
        briefing="Rebranding e criação de presença digital para a Kmillion, uma Promotech focada em inteligência promocional para o varejo."
        problem="A marca anterior não refletia a agilidade e inteligência do sistema. Era necessário uma identidade que transmitisse adaptabilidade e inovação tecnológica."
        solution="Inspirado na anatomia do camaleão, criei um sistema visual dinâmico que se adapta a diferentes contextos de PDV e canais digitais, reforçando a ideia de 'inteligência adaptável'."
        results="Consolidação da marca como líder em tecnologia promocional, com expansão da base de clientes após o lançamento da nova identidade."
      />

      <CaseProcess 
        steps={[
          {
            title: "Abstração Biológica",
            description: "Estudo da anatomia e comportamento do camaleão para traduzir 'adaptabilidade' em formas geométricas precisas.",
            tags: ["Semiótica", "Geometria"]
          },
          {
            title: "Sistemas Dinâmicos",
            description: "Construção de uma malha visual flexível que se comporta de forma consistente do digital ao PDV físico.",
            tags: ["Brand System", "UI"]
          },
          {
            title: "Narrativa Técnica",
            description: "Posicionamento da Kmillion não apenas como software, mas como inteligência estratégica para o marketing.",
            tags: ["Copywriting", "Estratégia"]
          }
        ]}
      />

      <CaseImpact 
        metrics={[
          { label: "Lead Gen", value: "25%", description: "Aumento na conversão de leads qualificados via site." },
          { label: "Percepção", value: "High", description: "Feedback unânime sobre o aumento do valor percebido." },
          { label: "Scale", value: "12+", description: "Novos grandes players do varejo integrados no semestre." },
          { label: "Recall", value: "88%", description: "Taxa de reconhecimento da nova marca no setor tech." },
        ]}
      />

      {activeService === "marca" && (
        <div className="anim-fade-in site-container pb-32">
           <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden border border-border group cursor-ns-resize " onClick={() => setIsFullScreen(true)}>
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center pointer-events-none">
                <div className="bg-background/80 backdrop-blur px-6 py-3 border border-border  opacity-0 group-hover:opacity-100 transition-all">
                   <Maximize2 size={16} className="inline-block" />
                   <span className="ml-2 text-[10px] font-mono uppercase tracking-widest">Ver Case Completo</span>
                </div>
             </div>
             <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
                <img src="/assets/projects/kmillion/kmillion-marca.png" alt="Kmillion Branding Showcase" className="w-full h-auto" />
             </div>
           </div>
        </div>
      )}

      {activeService === "websites" && (
        <div className="anim-fade-in">
          <WebsiteScrollShowcase 
            title="Website Kmillion"
            description="Landing page de alta conversão focada em resultados e autoridade. Design limpo que direciona a atenção do usuário para o ecossistema de inteligência promocional."
            mediaSrc="/assets/projects/kmillion/website-scroll.gif"
          />
        </div>
      )}

      {/* Full Screen Overlay */}
      {isFullScreen && (
        <div className="fixed inset-0 z-[100] bg-background overflow-y-auto no-scrollbar anim-fade-in">
          <div className="sticky top-0 right-0 left-0 h-24 flex items-center justify-between site-container z-[101] bg-background/50 backdrop-blur-sm border-b border-border/10 pointer-events-auto">
            <span className="text-xs font-mono uppercase tracking-widest">Kmillion Case — Branding</span>
            <button 
              onClick={() => setIsFullScreen(false)}
              className="p-4 bg-foreground text-background transition-transform hover:scale-110"
            >
              <X size={24} />
            </button>
          </div>
          <div>
            <img 
              src="/assets/projects/kmillion/kmillion-marca.png" 
              alt="Kmillion Full Presentation" 
              className="w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      )}

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-primary gap-2">
            <ArrowLeft size={16} /> Voltar Projetos
          </Link>
          <Link to="/solid" className="btn btn-primary gap-2">
            Próximo Projeto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoKmillion;
