import { Navigation } from "@/components/Navigation";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Github } from "lucide-react";

const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const words = ["Level", "System", "Boss", "Encounter"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 1700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center max-w-7xl mx-auto relative">
          <ParallaxSection speed={0.5} className="absolute inset-0 -z-10">
            <div style={{ background: 'var(--gradient-hero)', height: '100%', width: '100%' }} />
          </ParallaxSection>
          <ParticleBackground />
          <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in-50 duration-1000 relative z-10">
            <div className="space-y-8">

              <div className="space-y-2">
                <p className="text-muted-foreground/60 text-xl md:text-2xl font-light">
                  Junior
                </p>
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight transition-all duration-300 ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  {words[currentWord]}
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight">
                  Designer
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                ~ Also I can code <a
                  href="https://github.com/HnTjohannes/Coding-Adventures/tree/Trolley-problem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-muted-foreground/60 hover:text-foreground transition-colors"
                >
                  <Github size={20} />
                </a>
              </p>
              <div className="space-y-1 pt-4">
                <p className="text-muted-foreground/60 text-sm font-light">
                  Unity, Unreal etc.
                </p>
                <p className="text-muted-foreground/60 text-sm font-light">
                  C#, Blueprint, GDscript, and more
                </p>
              </div>
            </div>

            <div className="aspect-video w-full max-w-2xl mx-auto md:mx-0 rounded-lg overflow-hidden shadow-2xl border border-border/20">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/highlight.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-7xl mx-auto py-16">
          <div className="space-y-6 animate-in fade-in-50 duration-700 delay-300">
            <h2 className="text-2xl font-light">Rainald JP Isabella</h2>

            <div className="max-w-2xl">
              <p className="text-muted-foreground leading-relaxed">
                I'm a <b>Junior Game Developer</b> focused on design specializing mainly in levels and systems, while also have experience in programming. <b>I am always looking to learn</b> and connect with others as the community is one of the strongest parts of the gaming industry.
              </p>
            </div>
          </div>
        </section>

        {/* Referrals Section */}
        <section className="max-w-7xl mx-auto py-16 space-y-8">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-light">
              Referrals
            </p>
            <blockquote className="space-y-2">
              <p className="text-muted-foreground leading-relaxed">
                " Rainald is a surprisingly skilled and versatile junior developer. Fresh out of school, he picks up new technologies
                and languages with enthusiasm and integrates effortlessly into any team."
              </p>
              <footer className="text-muted-foreground/70 text-right text-sm">
                Peter Kortenhoeven CEO The NXT Fit | PWXR
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Projects Carousel */}
        <ProjectsCarousel />

        {/* View Portfolio Button */}
        <section className="max-w-7xl mx-auto pb-16">
          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg" className="rounded-full font-semibold text-lg px-8 py-6">
              <Link to="/portfolio">View all projects</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
