import type { FC } from 'react';
import ProjectCard, { type Project } from '@/components/cards/project-card';

interface ProjectsSectionProps {
  id: string;
}

const projectsData: Project[] = [
  {
    title: 'CareLinks - Community Health Worker App',
    description: 'A community health worker app developed for the GDG on Campus Hackathon, selected for the prototype phase.',
    longDescription: 'This live project utilizes React, Node.js, and Firebase for secure data storage and efficient real-time syncing. It features PNG-sharing functionality and aims to create scalable and personalized healthcare solutions.',
    imageUrls: [{ src: 'https://placehold.co/600x400.png', hint: 'health app interface' }],
    tags: ['React', 'Node.js', 'Firebase', 'Healthcare', 'Mobile-first'],
    githubLink: 'https://github.com/adityakushwaha0208/CareLinks-Project', // Placeholder
    liveLink: 'https://carelinks.example.com', // Placeholder for actual live link
    isLive: true,
  },
  {
    title: 'AI-Powered Healthcare Chatbot',
    description: 'An intelligent chatbot built with Next.js, designed to provide healthcare assistance and information.',
    longDescription: 'This project leverages AI and NLP technologies to understand user queries and offer relevant medical guidance. Key features include symptom checking, appointment scheduling suggestions, and general health Q&A. My role involved full-stack development using Next.js and integrating AI APIs.',
    imageUrls: [{ src: 'https://placehold.co/600x400.png', hint: 'chatbot interface' }],
    tags: ['Next.js', 'AI', 'NLP', 'Healthcare', 'Chatbot'],
    githubLink: 'https://github.com/adityakushwaha0208/AI-Healthcare-Chatbot', // Placeholder
    // liveLink: 'https://ai-chatbot.example.com', // Placeholder
    videoLink: 'https://www.youtube.com/watch?v=your-video-id', // Placeholder
  },
  {
    title: 'Automated Appointment Reminder Application',
    description: 'Developed during a DEV.to Hackathon, this app sends automated appointment reminders via Twilio API.',
    longDescription: 'Focused on improving user experience by reducing missed appointments. Implemented scheduling features for automated reminders via phone calls and SMS, integrating the Twilio API for real-time communication.',
    imageUrls: [{ src: 'https://placehold.co/600x400.png', hint: 'reminder system interface' }],
    tags: ['Twilio API', 'Node.js', 'Automation', 'UX'],
    githubLink: 'https://github.com/adityakushwaha0208/Appointment-Reminder-App', // Placeholder
  },
];

const ProjectsSection: FC<ProjectsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
