import { Clock, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  duration: string;
  linkLabel: string;
  linkUrl?: string;
  description: string;
  role: string;
  imageUrl?: string;
  projectId?: string;
}

export const ProjectCard = ({
  title,
  duration,
  linkLabel,
  linkUrl = "#",
  description,
  role,
  imageUrl = "/placeholder.svg",
  projectId
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (projectId) {
      navigate(`/portfolio#${projectId}`);
    } else {
      navigate('/portfolio');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-secondary/80 rounded-2xl overflow-hidden text-foreground h-full flex flex-col border border-border/30 shadow-lg shadow-black/10 transition-all duration-300 hover:scale-[0.97] hover:shadow-[0_0_25px_rgba(255,200,50,0.2)] hover:border-primary/50 cursor-pointer group"
    >
      {/* Image Preview */}
      <div className="relative aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-center mb-3 text-primary group-hover:text-accent transition-colors duration-300">{title}</h3>
        {/* Tags */}
        <div className="flex justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-sm text-primary">
            <Clock className="w-3.5 h-3.5" />
            {duration}
          </span>
          <a
            href={linkUrl}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-sm text-primary hover:bg-primary/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,200,50,0.3)]"
          >
            <LinkIcon className="w-3.5 h-3.5" />
            {linkLabel}
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-center text-muted-foreground mb-3 flex-1">
          {description}
        </p>

        <p className="text-sm text-center text-muted-foreground/80">
          {role}
        </p>

        <p className="text-sm text-center text-primary/70 mt-3 group-hover:text-primary transition-colors duration-300">
          Click to view more
        </p>
      </div>
    </div>
  );
};
