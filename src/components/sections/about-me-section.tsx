"use client" // Crucial for animations and useEffect

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Re-adding Sparkles, Code2, Heart, Coffee for the richer design elements
import { Github, Linkedin, Twitter, ArrowRight, Sparkles, Code2, Heart, Coffee } from 'lucide-react';
import { useEffect, useState } from 'react'; // For scroll-triggered animations

interface AboutMeSectionProps {
  id: string;
}

const AboutMeSection: FC<AboutMeSectionProps> = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Disconnect after first intersection if animation should only play once
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed (0.1 means 10% of element visible)
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    // Cleanup observer on component unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [id]); // Dependency array includes 'id' for re-observing if id changes

  return (
    <section id={id} className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Background gradient from your original complex code */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Text Content - with slide-in animation */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            {/* Badge from your original complex code */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">KNOW ABOUT ME</span>
            </div>

            {/* Heading with gradient text and animated underline from your original complex code */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Full-Stack Developer and a little bit of{" "}
              <span className="text-gradient relative"> {/* Requires text-gradient CSS */}
                everything
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary rounded-full animate-gradient" /> {/* Requires animate-gradient CSS */}
              </span>
            </h2>

            {/* Paragraphs - using content from your simpler code, but with hover effect */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="hover:text-foreground transition-colors duration-300">
                I'm <span className="font-semibold text-foreground">Aditya Kushwaha</span>, a proactive full-stack
                developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on
                solving complex problems with clean, efficient code. My expertise spans <span className="font-medium text-primary">React</span>,{" "}
                <span className="font-medium text-primary">Next.js</span>, and{" "}
                <span className="font-medium text-primary">Node.js</span>, and I'm always eager to learn more.
              </p>

              <p className="hover:text-foreground transition-colors duration-300">
                When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing
                every part of it.
              </p>

              <p className="hover:text-foreground transition-colors duration-300">
                I believe in waking up each day eager to make a difference!{" "}
                <Coffee className="inline w-5 h-5 ml-1 text-accent" /> {/* Coffee icon added back */}
              </p>
            </div>

            {/* Social Links - with enhanced styling and magnetic-hover from your original complex code */}
            <div className="mt-10 flex items-center space-x-6">
              <Link
                href="https://www.linkedin.com/in/aditya-kushwaha-512581259/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group p-3 rounded-xl glass-effect hover:bg-primary/10 transition-all duration-300 hover:scale-110 magnetic-hover"
              >
                <Linkedin className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href="https://github.com/adity0208/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group p-3 rounded-xl glass-effect hover:bg-primary/10 transition-all duration-300 hover:scale-110 magnetic-hover"
              >
                <Github className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href="https://twitter.com/aditya02_08" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="group p-3 rounded-xl glass-effect hover:bg-primary/10 transition-all duration-300 hover:scale-110 magnetic-hover"
              >
                <Twitter className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>

            {/* "Explore my work" button with enhanced styling and animation from original complex code */}
            <Button
              asChild
              variant="ghost" // Changed to ghost to match original "Explore" button style
              className="group mt-10 px-0 text-primary hover:text-accent text-lg font-semibold hover:bg-transparent"
            >
              <Link href="#projects">
                <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore my work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right Column: Image/Logo - with all its animations and effects from your original complex code */}
          <div
            className={`flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="relative group">
              {/* Outer glowing effect for the image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
                <div className="absolute inset-0 rounded-full glass-effect p-4 hover-glow"> {/* hover-glow needs CSS */}
                  <Image
                    src="/images/3dlogo.png" 
                    alt="Aditya Kushwaha - Full Stack Developer"
                    fill
                    className="rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Floating Code2 icon */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center animate-float shadow-lg">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                {/* Floating Heart icon */}
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center animate-float shadow-lg"
                  style={{ animationDelay: "1s" }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;