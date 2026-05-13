import { useRef } from "react";
import { motion } from "framer-motion";

interface WebsiteScrollShowcaseProps {
  title: string;
  description: string;
  mediaSrc: string;
}

export function WebsiteScrollShowcase({ title, description, mediaSrc }: WebsiteScrollShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-background mt-16 mb-16">
      {/* Sticky container that holds the title and the floating laptop */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-20 max-w-2xl px-4 md:px-6 absolute top-24 md:top-32"
        >
          <h3 className="text-2xl md:text-5xl font-medium tracking-tight mb-4 uppercase">{title}</h3>
          <p className="text-base md:text-lg text-secondary leading-relaxed">{description}</p>
        </motion.div>
        
        <div className="relative w-full max-w-[1200px] mx-auto z-10 px-4 md:px-0 flex items-center justify-center mt-32 md:mt-24">
          <img 
            src={mediaSrc}
            alt="Website Showcase"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </div>
  );
}
