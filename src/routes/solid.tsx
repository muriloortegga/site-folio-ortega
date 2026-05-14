import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CaseContext } from "@/components/case-context";
import { CaseProcess, CaseImpact } from "@/components/case-process";

export const Route = createFileRoute("/solid")({
  head: () => ({
    meta: [
      { title: "Solid+ — Murilo Ortega" },
      { name: "description", content: "Identidade Visual e Fintech Systems para Solid+." },
    ],
  }),
  component: ProjetoSolid,
});

function ProjetoSolid() {
  const [activeService, setActiveService] = useState("marca");

  const services = [
    { id: "marca", label: "Id Visual" }
  ];

  const metaData = [
    { label: "Cliente", value: "Solid+" },
    { label: "Ano", value: "2024" },
    { label: "Segmento", value: "Fintech" },
    { label: "Skills", value: "Id Visual, Fintech Design" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="Solid+"
        phrase="Estrutura Robusta"
        description="Fintech Identity & Systems. Design que transmite solidez, confiança e inovação para o mercado financeiro digital."
        niche="Fintech & Digital Systems"
        meta={metaData}
      />

      <ServiceSelector 
        options={services} 
        activeId={activeService} 
        onChange={setActiveService} 
      />

      <CaseContext 
        briefing="Criar uma identidade visual para uma nova fintech focada em grandes corporações e gestão de ativos digitais."
        problem="O setor financeiro digital é saturado de marcas genéricas. A Solid+ precisava transmitir segurança institucional sem parecer antiquada."
        solution="Desenvolvi um sistema visual baseado em grids rígidos e tipografia robusta, utilizando uma paleta monocromática que exala autoridade e clareza técnica."
        results="Marca posicionada com sucesso para o mercado global, com feedback positivo de investidores sobre a solidez visual."
      />

      <CaseProcess 
        steps={[
          {
            title: "Grid de Confiança",
            description: "Desenvolvimento de uma malha matemática para o logotipo que comunica precisão e segurança financeira.",
            tags: ["Grid", "Proporção Áurea"]
          },
          {
            title: "Paleta Institucional",
            description: "Seleção de cores e contrastes que transmitem seriedade e estabilidade para investidores de alto nível.",
            tags: ["Cor", "Psicologia"]
          },
          {
            title: "Sistemas Digitais",
            description: "Adaptação da marca para dashboards complexos, garantindo legibilidade e clareza de dados.",
            tags: ["UI Systems", "Fintech"]
          }
        ]}
      />

      <CaseImpact 
        metrics={[
          { label: "Confiança", value: "High", description: "Percepção de segurança validada por teste de usuário." },
          { label: "Mercado", value: "Global", description: "Identidade preparada para expansão internacional imediata." },
          { label: "Coerência", value: "100%", description: "Unificação de todos os pontos de contato da marca." },
          { label: "Valor", value: "+30%", description: "Estimativa de aumento no valor percebido da plataforma." },
        ]}
      />

      <div className="anim-fade-in site-container pb-32 space-y-8 md:space-y-12">
         <img src="/solid-full.png" alt="Solid+ Branding" className="w-full h-auto border border-border shadow-2xl " />
         <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Solid+ Office" className="w-full h-auto border border-border grayscale " />
      </div>

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-primary gap-2">
            <ArrowLeft size={16} /> Voltar Projetos
          </Link>
          <Link to="/symplice" className="btn btn-primary gap-2">
            Próximo Projeto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoSolid;
