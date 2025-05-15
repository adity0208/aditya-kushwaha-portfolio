import type { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowRight, Mail } from 'lucide-react';
// Badge import removed as it's no longer used

interface HeroSectionProps {
  id: string;
}

const HeroSection: FC<HeroSectionProps> = ({ id }) => {
  return (
    <section 
      id={id} 
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-24 lg:py-32 
                 bg-gradient-to-b from-background via-background to-[hsl(var(--primary)/0.05)] overflow-hidden"
    >
      {/* Subtle planetary glow at the bottom */}
      <div 
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-[40%] md:h-[50%] 
                   bg-radial-gradient-hero opacity-50 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, hsl(var(--primary)/0.3) 0%, transparent 60%)'
        }}
      />

      <div className="container z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge removed based on user request */}
        {/* 
        <Badge variant="default" className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground py-1 px-3 text-sm animate-pulse">
          New <ArrowRight className="ml-1 h-3 w-3 inline" /> Next Ventures is live!
        </Badge> 
        */}

        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl mt-6"> {/* Added mt-6 to compensate for badge removal if needed */}
          <span className="block">I help founders turn ideas</span>
          <span className="block mt-2 sm:mt-3">into seamless <span className="italic">digital experiences</span></span>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Hello, I'm Aditya Kushwaha <span role="img" aria-label="waving hand">👋</span> a Full Stack Developer.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="#contact">Let's Connect <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          {/* Email link removed based on user request */}
          {/*
          <Link href="mailto:adityakushwaha0208@gmail.com" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail className="mr-2 h-4 w-4" />
            adityakushwaha0208@gmail.com
          </Link>
          */}
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <Link href="https://www.linkedin.com/in/aditya-kushwaha-b89a24247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://github.com/adityakushwaha0208" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
