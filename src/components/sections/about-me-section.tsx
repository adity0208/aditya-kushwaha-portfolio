import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

interface AboutMeSectionProps {
  id: string;
}

const AboutMeSection: FC<AboutMeSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 sm:py-24 bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="md:pr-8">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
              KNOW ABOUT ME
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Full-Stack Developer and a little bit of <span className="text-accent">everything</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Aditya Kushwaha, a proactive full-stack developer passionate
                about creating dynamic web experiences. From frontend to
                backend, I thrive on solving complex problems with clean,
                efficient code. My expertise spans React, Next.js, and Node.js,
                and I'm always eager to learn more.
              </p>
              <p>
                When I'm not immersed in work, I'm exploring new ideas and
                staying curious. Life's about balance, and I love embracing
                every part of it.
              </p>
              <p>
                I believe in waking up each day eager to make a difference!
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <Link href="https://www.linkedin.com/in/aditya-kushwaha-b89a24247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://github.com/adityakushwaha0208" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              {/* Using Twitter as a placeholder for the bird icon, assuming X/Twitter */}
              <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                <Twitter className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
            <Button asChild variant="link" className="mt-8 px-0 text-primary hover:text-accent">
              <Link href="#projects">
                More about me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right Column: Image/Logo */}
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <Image
                src="https://placehold.co/400x400.png" 
                alt="Aditya Kushwaha Logo - AK"
                layout="fill"
                objectFit="contain" // Or 'cover' depending on desired effect for a logo
                className="rounded-full shadow-2xl" // Example styling
                data-ai-hint="logo AK lettermark circular"
              />
              {/* Optional: Add decorative elements here if needed, like the blue radar background in the example image.
                  This could be complex with pure CSS and might require SVG or multiple layered divs.
                  For simplicity, a placeholder image is used.
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
