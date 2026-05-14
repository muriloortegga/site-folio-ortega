import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { ChevronDown, Plus, ArrowUpRight, Cpu, ClipboardList } from "lucide-react";
import portrait from "@/assets/murilo-portrait.png";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Murilo Ortega — Design Estratégico & Identidade de Marca" },
      { name: "description", content: "10 anos de experiência transformando marcas através de dados, criatividade e estratégia." },
    ],
  }),
  component: SobrePage,
});

const tools = [
  { name: "Photoshop", logo: "Ps" },
  { name: "Illustrator", logo: "Ai" },
  { name: "After Effects", logo: "Ae" },
  { name: "Figma", logo: "Fi" },
  { name: "Canva", logo: "Cv" },
  { name: "Capcut", logo: "Cc" },
  { name: "Premiere", logo: "Pr" },
];

const aiTools = [
  { name: "Claude AI", desc: "Refinamento de narrativas e análise crítica" },
  { name: "Antigravity", desc: "Desenvolvimento e performance digital" },
  { name: "Lovable", desc: "Criação ágil de landing pages e interfaces" },
  { name: "Manus AI", desc: "Organização e automação de fluxos" },
  { name: "GPT/Gemini", desc: "Copywriting e lapidação de textos" },
  { name: "VEO3", desc: "Geração e elevação visual" },
];

const brands = [
  { 
    id: "symplice", 
    name: "Symplice", 
    desc: "Facilitando experiências digitais para grandes corporações através de um sistema de marca focado em clareza.",
    tag: "Naming & ID Visual",
    to: "/symplice"
  },
  { 
    id: "natrave", 
    name: "NaTrave", 
    desc: "O futebol amador elevado ao nível de elite. Plataforma completa com foco em UX/UI e comunidade.",
    tag: "Branding & UX/UI",
    to: "/natrave"
  },
  { 
    id: "solid", 
    name: "Solid +", 
    desc: "Traduzindo tecnologia complexa em uma interface institucional humana e acessível para o mercado global.",
    tag: "Direção & ID Visual",
    to: "/solid"
  },
  { 
    id: "maxi", 
    name: "Maxi", 
    desc: "Equilibrando autoridade acadêmica com dinamismo digital para uma das instituições de ensino mais tradicionais.",
    tag: "Social Media & OOH",
    to: "/maxi"
  },
  { 
    id: "vogue", 
    name: "Vogue", 
    desc: "Exploração visual e estratégica para a maior autoridade em moda do mundo.",
    tag: "Brand Case",
    to: "/brand/vogue"
  },
  { 
    id: "natural", 
    name: "Natural Pure", 
    desc: "Posicionamento e design minimalista para marcas que valorizam o essencial.",
    tag: "Identidade Visual",
    to: "/brand/natural"
  }
];

function BrandBoard() {
  const [activeBrand, setActiveBrand] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
      {brands.map((brand) => (
        <div 
          key={brand.id}
          className="relative bg-background group cursor-pointer overflow-hidden"
          onClick={() => setActiveBrand(activeBrand === brand.id ? null : brand.id)}
          onMouseEnter={() => typeof window !== 'undefined' && window.innerWidth > 768 && setActiveBrand(brand.id)}
          onMouseLeave={() => typeof window !== 'undefined' && window.innerWidth > 768 && setActiveBrand(null)}
        >
          <div className="p-10 md:p-14 flex flex-col items-center justify-center min-h-[240px] md:min-h-[320px] transition-all duration-700">
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter transition-all duration-500 group-hover:scale-90 group-hover:opacity-20 text-center">
              {brand.name}
            </h3>
            <div className="flex flex-col items-center gap-2 mt-4 transition-all duration-500 group-hover:opacity-0">
               <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] text-secondary/40">
                {brand.tag}
              </span>
              <ChevronDown size={12} className={`text-secondary opacity-20 transition-transform duration-500 ${activeBrand === brand.id ? "rotate-180" : ""}`} />
            </div>
          </div>

          <div className={`absolute inset-0 bg-foreground text-background p-8 md:p-12 flex flex-col justify-between transition-all duration-700 ease-out-expo ${activeBrand === brand.id ? "translate-y-0" : "translate-y-full"}`}>
            <div className="space-y-4">
               <span className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-40 block">{brand.tag}</span>
               <p className="text-base md:text-lg leading-tight uppercase font-bold tracking-tight">{brand.desc}</p>
            </div>
            <Link to={brand.to} className="flex items-center justify-between group/btn border-t border-background/10 pt-6 md:pt-8">
              <span className="text-[10px] font-mono uppercase tracking-widest">Ver Projeto</span>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-background/20 flex items-center justify-center group-hover/btn:bg-background group-hover/btn:text-foreground transition-all duration-500">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

function SobrePage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={portrait} 
            alt="Murilo Ortega Portrait" 
            className="w-full h-full object-cover grayscale opacity-20 md:opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/95 md:via-background/80 to-transparent" />
        </div>

        <div className="site-container relative z-10 w-full pt-32 pb-24">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-12">
              Marcas que não<br />
              pedem <span className="text-secondary font-medium italic">licença</span><br />
              para liderar.
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
              <div className="space-y-8">
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] font-mono uppercase text-secondary/40 tracking-widest">Expertise</span>
                   <span className="text-sm md:text-base uppercase font-bold tracking-tighter">Design Estratégico</span>
                </div>
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] font-mono uppercase text-secondary/40 tracking-widest">Localização</span>
                   <span className="text-sm md:text-base uppercase font-bold tracking-tighter">Brasil / Global</span>
                </div>
              </div>

              <div className="md:col-span-2 flex flex-col md:flex-row gap-8 items-start md:items-end md:justify-end">
                 <p className="text-base md:text-lg text-secondary uppercase font-medium leading-tight max-w-sm">
                   Transformando marcas através de dados, criatividade e estratégia de alto impacto.
                 </p>
                 <div className="font-mono italic opacity-10 text-[9px] uppercase tracking-widest hidden md:block">
                   Portrait // 24
                 </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-10">
          <span className="text-[8px] font-mono uppercase tracking-[0.5em]">Scroll</span>
          <ChevronDown size={14} />
        </div>
      </section>

      {/* Trajectory Summary */}
      <section className="site-section bg-off-white border-y border-border/5">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12 space-y-12">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter leading-[0.95] text-foreground max-w-5xl">
                Tenho 10 anos de experiência liderando projetos nas áreas de Publicidade, Branding, Design Gráfico e Mídias Sociais. Minha abordagem une dados e criatividade para performance real.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border/10">
                <p className="text-[11px] font-mono uppercase text-secondary leading-relaxed tracking-tight">
                   Neste portfólio, você encontra os meus melhores projetos, onde mergulho fundo na combinação entre estratégia e experiência do usuário para performar melhor no mercado atual de Hubs Criativos.
                </p>
                <div className="flex flex-col gap-6">
                   {["Foco em Performance", "Estratégia de Dados", "Liderança Criativa"].map((text, i) => (
                     <div key={i} className="flex items-center gap-4 group">
                        <div className="w-10 h-[1px] bg-foreground/20 group-hover:bg-foreground group-hover:w-16 transition-all duration-700" />
                        <span className="text-[10px] font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-all">{text}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tools Marquee */}
      <section className="py-24 border-t border-border/5 overflow-hidden bg-background">
        <div className="site-container mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.85] md:leading-[0.8]">Principais <br /><span className="text-secondary font-medium italic">Ferramentas</span></h2>
        </div>
        
        <div className="flex flex-col gap-12">
          <div className="site-container">
            <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-secondary/30">Design & Direção de Arte</span>
          </div>
          <div className="animate-marquee flex gap-8 md:gap-12 whitespace-nowrap">
             {[...tools, ...tools, ...tools, ...tools, ...tools, ...tools].map((tool, i) => (
               <div key={i} className="flex items-center gap-6 group px-4">
                  <div className="w-24 h-24 md:w-32 md:h-32 border border-border flex items-center justify-center text-3xl md:text-5xl font-bold font-mono group-hover:bg-foreground group-hover:text-background transition-all duration-700 ease-out-expo rounded-2xl">
                    {tool.logo}
                  </div>
                  <span className="text-xl md:text-3xl font-bold uppercase tracking-tighter opacity-10 group-hover:opacity-100 transition-all duration-700">
                    {tool.name}
                  </span>
               </div>
             ))}
          </div>
        </div>
        <div className="site-container mt-12">
           <p className="text-[11px] font-mono uppercase text-secondary leading-relaxed max-w-xl opacity-60">
             7 anos de experiência focada em pitchs de vendas, treinamentos institucionais e direção de arte de alto nível para marcas globais.
           </p>
        </div>
      </section>

      {/* AI & Management Grid */}
      <section className="site-section border-t border-border/5 p-0 md:site-section">
        <div className="site-container px-0 md:px-[var(--grid-padding)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border-x border-border/5 rounded-2xl overflow-hidden">
            {/* AI Tools */}
            <div className="bg-background p-10 md:p-16 space-y-12">
               <div className="flex items-center gap-4">
                 <Cpu size={20} className="opacity-20" />
                 <h4 className="text-lg md:text-xl font-bold uppercase tracking-tighter">Inteligência Artificial</h4>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {aiTools.map((tool) => (
                   <div key={tool.name} className="space-y-2">
                     <span className="text-[9px] font-mono uppercase tracking-widest border border-foreground/10 rounded-full px-4 py-1 block w-fit">{tool.name}</span>
                     <p className="text-[10px] text-secondary font-mono leading-tight uppercase opacity-60">{tool.desc}</p>
                   </div>
                 ))}
               </div>
               <p className="text-[10px] font-mono uppercase text-secondary leading-relaxed pt-12 border-t border-border/10">
                 As IAs potencializam meus skills de copywriting, redação e UX, elevando a performance e a pontualidade de cada projeto.
               </p>
            </div>

            {/* Project Management */}
            <div className="bg-off-white p-10 md:p-16 space-y-12">
               <div className="flex items-center gap-4">
                 <ClipboardList size={20} className="opacity-20" />
                 <h4 className="text-lg md:text-xl font-bold uppercase tracking-tighter">Gestão & Planejamento</h4>
               </div>
               <div className="space-y-10">
                 {["Asana", "Trello", "Notion"].map((tool) => (
                   <div key={tool} className="flex items-end justify-between border-b border-border/10 pb-4 group">
                      <span className="text-xl md:text-2xl font-bold uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">{tool}</span>
                      <span className="text-[9px] font-mono uppercase opacity-30 tracking-widest">Workflow</span>
                   </div>
                 ))}
               </div>
               <p className="text-[10px] font-mono uppercase text-secondary leading-relaxed pt-12">
                 Foco total em organização de briefings e monitoramento de cronogramas para garantir entregas impecáveis.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Board */}
      <section className="site-section py-24 md:py-32">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95] md:leading-[0.9]">Um ecossistema de marcas que confiam no meu olhar.</h2>
            </div>
            <p className="text-[9px] font-mono uppercase tracking-widest text-secondary/40 mb-2">Explore os detalhes</p>
          </div>
          <BrandBoard />
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="site-container text-center space-y-12">
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85]">Vamos elevar o seu projeto?</h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
            <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn btn-primary bg-background text-foreground px-12 py-6 text-lg hover:bg-background/90 rounded-full w-full md:w-auto text-center">
              Iniciar conversa <Plus size={18} className="ml-2" />
            </a>
            <Link to="/trabalho" className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity border-b border-background/20 pb-1">
              Explorar Portifólio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SobrePage;
