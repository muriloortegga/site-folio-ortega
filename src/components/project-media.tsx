import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";

interface ProjectMediaProps {
  src: string;
  alt: string;
  className?: string;
  isVisible?: boolean;
  style?: any; // Using any for Framer Motion compatibility or React.CSSProperties
}

export function ProjectMedia({ src, alt, className, isVisible = true, style }: ProjectMediaProps) {
  const isVideo = src?.toLowerCase().endsWith(".mp4") || src?.toLowerCase().endsWith(".webm");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVideo && videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible, isVideo]);

  if (isVideo) {
    return (
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        style={style}
        className={cn("w-full h-full object-cover", className)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={cn("w-full h-full object-cover", className)}
      loading="lazy"
    />
  );
}
