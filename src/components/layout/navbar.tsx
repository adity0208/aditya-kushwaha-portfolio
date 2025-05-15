"use client";

import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase, User, FileText, MoreHorizontal, Phone, Home as HomeIcon, Settings } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { href: '#home', label: 'Home', icon: HomeIcon },
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Work', icon: Briefcase }, // Points to existing projects section
  { href: '#blog', label: 'Blog', icon: FileText },
  { href: '#more', label: 'More', icon: MoreHorizontal },
  // { href: '#contact', label: 'Book a Call', icon: Phone }, // Will be a button for desktop
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
      // Include 'Book a Call' for active state detection if it scrolls to #contact
      const allNavItems = [...navItems, { href: '#contact', label: 'Book a Call', icon: Phone}];
      allNavItems.forEach(item => {
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
          <a
            onClick={onItemClick}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === 'contact' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Book a Call
          </a>
        </Link>
      )}
    </>
  );

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border/50 transition-all duration-300 ${isScrolled ? 'bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/50 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2" prefetch={false}>
          <span className="text-2xl font-bold text-primary">AB</span>
          <span className="font-semibold text-lg text-foreground hidden sm:inline-block">Aayush Bharti</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <NavLinks />
          <Button asChild size="sm" className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#contact">Book a Call</Link>
          </Button>
        </nav>
        {/* Placeholder for theme toggle or settings - currently not functional */}
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
          <SheetContent side="right" className="bg-background/95 backdrop-blur-lg">
            <div className="grid gap-4 p-4">
              <Link href="#home" className="flex items-center gap-2 mb-4" prefetch={false}>
                <span className="text-2xl font-bold text-primary">AB</span>
                <span className="font-semibold text-lg text-foreground">Aayush Bharti</span>
              </Link>
              <nav className="grid gap-3">
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
