"use client"

import type { FC } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useState, useEffect } from "react"

const Footer: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const footerElement = document.querySelector("footer")
    if (footerElement) {
      observer.observe(footerElement)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="bg-gradient-to-t from-muted/30 to-background border-t border-border/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {/* Logo & Bio */}
            <div className="text-center md:text-left max-w-md">
              <Link
                href="#home"
                className="group inline-flex items-center gap-3 mb-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-r from-primary to-accent text-white font-bold text-2xl w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                    AK
                  </div>
                </div>
                <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  Aditya Kushwaha
                </span>
              </Link>

              <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-500">
                Full-stack developer crafting exceptional digital experiences with passion and precision.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <Link
                href="mailto:adityakushwaha0208@gmail.com"
                aria-label="Email Aditya"
                className="group p-4 rounded-xl glass-effect hover:bg-accent/10 transition-all duration-300 hover:scale-110 magnetic-hover"
              >
                <Mail className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/aditya-kushwaha-512581259/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group p-4 rounded-xl glass-effect hover:bg-primary/10 transition-all duration-300 hover:scale-110 magnetic-hover"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </Link>

              <Link
                href="https://github.com/adityakushwaha0208"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group p-4 rounded-xl glass-effect hover:bg-primary/10 transition-all duration-300 hover:scale-110 magnetic-hover"
              >
                <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                © {currentYear} Aditya Kushwaha · All rights reserved
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-accent animate-pulse" />
                <span>using Next.js & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
