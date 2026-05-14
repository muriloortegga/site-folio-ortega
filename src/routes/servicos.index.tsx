import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Plus, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços — Murilo Ortega" },
      { name: "description", content: "Três sistemas para organizar sua marca: estruturação, conteúdo e presença digital." },
      { property: "og:title", content: "Serviços — Murilo Ortega" },
      { property: "og:description", content: "Três sistemas para organizar sua marca." },
    ],
  }),
  component: ServicosPage,
});

const products = [
  {
    slug: "estruturacao-de-marca",
    num: "01",
    name: "Estruturação de Marca",
    resolve: "Marcas que cresceram sem base. Sem posicionamento definido, sem identidade coerente, sem material de referência. Tudo existe, mas nada se conecta.",
    envolve: "Diagnóstico de marca, definição de posicionamento, construção de identidade visual (logo, tipografia, paleta, sistema visual), direção de naming quando necessário, e documentação completa em brandbook.",
    recebe: "Um brandbook completo e uma marca que funciona como sistema.",
  },
  {
    slug: "sistema-de-conteudo",
    num: "02",
    name: "Sistema de Conteúdo",
    resolve: "Marcas que publicam sem estratégia. Conteúdo existe, mas não segue uma linha, não tem frequência previsível e não reforça o posicionamento.",
    envolve: "Definição de linha editorial, planejamento de conteúdo por canal, criação de diretrizes de tom e voz, direção criativa para primeiros ciclos de produção.",
    recebe: "Uma linha editorial documentada e um sistema de produção que se sustenta.",
  },
  {
    slug: "presenca-digital",
    num: "03",
    name: "Presença Digital",
    resolve: "Marcas que não são bem apresentadas online. O site não comunica valor, a jornada do visitante é confusa, e a conversão depende de sorte.",
    envolve: "Estratégia de conteúdo para web, wireframe e direção de UX/UI, copywriting orientado a conversão, implementação com foco em performance e SEO básico.",
    recebe: "Um site que organiza a comunicação e facilita a conversão.",
  },
  {
    slug: "midia-impressa",
    num: "04",
    name: "Mídia Impressa",
    resolve: "Marcas que precisam tangibilizar sua autoridade no mundo físico. Materiais que não refletem a qualidade do serviço ou do produto.",
    envolve: "Papelaria corporativa, catálogos, embalagens, materiais editoriais e produção gráfica de alto padrão.",
    recebe: "Materiais físicos que tangibilizam a qualidade e o posicionamento da marca.",
  },
  {
    slug: "midia-ooh",
    num: "05",
    name: "Mídia OOH",
    resolve: "Marcas que precisam de visibilidade urbana massiva mas não sabem como ocupar o espaço público com estratégia.",
    envolve: "Planejamento de campanhas externas, outdoors, sinalização de fachada e anúncios em mobiliário urbano.",
    recebe: "Campanhas externas com alto impacto visual e fixação de marca.",
  },
  {
    slug: "marketing-de-influencia",
    num: "06",
    name: "Marketing de Influência",
    resolve: "Marcas que buscam alcance mas sofrem com a falta de confiança do público. Ruído na comunicação com influenciadores.",
    envolve: "Curadoria de perfis, estratégia de conexão, briefing criativo e gestão de campanhas com porta-vozes da marca.",
    recebe: "Conexões autênticas que geram confiança e expandem o alcance real.",
  },
];

function ServicosPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="pt-24 md:pt-32">
      <section className="site-section border-t-0">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-12 anim-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-8 md:mb-12">Sistemas</h1>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter leading-[0.95] max-w-4xl">
                Cada um resolve um problema específico. <br />
                <span className="text-secondary font-medium italic">Todos se conectam.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container pb-32">
        {products.map((p, i) => (
          <Link 
            key={i} 
            to={`/servicos/${p.slug}` as string}
            className="scroll-reveal block group border-t border-border first:border-t-0" 
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pt-12 pb-12 md:pt-16 md:pb-16 group-hover:bg-off-white/50 transition-colors duration-500 rounded-xl px-4 md:px-8 -mx-4 md:-mx-8">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary">{p.num}</span>
                <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mt-4 flex items-center gap-4">
                  {p.name}
                  <Plus size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-10 md:space-y-12">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60">O que resolve</span>
                  <p className="text-lg md:text-xl text-foreground font-medium mt-4 max-w-[600px] leading-tight uppercase tracking-tight">{p.resolve}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-10 md:pt-12 border-t border-border/50">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60">O que envolve</span>
                    <p className="text-[11px] font-mono uppercase text-secondary leading-relaxed mt-4">{p.envolve}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60">Entrega</span>
                      <p className="text-sm text-foreground font-bold mt-4 uppercase tracking-tighter">{p.recebe}</p>
                    </div>
                    <div className="hidden md:block">
                       <ArrowRight size={20} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default ServicosPage;
