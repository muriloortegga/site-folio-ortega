import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/livin")({
  head: () => ({
    meta: [
      { title: "Livin Company — Mídia Impressa — Murilo Ortega" },
      { name: "description", content: "Mídia Impressa e Materiais de PDV para Livin Company." },
    ],
  }),
  component: ProjetoLivin,
});

function ProjetoLivin() {
  return (
    <div className="bg-background min-h-screen pt-24">
      {/* Header Clean */}
      <div className="site-container pt-24 pb-16 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.95] mb-6">Livin Company</h1>
        <p className="text-base md:text-lg text-secondary uppercase font-medium leading-tight max-w-2xl">
          Direção de arte e materiais de Ponto de Venda focados em impacto visual e conversão.
        </p>
      </div>

      {/* Galeria Full Screen (Edge to Edge) */}
      <div className="w-full flex flex-col items-center anim-fade-in">
        <img src="/assets/projects/livin/print/1.jpg" alt="Livin Print 1" className="w-full h-auto block" />
        <img src="/assets/projects/livin/print/2.jpg" alt="Livin Print 2" className="w-full h-auto block" />
        <img src="/assets/projects/livin/print/3.jpg" alt="Livin Print 3" className="w-full h-auto block" />
      </div>

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-primary gap-2">
            <ArrowLeft size={16} /> Voltar Projetos
          </Link>
          <Link to="/marco-boni" className="btn btn-primary gap-2">
            Próximo Projeto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoLivin;
