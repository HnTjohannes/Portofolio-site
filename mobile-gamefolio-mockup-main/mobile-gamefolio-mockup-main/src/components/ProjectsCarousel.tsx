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
    title: "Scales and Steel",
    duration: "6 months",
    linkLabel: "Website",
    linkUrl: "#",
    description: "An action platformer that takes place in a dnd style world where you play as a dragon who has been turned into a knight and has to take it up against a wizard to reclaim his body.",
    role: "I worked as a System and level designer: character combat systems, boss encounters and the tutorial. all made in Godot.",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Ripples of the past",
    duration: "6 months",
    linkLabel: "Steam",
    linkUrl: "#",
    description: "A narrative driven choose your own adventure game that takes place in a mysterious village hidden in a forest.",
    role: "I started out as this games producer and later shifted focus to work on level design for the first level.",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "make it…!",
    duration: "48 Hours",
    linkLabel: "Game-Jam",
    linkUrl: "#",
    description: "A two player tabletop game where each side tries to either deteriorate or preserve the mental state of the game’s persona. this game is aimed to open up talks about mental health in a fun and interactive way.",
    role: "I was tasked with iterating on ideas and building a prototype that could be used to gather feedback",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Innova58",
    duration: "6 months",
    linkLabel: "Demo",
    linkUrl: "#",
    description: "A digital twin project for an innovation area alongside a highway, i worked on during one of my internships. ",
    role: "in a pair rebuild an older version of this project from scratch.",
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
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-4 basis-full md:basis-1/3">
              <ProjectCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="right-0 text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
      </Carousel>
    </section>
  );
};
