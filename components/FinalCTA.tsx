"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-canvas border-t border-card-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Rounded Hero Container */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative rounded-2xl sm:rounded-3xl border border-card-border bg-white shadow-elevated p-7 sm:p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* Subtle Abstract Financial SVG Background Coordinate Curves */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 select-none overflow-hidden"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1000 400"
              className="w-full h-full object-cover"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="ctaGridFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#124E3F" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#124E3F" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Trajectory Reference Guidelines */}
              <line x1="50" y1="80" x2="950" y2="80" stroke="#E7E5DD" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="50" y1="180" x2="950" y2="180" stroke="#E7E5DD" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="50" y1="280" x2="950" y2="280" stroke="#E7E5DD" strokeDasharray="4 4" strokeWidth="1" />

              {/* Abstract Ascending Financial Wave */}
              <path
                d="M 50 320 C 250 310, 400 240, 550 210 C 700 180, 820 110, 950 80"
                fill="none"
                stroke="#124E3F"
                strokeWidth="1.5"
                strokeOpacity="0.2"
              />
              <path
                d="M 50 320 C 250 310, 400 240, 550 210 C 700 180, 820 110, 950 80 L 950 400 L 50 400 Z"
                fill="url(#ctaGridFade)"
              />
            </svg>
          </div>

          {/* Foreground CTA Content */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-6 sm:space-y-7">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="eyebrow-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>A clearer way forward</span>
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-charcoal leading-[1.12] font-sans">
              Start making more sense of your money.
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal max-w-xl mx-auto">
              Understand where you stand today, make better decisions tomorrow, and keep moving toward what matters.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-1">
              <Link href="#get-started" className="btn-primary group">
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
              
              <Link href="#how-it-works" className="btn-secondary">
                <span>Explore Fermor</span>
              </Link>
            </div>

            {/* Trust Assurances */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-charcoal-muted">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>Zero setup fees</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>Read-only sync</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>Cancel anytime</span>
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
