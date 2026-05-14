import { motion } from "framer-motion";

interface CaseContextProps {
  briefing: string;
  problem: string;
  solution: string;
  results?: string;
}

export function CaseContext({ briefing, problem, solution, results }: CaseContextProps) {
  return (
    <section className="site-section border-t-0">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-secondary/40">O Briefing</span>
              <p className="text-sm md:text-base font-medium uppercase leading-tight">{briefing}</p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-secondary/40">O Problema</span>
              <p className="text-sm md:text-base font-medium uppercase leading-tight">{problem}</p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-[0.95]">
                A Estratégia & <br />
                <span className="text-secondary font-medium italic">Execução</span>
              </h3>
              <p className="text-base md:text-lg text-secondary uppercase font-medium leading-relaxed">
                {solution}
              </p>
            </div>
            {results && (
              <div className="pt-8 border-t border-border/10">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-secondary/40 mb-4 block">Resultados Mensuráveis</span>
                <p className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-foreground italic">
                  {results}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
