import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <main id="main-content" className="flex-1 flex flex-col relative z-0 w-full focus:outline-none" tabIndex={-1}>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Philosophy />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
