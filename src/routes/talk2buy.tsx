import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { 
  PerformanceHero, 
  CopyFeature, 
  ScrollHorizontalGallery
} from "@/components/social-media-case";
import { 
  TestimonialCTA 
} from "@/components/social-case-layout";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";
import { WebsiteScrollShowcase } from "@/components/website-scroll-showcase";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projectSearchSchema = z.object({
  service: z.string().optional().catch("social"),
});

export const Route = createFileRoute("/talk2buy")({
  validateSearch: (search) => projectSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Talk2Buy — Social Media · Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media e Posicionamento para a plataforma Talk2Buy." },
    ],
  }),
  component: ProjetoTalk2Buy,
});

function ProjetoTalk2Buy() {
  const { service } = Route.useSearch();
  const [activeService, setActiveService] = useState(service || "social");

  const services = [
    { id: "social", label: "Social Media" },
    { id: "websites", label: "Websites" }
  ];

  const metaData = [
    { label: "Cliente", value: "Talk2Buy" },
    { label: "Ano", value: "2024" },
    { label: "Nicho", value: "Tecnologia / Vendas" },
    { label: "Skills", value: "Social Media, Copywriting" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="Talk2Buy"
        phrase="Automação com Autoridade"
        description="A Talk2Buy transforma o WhatsApp em uma loja autônoma. Nossa estratégia digital alinhou o posicionamento da marca com o desejo do público por vendas automáticas e sem atrito."
        niche="Tecnologia B2B/B2C"
        meta={metaData}
      />

      <ServiceSelector 
        options={services} 
        activeId={activeService} 
        onChange={setActiveService} 
      />

      {activeService === "social" && (
        <div className="anim-fade-in">
          {/* Mockup 1: Antes e depois de seguidores */}
          <PerformanceHero 
            followers={2250}
            followersLabel="Seguidores"
            anchorText="Identidade e base consolidada"
            mockupImg="/assets/projects/talk2buy/social/mockups/perofmance.png" 
          />

          {/* Mockup 2: Grid de posts para copy */}
          <CopyFeature 
            headline="COPYWRITING, REDAÇÃO E DESIGN QUE IA NENHUMA CONSEGUE CRIAR."
            contentCount={100}
            contentLabel="conteúdos criados em prol da expansão da marca"
            bgImage="/assets/projects/milgrows/social/backgrounds/texture.jpg" // Fallback texture
            mockupImg="/assets/projects/talk2buy/social/mockups/grid-copy.png"
          />

          {/* Duas imagens horizontais passando em tela cheia com scroll */}
          <ScrollHorizontalGallery 
            images={[
              "/assets/projects/talk2buy/social/mockups/horizontal-1.png",
              "/assets/projects/talk2buy/social/mockups/horizontal-2.png"
            ]}
          />

          <TestimonialCTA 
            clientName="Diretoria Talk2Buy"
            clientRole="Founder"
            testimonial="O Murilo trouxe uma nova visão sobre como nos comunicar com o mercado. Traduziu a complexidade da nossa plataforma em desejo para o lojista."
            clientImage="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=400"
          />
        </div>
      )}

      {activeService === "websites" && (
        <div className="anim-fade-in">
          <WebsiteScrollShowcase 
            title="A Plataforma"
            description="Desenvolvimento de plataforma focada em conversão, traduzindo a complexidade de vendas autônomas em uma experiência fluida e moderna."
            mediaSrc="/assets/projects/talk2buy/website-scroll.gif"
          />
        </div>
      )}

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-primary gap-2">
            <ArrowLeft size={16} /> Voltar Projetos
          </Link>
          <Link to="/maxi" className="btn btn-primary gap-2">
            Próximo Projeto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoTalk2Buy;
