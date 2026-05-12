import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  BeforeAfter, 
  TopPosts, 
  TopCopies, 
  GridEvolution, 
  VerticalGallery, 
  TestimonialCTA,
  EditorialSocialCase
} from "@/components/social-case-layout";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";

import { z } from "zod";

const projectSearchSchema = z.object({
  service: z.string().optional().catch("social"),
});

export const Route = createFileRoute("/kapyi")({
  validateSearch: (search) => projectSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Kapyi — Case Study — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media para Kapyi." },
    ],
  }),
  component: ProjetoKapyi,
});

function ProjetoKapyi() {
  const { service } = Route.useSearch();
  const [activeService, setActiveService] = useState(service || "social");

  const services = [
    { id: "social", label: "Social Media" }
  ];

  const metaData = [
    { label: "Cliente", value: "Kapyi" },
    { label: "Ano", value: "2023" },
    { label: "Nicho", value: "Gastronomia" },
    { label: "Skills", value: "Social Media, Lifestyle" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="Kapyi"
        phrase="Sabor que Conecta"
        description="A experiência Kapyi vai além do prato. É o encontro entre tradição e o novo lifestyle urbano, traduzido em desejo digital e conexão real com o público."
        niche="Gastronomia & Lifestyle"
        meta={metaData}
      />

      <ServiceSelector 
        options={services} 
        activeId={activeService} 
        onChange={setActiveService} 
      />

      {activeService === "social" && (
        <EditorialSocialCase 
          mainImg="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
          designTitle="Identidade Gastronômica"
          designText="O design para Kapyi traduz a experiência sensorial do menu em desejo digital. Criamos um sistema visual que une a tradição da culinária com a sofisticação urbana."
          copyTitle="O Sabor da Conexão"
          copyText="A experiência Kapyi vai além do prato, é o encontro entre tradição e o novo lifestyle urbano.\n\nConstruímos narrativas que convidam o público a viver o momento Kapyi, transformando o digital em um ponto de encontro real."
          stats={[
            { label: "Engajamento", value: "High" },
            { label: "Alcance", value: "15k+" }
          ]}
        />
      )}

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoKapyi;
