import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Plus, ArrowRight, CheckCircle2, Star, Users, Zap, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/servicos/marketing-de-influencia")({
  head: () => ({
    meta: [
      { title: "Marketing de Influência — Murilo Ortega" },
      { name: "description", content: "Construindo sistemas de influência que transformam audiência em clientes." },
    ],
  }),
  component: MarketingInfluenciaPage,
});

function MarketingInfluenciaPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="bg-background pt-32 pb-32">
      {/* 1. HERO */}
      <section className="site-section border-t-0 pt-0 pb-24">
        <div className="site-container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-[0.95]">
              Influência não é sobre alcance. <br />
              É sobre <span className="italic">desejo</span>, autoridade e conversão.
            </h1>
            <p className="text-lg md:text-xl text-secondary uppercase font-medium leading-tight mb-12 max-w-2xl">
              Criamos sistemas de marketing de influência que posicionam marcas como referência e transformam audiência em clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Quero aplicar isso <Plus size={18} className="ml-2" />
              </a>
              <button onClick={() => document.getElementById('metodo')?.scrollIntoView({behavior: 'smooth'})} className="btn-secondary">
                Ver como funciona
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEBRA DE CRENÇA */}
      <section className="site-section bg-foreground text-background py-32">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95]">
              A maioria das<br />marcas erra aqui:
            </h2>
            <div className="space-y-8">
              {[
                "Contrata influenciadores sem estratégia",
                "Mede likes, não impacto real",
                "Não conecta influência com funil",
                "Depende de picos, não de consistência"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-l border-background/20 pl-8 py-2">
                  <span className="text-sm font-mono opacity-40">0{i+1}</span>
                  <p className="text-xl md:text-2xl font-bold uppercase">{item}</p>
                </div>
              ))}
              <p className="text-2xl font-bold italic mt-12 text-secondary">Influência sem estrutura é só barulho.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRO DO MÉTODO */}
      <section id="metodo" className="site-section py-32">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Influence Growth Framework</h2>
            </div>
            <p className="site-body max-w-sm">Desenvolvemos um sistema próprio que integra o posicionamento à narrativa de influência.</p>
          </div>
          <div className="site-grid-skills">
            {[
              { title: "Posicionamento de marca", icon: <Star size={24} /> },
              { title: "Curadoria estratégica", icon: <Users size={24} /> },
              { title: "Produção orientada por narrativa", icon: <Zap size={24} /> },
              { title: "Distribuição com intenção de funil", icon: <ArrowRight size={24} /> }
            ].map((item, i) => (
              <div key={i} className="site-skill-cell rounded-lg border border-border/10 m-px">
                <div className="w-12 h-12 border border-border flex items-center justify-center mb-4 rounded-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. O CASE EVIDIVE (PROVA) */}
      <section className="site-section bg-off-white py-32">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95] mb-12">De marca nichada a referência aspiracional.</h2>
              <div className="w-full max-w-[400px] mb-12 shadow-xl overflow-hidden rounded-xl">
                <img src="/hero-brandding.jpg" alt="Case EviDive" className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
              </div>
              <div className="flex justify-between items-end px-2 font-mono italic opacity-40">
                <span className="text-[10px]">CASE EVIDIVE</span>
                <span className="text-[10px]">2024</span>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-16">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-4 block">Contexto</span>
                <p className="text-xl md:text-2xl font-bold uppercase leading-tight">
                  A EviDive não precisava apenas de visibilidade. Precisava se posicionar como experiência premium no nicho de mergulho.
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-8 block">O que foi feito</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    "Seleção criteriosa de perfis",
                    "Construção de narrativa aspiracional",
                    "Integração com jornadas (descoberta → desejo)",
                    "Criação de conteúdo com estética e direção clara"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 size={16} className="text-foreground shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-tight">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-background p-12 border border-border rounded-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-8 block">Resultados Tangíveis</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                   {[
                     "Fortalecimento de percepção premium",
                     "Aumento de autoridade no nicho",
                     "Crescimento consistente de demanda",
                     "Audiência mais qualificada"
                   ].map((res, i) => (
                     <div key={i} className="space-y-2">
                        <p className="text-lg font-bold uppercase leading-none">{res}</p>
                        <div className="h-1 bg-foreground w-full scale-x-100 origin-left" />
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMO FUNCIONA (PROCESSO) */}
      <section className="site-section py-32">
        <div className="site-container">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Nosso Processo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border border border-border">
            {[
              { step: "01", title: "Diagnóstico", desc: "Entendimento profundo da marca e território." },
              { step: "02", title: "Curadoria", desc: "Seleção baseada em fit estético e influência real." },
              { step: "03", title: "Direção", desc: "Briefings estratégicos para consistência narrativa." },
              { step: "04", title: "Ativação", desc: "Conteúdo pensado para cada etapa do funil." },
              { step: "05", title: "Otimização", desc: "Análise qualitativa e refinamento constante." }
            ].map((p, i) => (
              <div key={i} className="bg-background p-10 space-y-6 group hover:bg-foreground hover:text-background transition-all">
                <span className="text-[10px] font-mono opacity-40">{p.step}</span>
                <h4 className="text-lg font-bold uppercase">{p.title}</h4>
                <p className="text-xs text-secondary group-hover:text-background/60 leading-relaxed uppercase">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DIFERENCIAL */}
      <section className="site-section bg-foreground text-background py-32">
        <div className="site-container text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95] mb-12">
            Não gerenciamos influenciadores.<br />
            <span className="text-secondary italic">Construímos sistemas</span> de crescimento.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-20">
            {["Visão de branding + performance", "Curadoria obsessiva", "Direção criativa estratégica", "Integração com funil"].map((pilar, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-2 h-2 bg-background rounded-full" />
                <span className="text-xs font-mono uppercase tracking-[0.2em]">{pilar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PARA QUEM É */}
      <section className="site-section py-32">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Para marcas que buscam o próximo nível:</h2>
            </div>
            <div className="space-y-2">
              {[
                "Querem se posicionar como premium",
                "Entendem que branding gera valor",
                "Buscam crescimento sustentável",
                "Não querem depender apenas de tráfego pago"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-6 p-6 border border-border/10 group hover:bg-foreground hover:text-background transition-all duration-500 rounded-lg">
                  <ArrowRight size={20} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xl font-bold uppercase tracking-tight">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 bg-foreground text-background border-t border-background/10">
        <div className="site-container text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95]">Pare de testar.<br />Comece a <span className="italic text-secondary">influenciar</span>.</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn-primary bg-background text-foreground px-12 py-6 text-lg hover:bg-background/90 rounded-full text-center">
              Quero aplicar isso
            </a>
            <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-background border-b border-background/30 pb-2 uppercase font-mono text-sm tracking-widest hover:opacity-60 transition-opacity">
              Falar com especialista <MessageSquare size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MarketingInfluenciaPage;
