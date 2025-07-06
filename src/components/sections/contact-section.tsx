"use client"

import type { FC } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Send, Sparkles, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

interface ContactSectionProps {
  id: string
}

const ContactSection: FC<ContactSectionProps> = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false)
  const email = "adityakushwaha0208@gmail.com"
  const linkedinUrl = "https://www.linkedin.com/in/aditya-kushwaha-b89a24247/"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(id)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [id])

  return (
    <section id={id} className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect mb-8 animate-glow hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium uppercase tracking-wider">GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Let's{" "}
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] relative">
              Connect
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-gradient bg-[length:200%_auto]" />
            </span>
          </h2>
        </div>

        {/* Main Card */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Card className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-xl relative overflow-hidden group">
            {/* Card Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <CardHeader className="text-center relative z-10 pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Let's Connect!
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto hover:text-foreground transition-colors duration-500">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something
                great.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center space-y-8 relative z-10 pb-12">
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-md">
                <Button
                  asChild
                  size="lg"
                  className="group relative bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105 px-8 py-6 text-lg font-semibold rounded-xl overflow-hidden"
                >
                  <a href={`mailto:${email}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <Mail className="mr-2 h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <span className="relative z-10">Email Me</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group glass-effect hover:bg-primary/10 border-primary/20 hover:border-primary/40 w-full sm:w-auto px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-500 hover:scale-105 bg-transparent relative overflow-hidden"
                >
                  <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                    <span className="relative z-10 text-primary group-hover:text-primary">LinkedIn Profile</span>
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </Button>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-8">
                <div className="group p-4 rounded-xl glass-effect hover:bg-primary/5 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Email</p>
                      <p className="text-muted-foreground text-xs group-hover:text-primary transition-colors duration-300">
                        {email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 rounded-xl glass-effect hover:bg-primary/5 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">LinkedIn</p>
                      <p className="text-muted-foreground text-xs group-hover:text-primary transition-colors duration-300">
                        Professional Network
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Text */}
              <div className="pt-6 border-t border-border/30 w-full">
                <p className="text-sm text-muted-foreground text-center leading-relaxed hover:text-foreground transition-colors duration-500">
                  Feel free to reach out via email or connect with me on LinkedIn.{" "}
                  <span className="inline-block animate-float" style={{ animationDelay: "1s" }}>
                    ✨
                  </span>
                  <br />
                  <span className="font-medium text-primary">I look forward to hearing from you!</span>
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </CardContent>
          </Card>
        </div>

        {/* Additional CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect hover:scale-105 transition-transform duration-300 cursor-default">
            <Send className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Response time: <span className="font-medium text-primary">Within 24 hours</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
