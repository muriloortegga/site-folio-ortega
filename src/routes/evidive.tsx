import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Eye, Zap, Target, Award, ChevronRight } from "lucide-react";
import { 
  BeforeAfter, 
  TopPosts, 
  TopCopies, 
  GridEvolution, 
  VerticalGallery, 
  TestimonialCTA,
  EditorialSocialCase
} from "@/components/social-case-layout";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";

import { z } from "zod";

const projectSearchSchema = z.object({
  service: z.string().optional().catch("social"),
});

export const Route = createFileRoute("/evidive")({
  validateSearch: (search) => projectSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "EviDive — Case Study — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media e Experiências Subaquáticas para EviDive Concept Dive Center." },
    ],
  }),
  component: ProjetoEviDive,
});

function ProjetoEviDive() {
  const { service } = Route.useSearch();
  const [activeService, setActiveService] = useState(service || "social");

  const services = [
    { id: "social", label: "Social Media" },
    { id: "influencia", label: "Influência" }
  ];

  const metaData = [
    { label: "Cliente", value: "EviDive" },
    { label: "Ano", value: "2024" },
    { label: "Local", value: "São Paulo — SP" },
    { label: "Skills", value: "Social Media, Experiência" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="EviDive"
        phrase="Um Novo Universo"
        description="O único Concept Dive Center do mundo. Mergulho como ferramenta de bem-estar, superação e reconexão. Uma jornada completa da descoberta à vida em comunidade."
        niche="Experiência & Bem-Estar"
        meta={metaData}
      />

      <ServiceSelector 
        options={services} 
        activeId={activeService} 
        onChange={setActiveService} 
      />

      {activeService === "social" && (
        <EditorialSocialCase 
          mainImg="/hero-brandding.jpg"
          designTitle="Estética Subaquática & Autoridade"
          designText="Transformamos a identidade visual da Evidive em um destino digital premium. O design foca na clareza técnica e na imersão emocional, quebrando a percepção de complexidade do mergulho."
          copyTitle="Narrativas que Libertam a Mente"
          copyText="Mergulhar não é sobre prender a respiração, é sobre libertar a mente.\n\nConstruímos uma linha editorial que posiciona a Evidive como o único Concept Dive Center do mundo focado na transformação pessoal."
          stats={[
            { label: "Engajamento", value: "High" },
            { label: "Alcance", value: "18k+" }
          ]}
        />
      )}

      {activeService === "influencia" && (
        <div className="anim-fade-in bg-background">
          <InfluenciaHero />
          <SobreCliente />
          <OProblema />
          <AEstrategia />
          <Metodologia />
          <Resultados />
          <CasalDayOff />
          <InteligenciaEstrategica />
          <Comparacao />
          <Conclusao />
        </div>
      )}

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

// ─── Utility ───────────────────────────────────────────────────────────────
function AnimCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const spring = useSpring(0, { stiffness: 35, damping: 18 });
  const display = useTransform(spring, (v) => `${prefix}${Math.floor(v).toLocaleString("pt-BR")}${suffix}`);
  if (isInView) spring.set(value);
  return <motion.span ref={ref}>{display}</motion.span>;
}

// ─── Section 01: Hero ──────────────────────────────────────────────────────
function InfluenciaHero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-24 pt-32 site-section border-none bg-foreground text-background overflow-hidden relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 60% 40%, #ffffff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="site-container relative z-10">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-[10px] font-mono uppercase tracking-[0.4em] text-background/50 mb-8 block">
          Case de Sucesso • Marketing de Influência
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.85] mb-10 max-w-5xl">
          Como transformamos creators em motor de crescimento para a Evidive
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-lg md:text-xl text-background/60 uppercase font-medium leading-tight max-w-3xl mb-20">
          Uma estratégia de influência focada em descoberta, confiança e expansão de audiência que gerou crescimento exponencial de alcance, autoridade e presença digital.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-background/10 border border-background/10">
          {[
            { value: 500, suffix: "%", prefix: "+", label: "em seguidores" },
            { value: 46.9, suffix: "%", prefix: "+", label: "alcance via creators" },
            { value: 656, suffix: "mil", prefix: "~", label: "pessoas alcançadas" },
            { value: 4500, suffix: "", prefix: "+", label: "seguidores em 1 semana" },
          ].map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="bg-background/5 p-8 md:p-10">
              <div className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-3 text-background">
                <AnimCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-background/50">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 02: Sobre o Cliente ───────────────────────────────────────────
function SobreCliente() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="site-section py-32 md:py-48">
      <div className="site-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <span className="site-label mb-8">Sobre o cliente</span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.85]">
            Um ecossistema muito além do mergulho
          </motion.h2>
        </div>
        <div className="lg:col-span-7 space-y-6">
          {["A Evidive não é apenas uma escola de mergulho. A marca construiu um ecossistema completo voltado para experiências premium, formação técnica e comunidade.", "O desafio estava em tornar o mergulho algo desejável, acessível e possível para pessoas que nunca haviam considerado viver essa experiência.", "A barreira não era apenas comercial.\nEra cultural e emocional."].map((p, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }} className="text-xl text-secondary uppercase font-medium leading-tight">
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 03: O Problema ────────────────────────────────────────────────
function OProblema() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const barriers = [
    { label: "Distante", desc: "Mergulho percebido como algo fora do alcance da maioria." },
    { label: "Perigoso", desc: "Medo e desconhecimento gerando resistência emocional." },
    { label: "Inacessível", desc: "Alto custo percebido como barreira de entrada." },
    { label: "Complexo", desc: "Processo de aprendizado visto como intimidador." },
  ];
  return (
    <section ref={ref} className="site-section py-32 md:py-48 bg-foreground text-background">
      <div className="site-container">
        <div className="mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-background/40 mb-6 block">O Problema</span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">
            O desafio era quebrar o imaginário
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10">
          {barriers.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-foreground p-10 border border-background/10 hover:bg-background/5 transition-colors duration-300">
              <div className="text-5xl font-bold tracking-tighter text-background/20 mb-6">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 text-background">{b.label}</h3>
              <p className="text-sm text-background/50 uppercase leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="mt-20 text-xl md:text-2xl text-background/60 uppercase font-medium max-w-3xl leading-tight">
          O objetivo não era apenas vender cursos.<br />Era transformar: desconhecimento → curiosidade → confiança → desejo real de experiência.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Section 04: A Estratégia ──────────────────────────────────────────────
function AEstrategia() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const steps = ["Creator", "Descoberta", "Curiosidade", "Confiança", "Conversa", "Conversão"];
  const roles = ["descoberta", "validação", "confiança", "aproximação emocional"];
  return (
    <section ref={ref} className="site-section py-32 md:py-48">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <span className="site-label mb-8">A Estratégia</span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.85]">Creators como pontes de confiança</motion.h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-xl text-secondary uppercase font-medium leading-tight">Em vez de publicidade tradicional, usamos experiências reais para gerar identificação imediata. O creator deixa de ser apenas mídia. Ele se torna:</motion.p>
            <div className="grid grid-cols-2 gap-3 mt-8">
              {roles.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.08 }} className="flex items-center gap-3 border border-border p-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" /><span className="text-xs font-mono uppercase tracking-widest">{r}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="flex items-center min-w-max">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3 + i * 0.1, type: "spring" }}>
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-foreground text-background flex items-center justify-center text-center p-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider leading-tight">{step}</span>
                  </div>
                </motion.div>
                {i < steps.length - 1 && <ChevronRight size={24} className="text-secondary mx-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 05: Metodologia ───────────────────────────────────────────────
function Metodologia() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="site-section py-32 md:py-48 bg-foreground text-background">
      <div className="site-container">
        <div className="mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-background/40 mb-6 block">Metodologia</span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.85] max-w-3xl">Uma análise baseada em crescimento real</motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-background/10">
          {[
            { period: "Período 01", tag: "Sem Influência", desc: "Operação padrão, sem ações estruturadas com creators. Crescimento orgânico baseline de 10 meses." },
            { period: "Período 02", tag: "Com Creators", desc: "Estratégia ativa. Mesmos 10 meses, variável analisada: a presença de ações estruturadas de influência." },
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }} className="p-12 md:p-16">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-background/40 mb-4 block">{p.period}</span>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6 text-background">{p.tag}</h3>
              <p className="text-background/60 uppercase text-sm leading-relaxed max-w-sm">{p.desc}</p>
              {i === 1 && <div className="mt-8 inline-block px-4 py-2 border border-background/30 text-[10px] font-mono uppercase tracking-widest text-background/60">Variável ativa</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 06: Resultados ────────────────────────────────────────────────
function Resultados() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const metrics = [
    { icon: <Eye size={20} />, label: "Alcance", value: "1M → 1,4M", desc: "contas alcançadas" },
    { icon: <Users size={20} />, label: "Seguidores", value: "3,5k → 21k", desc: "crescimento total" },
    { icon: <TrendingUp size={20} />, label: "Visitas no Perfil", value: "+64,8%", desc: "de crescimento" },
    { icon: <Target size={20} />, label: "Via Influência", value: "46,9%", desc: "do alcance total" },
    { icon: <Award size={20} />, label: "Salvamentos", value: "8.420", desc: "alta intenção" },
    { icon: <Zap size={20} />, label: "Crescimento Base", value: "+369%", desc: "sem pico viral" },
  ];
  return (
    <section ref={ref} className="site-section py-32 md:py-48">
      <div className="site-container">
        <div className="mb-20">
          <span className="site-label mb-8">Resultados</span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">Os resultados da estratégia</motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }} className="bg-background p-10 group hover:bg-foreground hover:text-background transition-all duration-500">
              <div className="mb-6 group-hover:text-background/60 transition-colors">{m.icon}</div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary group-hover:text-background/50 mb-3 block">{m.label}</span>
              <div className="text-3xl md:text-4xl font-bold tracking-tighter leading-none mb-2">{m.value}</div>
              <p className="text-xs text-secondary uppercase group-hover:text-background/50">{m.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.blockquote initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="mt-16 border-l-4 border-foreground pl-8 max-w-2xl">
          <p className="text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-tight">"Influência não foi acessória.<br />Ela foi responsável pela descoberta."</p>
        </motion.blockquote>
      </div>
    </section>
  );
}

// ─── Section 07: Case Casal Day Off ────────────────────────────────────────
function CasalDayOff() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const stats = [
    { value: "783mil", label: "visualizações" },
    { value: "61mil", label: "interações" },
    { value: "23mil", label: "compartilhamentos" },
    { value: "7,6mil", label: "salvamentos" },
  ];
  return (
    <section ref={ref} className="site-section py-32 md:py-48 bg-foreground text-background overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-background/40 mb-8 block">Case de Destaque</span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.85] mb-10">
              Um único conteúdo gerou um pico de crescimento massivo
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 }} className="text-background/60 uppercase text-sm leading-relaxed mb-10">
              Um conteúdo publicado pelo creator Casal Day Off se tornou a materialização da estratégia. Mesmo sem collab direto no perfil da marca, o conteúdo gerou impacto massivo.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }} className="border border-background/20 p-8">
              <div className="text-4xl md:text-5xl font-bold tracking-tighter text-background mb-2">+4.500</div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-background/50">novos seguidores em uma única semana</p>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-px bg-background/10 mb-10">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.08 }} className="bg-foreground p-8 border border-background/10">
                  <div className="text-3xl md:text-4xl font-bold tracking-tighter text-background mb-2">{s.value}</div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-background/40">{s.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="border-l-4 border-background/30 pl-8">
              <p className="text-lg text-background/70 uppercase font-medium leading-tight mb-2">Insight</p>
              <p className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-background leading-tight">
                Grande parte do valor da influência acontece fora do feed da marca.
              </p>
              <p className="mt-4 text-sm text-background/50 uppercase leading-relaxed">
                O creator funciona como um imã de descoberta que leva novas audiências para dentro do ecossistema proprietário da empresa.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 08: Inteligência Estratégica ──────────────────────────────────
function InteligenciaEstrategica() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const layers = [
    { step: "01", label: "Creators", desc: "Gerando descoberta e alcance qualificado" },
    { step: "02", label: "Conteúdo", desc: "Criando identificação e prova social" },
    { step: "03", label: "Social Seller", desc: "Convertendo interesse em conversa" },
    { step: "04", label: "Comunidade", desc: "Fortalecendo retenção e pertencimento" },
    { step: "05", label: "Remarketing", desc: "Transformando intenção em venda real" },
  ];
  return (
    <section ref={ref} className="site-section py-32 md:py-48">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-6">
            <span className="site-label mb-8">Inteligência Estratégica</span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.85]">
              Não era sobre posts. Era sobre engenharia de crescimento.
            </motion.h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-xl text-secondary uppercase font-medium leading-tight">
              Marketing de influência eficiente não opera como campanha pontual. Opera como ecossistema.
            </motion.p>
          </div>
        </div>
        <div className="space-y-px">
          {layers.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 + i * 0.1 }} className="flex items-center gap-8 border border-border p-8 group hover:bg-foreground hover:text-background transition-all duration-500">
              <span className="text-[10px] font-mono text-secondary group-hover:text-background/50 w-8 flex-shrink-0">{l.step}</span>
              <div className="w-px h-8 bg-border group-hover:bg-background/20 flex-shrink-0" />
              <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tighter w-48 flex-shrink-0">{l.label}</h4>
              <p className="text-sm text-secondary uppercase group-hover:text-background/60 hidden md:block">{l.desc}</p>
              <ArrowRight size={18} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 09: Comparação ────────────────────────────────────────────────
function Comparacao() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const left = ["Maior resistência do público", "Linguagem comercial explícita", "Menor identificação emocional", "Jornada de compra mais longa"];
  const right = ["Narrativa orgânica e autêntica", "Identificação imediata", "Quebra de objeções naturalmente", "Confiança acelerada"];
  return (
    <section ref={ref} className="site-section py-32 md:py-48 bg-foreground text-background">
      <div className="site-container">
        <div className="mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-background/40 mb-6 block">Comparação</span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.85] max-w-3xl">
            O que muda quando creators entram em cena
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-background/10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="p-10 md:p-16">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-background/40 mb-8">Publicidade Tradicional</h3>
            <ul className="space-y-4">
              {left.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-background/70 text-sm uppercase leading-relaxed">
                  <span className="text-background/30 mt-1 flex-shrink-0">—</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="p-10 md:p-16 border-t md:border-t-0 md:border-l border-background/10">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-background/40 mb-8">Creator Experience</h3>
            <ul className="space-y-4">
              {right.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-background text-sm uppercase font-medium leading-relaxed">
                  <span className="text-background/40 mt-1 flex-shrink-0">+</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.blockquote initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="mt-16 border-t border-background/10 pt-12 max-w-3xl">
          <p className="text-xl md:text-2xl font-bold uppercase tracking-tighter leading-tight text-background/80">
            "Pessoas confiam mais em pessoas vivendo experiências reais do que em marcas falando sobre si mesmas."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}

// ─── Section 10: Conclusão + CTA ───────────────────────────────────────────
function Conclusao() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const points = ["construção de percepção", "expansão de audiência qualificada", "prova social", "comunidade", "retenção", "crescimento sustentável"];
  return (
    <>
      <section ref={ref} className="site-section py-32 md:py-48">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="site-label mb-8">Conclusão</span>
              <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.85]">
                Quanto mais pessoas contam a história, mais pessoas entram no ecossistema da marca
              </motion.h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-xl text-secondary uppercase font-medium leading-tight">
                O case da Evidive mostrou que influência não é apenas alcance. É:
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {points.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + i * 0.07 }} className="flex items-center gap-3 border border-border p-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                    <span className="text-xs font-mono uppercase tracking-widest">{p}</span>
                  </motion.div>
                ))}
              </div>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="text-lg text-secondary uppercase font-medium leading-tight pt-4 border-t border-border">
                Quando creators certos entram em ação, a marca deixa de depender apenas de anúncios e começa a construir autoridade contínua.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="site-section py-32 md:py-48 bg-foreground text-background border-none">
        <div className="site-container text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[10px] font-mono uppercase tracking-[0.4em] text-background/40 mb-8 block">
            Próximo passo
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.85] mb-10 max-w-4xl mx-auto">
            Sua marca também pode transformar influência em crescimento real.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-background/60 uppercase font-medium leading-tight max-w-2xl mx-auto mb-16">
            Estruturamos operações de influência focadas em descoberta, autoridade, comunidade e performance.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
            <Link to="/contato" className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-background/90 transition-colors">
              Fale comigo <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
