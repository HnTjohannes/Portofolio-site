import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const projects = [
  {
    id: "scales-and-steel",
    title: "Scales and Steel",
    year: 2025,
    image: "/banner-sns.png",
    description: "An action platformer that takes place in a D&D style world where you play as a dragon who has been turned into a knight and has to take it up against a wizard to reclaim his body.",
    tasks: [
      "Building a quick and dirty prototype for character locomotion fully with combat and a variety of movement options.",
      "Designing and building an interchangable special ability system allowing for combining diffrent skills so player's can create their own playstyle.",
      "Making a tutorial level that quickly shows the basics of the game.",
      "Building the first Boss encounter with the goal to test the player.",
      "Building a final level and Boss fight with the idea of creating a gauntlet with everything the player has seen before.",
    ],
    tools: ["Godot", "GDScript", "GitHub", "Confluence"],
  },
  {
    id: "rotp",
    title: "Ripples of the past",
    year: 2024,
    image: "/banner-rotp.png",
    description: "A narrative choose your own adventure game that takes place in a mysterious village hidden in a forest.",
    tasks: [
      "Collecting our teams skills and experiences to come up with a vision for the game that looks good but is also possible to make with limited resources.",
      "Discussing the flow of the game and how we were gonna communicate our story.",
      "Set dressing for the first world using assets provided by the art team, visual programming and tools provided by the engine for lighting.",
      "Performing QA runs and fixed issues with the level i came across. other problems were documented and fixed by the designated team.",
      "Making the ingame menu UI functional and later improving it visually with the art team.",
    ],
    tools: ["Godot", "GDScript", "GitHub", "Google docs", "Trello"],
  },
  {
    id: "make-it",
    title: "Make it...!",
    year: 2024,
    image: "/make-it.jpg",
    description: "A two-player tabletop game where each side tries to either deteriorate or preserve the mental state of the games persona. This game is aimed to open up talks about mental health in a fun and interactive way.",
    tasks: [
      "Building a paper prototype for our final submission and an earlier iteration to gather feedback for the team.",
      "Documenting information on the effects of life events on mental health",
      "Contributing throughout the entire ideation process by coming up with ideas and solutions for gaps in the ideas of others.",
    ],
    tools: ["cardboard", "paper", "glue", "Word"],
  },
  {
    id: "innova",
    title: "Innova58",
    year: 2023,
    image: "/banner-innova.png",
    description: "A digital twin project for an innovation area alongside the A58 highway. this was my first formal unity project.",
    tasks: [
      "I worked on gameplay Design, for the  digital twin they wanted the player to traverse the area by foot and by car i came up with and implemented systems for both.",
      "I worked on set dressing i tried recreating the layout of the area as close to the real one as possible for this i looked at sattelite pictures and went there in person to get a better understanding of the area.",
      "Because of performance issues We chose to build the codebase from scratch and also implement things that weren't already there such as lod's, light baking and occlusion culling.",
    ],
    tools: ["Unity", "C#", "Github", "Word", "Coda"],
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
              {/* Project Image  */}
              <div className="w-full aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                />
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

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-foreground">Software & Tools</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {project.tools.map((tool, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {tool}
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
