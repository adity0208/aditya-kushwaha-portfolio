
"use client";

import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase, User, FileText, MoreHorizontal, Phone, Home as HomeIcon, Settings, MessageSquareText, Info, Star, BookOpen, Sparkles } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

// Updated navItems: Added Blog and More
const navItems: NavItem[] = [
  { href: '#home', label: 'Home', icon: HomeIcon },
  { href: '#about', label: 'About', icon: Info },
  { href: '#projects', label: 'Work', icon: Briefcase },
  { href: '/blog', label: 'Blog', icon: BookOpen }, // Placeholder link, can be updated to a section or page
  { href: '/more', label: 'More', icon: Sparkles }, // Placeholder link
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
      const allNavItemsForScroll = [...navItems, { href: '#contact', label: 'Book a Call', icon: Phone }];
      allNavItemsForScroll.forEach(item => {
        const sectionElement = document.getElementById(item.href.substring(1));
        if (sectionElement && sectionElement.offsetTop <= window.scrollY + window.innerHeight / 2) {
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
      {isMobile && ( 
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
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out
                  ${isScrolled 
                    ? 'bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/50 shadow-md border-b border-border/50' 
                    : 'bg-transparent border-b border-transparent'
                  }`}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2" prefetch={false}>
          <span className="text-2xl font-bold text-primary">AK</span>
          <span className="font-semibold text-lg text-foreground hidden sm:inline-block">Aditya Kushwaha</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6"> 
          <NavLinks />
          <Button asChild size="sm" className="ml-2 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact">Book a Call</Link>
          </Button>
        </nav>
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
