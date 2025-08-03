// /app/page.tsx
import AboutSection from "./components/AboutSection";
import BackToTop from "./components/BackToTop";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InternshipsSection from "./components/InternshipsSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <EducationSection />
      <InternshipsSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
      <StatsSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
