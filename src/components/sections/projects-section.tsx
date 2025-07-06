"use client"

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Project } from '@/components/cards/project-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'; // <--- ADD THIS LINE
import { Plus, ExternalLinkIcon, Github, Sparkles, Zap, Youtube } from 'lucide-react'; // <--- ADD Youtube HERE
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';


interface ProjectsSectionProps {
  id: string;
}

const projectsData: Project[] = [
  {
    title: 'CareLinks - Community Health Worker App',
    description: 'A community health worker app developed for the GDG on Campus Hackathon, selected for the prototype phase.',
    longDescription: 'This live project utilizes React, Node.js, and Firebase for secure data storage and efficient real-time syncing. It features PNG-sharing functionality and aims to create scalable and personalized healthcare solutions for community health workers to manage patient information, schedule visits, and track progress effectively.',
    imageUrls: [{ src: '/images/Dashboard.png', hint: 'CareLinks app dashboard screenshot' }], // REMEMBER TO REPLACE THIS
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
    imageUrls: [{ src: '/images/healthcare_chabbot.jpg', hint: 'chatbot ui' }],
    tags: ['Next.js', 'AI', 'NLP', 'Healthcare', 'Chatbot', 'Genkit'],
    githubLink: 'https://github.com/adityakushwaha0208/AI-Healthcare-Chatbot',
    liveLink: 'https://simple-chat-bot-pi.vercel.app/',
    isLive: true,
    videoLink: 'https://www.youtube.com/watch?v=your-video-id',
    keyFeatures: [
        'Natural Language Processing for understanding user queries.',
        'Symptom checking and preliminary medical advice.',
        'Integration with external health APIs for information retrieval.',
        'User-friendly conversational interface.',
        'Scalable architecture using Next.js server components.',
    ],
  },
  {
  title: 'Personal Portfolio Website',
  description: 'A modern, responsive, and interactive portfolio to showcase my projects and skills.',
  longDescription: 'This website is built with Next.js, React, and Tailwind CSS, leveraging the latest web technologies for a fast, accessible, and visually appealing user experience. It features dynamic content sections, smooth scroll animations, and a responsive design that adapts seamlessly to various devices. My goal is to present my work and expertise clearly and effectively to potential employers and collaborators.',
  imageUrls: [
    { src: '/images/portfolio-landing-page.png', hint: 'Portfolio website landing page' },
  ],
  tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Responsive Design', 'Animations', 'Portfolio'],
  githubLink: 'https://github.com/adityakushwaha0208/your-portfolio-repo', // <--- IMPORTANT: Replace with YOUR actual GitHub repo link
  liveLink: 'https://your-portfolio-live-link.vercel.app/', // <--- IMPORTANT: Replace with YOUR actual live deployment link
  isLive: true, // Set to true as you are actively working on it/it's deployed
  keyFeatures: [
      'Interactive and animated UI with scroll effects.',
      'Fully responsive design for desktop, tablet, and mobile.',
      'Showcase for personal projects with detailed descriptions.',
      'Skills and experience section highlighting expertise.',
      'Contact form for easy communication (if implemented).',
      'Optimized for performance and SEO using Next.js.',
  ],
},
];

const ProjectsSection: FC<ProjectsSectionProps> = ({ id }) => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleProjects((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            // Optional: Disconnect observer for this entry if animation should only play once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }, // Adjust threshold as needed
    );

    const projectElements = document.querySelectorAll(`[data-project-card]`);
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <section id={id} className="py-20 sm:py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background radial gradient from your original complex code */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 lg:mb-28">
          {/* Badge with Sparkles and glow animation from your original complex code */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8 animate-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium uppercase tracking-wider">FEATURED CASE STUDIES</span>
          </div>

          {/* Heading with gradient text from your original complex code */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Curated <span className="text-gradient">work</span> {/* Requires text-gradient CSS */}
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore my latest projects showcasing modern web development, AI integration, and user-centered design.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {projectsData.map((project, index) => {
            const projectUrl = project.liveLink || project.githubLink;
            const isVisible = visibleProjects[index];

            return (
              <div
                key={project.title}
                data-project-card // Used by IntersectionObserver
                data-index={index} // Used by IntersectionObserver
                className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Image Column - with all its animations and effects */}
                  <div
                    className={`relative w-full aspect-[16/10] rounded-3xl overflow-hidden group hover-lift ${index % 2 !== 0 && "lg:order-last"}`}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {project.imageUrls.length > 0 && (
                      <div className="relative w-full h-full glass-effect p-4"> {/* glass-effect added */}
                        {projectUrl ? (
                          <Link
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View project ${project.title}`}
                          >
                            <Image
                              src={project.imageUrls[0].src}
                              alt={`${project.title} project snapshot`}
                              fill
                              className="rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                              data-ai-hint={project.imageUrls[0].hint} // Keep the hint
                            />
                          </Link>
                        ) : (
                          <Image
                            src={project.imageUrls[0].src}
                            alt={`${project.title} project snapshot`}
                            fill
                            className="rounded-2xl object-cover"
                            data-ai-hint={project.imageUrls[0].hint} // Keep the hint
                          />
                        )}
                      </div>
                    )}

                    {/* "LIVE" badge with Zap icon and pulse animation */}
                    {project.isLive && (
                      <div className="absolute top-6 right-6 z-20">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium animate-pulse">
                          <Zap className="w-3 h-3" />
                          LIVE
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Details Column */}
                  <div className="flex flex-col justify-center space-y-8"> {/* Adjusted space-y */}
                    <div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"> {/* Larger text, adjusted margin */}
                        <span className="text-accent font-sans mr-3">—</span> {/* Added margin */}
                        {projectUrl ? (
                          <Link
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors duration-300 group inline-flex items-center" // Enhanced hover, group for icon animation
                          >
                            {project.title}
                            <ExternalLinkIcon className="ml-3 h-6 w-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" /> {/* Icon animation */}
                          </Link>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed"> {/* Larger text, adjusted leading */}
                        {project.longDescription || project.description}
                      </p>
                    </div>

                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                      <div className="space-y-4"> {/* Adjusted space-y */}
                        <h4 className="text-lg font-semibold text-foreground flex items-center gap-2"> {/* Added icon */}
                          <Sparkles className="w-5 h-5 text-primary" />
                          Key Features
                        </h4>
                        <ul className="space-y-3"> {/* Adjusted space-y */}
                          {project.keyFeatures.map((feature, featIndex) => (
                            <li key={featIndex} className="flex items-start group"> {/* Added group for hover */}
                              <Plus className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0 group-hover:rotate-90 transition-transform duration-300" /> {/* Icon animation */}
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"> {/* Text hover */}
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.tags && project.tags.length > 0 && (
                      <div className="space-y-4"> {/* Adjusted space-y */}
                        <h4 className="text-lg font-semibold text-foreground">Technologies</h4> {/* Adjusted text */}
                        <div className="flex flex-wrap gap-3"> {/* Adjusted gap */}
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="px-4 py-2 text-sm bg-gradient-to-r from-secondary to-secondary/80 hover:from-primary/10 hover:to-accent/10 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105" // Enhanced badge styling
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4 pt-4"> {/* Adjusted pt */}
                      {project.githubLink && (
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="group glass-effect hover:bg-primary/10 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 bg-transparent" // Enhanced button styling
                        >
                          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" /> {/* Icon animation */}
                            View Code
                          </Link>
                        </Button>
                      )}

                      {project.liveLink && (
                        <Button
                          asChild
                          size="lg"
                          className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105" // Enhanced button styling
                        >
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /> {/* Icon animation */}
                            Live Demo
                          </Link>
                        </Button>
                      )}

                      {/* Optional: Add a button for videoLink if you want to display it */}
                      {project.videoLink && (
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="group glass-effect hover:bg-primary/10 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 bg-transparent"
                        >
                          <Link href={project.videoLink} target="_blank" rel="noopener noreferrer">
                            <Youtube className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            Watch Video
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {index < projectsData.length - 1 && <Separator className="mt-24 lg:mt-32 border-border/30" />} {/* Adjusted margins */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;