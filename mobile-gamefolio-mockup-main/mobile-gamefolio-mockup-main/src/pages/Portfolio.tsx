import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const projects = [
  {
    id: "riders-republic",
    title: "Riders Republic",
    year: 2024,
    description: "Riders Republic is an extreme sport MMO created by Ubisoft. Players can explore a huge open world with various sports and participate to race or tricks competitions with other players.",
    tasks: [
      "Multiplayer System Design",
      "Live Service Features",
      "Player Engagement Systems",
    ],
  },
  {
    id: "judgeball",
    title: "Judgeball: Lethal Arena",
    year: 2023,
    description: "A 3D online 3v3 sports and combat game, where players uses the power of their avatar to score goals and kills enemies.",
    tasks: [
      "3Cs Design",
      "Documentation",
      "Unreal Blueprints Prototyping",
    ],
  },
  {
    id: "wandering-clouds",
    title: "Wandering Clouds",
    year: 2023,
    description: "A platformer adventure game: hike, jump & Glide your way through a complex of floating islets and, as you explore, rescue little creatures made of clouds to harness their power.",
    tasks: [
      "Character Ability Design",
      "Environment Interactions",
      "Unreal 5 Blueprints",
    ],
  },
  {
    id: "project-alpha",
    title: "Project Alpha",
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
