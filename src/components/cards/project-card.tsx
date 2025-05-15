import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, CirclePlay } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  imageUrls: { src: string; hint: string }[];
  keyFeatures?: string[]; // Added for the new project section layout
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  isLive?: boolean;
  videoLink?: string;
}

interface ProjectCardProps {
  project: Project;
}

// This component is kept for potential future use or other layouts,
// but is not directly used in the redesigned "Curated Work" section.
const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="relative w-full h-48 md:h-56 mb-4 rounded-md overflow-hidden">
          {project.imageUrls.length > 0 && (
             <Image
                src={project.imageUrls[0].src}
                alt={`${project.title} screenshot`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint={project.imageUrls[0].hint}
              />
          )}
           {project.isLive && (
            <Badge variant="default" className="absolute top-2 right-2 bg-accent text-accent-foreground animate-pulse">LIVE</Badge>
          )}
        </div>
        <CardTitle className="text-2xl font-semibold text-primary">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {project.description}
          {project.longDescription && <span className="block mt-2">{project.longDescription}</span>}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-start gap-3 pt-4 border-t">
        {project.githubLink && (
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.liveLink && (
          <Button asChild variant="default" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
         {project.videoLink && (
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href={project.videoLink} target="_blank" rel="noopener noreferrer">
              <CirclePlay className="mr-2 h-4 w-4" /> Watch Video
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
