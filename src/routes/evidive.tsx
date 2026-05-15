import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Eye, Target, Award, Zap } from "lucide-react";
import { EditorialSocialCase } from "@/components/social-case-layout";
import { BrandHeader } from "@/components/brand-header";

export const Route = createFileRoute("/evidive")({
  head: () => ({
    meta: [
      { title: "EviDive — Case Study — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media para EviDive, unindo engenharia e posicionamento premium." },
    ],
  }),
  component: ProjetoEviDive,
});

function ProjetoEviDive() {
  const metaData = [
    { label: "Cliente", value: "EviDive" },
    { label: "Ano", value: "2024" },
    { label: "Nicho", value: "Engenharia & Tech" },
    { label: "Skills", value: "Social Media, Design" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader
        client="EviDive"
        phrase="Inteligência & Precisão"
        description="A Evidive é uma marca do mercado de engenharia e soluções técnicas. O diferencial está em unir conhecimento especializado com uma apresentação moderna e estratégica."
        niche="Engenharia & Soluções"
        meta={metaData}
        accentColor="#1ec4b4"
      />

      <div className="anim-fade-in bg-background mt-8">
        <EditorialSocialCase
          mainImg="/assets/projects/evidive/thumbs/casevi.png"
          designTitle="Estética Premium & Autoridade"
          designText="Transformamos temas complexos em conteúdos acessíveis, organizados e visualmente impactantes. O design foge da estética engessada comum no setor para uma visão contemporânea."
          copyTitle="Comunicação Estratégica"
          copyText="O desafio era transformar um nicho naturalmente técnico em uma presença online forte. O objetivo não era apenas postar, mas conversar com tomadores de decisão."
          stats={[
            { label: "Percepção", value: "Premium" },
            { label: "Foco", value: "Excelência" }
          ]}
        />

        <ObjetivoProjeto />
        <DirecaoCriativa />
        <DesafiosProjeto />
        <ResultadoPercebido />
      </div>

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/milgrows" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoEviDive;

// ─── Section 01: Objetivo do Projeto ───────────────────────────────────────
function ObjetivoProjeto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const barriers = [
    { label: "Autoridade", desc: "Construir autoridade digital sólida no segmento." },
    { label: "Percepção", desc: "Elevar a percepção de valor da marca." },
    { label: "Tradução", desc: "Transformar conteúdos técnicos em materiais atrativos." },
    { label: "Consistência", desc: "Criar uma identidade visual consistente e moderna." },
  ];
  return (
    <section ref={ref} className="site-section py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">
            O Objetivo do Projeto
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 rounded-xl overflow-hidden border border-background/10">
          {barriers.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-foreground p-8 md:p-10 border border-background/10 hover:bg-background/5 transition-colors duration-300">
              <div className="text-3xl font-bold tracking-tighter mb-4" style={{ color: '#1ec4b4' }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-xl font-bold uppercase tracking-tighter mb-3 text-background">{b.label}</h3>
              <p className="text-xs text-background/50 uppercase leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="mt-16 text-lg md:text-xl text-background/60 uppercase font-medium max-w-3xl leading-tight">
          Mais do que gerar volume de postagens, o foco estava em criar uma comunicação que representasse corretamente o tamanho, a capacidade técnica e o posicionamento da Evidive.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Section 02: Direção Criativa ──────────────────────────────────────────
function DirecaoCriativa() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const steps = ["Grid Organizado", "Hierarquia", "Tipografia", "Contraste", "Minimalismo"];
  const roles = ["inovação", "confiabilidade", "precisão", "excelência"];
  return (
    <section ref={ref} className="site-section py-24 md:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-20">
          <div className="lg:col-span-5">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.85]">Direção Criativa e Estratégica</motion.h2>
          </div>
          <div className="lg:col-span-7 space-y-5">
            <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-lg text-secondary uppercase font-medium leading-tight">A estratégia criativa foi baseada em um equilíbrio entre sofisticação visual e clareza técnica. O conteúdo precisava transmitir:</motion.p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {roles.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.08 }} className="flex items-center gap-3 border border-border p-4 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1ec4b4' }} /><span className="text-[10px] font-mono uppercase tracking-widest">{r}</span>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="text-lg text-secondary uppercase font-medium leading-tight mt-6">A copy também foi desenvolvida com foco em objetividade e autoridade, sem exageros comerciais ou promessas vazias.</motion.p>
          </div>
        </div>
        <div className="overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center min-w-max">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3 + i * 0.1, type: "spring" }}>
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-foreground text-background flex items-center justify-center text-center p-3 rounded-xl border-b-4" style={{ borderColor: '#1ec4b4' }}>
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

// ─── Section 03: Desafios ──────────────────────────────────────────────────
function DesafiosProjeto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const left = ["Comunicação fria e complexa", "Linguagem excessivamente publicitária", "Estética visual ultrapassada", "Desconexão com a realidade operacional"];
  const right = ["Acessibilidade de conteúdos técnicos", "Organização estratégica", "Estética premium e contemporânea", "Alinhamento entre branding e engenharia"];
  return (
    <section ref={ref} className="site-section py-24 md:py-32 bg-foreground text-background">
      <div className="site-container">
        <div className="mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.85] max-w-3xl">
            Os Desafios do Projeto
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-background/10 rounded-xl overflow-hidden border border-background/10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="p-10 md:p-14">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-background/40 mb-6">O Que Evitamos</h3>
            <ul className="space-y-4">
              {left.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-background/70 text-xs uppercase leading-relaxed">
                  <span className="text-background/30 mt-1 flex-shrink-0">—</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="p-10 md:p-14 border-t md:border-t-0 md:border-l border-background/10 relative">
            <div className="absolute top-0 right-0 w-2 h-full" style={{ backgroundColor: '#1ec4b4' }} />
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-background/40 mb-6">O Que Entregamos</h3>
            <ul className="space-y-4">
              {right.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-background text-xs uppercase font-medium leading-relaxed">
                  <span className="mt-1 flex-shrink-0" style={{ color: '#1ec4b4' }}>+</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.blockquote initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="mt-16 border-t border-background/10 pt-12 max-w-3xl">
          <p className="text-lg md:text-xl font-bold uppercase tracking-tighter leading-tight text-background/80">
            "Um dos principais desafios foi encontrar o equilíbrio ideal entre técnica e comunicação, transmitindo profissionalismo sem perder dinamismo visual."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}

// ─── Section 04: Resultados ────────────────────────────────────────────────
function ResultadoPercebido() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const metrics = [
    { icon: <Shield size={18} />, label: "Credibilidade", value: "Autoridade", desc: "Mais confiança no mercado" },
    { icon: <Award size={18} />, label: "Estética", value: "Sofisticação", desc: "Design premium" },
    { icon: <Eye size={18} />, label: "Comunicação", value: "Clareza", desc: "Conteúdo acessível" },
    { icon: <Target size={18} />, label: "Postura", value: "Profissionalismo", desc: "Alinhamento com a operação" },
    { icon: <TrendingUp size={18} />, label: "Market Share", value: "Valor Percebido", desc: "Diferenciação clara" },
    { icon: <Zap size={18} />, label: "Identidade", value: "Consistência", desc: "Fuga do modelo genérico" },
  ];
  return (
    <section ref={ref} className="site-section py-24 md:py-32">
      <div className="site-container">
        <div className="mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">Resultado Percebido</motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }} className="bg-background p-10 group hover:bg-foreground hover:text-background transition-all duration-500">
              <div className="mb-5 transition-colors" style={{ color: '#1ec4b4' }}>{m.icon}</div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary group-hover:text-background/50 mb-2 block">{m.label}</span>
              <div className="text-2xl md:text-3xl font-bold tracking-tighter leading-none mb-2">{m.value}</div>
              <p className="text-[10px] text-secondary uppercase group-hover:text-background/50">{m.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.blockquote initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="mt-16 pl-8 max-w-2xl border-l-4" style={{ borderColor: '#1ec4b4' }}>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-tighter leading-tight">"O projeto mostrou como design estratégico e copywriting podem transformar a forma como empresas técnicas são percebidas no digital."</p>
        </motion.blockquote>
      </div>
    </section>
  );
}
