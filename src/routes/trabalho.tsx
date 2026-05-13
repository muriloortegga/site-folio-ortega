import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/trabalho")({
  head: () => ({
    meta: [
      { title: "Portifólio — Murilo Ortega" },
      { name: "description", content: "Projetos selecionados de branding, conteúdo e presença digital." },
      { property: "og:title", content: "Portifólio — Murilo Ortega" },
      { property: "og:description", content: "Projetos selecionados de branding, conteúdo e presença digital." },
    ],
  }),
  component: PortifólioPage,
});

const categories = ["Social Media", "Id Visual", "Mídia Impressa", "Mídia OOH", "Websites", "Marketing de Influência"] as const;
type Category = typeof categories[number];

interface Project {
  name: string;
  category: Category;
  year: string;
  image: string;
  to: string;
  search?: Record<string, string>;
}

interface Insight {
  title: string;
  copy: string;
  preview: string;
  to: string;
  search?: Record<string, string>;
}

const projects: Project[] = [
  // Social Media
  { name: "NaTrave", category: "Social Media", year: "2024", image: "/assets/projects/thumbnails/natrave.jpg", to: "/natrave", search: { service: "social" } },
  { name: "Talk2Buy", category: "Social Media", year: "2024", image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800", to: "/talk2buy", search: { service: "social" } },
  { name: "Evidive", category: "Social Media", year: "2024", image: "/hero-brandding.jpg", to: "/evidive", search: { service: "social" } },
  { name: "Colégio Maxi", category: "Social Media", year: "2024", image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800", to: "/maxi", search: { service: "social" } },
  { name: "Milgrows", category: "Social Media", year: "2023", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", to: "/milgrows", search: { service: "social" } },
  { name: "Kapyi", category: "Social Media", year: "2023", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800", to: "/kapyi", search: { service: "social" } },
  
  // Id Visual
  { name: "NaTrave", category: "Id Visual", year: "2024", image: "/assets/projects/thumbnails/natrave.jpg", to: "/natrave" },
  { name: "Symplice", category: "Id Visual", year: "2024", image: "/assets/projects/thumbnails/symplice.jpg", to: "/symplice" },
  { name: "Kmillion", category: "Id Visual", year: "2024", image: "/assets/projects/thumbnails/kmillion.jpg", to: "/kmillion" },
  { name: "Solid+", category: "Id Visual", year: "2024", image: "/assets/projects/thumbnails/solid.jpg", to: "/solid" },
  
  // Mídia Impressa
  { name: "Marco Boni", category: "Mídia Impressa", year: "2023", image: "/assets/projects/marco-boni/print/1.jpg", to: "/marco-boni" },
  { name: "Livin Company", category: "Mídia Impressa", year: "2023", image: "/assets/projects/livin/print/1.jpg", to: "/livin" },
  
  // Mídia OOH
  { name: "Colégio Maxi", category: "Mídia OOH", year: "2023", image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1200", to: "/maxi" },

  // Websites
  { name: "NaTrave", category: "Websites", year: "2024", image: "/assets/projects/thumbnails/natrave.jpg", to: "/natrave" },
  { name: "Talk2Buy", category: "Websites", year: "2024", image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800", to: "/talk2buy" },
  { name: "Kmillion", category: "Websites", year: "2024", image: "/assets/projects/thumbnails/kmillion.jpg", to: "/kmillion" },

  // Marketing de Influência
  { name: "Evidive", category: "Marketing de Influência", year: "2024", image: "/hero-brandding.jpg", to: "/evidive", search: { service: "influencia" } },
];

const serviceInsights: Record<Category, Insight> = {
  "Social Media": {
    title: "Social Media",
    copy: "Criamos destinos digitais que convertem atenção em desejo.",
    preview: "Não fazemos apenas posts. Construímos ecossistemas de marca que lideram mercados e dominam o imaginário do público.",
    to: "/servicos/sistema-de-conteudo"
  },
  "Id Visual": {
    title: "Id Visual",
    copy: "Design que carrega a alma e a ambição do seu negócio.",
    preview: "Identidades visuais que não apenas decoram, mas posicionam sua marca como a escolha premium em qualquer categoria.",
    to: "/servicos/estruturacao-de-marca"
  },
  "Mídia Impressa": {
    title: "Mídia Impressa",
    copy: "A tangibilidade do luxo e da precisão técnica.",
    preview: "Materiais físicos que comunicam autoridade através de acabamentos impecáveis e design editorial de alto nível.",
    to: "/servicos/midia-impressa"
  },
  "Mídia OOH": {
    title: "Mídia OOH",
    copy: "Sua marca dominando o cenário urbano.",
    preview: "Campanhas de Out-of-Home projetadas para impacto máximo e memorabilidade imediata em pontos estratégicos.",
    to: "/servicos/midia-ooh"
  },
  "Websites": {
    title: "Websites",
    copy: "Plataformas digitais que funcionam como sua sede global.",
    preview: "Experiências web imersivas, rápidas e focadas em conversão, desenhadas para refletir a excelência da sua marca.",
    to: "/servicos/presenca-digital"
  },
  "Marketing de Influência": {
    title: "Marketing de Influência",
    copy: "Vozes reais gerando impacto real.",
    preview: "Conectamos sua marca com vozes que geram confiança e expandem seu alcance de forma autêntica e estratégica.",
    to: "/evidive",
    search: { service: "influencia" }
  }
};

function PortifólioPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const cyclingWords = ["Social Media", "Id Visual", "Branding", "Mídia Impressa", "Mídia OOH", "Websites", "Influência"];

  useEffect(() => {
    if (activeCategory) return;
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeCategory, cyclingWords.length]);

  const currentInsight = activeCategory ? serviceInsights[activeCategory] : null;

  return (
    <div ref={revealRef} className="pt-32 pb-32 bg-background min-h-screen">
      <section className="site-section">
        <div className="site-container">
          <div className="mb-20">
            <h1 className="uppercase tracking-tighter anim-fade-in leading-[0.85] flex flex-col">
              <span className="text-4xl md:text-6xl lg:text-8xl mb-2">Conheça meu</span>
              <span className="text-secondary font-medium text-[18vw] md:text-[12vw]">Trabalho</span>
            </h1>
          </div>

          {/* Conceptual Hero (Visible only when no category is selected) */}
          <AnimatePresence mode="wait">
            {!activeCategory && (
              <motion.div 
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(20px)", y: -50 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="py-20 md:py-40 border-y border-border/50 mb-20 flex flex-col items-center text-center"
              >
                <span className="text-xs font-mono uppercase tracking-[0.4em] text-secondary mb-12">Explorar Categorias</span>
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none max-w-4xl">
                  8 anos de experiência com: <br className="hidden md:block" />
                  <div className="h-[1.2em] relative overflow-hidden inline-block align-bottom md:block mt-4">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={cyclingWords[currentWordIndex]}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-secondary block"
                      >
                        {cyclingWords[currentWordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
                <p className="mt-12 text-sm text-secondary uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
                  Selecione uma área abaixo para ver como transformamos estratégia em impacto visual real.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category Filters - Refined Design */}
          <div className="flex flex-wrap justify-center gap-2 mb-20 anim-fade-in delay-250 sticky top-24 z-30 bg-background/80 backdrop-blur py-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`px-6 py-3 text-[10px] font-mono uppercase tracking-[0.2em] transition-all border ${
                  activeCategory === cat 
                    ? "bg-foreground text-background border-foreground shadow-lg scale-105" 
                    : "bg-transparent text-secondary border-border hover:border-foreground/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Dropdown Gallery */}
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-32"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter((p) => p.category === activeCategory)
                    .map((project, i) => (
                      <Link 
                        key={project.name + i} 
                        to={project.to}
                        search={project.search}
                        className="group"
                      >
                        <figure className="relative aspect-[4/5] bg-off-white overflow-hidden border border-border/10">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        </figure>
                        <div className="mt-6 flex justify-between items-end">
                           <div>
                              <span className="text-[10px] font-mono uppercase text-secondary mb-1 block">{project.year}</span>
                              <h4 className="text-xl font-bold uppercase tracking-tight">{project.name}</h4>
                           </div>
                           <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                        </div>
                      </Link>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dynamic Service Insight Section */}
          <div className="pt-24 border-t border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory || "default"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-5">
                  <span className="site-label mb-8">
                    {activeCategory ? `Insight: ${activeCategory}` : "Expertise & Entrega"}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                    {currentInsight ? currentInsight.copy : "Sua marca pronta para o próximo nível."}
                  </h2>
                </div>
                <div className="lg:col-span-7 flex flex-col md:flex-row gap-12 items-start md:items-center">
                  <p className="text-xl text-secondary uppercase font-medium leading-tight max-w-md">
                    {currentInsight ? currentInsight.preview : "Combinamos estratégia, design e tecnologia para criar ecossistemas de marca que lideram mercados."}
                  </p>
                  {currentInsight && (
                    <Link to={currentInsight.to} search={currentInsight.search} className="btn-primary whitespace-nowrap">
                      Ver serviço <Plus size={18} className="ml-2" />
                    </Link>
                  )}
                  {!currentInsight && (
                    <Link to="/servicos" className="btn-primary whitespace-nowrap">
                      Conhecer serviços <Plus size={18} className="ml-2" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortifólioPage;
