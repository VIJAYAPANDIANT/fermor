"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link2, Sparkles, ArrowUpRight, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Connect",
    description: "Bring your financial information into one place.",
    detail: "Link checking, savings, investments, and cards in minutes with read-only bank-grade sync.",
    icon: Link2,
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Fermor turns financial activity into simple insights you can actually understand.",
    detail: "Automated pattern recognition translates transactions into clear spending velocity and monthly health scores.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Act",
    description:
      "Use those insights to make better decisions and move toward your goals.",
    detail: "Confidently deploy surplus funds toward savings targets, debt paydown, or long-term growth.",
    icon: ArrowUpRight,
  },
];

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="relative py-16 sm:py-20 lg:py-24 bg-canvas border-t border-card-border scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2">
            <span className="eyebrow-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>How it works</span>
            </span>
          </div>

          <h2 className="section-heading">
            From financial noise to a clearer next step.
          </h2>

          <p className="section-subtext">
            Fermor brings your financial picture together, helps you understand what matters, and gives you a clearer path forward.
          </p>
        </div>

        {/* 3-Step Journey */}
        <div className="relative">
          
          {/* Desktop Horizontal Connecting Track */}
          <div
            className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[1px] bg-card-border z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-10 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === STEPS.length - 1;

              return (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                  className="group relative flex flex-col"
                >
                  {/* Step Indicator Header */}
                  <div className="flex items-center justify-between md:justify-start gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-card border border-card-border flex items-center justify-center text-charcoal shadow-subtle group-hover:border-accent transition-all duration-150">
                      <Icon className="w-4 h-4 text-accent transition-transform duration-150 group-hover:scale-105" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-canvas-subtle border border-card-border text-charcoal-muted">
                        STEP {step.number}
                      </span>
                      {!isLast && (
                        <ArrowRight className="w-3.5 h-3.5 text-charcoal-faint hidden md:inline-block ml-1 opacity-40" />
                      )}
                    </div>
                  </div>

                  {/* Mobile Connecting Line */}
                  {!isLast && (
                    <div
                      className="md:hidden absolute left-6 top-12 bottom-[-32px] w-[1px] bg-card-border -z-10"
                      aria-hidden="true"
                    />
                  )}

                  {/* Step Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-charcoal font-sans">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-charcoal leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-xs text-charcoal-muted leading-relaxed pt-1 border-t border-card-borderSubtle">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
