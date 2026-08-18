"use client";

import { useState } from "react";
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
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden text-paper-50 bg-botanica-950">
      {/* Synth Botanical Atrium Background Photograph */}
      <CinematicBackground />

      {/* Atmospheric Synth Botanical Spores / Pollen Particle Layer */}
      <SynthSparkles />

      {/* Floating Glass Navigation Pill Header */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main 3D Architectural Glass Portfolio Sections */}
      <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Creative />
      <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />
      <Contact />
      <Footer />

      {/* Translucent Resume Modal Reader */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </main>
  );
}
