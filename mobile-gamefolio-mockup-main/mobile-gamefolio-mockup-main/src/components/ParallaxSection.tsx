import { useEffect, useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  speed?: number;
  children: ReactNode;
  className?: string;
}

export const ParallaxSection = ({ speed = 0.5, children, className = "" }: ParallaxSectionProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const scrolled = window.scrollY;
      const yPos = -(scrolled * speed);
      
      elementRef.current.style.transform = `translateY(${yPos}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};
