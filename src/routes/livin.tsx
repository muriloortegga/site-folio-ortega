import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BrandHeader } from "@/components/brand-header";

export const Route = createFileRoute("/livin")({
  head: () => ({
    meta: [
      { title: "Livin Company — Mídia Impressa — Murilo Ortega" },
      { name: "description", content: "Projeto editorial e catálogos para a Livin Company." },
    ],
  }),
  component: ProjetoLivin,
});

function ProjetoLivin() {
  const metaData = [
    { label: "Cliente", value: "Livin Company" },
    { label: "Segmento", value: "Importação & Decor" },
    { label: "Contexto", value: "Feiras SP (ABCasa / DecorLab)" },
    { label: "Skills", value: "Design Editorial, Print" }
  ];

  return (
    <div className="bg-background min-h-screen">
      <BrandHeader 
        client="Livin Company"
        phrase="O Peso do Físico"
        description="Direção de arte e design editorial de catálogos impressos para uma grande importadora de móveis e itens de home design (quadros, esculturas, decoração). O projeto foi pensado para grandes feiras de negócios em São Paulo, como ABCasa Fair e DecorLab, entregando uma experiência tátil de altíssimo padrão."
        niche="Home Design & Móveis"
        meta={metaData}
      />

      {/* Galeria Full Screen (Edge to Edge) */}
      <div className="w-full flex flex-col items-center anim-fade-in pb-16">
        <img src="/assets/projects/livin/print/1.jpg" alt="Catálogo Livin Capa" className="w-full h-auto block" />
        <img src="/assets/projects/livin/print/2.jpg" alt="Catálogo Livin Interna 1" className="w-full h-auto block" />
        <img src="/assets/projects/livin/print/3.jpg" alt="Catálogo Livin Interna 2" className="w-full h-auto block" />
      </div>

      <section className="site-section border-t border-border mt-16">
        <div className="site-container flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/trabalho" className="btn btn-primary gap-2 w-full md:w-auto text-center justify-center">
            <ArrowLeft size={16} /> Voltar Projetos
          </Link>
          <Link to="/marco-boni" className="btn btn-primary gap-2 w-full md:w-auto text-center justify-center">
            Próximo Projeto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoLivin;
