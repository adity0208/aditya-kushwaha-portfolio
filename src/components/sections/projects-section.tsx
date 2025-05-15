
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Project } from '@/components/cards/project-card'; 
import { Badge } from '@/components/ui/badge';
import { Plus, ExternalLink as ExternalLinkIcon } from 'lucide-react'; // Renamed to avoid conflict
import { Separator } from '@/components/ui/separator';

interface ProjectsSectionProps {
  id: string;
}

const projectsData: Project[] = [
  {
    title: 'CareLinks - Community Health Worker App',
    description: 'A community health worker app developed for the GDG on Campus Hackathon, selected for the prototype phase.',
    longDescription: 'This live project utilizes React, Node.js, and Firebase for secure data storage and efficient real-time syncing. It features PNG-sharing functionality and aims to create scalable and personalized healthcare solutions for community health workers to manage patient information, schedule visits, and track progress effectively.',
    imageUrls: [{ src: 'https://placehold.co/800x600.png', hint: 'health app' }],
    tags: ['React', 'Node.js', 'Firebase', 'Healthcare', 'Mobile-first', 'Community Health'],
    githubLink: 'https://github.com/adityakushwaha0208/CareLinks-Project',
    liveLink: 'https://carelinks-fccc4.web.app/', 
    isLive: true,
    keyFeatures: [
        'Secure patient data management with Firebase Firestore.',
        'Real-time synchronization for up-to-date information.',
        'Efficient visit scheduling and tracking for health workers.',
        'PNG report generation and sharing capabilities.',
        'Role-based access control for data security.',
    ],
  },
  {
    title: 'AI-Powered Healthcare Chatbot',
    description: 'An intelligent chatbot built with Next.js, designed to provide healthcare assistance and information.',
    longDescription: 'This project leverages AI and NLP technologies to understand user queries and offer relevant medical guidance. Key features include symptom checking, appointment scheduling suggestions, and general health Q&A. My role involved full-stack development using Next.js and integrating with large language models for conversational AI capabilities.',
    imageUrls: [{ src: 'https://placehold.co/800x600.png', hint: 'chatbot ui' }],
    tags: ['Next.js', 'AI', 'NLP', 'Healthcare', 'Chatbot', 'Genkit'],
    githubLink: 'https://github.com/adityakushwaha0208/AI-Healthcare-Chatbot',
    liveLink: 'https://simple-chat-bot-pi.vercel.app/',
    isLive: true,
    videoLink: 'https://www.youtube.com/watch?v=your-video-id', // Placeholder
    keyFeatures: [
        'Natural Language Processing for understanding user queries.',
        'Symptom checking and preliminary medical advice.',
        'Integration with external health APIs for information retrieval.',
        'User-friendly conversational interface.',
        'Scalable architecture using Next.js server components.',
    ],
  },
  {
    title: 'Automated Appointment Reminder Application',
    description: 'Developed during a DEV.to Hackathon, this app sends automated appointment reminders via Twilio API.',
    longDescription: 'Focused on improving user experience by reducing missed appointments. Implemented scheduling features for automated reminders via phone calls and SMS, integrating the Twilio API for real-time communication. This system helps healthcare providers and businesses minimize no-shows and optimize scheduling.',
    imageUrls: [{ src: 'https://placehold.co/800x600.png', hint: 'reminder app' }],
    tags: ['Twilio API', 'Node.js', 'Automation', 'UX', 'Scheduling'],
    githubLink: 'https://github.com/adityakushwaha0208/Appointment-Reminder-App',
    isLive: false,
    keyFeatures: [
        'Automated SMS and voice call reminders using Twilio.',
        'Configurable reminder schedules and templates.',
        'User-friendly dashboard for managing appointments.',
        'API for integration with existing scheduling systems.',
        'Detailed logging and reporting of reminder statuses.',
    ],
  },
];

const ProjectsSection: FC<ProjectsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 sm:py-24 bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-2">
            FEATURED CASE STUDIES
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Curated <span className="text-accent">work</span>
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {projectsData.map((project, index) => {
            const projectUrl = project.liveLink || project.githubLink;
            return (
              <div key={project.title}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  {/* Image Column */}
                  <div className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-2xl group ${index % 2 !== 0 && 'lg:order-last'}`}>
                    {project.imageUrls.length > 0 && (
                      projectUrl ? (
                        <Link href={projectUrl} target="_blank" rel="noopener noreferrer" aria-label={`View project ${project.title}`}>
                          <Image
                            src={project.imageUrls[0].src}
                            alt={`${project.title} project snapshot`}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint={project.imageUrls[0].hint}
                          />
                        </Link>
                      ) : (
                        <Image
                          src={project.imageUrls[0].src}
                          alt={`${project.title} project snapshot`}
                          layout="fill"
                          objectFit="cover"
                          data-ai-hint={project.imageUrls[0].hint}
                        />
                      )
                    )}
                  </div>

                  {/* Details Column */}
                  <div className="flex flex-col justify-center py-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                      <span className="text-accent font-sans mr-2">—</span>
                      {projectUrl ? (
                        <Link href={projectUrl} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center">
                          {project.title}
                          <ExternalLinkIcon className="ml-2 h-5 w-5 flex-shrink-0" />
                        </Link>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg">
                      {project.longDescription || project.description}
                    </p>
                    
                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {project.keyFeatures.map((feature, featIndex) => (
                            <li key={featIndex} className="flex items-start">
                              <Plus className="h-5 w-5 text-accent mr-3 mt-[3px] flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.tags && project.tags.length > 0 && (
                      <div>
                        <h4 className="text-md font-semibold text-foreground mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-sm bg-secondary hover:bg-secondary/80 text-secondary-foreground">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {index < projectsData.length - 1 && (
                  <Separator className="my-16 lg:my-24 border-border/50" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
