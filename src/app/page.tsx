import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutMeSection from '@/components/sections/about-me-section';
import ProjectsSection from '@/components/sections/projects-section';
// SkillsSection import removed
// CertificationsSection import removed
import ContactSection from '@/components/sections/contact-section';
// Placeholder sections for new nav items if they become actual pages/sections
// import BlogSection from '@/components/sections/blog-section'; 
// import MoreSection from '@/components/sections/more-section';


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection id="home" />
        <AboutMeSection id="about" />
        <ProjectsSection id="projects" /> {/* Corresponds to "Work" in new nav */}
        {/* <SkillsSection id="skills" /> Removed as per request */}
        {/* <CertificationsSection id="certifications" /> Removed as per request */}
        {/* <BlogSection id="blog" /> */}
        {/* <MoreSection id="more" /> */}
        <ContactSection id="contact" /> {/* Corresponds to "Book a Call" in new nav */}
      </main>
      <Footer />
    </div>
  );
}
