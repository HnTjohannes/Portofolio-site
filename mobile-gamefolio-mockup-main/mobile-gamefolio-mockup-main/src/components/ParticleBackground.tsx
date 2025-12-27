import { useEffect, useState } from "react";
import { ParallaxSection } from "./ParallaxSection";

interface Particle {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
}

export const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setParticles(newParticles);
  }, []);
  const getParticleColor = (id: number) => {
    return id % 3 === 0 ? 'bg-white' : 'bg-primary';
  };

  return (
    <ParallaxSection speed={0.3} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={'absolute rounded-full ' + getParticleColor(particle.id) + ' animate-float'}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: `-${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: particle.id % 3 === 0
              ? '0 0 6px rgba(255, 255, 255, 0.6)'
              : '0 0 8px rgba(255, 200, 50, 0.5)',
          }}
        />
      ))}
    </ParallaxSection>
  );
};
