"use client";

import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "saikrishnapaila28@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 relative z-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl space-y-8">
          
          <div className="space-y-4">
            <span className="text-xs font-cozy font-semibold text-golden-400 uppercase tracking-widest block">
              Contact
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-paper-50 tracking-wide leading-tight">
              Have a project, idea or opportunity in mind?
            </h2>
            <p className="text-lg text-paper-200/90 font-cozy leading-relaxed">
              Feel free to reach out via email or connect with me on GitHub and LinkedIn.
            </p>
          </div>

          {/* Email Card */}
          <div className="glass-3d-plane p-6 sm:p-10 space-y-6">
            <div className="space-y-1 font-cozy">
              <span className="text-xs text-golden-400 font-semibold uppercase tracking-wider">
                Direct Email
              </span>
              <div className="text-xl sm:text-3xl font-mono text-paper-50 break-all pt-1">
                {email}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/10 font-cozy">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-7 py-3 bg-golden-500 text-botanica-950 font-bold text-xs rounded-full hover:bg-golden-400 hover:scale-[1.02] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>SEND EMAIL</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3 glass-pill-apple text-paper-200 text-xs font-semibold hover:bg-white/15 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-golden-400" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-golden-400" />
                    <span>COPY ADDRESS</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2 font-cozy">
            <a
              href="https://github.com/saikrishnapaila28"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill-apple px-6 py-3 flex items-center gap-3 text-xs text-paper-200 font-semibold hover:text-golden-400 transition-all"
            >
              <Github className="w-4 h-4 text-golden-400" />
              <span>GitHub / saikrishnapaila28</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-golden-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/saikrishnapaila"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill-apple px-6 py-3 flex items-center gap-3 text-xs text-paper-200 font-semibold hover:text-golden-400 transition-all"
            >
              <Linkedin className="w-4 h-4 text-golden-400" />
              <span>LinkedIn / saikrishnapaila</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-golden-400" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
