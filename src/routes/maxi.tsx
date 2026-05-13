import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";
import { EditorialSocialCase } from "@/components/social-case-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { z } from "zod";

const projectSearchSchema = z.object({
  service: z.string().optional().catch("social"),
});

export const Route = createFileRoute("/maxi")({
  validateSearch: (search) => projectSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Colégio Maxi — Social Media · Murilo Ortega" },
      {
        name: "description",
        content:
          "Case de social media e copywriting para o Colégio Maxi: posicionamento, autoridade e percepção de marca.",
      },
    ],
  }),
  component: ProjetoMaxi,
});

function ProjetoMaxi() {
  const { service } = Route.useSearch();
  const [activeService, setActiveService] = useState(service || "social");

  const services = [
    { id: "social", label: "Social Media" },
    { id: "ooh", label: "Mídia OOH" },
  ];

  const metaData = [
    { label: "Cliente", value: "Colégio Maxi" },
    { label: "Ano", value: "2024" },
    { label: "Local", value: "Londrina — PR" },
    { label: "Skills", value: "Social, Copywriting" },
  ];

  return (
    <div className="bg-background">
      <BrandHeader
        client="Colégio Maxi"
        phrase="Tradição que Evolui"
        description="A união entre a solidez de uma instituição tradicional e o dinamismo do mundo contemporâneo. Uma estratégia completa que conecta o físico ao digital."
        niche="Educação & Performance"
        meta={metaData}
      />

      <ServiceSelector
        options={services}
        activeId={activeService}
        onChange={setActiveService}
      />

      {activeService === "social" ? (
        <EditorialSocialCase 
          mainImg="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200"
          designTitle="Tradição que Evolui"
          designText="O desafio do Colégio Maxi era traduzir autoridade e tradição acadêmica em uma comunicação contemporânea. O design foca na solidez institucional com um ritmo visual dinâmico."
          copyTitle="Autoridade Acadêmica"
          copyText="Design chama atenção. Copy constrói percepção.\n\nConstruímos uma narrativa que alinha os valores da instituição ao desejo dos novos alunos e pais, transformando credibilidade em desejo real."
          stats={[
            { label: "Posicionamento", value: "Premium" },
            { label: "Impacto", value: "Estratégico" }
          ]}
        />
      ) : (
        <div className="anim-fade-in w-full pb-32">
          {/* Header Minimalista para OOH */}
          <div className="site-container pt-12 pb-16 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Campanha OOH</h2>
            <p className="text-base md:text-lg text-secondary uppercase font-medium leading-tight max-w-2xl">
              Campanhas externas e sinalização que dominam a paisagem urbana com impacto visual.
            </p>
          </div>

          {/* Galeria Full Screen (Edge to Edge) */}
          <div className="w-full flex flex-col items-center">
            <img src="/assets/projects/maxi/ooh/1.jpg" alt="Maxi OOH 1" className="w-full h-auto block" />
            <img src="/assets/projects/maxi/ooh/2.jpg" alt="Maxi OOH 2" className="w-full h-auto block" />
            <img src="/assets/projects/maxi/ooh/3.jpg" alt="Maxi OOH 3" className="w-full h-auto block" />
          </div>
        </div>
      )}

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

export default ProjetoMaxi;
