"use client";

import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen paper-grain flex items-center justify-center p-6 text-charcoal-900">
      <div className="paper-card p-8 md:p-12 max-w-md w-full text-center space-y-6 bg-parchment-100 border-parchment-300 shadow-paper">
        
        {/* Botanical Stamp */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-parchment-200 border border-parchment-300 rounded-full text-xs font-mono text-earth-700">
          <Compass className="w-3.5 h-3.5 text-moss-700" />
          <span>404 // PAGE UNCHARTED</span>
        </div>

        <h1 className="text-4xl font-serif font-normal text-forest-950">
          Path Not Found
        </h1>

        <p className="text-sm text-charcoal-700 font-sans leading-relaxed">
          The quiet study garden path you are looking for doesn&apos;t exist or has moved.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest-800 text-parchment-100 rounded-lg text-xs font-mono tracking-wider font-medium hover:bg-forest-900 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO PORTFOLIO</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
