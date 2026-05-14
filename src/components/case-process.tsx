import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProcessStep {
  title: string;
  description: string;
  tags?: string[];
}

interface CaseProcessProps {
  steps: ProcessStep[];
  className?: string;
}

export function CaseProcess({ steps, className }: CaseProcessProps) {
  return (
    <section className={cn("site-section py-24 bg-foreground text-background", className)}>
      <div className="site-container">
        <div className="mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-background/40 mb-4 block">Metodologia</span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95]">
            O Processo <br />
            <span className="text-background/60 font-medium italic">Decisivo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-l border-background/10 pl-6 py-4 hover:border-background/40 transition-colors"
            >
              <span className="text-[10px] font-mono text-background/30 mb-4 block">0{index + 1}</span>
              <h4 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:italic transition-all">
                {step.title}
              </h4>
              <p className="text-sm text-background/70 uppercase leading-relaxed font-medium">
                {step.description}
              </p>
              {step.tags && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {step.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-mono px-2 py-1 border border-background/20 uppercase tracking-widest text-background/50">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CaseImpactProps {
  metrics: { label: string; value: string; description: string }[];
}

export function CaseImpact({ metrics }: CaseImpactProps) {
  return (
    <section className="site-section border-t-0 py-24">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-secondary/40 mb-2">{metric.label}</span>
              <span className="text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-4">{metric.value}</span>
              <p className="text-xs uppercase font-medium text-secondary leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
