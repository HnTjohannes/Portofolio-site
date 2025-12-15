import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    id: "scales-and-steel",
    title: "Scales and Steel",
    duration: "4 months",
    linkLabel: "Website",
    linkUrl: "#",
    description: "An action platformer that takes place in a D&D style world where you play as a dragon who has been turned into a knight and has to take it up against a wizard to reclaim his body.",
    role: "I designed character combat, boss encounters and some levels on this project.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "rotp",
    title: "Ripples of the past",
    duration: "2 months",
    linkLabel: "Steam",
    linkUrl: "#",
    description: "A 3D online 3v3 sports and combat game, where players uses the power of their avatar to score goals and kills enemies.",
    role: "I worked on this project as a game design intern: 3Cs, documentation and prototyping using Unreal blueprints.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "make-it",
    title: "Make it...!",
    duration: "9 months",
    linkLabel: "Student project",
    linkUrl: "#",
    description: "A platformer adventure game: hike, jump & Glide your way through a complex of floating islets and, as you explore, rescue little creatures made of clouds to harness their power.",
    role: "I designed character abilities & their interactions with environment, and prototype them using Unreal 5 blueprints.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "project-alpha",
    title: "Project Alpha",
    duration: "6 months",
    linkLabel: "Demo",
    linkUrl: "#",
    description: "An innovative puzzle game combining strategy and action elements in a unique artistic environment.",
    role: "Lead game designer responsible for core mechanics and level design.",
    imageUrl: "/placeholder.svg"
  }
];

export const ProjectsCarousel = () => {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-semibold text-primary text-center mb-10">Projects</h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full px-12"
      >
        <CarouselContent className="-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-4 basis-full md:basis-1/3">
              <ProjectCard {...project} projectId={project.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="right-0 text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
      </Carousel>
    </section>
  );
};
