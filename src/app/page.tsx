import CinematicBackground from "@/components/CinematicBackground";
import SynthSparkles from "@/components/SynthSparkles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Creative from "@/components/Creative";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { ResumeProvider } from "@/components/ResumeContext";

export default function Home() {
  return (
    <ResumeProvider>
      <main className="min-h-screen relative overflow-hidden text-paper-50 bg-botanica-950">
        {/* Premium Cinematic Splash / Loading Screen */}
        <LoadingScreen />

        {/* Synth Botanical Atrium Background Photograph */}
        <CinematicBackground />

        {/* Atmospheric Synth Botanical Spores / Pollen Particle Layer */}
        <SynthSparkles />

        {/* Floating Glass Navigation Pill Header */}
        <Navbar />

        {/* Main 3D Architectural Glass Portfolio Sections */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Creative />
        <ResumeSection />
        <Contact />
        <Footer />
      </main>
    </ResumeProvider>
  );
}
