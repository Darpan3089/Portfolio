import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WorkSection } from "@/components/sections/work";
import { TechSection } from "@/components/sections/tech";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Darpan Patel | Software Engineer | React.js & Next.js Expert",
  description:
    "Software Engineer specializing in React and TypeScript, building dynamic, data-driven applications with optimized state management and scalable architectures.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <TechSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
