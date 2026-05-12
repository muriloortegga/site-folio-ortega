import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface WebsiteScrollShowcaseProps {
  title: string;
  description: string;
  videoSrc: string;
}

export function WebsiteScrollShowcase({ title, description, videoSrc }: WebsiteScrollShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the laptop (floats up slightly as you scroll down)
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Scrub the video based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && videoRef.current.duration) {
      // We want the video to start scrubbing after the laptop comes into view
      // and finish before it leaves.
      // Adjust these mapping values if you want the video to scrub faster or slower
      let progress = (latest - 0.2) / 0.6;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      // Wrap in requestAnimationFrame for smoother scrubbing
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = progress * videoRef.current.duration;
        }
      });
    }
  });

  // Ensure video metadata is loaded so we have the duration
  useEffect(() => {
    if (videoRef.current) {
      // Pause it immediately so it doesn't auto-play (it's controlled by scroll)
      videoRef.current.pause();
      // Preload metadata to know the duration
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-[150vh] flex flex-col items-center justify-center py-32 overflow-hidden bg-background site-container"
    >
      <div className="text-center mb-16 z-10 max-w-2xl px-6">
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 uppercase">{title}</h3>
        <p className="text-lg text-secondary leading-relaxed">{description}</p>
      </div>
      
      <motion.div 
        style={{ y }}
        className="relative w-full max-w-[1000px] aspect-[16/10] mx-auto z-20"
      >
        {/* Laptop frame mockup */}
        <div className="absolute inset-0 bg-neutral-900 rounded-[1.5rem] md:rounded-[2rem] border-[6px] md:border-[12px] border-neutral-800 shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Inner bezel */}
          <div className="w-full h-full bg-black relative">
            <video 
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover"
              muted
              playsInline
              preload="auto"
            />
            {/* Webcam notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 md:w-16 h-2 md:h-4 bg-neutral-900 rounded-b-md md:rounded-b-lg"></div>
          </div>
        </div>
        {/* Laptop bottom lip */}
        <div className="absolute -bottom-3 md:-bottom-6 left-1/2 -translate-x-1/2 w-[105%] md:w-[110%] h-4 md:h-8 bg-gradient-to-b from-neutral-300 to-neutral-400 dark:from-neutral-800 dark:to-neutral-900 rounded-b-[1.5rem] md:rounded-b-[3rem] shadow-xl border-t border-neutral-700/50">
          <div className="w-16 md:w-32 h-1 md:h-1.5 bg-neutral-400 dark:bg-neutral-700 mx-auto mt-0 rounded-b-sm"></div>
        </div>
      </motion.div>
    </div>
  );
}
