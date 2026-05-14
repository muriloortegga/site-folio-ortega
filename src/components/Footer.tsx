import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20 pt-16 pb-24">
      <div className="site-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-secondary/40">Sistemas de Marca</p>
            <p className="font-display text-3xl text-foreground uppercase tracking-tighter">Murilo<span className="text-accent">·</span>Ortega</p>
            <p className="text-xs text-secondary/60 italic font-sans">Premium Design Solutions — 2024</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-secondary/40">Plataformas</p>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/in/muriloortegga/" target="_blank" rel="noopener noreferrer" className="text-sm font-sans font-light text-secondary hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm font-sans font-light text-secondary hover:text-foreground transition-colors">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm font-sans font-light text-secondary hover:text-foreground transition-colors">Behance</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-secondary/40">Navegação</p>
            <div className="flex flex-col gap-2">
              <Link to="/trabalho" className="text-sm font-sans font-light text-secondary hover:text-foreground transition-colors">Projetos</Link>
              <Link to="/servicos" className="text-sm font-sans font-light text-secondary hover:text-foreground transition-colors">Serviços</Link>
              <Link to="/sobre" className="text-sm font-sans font-light text-secondary hover:text-foreground transition-colors">Sobre</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-secondary/40">Status</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-sans font-light text-secondary">Disponível para novos projetos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
