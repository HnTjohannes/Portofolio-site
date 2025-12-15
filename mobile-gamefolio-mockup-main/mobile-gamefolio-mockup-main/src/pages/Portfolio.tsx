import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const projects = [
  {
    id: "scales-and-steel",
    title: "Scales and Steel",
    year: 2024,
    description: "An action platformer that takes place in a D&D style world where you play as a dragon who has been turned into a knight and has to take it up against a wizard to reclaim his body.",
    tasks: [
      "Character combat design: Prototyping movement mechanics",
      "Level design: Layout for a tutorial in the first level",
      "Building the final level and Boss fight",
    ],
  },
  {
    id: "rotp",
    title: "Ripples of the past",
    year: 2023,
    description: "A narrative choose your own adventure game that takes place in a mysterious village hidden in a forest.",
    tasks: [
      "Creative direction: Coming up with solutions for making our game look good with limited art resources",
      "Level design: Adding art assets provided by the art team to the level",
      "Unreal Blueprints Prototyping",
    ],
  },
  {
    id: "make-it",
    title: "Make it...!",
    year: 2023,
    description: "A two-player tabletop game where each side tries to either deteriorate or preserve the mental state of the games persona. This game is aimed to open up talks about mental health in a fun and interactive way.",
    tasks: [
      "Building a paper prototype",
      "Documenting information on the effects of life events on mental health",
      "Contributing throughout the entire ideation process",
    ],
  },
  {
    id: "project-alpha",
    title: "Innova",
    year: 2022,
    description: "An innovative puzzle game combining strategy and action elements in a unique artistic environment.",
    tasks: [
      "Core Mechanics Design",
      "Level Design",
      "Game Balance",
    ],
  },
];

const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const projectId = location.hash.slice(1);
      const element = document.getElementById(projectId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              className="space-y-6 animate-in fade-in-50 duration-700 scroll-mt-24"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className="w-full aspect-video bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-sm">Project Screenshot</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h2 className="text-2xl font-light">
                  {project.title} <span className="text-muted-foreground">({project.year})</span>
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-foreground">Task Overview</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {project.tasks.map((task, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < projects.length - 1 && (
                <div className="pt-8">
                  <div className="h-px bg-border/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
