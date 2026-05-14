import { motion } from \"framer-motion\";

interface CaseContextProps {
  briefing: string;
  problem: string;
  solution: string;
  results?: string;
}

export function CaseContext({ briefing, problem, solution, results }: CaseContextProps) {
  return (
    \u003csection className=\"site-section border-t-0\"\u003e
      \u003cdiv className=\"site-container\"\u003e
        \u003cdiv className=\"grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24\"\u003e
          \u003cdiv className=\"lg:col-span-4 space-y-8\"\u003e
            \u003cdiv className=\"space-y-2\"\u003e
              \u003cspan className=\"text-[10px] font-mono uppercase tracking-[0.4em] text-secondary/40\"\u003eO Briefing\u003c/span\u003e
              \u003cp className=\"text-sm md:text-base font-medium uppercase leading-tight\"\u003e{briefing}\u003c/p\u003e
            \u003c/div\u003e
            \u003cdiv className=\"space-y-2\"\u003e
              \u003cspan className=\"text-[10px] font-mono uppercase tracking-[0.4em] text-secondary/40\"\u003eO Problema\u003c/span\u003e
              \u003cp className=\"text-sm md:text-base font-medium uppercase leading-tight\"\u003e{problem}\u003c/p\u003e
            \u003c/div\u003e
          \u003c/div\u003e
          \u003cdiv className=\"lg:col-span-8 space-y-12\"\u003e
            \u003cdiv className=\"space-y-6\"\u003e
              \u003ch3 className=\"text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-[0.95]\"\u003e
                A Estratégia \u0026 \u003cbr /\u003e
                \u003cspan className=\"text-secondary font-medium italic\"\u003eExecução\u003c/span\u003e
              \u003c/h3\u003e
              \u003cp className=\"text-base md:text-lg text-secondary uppercase font-medium leading-relaxed\"\u003e
                {solution}
              \u003c/p\u003e
            \u003c/div\u003e
            {results \u0026\u0026 (
              \u003cdiv className=\"pt-8 border-t border-border/10\"\u003e
                \u003cspan className=\"text-[10px] font-mono uppercase tracking-[0.4em] text-secondary/40 mb-4 block\"\u003eResultados Mensuráveis\u003c/span\u003e
                \u003cp className=\"text-xl md:text-2xl font-bold uppercase tracking-tighter text-foreground italic\"\u003e
                  {results}
                \u003c/p\u003e
              \u003c/div\u003e
            )}
          \u003c/div\u003e
        \u003c/div\u003e
      \u003c/div\u003e
    \u003c/section\u003e
  );
}
