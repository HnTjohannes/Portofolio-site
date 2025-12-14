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
      className="bg-secondary/80 rounded-2xl overflow-hidden text-white h-full flex flex-col border border-border/30 shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-95 cursor-pointer"
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
        <p className="text-sm text-center text-[#EBEBEB] mb-3 flex-1">
          {description}
        </p>

        <p className="text-sm text-center text-[#EBEBEB]">
          {role}
        </p>

        <p className="text-sm text-center text-[#EBEBEB] mt-3 cursor-pointer hover:text-primary-foreground transition-colors">
          Click to view more
        </p>
      </div>
    </div>
  );
};
