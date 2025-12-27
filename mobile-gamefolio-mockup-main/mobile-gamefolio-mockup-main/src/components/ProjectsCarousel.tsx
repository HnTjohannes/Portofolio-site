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
    duration: "5 months",
    linkLabel: "Student project",
    linkUrl: "#",
    description: "An action platformer that takes place in a D&D inspired world where you play as a dragon who has been turned into a knight and has to take it up against a wizard to reclaim his body.",
    role: "I designed character combat, boss encounters and some levels on this project.",
    imageUrl: "/sns-game.png"
  },
  {
    id: "rotp",
    title: "Ripples of the past",
    duration: "5 months",
    linkLabel: "Student project",
    linkUrl: "https://hntjohannes.itch.io/ripples-of-the-past",
    description: "A narrative choose your own adventure game that takes place in a mysterious village hidden in a forest.",
    role: "I started out as this games producer and later shifted focus to work on level design for the first level.",
    imageUrl: "/rotp-game.png"
  },
  {
    id: "make-it",
    title: "Make it...!",
    duration: "48 Hours",
    linkLabel: "Gamejam - Winner",
    linkUrl: "https://itch.io/jam/epic-we-01-hilversum/rate/2642862",
    description: "A two player tabletop game where each side tries to either deteriorate or preserve the mental state of the game's persona.",
    role: "I was tasked with iterating on ideas and building a prototype that could be used to gather feedback",
    imageUrl: "/make-it.jpg"
  },
  {
    id: "innova",
    title: "Innova58",
    duration: "6 months",
    linkLabel: "Internship",
    linkUrl: "#",
    description: "A digital twin project for an innovation area alongside a highway.",
    role: "Making project plans with stakeholders and co-developing the simulation.",
    imageUrl: "/innova-game.png"
  }
];

export const ProjectsCarousel = () => {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-semibold text-primary text-center mb-2">
        Featured Projects
      </h2>
      <p className="text-muted-foreground text-center mb-10">
        Explore my work in game design and interactive experiences
      </p>

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
        <CarouselPrevious className="left-0 text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,200,50,0.5)] hover:scale-110" />
        <CarouselNext className="right-0 text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,200,50,0.5)] hover:scale-110" />
      </Carousel>
    </section>
  );
};
