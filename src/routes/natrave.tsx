import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  PerformanceHero, 
  CopyFeature, 
  LiveArtGallery, 
  VideoGallery 
} from "@/components/social-media-case";
import { 
  TestimonialCTA 
} from "@/components/social-case-layout";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";
import { Maximize2, X } from "lucide-react";

export const Route = createFileRoute("/natrave")({
  head: () => ({
    meta: [
      { title: "NaTrave App — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media e Branding para o NaTrave App." },
    ],
  }),
  component: ProjetoNaTrave,
});

function ProjetoNaTrave() {
  const [activeService, setActiveService] = useState("marca"); // Marca is default
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
    { id: "social", label: "Social Media" },
    { id: "websites", label: "Websites" }
  ];

  const metaData = [
    { label: "Papel", value: "Direção & Design" },
    { label: "Ano", value: "2024" },
    { label: "Plataforma", value: "iOS & Android" },
    { label: "Skills", value: "UX/UI, Social" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="NaTrave App"
        phrase="Virando o Jogo"
        description="O futebol amador elevado ao nível de elite. Uma plataforma para conectar jogadores, organizadores e a paixão pelo esporte sem burocracia."
        niche="Projeto Autoral — Esporte & Tech"
        meta={metaData}
      />

      <ServiceSelector 
        options={services} 
        activeId={activeService} 
        onChange={setActiveService} 
      />

      {activeService === "social" && (
        <div className="anim-fade-in">
          <PerformanceHero 
            followers={2250}
            contentCount={100}
            mockupImg="/assets/projects/natrave/social/mockups/performance-overview.png" 
          />

          <CopyFeature 
            headline="COPYWRITING, REDAÇÃO E DESIGN QUE IA NENHUMA CONSEGUE CRIAR."
            bgImage="/assets/projects/natrave/social/backgrounds/dirt-field.jpg"
            mockupImg="/assets/projects/natrave/social/mockups/copy-showcase.png"
          />

          <LiveArtGallery 
            sections={[
              {
                title: "Jornalismo esportivo nas mídias sociais",
                layout: 'top',
                images: [
                  "/assets/projects/natrave/social/posts/feed-01.jpg", "/assets/projects/natrave/social/posts/feed-02.jpg", "/assets/projects/natrave/social/posts/feed-03.jpg",
                  "/assets/projects/natrave/social/posts/feed-04.jpg", "/assets/projects/natrave/social/posts/feed-05.jpg", "/assets/projects/natrave/social/posts/feed-06.jpg",
                  "/assets/projects/natrave/social/posts/feed-07.jpg", "/assets/projects/natrave/social/posts/feed-08.jpg", "/assets/projects/natrave/social/posts/feed-09.jpg",
                  "/assets/projects/natrave/social/posts/feed-10.jpg", "/assets/projects/natrave/social/posts/feed-11.jpg", "/assets/projects/natrave/social/posts/feed-12.jpg",
                  "/assets/projects/natrave/social/posts/feed-13.jpg", "/assets/projects/natrave/social/posts/feed-14.jpg", "/assets/projects/natrave/social/posts/feed-15.jpg",
                ]
              },
              {
                title: "Conteúdo que gera identificação com o público alvo",
                layout: 'bottom',
                images: [
                  "/assets/projects/natrave/social/posts/feed-16.jpg", "/assets/projects/natrave/social/posts/feed-17.jpg", "/assets/projects/natrave/social/posts/feed-18.jpg",
                  "/assets/projects/natrave/social/posts/feed-19.jpg", "/assets/projects/natrave/social/posts/feed-20.jpg", "/assets/projects/natrave/social/posts/feed-21.jpg",
                  "/assets/projects/natrave/social/posts/feed-22.jpg", "/assets/projects/natrave/social/posts/feed-23.jpg", "/assets/projects/natrave/social/posts/feed-24.jpg",
                ]
              },
              {
                title: "Design alinhado á identidade visual da marca",
                layout: 'top',
                images: [
                  "/assets/projects/natrave/social/posts/feed-25.jpg", "/assets/projects/natrave/social/posts/feed-26.jpg", "/assets/projects/natrave/social/posts/feed-27.jpg",
                  "/assets/projects/natrave/social/posts/feed-28.jpg", "/assets/projects/natrave/social/posts/feed-29.jpg", "/assets/projects/natrave/social/posts/feed-30.jpg",
                  "/assets/projects/natrave/social/posts/feed-31.jpg", "/assets/projects/natrave/social/posts/feed-32.jpg", "/assets/projects/natrave/social/posts/feed-33.jpg",
                  "/assets/projects/natrave/social/posts/feed-34.jpg", "/assets/projects/natrave/social/posts/feed-35.jpg", "/assets/projects/natrave/social/posts/feed-36.jpg",
                ]
              }
            ]}
          />

          <VideoGallery 
            videos={[
              { url: "/assets/projects/natrave/social/videos/video-01.mp4", category: "Reels", poster: "/assets/projects/natrave/social/posts/feed-01.jpg" },
              { url: "/assets/projects/natrave/social/videos/video-02.mp4", category: "Stories" },
              { url: "/assets/projects/natrave/social/videos/video-03.mp4", category: "Institucional" },
              { url: "/assets/projects/natrave/social/videos/video-04.mp4", category: "Cobertura" },
            ]}
          />

          <TestimonialCTA 
            clientName="Fundador NaTrave"
            clientRole="CEO & Founder"
            testimonial="O Murilo não apenas desenhou o app, ele construiu a voz da nossa comunidade. O crescimento no Social foi o motor da nossa tração inicial."
            clientImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
          />
        </div>
      )}

      {activeService === "marca" && (
        <div className="anim-fade-in site-container pb-32">
           <div className="relative w-full h-[700px] overflow-hidden border border-border group cursor-ns-resize" onClick={() => setIsFullScreen(true)}>
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center pointer-events-none">
                <div className="bg-background/80 backdrop-blur px-6 py-3 border border-border opacity-0 group-hover:opacity-100 transition-all">
                   <Maximize2 size={18} className="inline-block" />
                   <span className="ml-2 text-[10px] font-mono uppercase tracking-widest">Ver Case Completo</span>
                </div>
             </div>
             <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
                <img src="/natrave-marca.png" alt="NaTrave Branding Showcase" className="w-full h-auto" />
             </div>
           </div>
        </div>
      )}

      {activeService === "websites" && (
        <div className="anim-fade-in site-container pb-32">
           <p className="text-xl text-secondary uppercase font-medium leading-tight max-w-2xl mb-12">
            Desenvolvimento de plataforma focada em performance e comunidade para o futebol amador. Interfaces limpas e foco total na experiência do atleta.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src="/natrave-preview.gif" alt="NaTrave Website" className="w-full h-auto border border-border" />
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800" alt="NaTrave Website" className="w-full h-auto border border-border grayscale" />
           </div>
        </div>
      )}

      {/* Full Screen Overlay */}
      {isFullScreen && (
        <div className="fixed inset-0 z-[100] bg-background overflow-y-auto no-scrollbar anim-fade-in">
          <div className="sticky top-0 right-0 left-0 h-24 flex items-center justify-between site-container z-[101] bg-background/50 backdrop-blur-sm border-b border-border/10 pointer-events-auto">
            <span className="text-xs font-mono uppercase tracking-widest">NaTrave App Case — Branding</span>
            <button 
              onClick={() => setIsFullScreen(false)}
              className="p-4 bg-foreground text-background transition-transform hover:scale-110"
            >
              <X size={24} />
            </button>
          </div>
          <div>
            <img 
              src="/natrave-marca.png" 
              alt="NaTrave Full Presentation" 
              className="w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      )}

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/solid" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoNaTrave;
