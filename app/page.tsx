import HeroSection from "@/components/sections/HeroSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TeamSection from "@/components/sections/TeamSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <PartnersSection />
      <ContactCtaSection />
    </>
  );
}
