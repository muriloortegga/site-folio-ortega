import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/marco-boni")({
  head: () => ({
    meta: [
      { title: "Marco Boni — Mídia Impressa — Murilo Ortega" },
      { name: "description", content: "Mídia Impressa e Catálogos de Alta Performance para Marco Boni." },
    ],
  }),
  component: ProjetoMarcoBoni,
});

function ProjetoMarcoBoni() {
  return (
    <div className="bg-background min-h-screen">
      {/* Top Navigation / Voltar */}
      <div className="site-container py-8 flex justify-between items-center border-b border-border">
        <Link to="/trabalho" className="text-sm uppercase tracking-widest flex items-center gap-2 hover:text-secondary transition-colors">
          <ArrowLeft size={16} /> Voltar
        </Link>
        <span className="text-xs text-secondary font-mono uppercase tracking-widest">Mídia Impressa</span>
      </div>

      {/* Header Clean */}
      <div className="site-container pt-24 pb-20 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight uppercase mb-6">Marco Boni</h1>
        <p className="text-lg md:text-xl text-secondary max-w-2xl">
          Desenvolvimento de catálogos e direção de materiais institucionais.
        </p>
      </div>

      {/* Galeria Full Screen (Edge to Edge) */}
      <div className="w-full flex flex-col items-center anim-fade-in">
        {/* Espaço para a 1 imagem solicitada */}
        <img src="/assets/projects/marco-boni/print/1.jpg" alt="Marco Boni Print 1" className="w-full h-auto block" />
      </div>

      <section className="site-section border-t border-border mt-32 pb-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/livin" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoMarcoBoni;
