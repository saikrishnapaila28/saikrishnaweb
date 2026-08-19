"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [capsuleStyle, setCapsuleStyle] = useState<{ left: number; width: number; height: number } | null>(null);

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "work", "experience", "skills", "creative"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const target = linkRefs.current[index];
    const container = navContainerRef.current;

    if (target && container) {
      const targetRect = target.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setCapsuleStyle({
        left: targetRect.left - containerRect.left - 12,
        width: targetRect.width + 24,
        height: targetRect.height + 12,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "WORK", href: "#work", id: "work" },
    { name: "EXPERIENCE", href: "#experience", id: "experience" },
    { name: "SKILLS", href: "#skills", id: "skills" },
    { name: "CREATIVE", href: "#creative", id: "creative" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 transition-all duration-500">
      
      {/* Outer Floating Glass Navbar Container */}
      <div
        className={`max-w-6xl mx-auto px-6 py-3 outer-glass-navbar flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? "bg-botanica-950/75 border-white/20 shadow-2xl"
            : "bg-botanica-950/50 border-white/16"
        }`}
      >
        
        {/* 1. SK Logo Physically INSIDE Left of Outer Navbar */}
        <button
          onClick={scrollToTop}
          title="Back to top"
          aria-label="Back to top"
          className="flex items-center justify-center p-1 focus:outline-none transition-opacity hover:opacity-90 shrink-0"
        >
          <div className="relative h-9 w-16 sm:w-20">
            <Image
              src="/sk-logo.png"
              alt="Sai Krishna Paila SK Logo"
              fill
              className="object-contain object-left drop-shadow-[0_0_12px_rgba(244,162,97,0.3)]"
              priority
            />
          </div>
        </button>

        {/* 2. Navigation Container with ONE Single Sliding Glass Hover Capsule */}
        <div
          ref={navContainerRef}
          onMouseLeave={handleMouseLeave}
          className="hidden md:flex items-center gap-7 relative py-1 font-cozy text-xs tracking-wider"
        >
          {/* Sliding Glass Hover Capsule */}
          {capsuleStyle && (
            <div
              className={`hover-glass-capsule absolute pointer-events-none ${
                hoveredIndex !== null ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                left: `${capsuleStyle.left}px`,
                width: `${capsuleStyle.width}px`,
                height: `${capsuleStyle.height}px`,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          )}

          {/* Navigation Items (Plain Text in normal state) */}
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[idx] = el;
                }}
                onMouseEnter={() => handleMouseEnter(idx)}
                className={`relative z-10 py-1.5 font-medium transition-colors duration-200 ${
                  hoveredIndex === idx
                    ? "text-paper-50 font-semibold"
                    : isActive
                    ? "text-golden-400 font-semibold"
                    : "text-paper-200/80"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-golden-400" />
                )}
              </a>
            );
          })}
        </div>

        {/* 3. RESUME Button Physically INSIDE Right of Outer Navbar */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenResume}
            className="glass-pill-apple px-5 py-2 text-xs font-cozy font-semibold flex items-center gap-2 border border-golden-500/30 text-golden-300 hover:bg-white/15 hover:border-golden-400 transition-all shadow-sm shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-golden-400" />
            <span>RESUME</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-paper-50 hover:text-golden-400 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Glass Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-6xl mx-auto bg-botanica-950/90 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-5 text-sm font-cozy tracking-widest text-paper-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-golden-400 transition-colors border-b border-white/10 pb-2.5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-golden-400" />
                )}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 bg-golden-500 text-botanica-950 rounded-xl text-xs tracking-widest font-cozy font-bold hover:bg-golden-400 transition-all mt-2"
            >
              <FileText className="w-4 h-4" />
              VIEW RESUME
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
