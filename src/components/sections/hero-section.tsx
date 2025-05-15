import type { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  id: string;
}

const HeroSection: FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Aditya Kushwaha</span>
          <span className="block text-primary mt-2 sm:mt-3">Aspiring Software Engineer</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Passionate about web development & AI, skilled in Python, Java, and JavaScript. Dedicated to crafting user-centric solutions and leveraging technology for impact.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="#projects">View My Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-primary border-primary hover:bg-primary/10 shadow-lg transition-transform hover:scale-105">
            <Link href="#about">Learn More <ArrowDown className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <Link href="https://www.linkedin.com/in/aditya-kushwaha-b89a24247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://github.com/adityakushwaha0208" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="h-8 w-8 text-primary/50" />
      </div>
    </section>
  );
};

export default HeroSection;
