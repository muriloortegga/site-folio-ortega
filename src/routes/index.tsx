import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import { DraggableMarquee } from "@/components/draggable-marquee";
import { ArrowRight, ChevronRight, Plus } from "lucide-react";
import { ProjectMedia } from "@/components/project-media";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Murilo Ortega — Design Estratégico & Identidade de Marca" },
      { name: "description", content: "Design que confronta o comum e eleva o digital. Branding, conteúdo e presença digital conectados em um sistema de alto nível." },
      { property: "og:title", content: "Murilo Ortega — Design Estratégico & Identidade de Marca" },
      { property: "og:description", content: "Design que confronta o comum e eleva o digital. Branding, conteúdo e presença digital conectados em um sistema de alto nível." },
    ],
  }),
  component: HomePage,
});

const projects = [
  {
    name: "NaTrave App — O Ecossistema do Futebol Amador",
    category: "Social Media · 2024",
    image: "/assets/projects/thumbnails/natrave.jpg",
    gif: "/natrave-preview.gif",
    to: "/natrave",
  },
  {
    name: "Solid + — Fintech Identity & Systems",
    category: "Id Visual · 2024",
    image: "/solid-full.png",
    to: "/solid",
  },
  {
    name: "Kmillion — Inteligência Promocional",
    category: "Websites · 2024",
    image: "/assets/projects/thumbnails/kmillion.jpg",
    to: "/kmillion",
  },
];

const services = [
  {
    id: "branding",
    num: "01",
    title: "Estruturação de Marca",
    body: "Construção de identidades visuais e estratégias que elevam o valor percebido do seu negócio.",
    image: "/solid-full.png",
  },
  {
    id: "conteudo",
    num: "02",
    title: "Sistema de Conteúdo",
    body: "Linha editorial e narrativa que transforma sua presença digital em autoridade contínua.",
    image: "/natrave-preview.gif",
  },
  {
    id: "digital",
    num: "03",
    title: "Presença Digital",
    body: "Sites e interfaces que organizam a comunicação e facilitam a conversão, elevando o digital.",
    image: "/assets/projects/kmillion/website-scroll.gif",
  },
  {
    id: "impressa",
    num: "04",
    title: "Mídia Impressa",
    body: "Papelaria e materiais físicos que tangibilizam a qualidade da sua marca no mundo real.",
    image: "/assets/projects/marco-boni/print/1.jpg",
  },
  {
    id: "influencia",
    num: "05",
    title: "Marketing de Influência",
    body: "Conectando sua marca com creators que geram confiança e expandem seu alcance de forma autêntica.",
    image: "/assets/projects/evidive/thumbs/influencia.jpg",
  },
  {
    id: "ooh",
    num: "06",
    title: "Mídia OOH",
    body: "Campanhas externas e sinalização que dominam a paisagem urbana com impacto visual.",
    image: "/assets/projects/maxi/ooh/1.jpg",
  },
];

const logoFiles = import.meta.glob("/src/assets/logos/*.{png,jpg,jpeg,svg,webp}", { eager: true, as: "url" });
const dynamicLogos = Object.entries(logoFiles).map(([path, url]) => {
  const name = path.split("/").pop()?.split(".")[0] || "";
  return { name, url: url as string };
});

const brands = [
  { name: "Symplice", id: "symplice" },
  { name: "NaTrave", id: "natrave" },
  { name: "Solid+", id: "solid" },
  { name: "Vogue", id: "vogue" },
  { name: "Natural Pure", id: "natural" },
  { name: "Tech Flow", id: "tech" },
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = (node: any) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(node);
    }
  };

  return (
    <Link to={project.to} className="group">
      <figure 
        ref={cardRef}
        className="scroll-reveal project-card relative" 
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="media-wrap aspect-[4/3] rounded-2xl overflow-hidden border border-border/5">
          <ProjectMedia 
            src={isVisible && project.gif ? project.gif : project.image} 
            alt={project.name} 
            isVisible={isVisible}
            className="grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
        </div>
        <figcaption className="mt-6 flex justify-between items-start">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-1 block">{project.category}</span>
            <span className="font-bold text-lg leading-tight block uppercase tracking-tight">{project.name}</span>
          </div>
          <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
        </figcaption>
      </figure>
    </Link>
  );
}

function HomePage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={revealRef}>
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ProjectMedia 
            src="/assets/about/photos/hero-bg.jpg" 
            alt="Murilo Ortega Hero" 
            className="w-full h-full object-cover opacity-40" 
            style={{ 
              objectPosition: "50% 25%",
              filter: `brightness(${Math.max(0.4 - scrollY * 0.0005, 0.2)}) blur(${Math.min(scrollY * 0.005, 10)}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="site-container relative z-10 w-full pt-32 pb-24">
          <div className="max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ opacity: Math.max(1 - scrollY * 0.002, 0) }}
              className="text-4xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.8] mb-12"
            >
              Transformo marcas<br />
              com <span className="text-secondary font-medium italic">impacto real</span>
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ opacity: Math.max(1 - scrollY * 0.0025, 0) }}
                className="space-y-8"
              >
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] font-mono uppercase text-secondary/40 tracking-widest">Foco Digital</span>
                   <span className="text-sm md:text-base uppercase font-bold tracking-tighter">Design Estratégico</span>
                </div>
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] font-mono uppercase text-secondary/40 tracking-widest">Versão</span>
                   <span className="text-sm md:text-base uppercase font-bold tracking-tighter">2024 PORTIFÓLIO</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ opacity: Math.max(1 - scrollY * 0.003, 0) }}
                className="md:col-span-2 flex flex-col md:flex-row gap-8 items-start md:items-end md:justify-end"
              >
                 <p className="text-base md:text-xl text-secondary uppercase font-medium leading-tight max-w-sm">
                   Design que confronta o comum e eleva o digital. Branding e presença conectada em alto nível.
                 </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ opacity: Math.max(1 - scrollY * 0.0035, 0) }}
              className="mt-16 flex flex-wrap gap-4"
            >
              <Link to="/trabalho" className="btn btn-hero-primary">
                Meu Portifólio
              </Link>
              <Link to="/sobre" className="btn btn-hero-secondary">
                Sobre Mim
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section className="py-24 overflow-hidden border-t border-border/5">
        <div className="site-container mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-secondary/40 mb-4 block">Parcerias</span>
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter scroll-reveal">Marcas que já trabalhei</h3>
        </div>
        
        <DraggableMarquee 
          items={dynamicLogos.length > 0 ? dynamicLogos : brands.map(b => ({ name: b.name, url: "" }))} 
          baseVelocity={-0.5}
        />
      </section>

      {/* Positioning */}
      <section className="site-section border-t border-border bg-foreground text-background">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-10">
              <p className="scroll-reveal text-2xl md:text-3xl lg:text-4xl font-bold line-height-tight tracking-tighter uppercase leading-[0.95]">
                O problema não é falta de ação. <span className="text-background/40">É falta de estrutura.</span> Empresas que cresceram pela qualidade do serviço, mas cuja marca ainda não sustenta o nível que entregam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section className="site-section border-t border-border">
        <div className="site-container">
          <div className="flex items-center justify-between mb-16">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">Projetos Selecionados</h3>
            <Link to="/trabalho" className="text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 hover:text-secondary transition-colors">
              Ver todos <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="site-section border-t border-border relative z-10 bg-background">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-12">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">Serviços Estratégicos</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link
                key={s.id}
                to={s.id === "branding" ? "/servicos/estruturacao-de-marca" : 
                    s.id === "conteudo" ? "/servicos/sistema-de-conteudo" : 
                    s.id === "digital" ? "/servicos/presenca-digital" :
                    s.id === "impressa" ? "/servicos/midia-impressa" :
                    s.id === "ooh" ? "/servicos/midia-ooh" :
                    s.id === "influencia" ? "/servicos/marketing-de-influencia" : "/servicos"}
                className="scroll-reveal group block"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-card border border-border group-hover:border-foreground/20 transition-colors duration-500 rounded-2xl">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-2 block">{s.num}</span>
                    <h4 className="text-xl md:text-2xl font-bold uppercase leading-tight tracking-tighter">{s.title}</h4>
                  </div>
                </div>
                <p className="text-[11px] font-mono uppercase tracking-tight text-secondary leading-tight opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 max-w-[240px]">
                  {s.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action - Adapted from Sobre.tsx */}
      <section className="relative py-32 md:py-48 bg-foreground text-background overflow-hidden border-t border-border/10">
        <div className="absolute inset-0 z-0">
          <ProjectMedia 
            src="/assets/about/photos/footer-bg.jpg" 
            alt="Murilo Ortega Contact" 
            className="w-full h-full object-cover opacity-20" 
            style={{ filter: "brightness(0.3) blur(2px)" }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="site-container relative z-10 text-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.8]"
          >
            Vamos elevar o<br />seu projeto?
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
            <a href="https://wa.me/5511941765691?text=gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="btn btn-primary bg-background text-foreground px-12 py-6 text-lg hover:bg-background/90 rounded-full w-full md:w-auto text-center border-none shadow-2xl">
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

export default HomePage;
