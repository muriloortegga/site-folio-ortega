import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Shield, Award, Eye, Target, TrendingUp, Zap } from "lucide-react";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";
import { EditorialSocialCase } from "@/components/social-case-layout";
import { z } from "zod";

const projectSearchSchema = z.object({
  service: z.string().optional().catch("social"),
});

export const Route = createFileRoute("/kapyi")({
  validateSearch: (search) => projectSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Agência Kapyi — Case Study — Murilo Ortega" },
      { name: "description", content: "Direção criativa, branding e estratégia digital na Agência Kapyi." },
    ],
  }),
  component: ProjetoKapyi,
});

function ProjetoKapyi() {
  const { service } = Route.useSearch();
  const [activeService, setActiveService] = useState(service || "social");

  const services = [
    { id: "social", label: "Direção & Social" }
  ];

  const metaData = [
    { label: "Agência", value: "Kapyi" },
    { label: "Duração", value: "2.5 Anos" },
    { label: "Papel", value: "Liderança Criativa" },
    { label: "Skills", value: "Branding, Copy, Direção de Arte" },
  ];

  const accentColor = "#FF4500"; // Cor de destaque para agência criativa

  return (
    <div className="bg-background">
      <BrandHeader
        client="Agência Kapyi"
        phrase="Estética e Estratégia"
        description="Fugindo de fórmulas prontas. Uma atuação de 2,5 anos unindo branding, direção criativa e comportamento digital para posicionar marcas de forma premium no ambiente online."
        niche="Agência Criativa"
        meta={metaData}
        accentColor={accentColor}
      />

      <ServiceSelector
        options={services}
        activeId={activeService}
        onChange={setActiveService}
      />

      {activeService === "social" && (
        <div className="anim-fade-in bg-background">
          <EditorialSocialCase 
            mainImg="/assets/projects/kapyi/social/hero.png"
            designTitle="Muito Além do Post"
            designText="A Kapyi atua com uma visão moderna de comunicação. O diferencial dos projetos não estava apenas na execução visual, mas na capacidade de conectar branding e comportamento nativo para transformar redes sociais em ferramentas reais de posicionamento."
            copyTitle="Narrativas de Valor"
            copyText="O trabalho envolveu liderança criativa, organização de fluxos, posicionamento de marca e produção de conteúdos autênticos que não parecessem excessivamente publicitários."
            stats={[
              { label: "Foco", value: "Estratégico" },
              { label: "Identidade", value: "Autêntica" }
            ]}
          />

          <ObjetivoProjeto accentColor={accentColor} />
          <DirecaoCriativa accentColor={accentColor} />
          <AbordagemEstrategica accentColor={accentColor} />
          <ResultadoPercebido accentColor={accentColor} />
        </div>
      )}

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-primary gap-2">
            <ArrowLeft size={16} /> Voltar Projetos
          </Link>
          <Link to="/milgrows" className="btn btn-primary gap-2">
            Próximo Projeto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoKapyi;

// ============================================================================
// SOCIAL MEDIA SECTIONS
// ============================================================================

function ObjetivoProjeto({ accentColor }: { accentColor: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const barriers = [
    { label: "Adaptação", desc: "Criar para nichos extremos, desde engenharia e educação até associações cannábicas e tech." },
    { label: "Autenticidade", desc: "Produzir comunicações que não parecessem artificiais ou excessivamente publicitárias." },
    { label: "Percepção", desc: "Conectar estética visual e comportamento nativo para construir valor real." },
    { label: "Consistência", desc: "Manter a profundidade estratégica e o padrão premium em todos os projetos da agência." },
  ];
  return (
    <section ref={ref} className="site-section py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">
            Desafios e Versatilidade
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 rounded-xl overflow-hidden border border-background/10">
          {barriers.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-foreground p-8 md:p-10 border border-background/10 hover:bg-background/5 transition-colors duration-300">
              <div className="text-3xl font-bold tracking-tighter mb-4" style={{ color: accentColor }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-xl font-bold uppercase tracking-tighter mb-3 text-background">{b.label}</h3>
              <p className="text-xs text-background/50 uppercase leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="mt-16 text-lg md:text-xl text-background/60 uppercase font-medium max-w-3xl leading-tight">
          A atuação exigia imersão completa em diferentes mercados para garantir que a voz e a estética de cada marca fossem únicas e precisas.
        </motion.p>
      </div>
    </section>
  );
}

function DirecaoCriativa({ accentColor }: { accentColor: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const steps = ["Branding Digital", "Direção Estética", "Narrativas de Marca", "Curadoria Visual", "Alinhamento Copy/Design"];
  const roles = ["minimalismo", "impacto visual", "sofisticação", "linguagem nativa"];
  return (
    <section ref={ref} className="site-section py-24 md:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-20">
          <div className="lg:col-span-5">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.85]">Construção Visual & Narrativa</motion.h2>
          </div>
          <div className="lg:col-span-7 space-y-5">
            <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-lg text-secondary uppercase font-medium leading-tight">O equilíbrio perfeito entre a estética refinada e a linguagem nativa das redes sociais. Projetos visuais desenvolvidos para buscar sempre:</motion.p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {roles.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.08 }} className="flex items-center gap-3 border border-border p-4 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} /><span className="text-[10px] font-mono uppercase tracking-widest">{r}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center min-w-max">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3 + i * 0.1, type: "spring" }}>
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-foreground text-background flex items-center justify-center text-center p-3 rounded-xl border-b-4" style={{ borderColor: accentColor }}>
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider leading-tight">{step}</span>
                  </div>
                </motion.div>
                {i < steps.length - 1 && <ArrowRight size={20} className="text-secondary/30 mx-3" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AbordagemEstrategica({ accentColor }: { accentColor: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const left = ["Foco exclusivo no volume de posts", "Fórmulas prontas e genéricas", "Linguagem engessada e artificial", "Execução puramente operacional"];
  const right = ["Social Media como ferramenta de Branding", "Narrativas de marca com identidade própria", "Design e Copy profundamente alinhados", "Preocupação estética e percepção de valor"];
  return (
    <section ref={ref} className="site-section py-24 md:py-32 bg-foreground text-background">
      <div className="site-container">
        <div className="mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-background/50 mb-4 block">Posicionamento</span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">
            A Diferença Kapyi
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="mt-6 text-lg text-background/60 uppercase font-medium leading-tight max-w-3xl">
            Nossa abordagem se distanciava do modelo tradicional de agências. A meta nunca foi apenas postar, mas sim criar um ecossistema visual de autoridade.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-background/10 rounded-xl overflow-hidden border border-background/10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="p-10 md:p-14">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-background/40 mb-6">O Padrão Comum</h3>
            <ul className="space-y-4">
              {left.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-background/70 text-xs uppercase leading-relaxed">
                  <span className="text-background/30 mt-1 flex-shrink-0">—</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="p-10 md:p-14 border-t md:border-t-0 md:border-l border-background/10 relative">
            <div className="absolute top-0 right-0 w-2 h-full" style={{ backgroundColor: accentColor }} />
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-background/40 mb-6">Nossa Metodologia</h3>
            <ul className="space-y-4">
              {right.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-background text-xs uppercase font-medium leading-relaxed">
                  <span className="mt-1 flex-shrink-0" style={{ color: accentColor }}>+</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.blockquote initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="mt-16 border-t border-background/10 pt-12 max-w-3xl">
          <p className="text-lg md:text-xl font-bold uppercase tracking-tighter leading-tight text-background/80">
            "A colaboração estratégica e a liderança criativa resultaram em marcas com um comportamento digital sofisticado, relevante e impossível de ser ignorado."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}

function ResultadoPercebido({ accentColor }: { accentColor: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const metrics = [
    { icon: <Shield size={18} />, label: "Posicionamento", value: "Premium", desc: "Percepção de valor elevada" },
    { icon: <Award size={18} />, label: "Identidade", value: "Autêntica", desc: "Design próprio e coerente" },
    { icon: <Eye size={18} />, label: "Impacto", value: "Estético", desc: "Destaque visual absoluto" },
    { icon: <Target size={18} />, label: "Estratégia", value: "Assertiva", desc: "Direcionamento criativo preciso" },
    { icon: <TrendingUp size={18} />, label: "Versatilidade", value: "Múltipla", desc: "Sucesso em diversos nichos" },
    { icon: <Zap size={18} />, label: "Comunicação", value: "Nativa", desc: "Linguagem alinhada às redes" },
  ];
  return (
    <section ref={ref} className="site-section py-24 md:py-32">
      <div className="site-container">
        <div className="mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">Resultados Construídos</motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }} className="bg-background p-10 group hover:bg-foreground hover:text-background transition-all duration-500">
              <div className="mb-5 transition-colors" style={{ color: accentColor }}>{m.icon}</div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary group-hover:text-background/50 mb-2 block">{m.label}</span>
              <div className="text-2xl md:text-3xl font-bold tracking-tighter leading-none mb-2">{m.value}</div>
              <p className="text-[10px] text-secondary uppercase group-hover:text-background/50">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
