"use client" // This directive is crucial for useState and useEffect

import type { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Re-added Sparkles and Code2 as they are used in the enhanced version
import { Github, Linkedin, ArrowRight, Mail, Sparkles, Code2 } from 'lucide-react';
import { useEffect, useState } from 'react'; // Keep useState and useEffect for animations

interface HeroSectionProps {
  id: string;
}

const HeroSection: FC<HeroSectionProps> = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false); // For staggered animations

  useEffect(() => {
    // Trigger animations on component mount
    setIsVisible(true);
  }, []);

  return (
    <section
      id={id}
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-24 lg:py-32
                 bg-gradient-to-b from-background via-background to-[hsl(var(--primary)/0.05)] overflow-hidden"
    >
      {/* Subtle planetary glow at the bottom (from target code) */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-[40%] md:h-[50%]
                   bg-radial-gradient-hero opacity-50 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, hsl(var(--primary)/0.3) 0%, transparent 60%)'
        }}
      />

      {/* Floating Blobs (from your original code) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* "Available for new projects" Badge (re-introduced from your original, with animations) */}
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8 animate-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Available for new projects</span>
          </div>
        </div>

        {/* Main Heading (Combining best of both, with gradient & animation from your original) */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">I help founders turn</span>
            <span className="block mt-2 sm:mt-4">
              <span className="text-gradient">ideas into</span> {/* Requires text-gradient CSS */}
            </span>
            <span className="block mt-2 sm:mt-4">
              seamless{" "}
              <span className="italic relative">
                digital experiences
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-gradient" /> {/* Requires animate-gradient CSS */}
              </span>
            </span>
          </h1>
        </div>

        {/* Sub-heading/Bio (from your original) */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-muted-foreground sm:text-2xl leading-relaxed">
            Hello, I'm <span className="font-semibold text-foreground">Aditya Kushwaha</span>
            <span className="inline-block animate-float ml-2" style={{ animationDelay: "1s" }}>
              👋
            </span>
            <br />A Full Stack Developer crafting exceptional digital solutions.
          </p>
        </div>

        {/* Buttons (Enhanced with group hover effects from your original) */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <Link href="#contact">
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group glass-effect hover:bg-primary/10 border-primary/20 hover:border-primary/40 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="#projects">
                <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View My Work
              </Link>
            </Button>
          </div>
        </div>

        {/* Social Icons (Enhanced with glass effect and hover effects from your original, keeping mail) */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="mt-16 flex justify-center space-x-8">
            <Link
              href="https://www.linkedin.com/in/aditya-kushwaha-b89a24247/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group p-4 rounded-xl glass-effect hover:bg-primary/10 transition-all duration-300 hover:scale-110 magnetic-hover"
            >
              <Linkedin className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://github.com/adityakushwaha0208"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group p-4 rounded-xl glass-effect hover:bg-primary/10 transition-all duration-300 hover:scale-110 magnetic-hover"
            >
              <Github className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="mailto:adityakushwaha0208@gmail.com"
              aria-label="Email Aditya"
              className="group p-4 rounded-xl glass-effect hover:bg-primary/10 transition-all duration-300 hover:scale-110 magnetic-hover"
            >
              <Mail className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator (from your original) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;