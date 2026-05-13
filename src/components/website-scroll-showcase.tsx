import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface WebsiteScrollShowcaseProps {
  title: string;
  description: string;
  imageSrc: string;
}

export function WebsiteScrollShowcase({ title, description, imageSrc }: WebsiteScrollShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Responsive parallax offset: less movement on mobile, scale based on height
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div 
      ref={containerRef} 
      className="relative flex flex-col items-center justify-center py-16 md:py-32 overflow-hidden bg-background site-container"
    >
      <div className="text-center mb-12 md:mb-16 z-10 max-w-2xl px-4 md:px-6">
        <h3 className="text-2xl md:text-5xl font-medium tracking-tight mb-4 uppercase">{title}</h3>
        <p className="text-base md:text-lg text-secondary leading-relaxed">{description}</p>
      </div>
      
      <motion.div 
        style={{ y }}
        className="relative w-full max-w-[1200px] mx-auto z-20 px-2 md:px-0"
      >
        <img 
          src={imageSrc}
          alt="Website preview"
          className="w-full h-auto drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
}
