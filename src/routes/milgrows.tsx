import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  PerformanceHero, 
  CopyFeature, 
  FeedTimeline 
} from "@/components/social-media-case";
import { 
  TestimonialCTA 
} from "@/components/social-case-layout";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";

export const Route = createFileRoute("/milgrows")({
  head: () => ({
    meta: [
      { title: "Milgrows — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media e Educação sobre Cannabis Medicinal para Milgrows." },
    ],
  }),
  component: ProjetoMilgrows,
});

function ProjetoMilgrows() {
  const [activeService, setActiveService] = useState("social");

  const services = [
    { id: "social", label: "Social Media" }
  ];

  const metaData = [
    { label: "Cliente", value: "Milgrows" },
    { label: "Ano", value: "2023" },
    { label: "Nicho", value: "Cannabis Medicinal" },
    { label: "Skills", value: "Social Media, Educação" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="Milgrows"
        phrase="Semeando Conhecimento"
        description="Uma organização voltada à promoção do acesso seguro, legal e informado à cannabis medicinal. Suporte a pacientes e conexão com respaldo jurídico especializado."
        niche="Saúde & Movimento Social"
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
            followers={11000}
            followersLabel="Novos Seguidores"
            anchorText="Identidade e base consolidada"
            mockupImg="/assets/projects/milgrows/social/mockups/performance.png" 
          />

          <CopyFeature 
            headline="COPYWRITING, REDAÇÃO E DESIGN QUE IA NENHUMA CONSEGUE CRIAR."
            contentCount={100}
            contentLabel="Conteúdos Criados"
            bgImage="/assets/projects/milgrows/social/backgrounds/texture.jpg"
            mockupImg="/assets/projects/milgrows/social/mockups/copy-showcase.png"
          />

          <FeedTimeline 
            title="Destaques do Feed"
            states={[
              { 
                label: "Vitrines", 
                posts: [
                  "/assets/projects/milgrows/social/posts/feed-01.jpg", "/assets/projects/milgrows/social/posts/feed-02.jpg", "/assets/projects/milgrows/social/posts/feed-03.jpg",
                  "/assets/projects/milgrows/social/posts/feed-04.jpg", "/assets/projects/milgrows/social/posts/feed-05.jpg", "/assets/projects/milgrows/social/posts/feed-06.jpg",
                  "/assets/projects/milgrows/social/posts/feed-07.jpg", "/assets/projects/milgrows/social/posts/feed-08.jpg", "/assets/projects/milgrows/social/posts/feed-09.jpg",
                  "/assets/projects/milgrows/social/posts/feed-10.jpg", "/assets/projects/milgrows/social/posts/feed-11.jpg", "/assets/projects/milgrows/social/posts/feed-12.jpg"
                ] 
              }
            ]}
          />

          <TestimonialCTA 
            clientName="Associação MilGrows"
            clientRole="Diretoria Executiva"
            testimonial="O Murilo traduziu temas complexos em conteúdos acolhedores. Ele conseguiu posicionar a MilGrows como uma autoridade humana e confiável."
            clientImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
          />
        </div>
      )}

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/kapyi" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoMilgrows;
