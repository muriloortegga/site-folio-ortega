import { Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/**
 * Maxi — Social Media Case Study.
 * Rich, narrative-driven page with strong UX rhythm for desktop & mobile.
 * Respects the global design system (monochrome, zero radius, uppercase headings).
 */
export function MaxiSocialCase() {
  return (
    <div className="anim-fade-in">
      <SectionHero />
      <SectionContexto />
      <SectionProblema />
      <SectionSolucao />
      <SectionCopy />
      <SectionImpactos />
      <SectionFechamento />
    </div>
  );
}

/* ---------- Section primitives ---------- */

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[10px] tracking-[0.2em] text-secondary">
        {index}
      </span>
      <span className="h-px w-8 bg-border" />
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
        {label}
      </span>
    </div>
  );
}

function Decor({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none select-none absolute inset-0 overflow-hidden"
    >
      {children}
    </div>
  );
}

/* ---------- 01 · HERO ---------- */

function SectionHero() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="relative site-section border-t-0 pt-0 pb-24 overflow-hidden"
    >
      <Decor>
        <div className="absolute -top-20 -right-32 w-[520px] h-[520px] border border-border  opacity-40" />
        <div className="absolute top-40 -left-24 w-[260px] h-[260px] border border-border opacity-30 rotate-12" />
      </Decor>

      <div className="site-container relative">
        <SectionLabel index="01" label="Hero · Social Media" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-9">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.92]">
              Uma instituição forte no ensino precisa{" "}
              <span className="italic font-medium text-secondary">
                parecer tão forte
              </span>{" "}
              quanto é na percepção.
            </h2>
          </div>

          <div className="lg:col-span-3 lg:pl-6 lg:border-l lg:border-border space-y-6">
            <p className="text-base text-secondary leading-relaxed">
              O desafio do Colégio Maxi não era qualidade acadêmica. Era
              traduzir autoridade, tradição e resultado em comunicação
              contemporânea, estratégica e emocionalmente relevante.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 pt-10 border-t border-border">
          <div className="lg:col-span-7">
            <p className="text-lg md:text-xl leading-relaxed">
              Criamos uma estrutura de social media e copywriting capaz de
              alinhar posicionamento, identidade visual e narrativa
              institucional — transformando credibilidade acadêmica em{" "}
              <span className="italic">percepção de marca</span>.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end items-end">
            <a href="#solucao" className="btn btn-arrow">
              Ver projeto completo <span className="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 · CONTEXTO ---------- */

function SectionContexto() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="site-section relative overflow-hidden">
      <Decor>
        <div className="absolute right-0 top-0 h-full w-px bg-border" />
        <div className="absolute right-12 top-24 font-mono text-[10px] uppercase tracking-[0.3em] text-secondary [writing-mode:vertical-rl] rotate-180">
          Reputação · Autoridade · Tradição
        </div>
      </Decor>

      <div className="site-container relative">
        <SectionLabel index="02" label="O Contexto" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95] mb-10">
              Quando o ensino é forte, mas a comunicação não acompanha.
            </h3>
          </div>

          <div className="lg:col-span-5 space-y-6 text-secondary text-base md:text-lg leading-relaxed">
            <p>
              O Colégio Maxi já possuía algo que muitas instituições tentam
              construir durante anos:{" "}
              <span className="text-foreground font-medium">reputação</span>.
            </p>
            <p>
              Reconhecido por sua exigência acadêmica, disciplina e preparação
              sólida para vestibulares, o Maxi ocupa um espaço de autoridade
              dentro do segmento educacional em Londrina.
            </p>
            <p>
              Mas existia um desalinhamento importante: enquanto a instituição
              entregava excelência no ensino, sua comunicação ainda carregava
              uma linguagem excessivamente institucional, pouco emocional e
              distante da percepção contemporânea esperada pelas novas gerações
              de pais e alunos.
            </p>
          </div>
        </div>

        {/* Stat infographic */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 border-t border-border">
          {[
            { k: "Reputação", v: "Construída em décadas" },
            { k: "Percepção", v: "Defasada em anos" },
            { k: "Oportunidade", v: "Reposicionar agora" },
          ].map((s, i) => (
            <div
              key={i}
              className={`p-8 ${
                i < 2 ? "md:border-r border-border" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-border" : ""}`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary block mb-3">
                {s.k}
              </span>
              <p className="text-2xl md:text-3xl font-bold uppercase leading-tight tracking-tight">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 03 · PROBLEMA ---------- */

function SectionProblema() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="site-section relative overflow-hidden bg-foreground text-background">
      <div className="site-container relative">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[10px] tracking-[0.2em] opacity-60">03</span>
          <span className="h-px w-8 bg-background/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
            O Problema
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.95] max-w-5xl">
          O mercado educacional mudou.{" "}
          <span className="italic font-medium opacity-70">
            A forma de comunicar também precisava mudar.
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16">
          <div className="lg:col-span-5 space-y-6 text-base md:text-lg leading-relaxed opacity-80">
            <p>
              Hoje, escolas não disputam apenas por qualidade de ensino.
              Disputam por <span className="opacity-100 font-medium">percepção</span>.
            </p>
            <p>
              Sem uma comunicação estratégica, até instituições extremamente
              sólidas podem parecer ultrapassadas, genéricas ou desconectadas
              do próprio potencial.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-px bg-background/20 border border-background/20">
            {[
              { who: "Pais", want: "Confiança" },
              { who: "Alunos", want: "Identificação" },
              { who: "Ambos", want: "Valor antes do contato" },
            ].map((p, i) => (
              <div key={i} className="bg-foreground p-8 flex flex-col justify-between min-h-[220px]">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                  Quem · {p.who}
                </span>
                <p className="text-2xl md:text-3xl font-bold uppercase leading-tight tracking-tight">
                  {p.want}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 · SOLUÇÃO ---------- */

function SectionSolucao() {
  const ref = useScrollReveal<HTMLElement>();
  const pilares = ["Autoridade institucional", "Clareza de posicionamento", "Conexão emocional"];
  const objetivos = ["Credibilidade", "Excelência", "Preparo", "Tradição", "Visão de futuro"];

  return (
    <section ref={ref} id="solucao" className="site-section relative overflow-hidden">
      <Decor>
        <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] border border-border  opacity-30" />
      </Decor>

      <div className="site-container relative">
        <SectionLabel index="04" label="A Solução" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95]">
              Social media e copywriting como ferramenta de posicionamento.
            </h3>
          </div>
          <div className="lg:col-span-5 space-y-6 text-secondary text-base md:text-lg leading-relaxed">
            <p>
              O trabalho desenvolvido para o Colégio Maxi foi pensado para
              fortalecer três pilares fundamentais.
            </p>
            <p>
              Através de copywriting estratégico, direção criativa e identidade
              visual alinhada à essência da instituição, transformamos a
              comunicação em um{" "}
              <span className="text-foreground font-medium">
                ativo de percepção
              </span>.
            </p>
          </div>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-border">
          {pilares.map((p, i) => (
            <div
              key={p}
              className={`p-10 flex flex-col gap-8 min-h-[260px] ${
                i < 2 ? "md:border-r border-border" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-border" : ""}`}
            >
              <span className="font-mono text-xs text-secondary">
                0{i + 1}
              </span>
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight">
                {p}
              </p>
            </div>
          ))}
        </div>

        {/* Objetivos */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-lg md:text-xl leading-relaxed">
              Não se tratava apenas de{" "}
              <span className="italic">"fazer posts"</span>. O objetivo era
              construir uma presença capaz de transmitir:
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-wrap gap-3">
            {objetivos.map((o) => (
              <span
                key={o}
                className="border border-foreground px-5 py-3 text-sm uppercase tracking-tight font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 · COPY ---------- */

function SectionCopy() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="site-section relative overflow-hidden">
      <div className="site-container relative">
        <SectionLabel index="05" label="A Importância da Copy" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.95]">
              Design chama atenção.{" "}
              <span className="italic font-medium text-secondary">
                Copy constrói percepção.
              </span>
            </h3>
          </div>
        </div>

        {/* Comparison infographic */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-10 min-h-[280px] flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
              Apenas Design
            </span>
            <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight">
              Estética sem direção.
            </p>
            <span className="text-secondary text-sm">
              Bonito, mas silencioso.
            </span>
          </div>
          <div className="bg-foreground text-background p-10 min-h-[280px] flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
              Design + Copy
            </span>
            <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight">
              Direção, consistência e impacto.
            </p>
            <span className="opacity-70 text-sm">
              Estética com narrativa estratégica.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
          <div className="lg:col-span-5 space-y-6 text-secondary text-base md:text-lg leading-relaxed">
            <p>
              Cada legenda, campanha, carrossel ou roteiro passa a reforçar:
            </p>
            <ul className="space-y-3 text-foreground">
              {[
                "os valores da instituição",
                "o diferencial competitivo",
                "a percepção que o público cria sobre a marca",
              ].map((i) => (
                <li
                  key={i}
                  className="flex gap-4 border-t border-border pt-3 text-base"
                >
                  <span className="font-mono text-xs text-secondary mt-1">
                    →
                  </span>
                  <span className="uppercase tracking-tight font-medium">
                    {i}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <blockquote className="border-l-2 border-foreground pl-6 md:pl-10">
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-[1.05]">
                Em segmentos educacionais, isso é decisivo. Confiança não nasce
                apenas do ensino —{" "}
                <span className="italic font-medium text-secondary">
                  nasce da forma como a instituição comunica aquilo que
                  acredita.
                </span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 06 · IMPACTOS ---------- */

function SectionImpactos() {
  const ref = useScrollReveal<HTMLElement>();
  const items = [
    "Percepção de autoridade",
    "Reconhecimento de marca",
    "Posicionamento premium",
    "Conexão emocional",
    "Retenção de atenção",
    "Diferenciação competitiva",
  ];

  return (
    <section ref={ref} className="site-section relative overflow-hidden">
      <div className="site-container relative">
        <SectionLabel index="06" label="Impactos Gerados" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.95]">
              Comunicação estratégica gera valor{" "}
              <span className="italic font-medium text-secondary">
                antes mesmo da matrícula.
              </span>
            </h3>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-secondary text-base leading-relaxed">
              Uma presença digital bem construída transforma reputação em
              desejo — e desejo em decisão.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-border">
          {items.map((it, i) => (
            <div
              key={it}
              className="border-r border-b border-border p-6 md:p-8 min-h-[160px] flex flex-col justify-between hover:bg-foreground hover:text-background transition-colors group"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-secondary group-hover:text-background/60">
                0{i + 1}
              </span>
              <p className="text-base md:text-lg font-bold uppercase tracking-tight leading-tight">
                {it}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl">
          <p className="text-xl md:text-2xl leading-relaxed">
            No caso do Colégio Maxi, o objetivo foi transformar uma instituição
            já <span className="font-medium">respeitada</span> em uma marca
            também <span className="italic">desejada</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 07 · FECHAMENTO ---------- */

function SectionFechamento() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="site-section relative overflow-hidden bg-foreground text-background"
    >
      <Decor>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] border border-background/10 " />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] border border-background/10 " />
      </Decor>

      <div className="site-container relative">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[10px] tracking-[0.2em] opacity-60">07</span>
          <span className="h-px w-8 bg-background/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
            Fechamento
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.95] max-w-5xl">
          Grandes marcas não comunicam apenas serviços.{" "}
          <span className="italic font-medium opacity-70">
            Comunicam percepção.
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16">
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed opacity-80">
            <p>
              Social media e copywriting não são apenas ferramentas estéticas.
              São instrumentos estratégicos capazes de posicionar empresas,
              fortalecer autoridade e transformar a forma como o público
              percebe valor.
            </p>
            <p>
              Principalmente em mercados onde confiança, reputação e
              credibilidade definem decisões.
            </p>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end items-end">
            <Link
              to="/contato"
              className="group inline-flex flex-col gap-4 border border-background/30 p-8 md:p-10 hover:bg-background hover:text-foreground transition-colors w-full lg:max-w-md"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100">
                CTA
              </span>
              <span className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight">
                Quero transformar minha comunicação em posicionamento estratégico
              </span>
              <span className="inline-flex items-center gap-3 mt-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                Iniciar conversa
                <span className="h-px w-10 bg-current" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
