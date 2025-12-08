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
    title: "Riders Republic",
    duration: "4 months",
    linkLabel: "Website",
    linkUrl: "#",
    description: "Riders Republic is an extreme sport MMO created by Ubisoft. Players can explore a huge open world with various sports and participate to race or tricks competitions with other players.",
    role: "I worked as a game designer intern: designing multiplayer oriented systems while the game was live.",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Judgeball: Lethal Arena",
    duration: "2 months",
    linkLabel: "Steam",
    linkUrl: "#",
    description: "A 3D online 3v3 sports and combat game, where players uses the power of their avatar to score goals and kills enemies.",
    role: "I worked on this project as a game design intern: 3Cs, documentation and prototyping using Unreal blueprints.",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Wandering Clouds",
    duration: "9 months",
    linkLabel: "Student project",
    linkUrl: "#",
    description: "A platformer adventure game: hike, jump & Glide your way through a complex of floating islets and, as you explore, rescue little creatures made of clouds to harness their power.",
    role: "I designed character abilities & their interactions with environment, and prototype them using Unreal 5 blueprints.",
    imageUrl: "/placeholder.svg"
  },
  {
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
