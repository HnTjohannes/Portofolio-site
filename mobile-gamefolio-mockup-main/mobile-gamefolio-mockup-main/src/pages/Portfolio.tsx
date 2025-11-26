import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    year: 2024,
    description: "A strategic puzzle game combining tactical gameplay with narrative storytelling.",
    tasks: [
      "Level Design & Balancing",
      "Combat System Implementation",
      "Player Progression Design",
    ],
  },
  {
    id: 2,
    title: "Project Beta",
    year: 2023,
    description: "Multiplayer action game featuring fast-paced combat and team coordination.",
    tasks: [
      "Multiplayer Game Modes",
      "Character Ability Design",
      "UI/UX Flow Implementation",
    ],
  },
  {
    id: 3,
    title: "Project Gamma",
    year: 2023,
    description: "Open-world exploration game with dynamic weather and emergent gameplay.",
    tasks: [
      "World Building & Systems",
      "Quest Design",
      "Economy Balancing",
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="space-y-6 animate-in fade-in-50 duration-700"
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
