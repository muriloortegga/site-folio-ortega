import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface WebsiteScrollShowcaseProps {
  title: string;
  description: string;
  mediaSrc: string;
}

export function WebsiteScrollShowcase({ title, description, mediaSrc }: WebsiteScrollShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Um leve flutuar parallax contínuo para manter a sensação de vida
  // mesmo enquanto a imagem está sticky.
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <div ref={containerRef} className="relative w-full bg-background mt-32 mb-32">
      
      {/* 1. Header Normal (A cópia sobre primeiro no scroll) */}
      <div className="text-center z-20 max-w-3xl px-4 md:px-6 mx-auto mb-20 md:mb-32">
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 uppercase">{title}</h3>
        <p className="text-lg md:text-xl text-secondary leading-relaxed">{description}</p>
      </div>

      {/* 2. Área Longa para o Efeito de Tela (Sticky) */}
      <div className="relative h-[200vh] w-full">
        {/* 3. A imagem que fica colada na tela depois que o texto passa */}
        <div className="sticky top-24 md:top-32 w-full flex justify-center px-4 md:px-0">
          <motion.img 
            style={{ y }}
            src={mediaSrc}
            alt="Website Showcase"
            className="w-full max-w-[800px] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
      
    </div>
  );
}
