import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectMedia } from "@/components/project-media";

export const Route = createFileRoute("/trabalho")({
  head: () => ({
    meta: [
      { title: "Portfólio — Murilo Ortega" },
      { name: "description", content: "Projetos selecionados de branding, conteúdo e presença digital." },
      { property: "og:title", content: "Portfólio — Murilo Ortega" },
      { property: "og:description", content: "Projetos selecionados de branding, conteúdo e presença digital." },
    ],
  }),
  component: PortfólioPage,
});

const categories = ["Social Media", "Id Visual", "Mídia Impressa", "Mídia OOH", "Websites", "Marketing de Influência"] as const;
type Category = typeof categories[number];

interface Project {
  name: string;
  category: Category;
  year: string;
  client: string;
  context: string;
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
  { name: "Performance Social", category: "Social Media", year: "2024", client: "NaTrave", context: "Estratégia & Conteúdo", image: "/assets/projects/thumbnails/natrave.jpg", to: "/natrave", search: { service: "social" } },
  { name: "Growth Marketing", category: "Social Media", year: "2024", client: "Talk2Buy", context: "Social Performance", image: "/assets/projects/talk2buy/social/mockups/performance.png", to: "/talk2buy", search: { service: "social" } },
  { name: "Presença Digital", category: "Social Media", year: "2024", client: "Evidive", context: "Content System", image: "/assets/projects/evidive/thumbs/social.jpg", to: "/evidive", search: { service: "social" } },
  { name: "Autoridade Acadêmica", category: "Social Media", year: "2024", client: "Colégio Maxi", context: "Inbound & Social", image: "/assets/projects/maxi/ooh/1.jpg", to: "/maxi", search: { service: "social" } },
  
  // Id Visual
  { name: "Brand Identity", category: "Id Visual", year: "2024", client: "NaTrave", context: "Naming & ID Visual", image: "/assets/projects/thumbnails/natrave.jpg", to: "/natrave", search: { service: "marca" } },
  { name: "Tech Branding", category: "Id Visual", year: "2024", client: "Symplice", context: "Visual System", image: "/assets/projects/thumbnails/symplice.jpg", to: "/symplice" },
  { name: "Promo Identity", category: "Id Visual", year: "2024", client: "Kmillion", context: "Rebranding", image: "/assets/projects/thumbnails/kmillion.jpg", to: "/kmillion", search: { service: "marca" } },
  { name: "Fintech Design", category: "Id Visual", year: "2024", client: "Solid+", context: "Identity & Web", image: "/assets/projects/thumbnails/solid.jpg", to: "/solid" },
  
  // Websites
  { name: "Platform Design", category: "Websites", year: "2024", client: "NaTrave", context: "UX/UI & Dev", image: "/natrave-preview.gif", to: "/natrave", search: { service: "websites" } },
  { name: "Editorial Web", category: "Websites", year: "2024", client: "Talk2Buy", context: "UX/UI Design", image: "/assets/projects/talk2buy/website-scroll.gif", to: "/talk2buy", search: { service: "websites" } },
  { name: "Corporate Site", category: "Websites", year: "2024", client: "Kmillion", context: "UX/UI & Dev", image: "/assets/projects/kmillion/website-scroll.gif", to: "/kmillion", search: { service: "websites" } },
];

const serviceInsights: Record<Category, Insight> = {
  "Social Media": {
    title: "Social Media",
    copy: "Destinos digitais que convertem atenção em desejo.",
    preview: "Não fazemos apenas posts. Construímos ecossistemas de marca que lideram mercados.",
    to: "/servicos/sistema-de-conteudo"
  },
  "Id Visual": {
    title: "Id Visual",
    copy: "Design que carrega a alma do seu negócio.",
    preview: "Identidades visuais que não apenas decoram, mas posicionam sua marca como premium.",
    to: "/servicos/estruturacao-de-marca"
  },
  "Mídia Impressa": {
    title: "Mídia Impressa",
    copy: "A tangibilidade do luxo e da precisão técnica.",
    preview: "Materiais físicos que comunicam autoridade através de design editorial de alto nível.",
    to: "/servicos/midia-impressa"
  },
  "Mídia OOH": {
    title: "Mídia OOH",
    copy: "Sua marca dominando o cenário urbano.",
    preview: "Campanhas de Out-of-Home projetadas para impacto máximo e memorabilidade imediata.",
    to: "/servicos/midia-ooh"
  },
  "Websites": {
    title: "Websites",
    copy: "Plataformas que funcionam como sua sede global.",
    preview: "Experiências web imersivas e focadas em conversão, desenhadas para refletir excelência.",
    to: "/servicos/presenca-digital"
  },
  "Marketing de Influência": {
    title: "Marketing de Influência",
    copy: "Vozes reais gerando impacto real.",
    preview: "Conectando sua marca com creators que geram confiança e expandem seu alcance.",
    to: "/evidive",
    search: { service: "influencia" }
  }
};

function PortfólioPage() {
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
    <div ref={revealRef} className="pt-24 md:pt-32 pb-32 bg-background min-h-screen">
      <section className="site-section border-t-0">
        <div className="site-container">
          <div className="mb-16 md:mb-20">
            <h1 className="uppercase tracking-tighter anim-fade-in leading-[0.95] flex flex-col">
              <span className="text-2xl md:text-4xl lg:text-5xl mb-2">Conheça meu</span>
              <span className="text-secondary font-medium text-[12vw] md:text-[8vw]">Trabalho</span>
            </h1>
          </div>

          {/* Conceptual Hero */}
          <AnimatePresence mode="wait">
            {!activeCategory && (
              <motion.div 
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(20px)", y: -50 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="py-12 md:py-20 border-y border-border/50 mb-16 md:mb-20 flex flex-col items-center text-center"
              >
                <div className="text-2xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-none max-w-4xl">
                  8 anos de experiência com: <br className="hidden md:block" />
                  <div className="h-[1.2em] relative overflow-hidden inline-block align-bottom md:block mt-2 md:mt-4">
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
                <p className="mt-6 md:mt-8 text-[10px] md:text-xs text-secondary uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed">
                  Selecione abaixo a especialidade que deseja explorar.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 md:mb-20 anim-fade-in delay-250 sticky top-24 z-30 bg-background/80 backdrop-blur py-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`px-5 py-2 md:px-6 md:py-3 text-[10px] font-mono uppercase tracking-widest transition-all border rounded-none ${
                  activeCategory === cat 
                    ? "bg-foreground text-background border-foreground shadow-sm" 
                    : "bg-transparent text-secondary border-border hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="mb-24 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-x-12 md:gap-y-24">
              {projects
                .filter((p) => !activeCategory || p.category === activeCategory)
                .map((project, i) => (
                  <motion.div
                    key={project.name + i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i % 3 * 0.1 }}
                    className="flex flex-col"
                  >
                    <Link 
                      to={project.to}
                      search={project.search}
                      className="group"
                    >
                      <figure className={cn(
                        "relative overflow-hidden transition-all duration-700",
                        project.category === "Websites" 
                          ? "aspect-square bg-transparent border-none" 
                          : "aspect-[3/2] bg-off-white border border-border/10"
                      )}>
                        <ProjectMedia
                          src={project.image}
                          alt={project.name}
                          className={cn(
                            "w-full h-full transition-all duration-700 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105",
                            project.category === "Websites" ? "" : "object-cover",
                          )}
                        >
                        </ProjectMedia>
                      </figure>
                      <div className="mt-6">
                         <div className="flex justify-between items-start mb-2">
                            <div>
                               <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-secondary/60 mb-1 block">
                                 {project.client} • {project.year}
                               </span>
                               <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight">{project.name}</h4>
                            </div>
                            <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                         </div>
                         <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 border border-border text-[8px] font-mono uppercase tracking-widest text-secondary">
                               {project.category}
                            </span>
                            <span className="px-2 py-1 bg-foreground/5 text-[8px] font-mono uppercase tracking-widest text-secondary">
                               {project.context}
                            </span>
                         </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
 
          {/* Dynamic Service Insight Section */}
          <div className="pt-20 md:pt-24 border-t border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory || "default"}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                <div className="lg:col-span-5">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter leading-[0.95] mb-6 md:mb-8">
                    {currentInsight ? currentInsight.copy : "Sua marca pronta para o próximo nível."}
                  </h2>
                </div>
                <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
                  <p className="text-base md:text-lg text-secondary uppercase font-medium leading-tight max-w-md">
                    {currentInsight ? currentInsight.preview : "Combinamos estratégia, design e tecnologia para criar ecossistemas de marca que lideram mercados."}
                  </p>
                  {currentInsight && (
                    <Link to={currentInsight.to} search={currentInsight.search} className="btn btn-primary">
                      Ver serviço <Plus size={16} className="ml-2" />
                    </Link>
                  )}
                  {!currentInsight && (
                    <Link to="/servicos" className="btn btn-primary">
                      Conhecer serviços <Plus size={16} className="ml-2" />
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

export default PortfólioPage;
