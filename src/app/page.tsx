import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutMeSection from '@/components/sections/about-me-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import CertificationsSection from '@/components/sections/certifications-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection id="home" />
        <AboutMeSection id="about" />
        <ProjectsSection id="projects" />
        <SkillsSection id="skills" />
        <CertificationsSection id="certifications" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
