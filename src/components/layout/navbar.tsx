"use client" 
import type { FC } from "react"
import type React from "react" // Explicitly import React type
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Briefcase, Phone, HomeIcon, Info, BookOpen, Sparkles } from "lucide-react"

interface NavItem {
  href: string
  label: string
  icon: React.ElementType // Using React.ElementType for icon components
}

const navItems: NavItem[] = [
  { href: "#home", label: "Home", icon: HomeIcon },
  { href: "#about", label: "About", icon: Info },
  { href: "#projects", label: "Work", icon: Briefcase },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "#contact", label: "Contact", icon: Sparkles },
]

const Navbar: FC = () => {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false) // State to control Sheet open/close

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      let currentSection = "home"
      // Include the #contact link for scroll tracking
      const allNavItemsForScroll = [...navItems, { href: "#contact", label: "Book a Call", icon: Phone }]

      allNavItemsForScroll.forEach((item) => {
        const sectionElement = document.getElementById(item.href.substring(1))
        // Check if element is in view or past the middle of the screen
        if (sectionElement && sectionElement.offsetTop <= window.scrollY + window.innerHeight / 2) {
          currentSection = item.href.substring(1)
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null // Don't render until mounted (client-side only)
  }

  const NavLinks: FC<{ onItemClick?: () => void; isMobile?: boolean }> = ({ onItemClick, isMobile }) => (
    <>
      {navItems.map((item) => {
        const Icon = item.icon // Get the Lucide icon component
        const isActive = activeSection === item.href.substring(1) // Check if this item's section is active

        return (
          // Use legacyBehavior and passHref for Next.js Link
          <Link key={item.label} href={item.href} legacyBehavior passHref>
            <a
              onClick={onItemClick} // Close sheet on click for mobile
              className={`group relative flex items-center gap-3 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer
                ${isMobile ? "w-full justify-start" : "justify-center"}
                ${
                  isActive
                    ? "text-primary bg-primary/10 shadow-lg shadow-primary/20" // Active state styling
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5" // Inactive hover state styling
                }
              `}
            >
              {isMobile && <Icon className="h-5 w-5" />} {/* Show icon only on mobile */}
              <span className={`${isMobile ? "" : "hidden sm:inline"}`}>{item.label}</span> {/* Hide label on desktop for small screens */}
              {isActive && !isMobile && (
                // Active indicator dot for desktop
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </a>
          </Link>
        )
      })}

      {isMobile && (
        // "Book a Call" button for mobile, wrapped in Link
        <Link href="#contact" legacyBehavior passHref>
          <Button
            onClick={onItemClick} // Close sheet on click
            size="lg" // Larger size
            className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 rounded-2xl"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book a Call
          </Button>
        </Link>
      )}
    </>
  )

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out
        ${
          isScrolled
            ? "bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-black/5" // Scrolled state styling
            : "bg-transparent border-b border-transparent" // Transparent at top
        }`}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Name (Aditya Kushwaha) */}
        <Link href="#home" className="group flex items-center gap-3 transition-all duration-300 hover:scale-105">
          <div className="relative">
            {/* Blurry gradient background for AK */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            {/* AK text with gradient background */}
            <div className="relative bg-gradient-to-r from-primary to-accent text-white font-bold text-2xl w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
              AK
            </div>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline-block group-hover:text-primary transition-colors duration-300">
            Aditya Kushwaha
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 glass-effect px-6 py-3 rounded-3xl">
          <NavLinks />
        </nav>

        {/* Desktop "Book a Call" Button */}
        <div className="hidden md:block">
          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white shadow-xl hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 rounded-2xl px-8"
          >
            <Link href="#contact">
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Book a Call
            </Link>
          </Button>
        </div>

        {/* Mobile Sheet (Hamburger Menu) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden glass-effect border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 rounded-2xl bg-transparent"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          {/* Sheet Content (Mobile Menu) */}
          <SheetContent
            side="right"
            className="w-80 bg-background/95 backdrop-blur-2xl border-l border-border/50 p-0"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Sheet Header (Logo & Name) */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <Link
                  href="#home"
                  className="group flex items-center gap-3 transition-all duration-300"
                  onClick={() => setIsOpen(false)} // Close sheet on click
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-r from-primary to-accent text-white font-bold text-xl w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg">
                      AK
                    </div>
                  </div>
                  <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    Aditya Kushwaha
                  </span>
                </Link>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-2 p-6 flex-grow">
                <NavLinks onItemClick={() => setIsOpen(false)} isMobile={true} /> {/* Close sheet on click */}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar