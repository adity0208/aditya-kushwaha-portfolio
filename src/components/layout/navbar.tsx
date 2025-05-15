"use client";

import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase, User, Code, Award, Mail, Mountain } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { href: '#home', label: 'Home', icon: Mountain },
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#certifications', label: 'Certifications', icon: Award },
  { href: '#contact', label: 'Contact', icon: Mail },
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
      navItems.forEach(item => {
        const section = document.getElementById(item.href.substring(1));
        if (section && section.offsetTop <= window.scrollY + window.innerHeight / 2) {
          currentSection = item.href.substring(1);
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null; 
  }

  const NavLinks: FC<{ onItemClick?: () => void }> = ({ onItemClick }) => (
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
    </>
  );

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2" prefetch={false}>
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg text-foreground">Aditya's Ascent</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <NavLinks />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link href="#home" className="flex items-center gap-2 mb-4" prefetch={false}>
                <Mountain className="h-6 w-6 text-primary" />
                <span className="font-semibold text-lg text-foreground">Aditya's Ascent</span>
              </Link>
              <nav className="grid gap-3">
                <NavLinks onItemClick={() => document.querySelector<HTMLButtonElement>('[data-radix-dialog-close]')?.click()} />
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
