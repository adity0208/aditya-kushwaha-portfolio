"use client";

import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase, User, FileText, MoreHorizontal, Phone, Home as HomeIcon, Settings, MessageSquareText, Info, Star } from 'lucide-react'; // Added MessageSquareText, Info, Star for new nav

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

// Updated navItems to match image: Home, About, Work, Blog, More. "Book a Call" is separate.
const navItems: NavItem[] = [
  { href: '#home', label: 'Home', icon: HomeIcon },
  { href: '#about', label: 'About', icon: Info }, // Changed icon to Info for 'About'
  { href: '#projects', label: 'Work', icon: Briefcase },
  { href: '#skills', label: 'Skills', icon: Star }, // Placeholder, as blog/more sections don't exist yet
  { href: '#certifications', label: 'Certifications', icon: FileText }, // Placeholder
];

const Navbar: FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      let currentSection = 'home';
      // Include 'contact' for active state detection for "Book a Call"
      const allNavItemsForScroll = [...navItems, { href: '#contact', label: 'Book a Call', icon: Phone }];
      allNavItemsForScroll.forEach(item => {
        const section = document.getElementById(item.href.substring(1));
        if (section && section.offsetTop <= window.scrollY + window.innerHeight / 2) {
          currentSection = item.href.substring(1);
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null; 
  }

  const NavLinks: FC<{ onItemClick?: () => void; isMobile?: boolean }> = ({ onItemClick, isMobile }) => (
    <>
      {navItems.map((item) => (
        <Link key={item.label} href={item.href} legacyBehavior passHref>
          <a
            onClick={onItemClick}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === item.href.substring(1) ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {item.label}
          </a>
        </Link>
      ))}
      {isMobile && ( // "Book a Call" button for mobile drawer
         <Link href="#contact" legacyBehavior passHref>
            <Button
              onClick={onItemClick}
              variant="default"
              size="sm"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-2"
            >
              Book a Call
            </Button>
        </Link>
      )}
    </>
  );

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border/50 transition-all duration-300 ${isScrolled ? 'bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/50 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2" prefetch={false}>
          <span className="text-2xl font-bold text-primary">AK</span>
          <span className="font-semibold text-lg text-foreground hidden sm:inline-block">Aditya Kushwaha</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6"> {/* Increased gap for desktop nav items */}
          <NavLinks />
          <Button asChild size="sm" className="ml-2 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact">Book a Call</Link>
          </Button>
        </nav>
        {/* Optional: Theme toggle or settings icon can be added here if needed in future */}
        {/* <Button variant="ghost" size="icon" className="hidden md:inline-flex text-muted-foreground hover:text-primary">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button> */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden text-muted-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur-lg w-[250px] sm:w-[300px]">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-border/50">
                <Link href="#home" className="flex items-center gap-2 mb-4" prefetch={false} onClick={() => document.querySelector<HTMLButtonElement>('[data-radix-dialog-close]')?.click()}>
                  <span className="text-2xl font-bold text-primary">AK</span>
                  <span className="font-semibold text-lg text-foreground">Aditya Kushwaha</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-3 p-4 flex-grow">
                <NavLinks onItemClick={() => document.querySelector<HTMLButtonElement>('[data-radix-dialog-close]')?.click()} isMobile={true} />
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
