import { Play, Clock, Link as LinkIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  duration: string;
  linkLabel: string;
  linkUrl?: string;
  description: string;
  role: string;
  imageUrl?: string;
}

export const ProjectCard = ({
  title,
  duration,
  linkLabel,
  linkUrl = "#",
  description,
  role,
  imageUrl = "/placeholder.svg"
}: ProjectCardProps) => {
  return (
    <div className="bg-secondary/80 rounded-2xl overflow-hidden text-white h-full flex flex-col border border-border/30 shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-95">
      {/* Image/Video Preview */}
      <div className="relative aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-muted-foreground/70 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <Play className="w-5 h-5 text-background fill-background ml-1" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>

        {/* Tags */}
        <div className="flex justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 bg-primary-foreground/20 px-3 py-1 rounded-full text-sm">
            <Clock className="w-3.5 h-3.5" />
            {duration}
          </span>
          <a
            href={linkUrl}
            className="inline-flex items-center gap-1.5 bg-primary-foreground/20 px-3 py-1 rounded-full text-sm hover:bg-primary-foreground/30 transition-colors"
          >
            <LinkIcon className="w-3.5 h-3.5" />
            {linkLabel}
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-center text-[#999999] mb-3 flex-1">
          {description}
        </p>

        <p className="text-sm text-center text-[#999999]">
          {role}
        </p>

        <p className="text-sm text-center text-[#999999] mt-3 cursor-pointer hover:text-primary-foreground transition-colors">
          Click to view more
        </p>
      </div>
    </div>
  );
};
