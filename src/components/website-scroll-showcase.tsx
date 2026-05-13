import { useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

interface WebsiteScrollShowcaseProps {
  title: string;
  description: string;
  mediaSrc: string;
}

export function WebsiteScrollShowcase({ title, description, mediaSrc }: WebsiteScrollShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // The container will be very tall (300vh), allowing the user to scroll for a long time
  // while the sticky section stays on screen.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scrub the video based on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && videoRef.current.duration) {
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = latest * videoRef.current.duration;
        }
      });
    }
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [mediaSrc]);

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
          <video 
            ref={videoRef}
            src={mediaSrc}
            className="w-full h-auto object-contain drop-shadow-2xl"
            muted
            playsInline
            preload="auto"
          />
        </div>

      </div>
    </div>
  );
}
