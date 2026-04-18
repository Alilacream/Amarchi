import HeroSection from "@/components/sections/HeroSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TeamSection from "@/components/sections/TeamSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RevealOnScroll>
        <AboutPreviewSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ServicesSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ProjectsSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <TeamSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <PartnersSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ContactCtaSection />
      </RevealOnScroll>
    </>
  );
}
