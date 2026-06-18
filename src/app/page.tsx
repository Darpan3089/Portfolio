import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WorkSection } from "@/components/sections/work";
import { TechSection } from "@/components/sections/tech";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ProcessSection } from "@/components/sections/process";
import { ContactSection } from "@/components/sections/contact";
import { SectionIndicator } from "@/components/section-indicator";

export const metadata: Metadata = {
  title:
    "Darpan Patel | Freelance React & Next.js Engineer | Real-Time Web Apps",
  description:
    "Freelance React & Next.js engineer with 5+ years building fast, real-time, data-heavy web apps for healthcare, fintech, and IoT teams. Available for dashboards, performance audits, and full product builds. Replies within 24 hours.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SectionIndicator />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <TechSection />
        <ProjectsSection />
        <ServicesSection />
        {/* <TestimonialsSection /> */}
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
