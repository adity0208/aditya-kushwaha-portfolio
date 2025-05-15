import type { FC } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface FooterLink {
  href: string;
  label: string;
}

interface LinkColumn {
  title: string;
  links: FooterLink[];
}

const linkColumns: LinkColumn[] = [
  {
    title: 'General',
    links: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#projects', label: 'Projects' }, // "Work" in nav points to #projects
      { href: '#', label: 'Blog' }, // Placeholder
    ],
  },
  {
    title: 'Specifics',
    links: [
      { href: '#', label: 'Guest Book' }, // Placeholder
      { href: '#', label: 'Bucket List' }, // Placeholder
      { href: '#', label: 'Uses' }, // Placeholder
      { href: '#', label: 'Attribution' }, // Placeholder
    ],
  },
  {
    title: 'Extra',
    links: [
      { href: '#contact', label: 'Book a call' },
      { href: '#', label: 'Links' }, // Placeholder
    ],
  },
];

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground py-12 md:py-16 border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Column: Logo, Bio, Copyright, Social */}
          <div className="md:col-span-2 lg:col-span-1 flex flex-col space-y-4">
            <Link href="#home" className="flex items-center gap-2" prefetch={false}>
              <span className="text-3xl font-bold text-primary">AK</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm Aditya - a full-stack developer, freelancer & problem solver. Thanks for checking out my site!
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Aditya Kushwaha.
            </p>
            <div className="flex space-x-4 mt-2">
              <Link href="https://www.linkedin.com/in/aditya-kushwaha-b89a24247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://github.com/adityakushwaha0208" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile"> {/* Replace with actual Twitter if available */}
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* Link Columns */}
          {linkColumns.map((column) => (
            <div key={column.title} className="text-sm">
              <h3 className="font-semibold text-foreground mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
         <div className="mt-12 pt-8 border-t border-border/50 text-center">
           <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS, and ShadCN UI. Hosted on Firebase.
          </p>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
