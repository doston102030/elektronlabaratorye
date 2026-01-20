import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}

export function ProjectCard({ project, className, style }: ProjectCardProps) {
  return (
    <Link
      to={`/activities/projects/${project.id}`}
      className={cn(
        'group block bg-card rounded-xl overflow-hidden card-elevated',
        className
      )}
      style={style}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{project.date}</span>
        </div>
        <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-primary font-medium text-sm">
          <span>Batafsil</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
