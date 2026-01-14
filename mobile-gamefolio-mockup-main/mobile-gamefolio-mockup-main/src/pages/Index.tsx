import { Navigation } from "@/components/Navigation";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Github, ChevronDown, Sparkles, Gamepad2, Code2, Layers } from "lucide-react";

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

      <main className="pt-16 pb-16 px-6">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center max-w-7xl mx-auto relative overflow-visible">
          <ParallaxSection speed={0.5} className="absolute inset-0 -z-10">
            <div style={{ background: 'var(--gradient-hero)', height: '100%', width: '100%' }} />
          </ParallaxSection>
          <ParticleBackground />
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse" />
          <div className="absolute bottom-40 right-20 w-48 h-48 border border-primary/10 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full animate-ping delay-500" />

          {/* Decorative Lines */}
          <div className="absolute left-0 top-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute right-0 top-1/3 w-32 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />

          <div className="grid lg:grid-cols-2 gap-16 items-center animate-in fade-in-50 duration-1000 relative z-10">
            {/* Left Content */}
            <div className="space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">

                <span className="text-sm text-primary/80 font-medium tracking-wide">Junior</span>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <div className="relative">
                  <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-primary/30 text-6xl font-serif">"</span>
                  <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent transition-all duration-500 ${isAnimating ? 'opacity-0 -translate-y-6 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
                    {words[currentWord]}
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-foreground">
                    Designer
                  </h1>
                  <div className="hidden md:block h-16 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
                </div>
              </div>

              {/* Tagline */}
              <div className="space-y-3">
                <p className="text-2xl md:text-3xl text-muted-foreground font-light italic">
                  ~ Also I'm an experienced programmer
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-primary/40" />
                </div>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                  <Gamepad2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Unity, Godot, Unreal</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">C#, GDscript, Blueprint</span>
                </div>
                {/*<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                  <Layers className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Systems Design</span>
                </div>*/}
              </div>

              {/* CTA & Social */}
              <div className="flex items-center gap-6 pt-4">
                <Button asChild size="lg" className="rounded-full px-8 gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/25">
                  <Link to="/portfolio">
                    View My Work
                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </Link>
                </Button>
                <a
                  href="https://github.com/HnTjohannes/Coding-Adventures/tree/Boids-GDscript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
            {/* Right Content - Video with Frame */}
            <div className="relative overflow-visible mr-8">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-2xl -rotate-2 pointer-events-none" />
              <div className="absolute -inset-6 border border-primary/10 rounded-3xl rotate-1 pointer-events-none" />

              {/* Floating Label */}
              <div className="absolute -top-6 left-8 px-4 py-2 bg-card border border-border rounded-full z-10">
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Featured Reel</span>
              </div>

              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border border-primary/20 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none z-10" />
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

              {/* Stats */}
              <div className="absolute -bottom-6 right-8 flex gap-6 px-6 py-3 bg-card/90 backdrop-blur-sm border border-border rounded-full">
                <div className="text-center">
                  <p className="text-lg font-bold text-primary">2+</p>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <p className="text-lg font-bold text-primary">7+</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-muted-foreground/60 tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 text-primary/60" />
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-7xl mx-auto py-16">
          <div className="space-y-6 animate-in fade-in-50 duration-700 delay-300">
            <h2 className="text-2xl font-light">Rainald JP Isabella</h2>

            <div className="max-w-2xl">
              <p className="text-muted-foreground leading-relaxed">
                "I'm a <b>Junior Game Developer</b> focused on design while having practical programming experience, specializing in levels and systems. I thrive on collaboration and am actively looking to connect with peers in the industry to <b>learn and grow</b> together."
              </p>
            </div>
          </div>
        </section>

        {/* Referrals Section */}
        <section className="max-w-7xl mx-auto py-16 space-y-8">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-light">
              Testimonials
            </p>
            <blockquote className="space-y-2">
              <p className="text-muted-foreground leading-relaxed">
                "Rainald is passionate about game development, reliable, talented and overall a great guy. He is an asset for any team. I enjoyed working with him in the GameLab."
              </p>
              <footer className="text-muted-foreground/70 text-right text-sm">
                <a href="https://www.linkedin.com/in/jeroenderwort/"><b>Jeroen Derwort</b></a> GameLab Manager | Chairman Dutch Games Association
              </footer>
            </blockquote>
            <blockquote className="space-y-2">
              <p className="text-muted-foreground leading-relaxed">
                "Rainald is a surprisingly skilled and versatile junior developer. Fresh out of school, he picks up new technologies
                and languages with enthusiasm and integrates effortlessly into any team."
              </p>
              <footer className="text-muted-foreground/70 text-right text-sm">
                <a href="https://www.linkedin.com/in/peterkortenhoeven/"><b>Peter Kortenhoeven</b></a> CEO The NXT Fit | PWXR
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
