"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative z-10 bg-botanica-950/60 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="space-y-1 text-center md:text-left">
          <span className="font-sans font-bold tracking-widest text-xs uppercase text-paper-50">
            SAI KRISHNA PAILA
          </span>
          <p className="text-xs font-mono text-golden-400">
            Computer Science Student · Data Science
          </p>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-6 text-xs font-mono text-paper-300">
          <a
            href="https://github.com/saikrishnapaila28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-golden-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saikrishnapaila"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-golden-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:saikrishnapaila28@gmail.com"
            className="hover:text-golden-400 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right Copyright */}
        <div className="text-xs font-mono text-paper-400 text-center md:text-right">
          <span>© 2026 Sai Krishna Paila</span>
        </div>

      </div>
    </footer>
  );
}
