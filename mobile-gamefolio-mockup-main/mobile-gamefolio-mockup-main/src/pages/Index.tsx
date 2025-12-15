import { Navigation } from "@/components/Navigation";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight transition-all duration-300 ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  {words[currentWord]}
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight">
                  Designer
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Any Kind any Time
              </p>
            </div>

            <div className="aspect-square w-full max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden shadow-2xl border border-border/20">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-7xl mx-auto py-16">
          <div className="space-y-6 animate-in fade-in-50 duration-700 delay-300">
            <h2 className="text-2xl font-light">about</h2>

            <div className="max-w-2xl">
              <p className="text-muted-foreground leading-relaxed">
                Hi, I’m Rainald. In 2023 (I know, pretty late), I discovered that I not only can play games but also make them for a living. Since then, I’ve poured lots of effort into joining studies and attending events to learn as much as I can about game development and everything connected to it.

                I'm a game designer focused on creating memorable experiences through level design and game mechanics.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Carousel */}
        <ProjectsCarousel />

        {/* View Portfolio Button */}
        <section className="max-w-7xl mx-auto pb-16">
          <div className="flex justify-center">
            <Button asChild size="lg" className="rounded-full font-semibold text-lg px-8 py-6 hover-scale shadow-lg border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/portfolio">View all projects</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
