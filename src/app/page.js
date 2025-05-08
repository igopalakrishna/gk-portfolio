import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="px-6 max-w-3xl mx-auto space-y-4">
      <Hero />
      <About />
      <Experience />
      <Education />
      <ProjectsSection />
      <Skills />
      <Contact />
    </main>
  );
}
