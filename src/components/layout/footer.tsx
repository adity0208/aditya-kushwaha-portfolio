import type { FC } from 'react';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/adityakushwaha0208" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/aditya-kushwaha-b89a24247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Aditya Kushwaha. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with Next.js and Tailwind CSS. Hosted on Firebase.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
