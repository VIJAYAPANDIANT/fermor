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
      className="relative py-20 sm:py-28 lg:py-36 bg-canvas border-t border-card-border/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-charcoal-muted bg-canvas-subtle border border-card-border">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-wider">How it works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-charcoal leading-[1.12] font-sans">
            From financial noise to a clearer next step.
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal">
            Fermor brings your financial picture together, helps you understand what matters, and gives you a clearer path forward.
          </p>
        </div>

        {/* 3-Step Journey */}
        <div className="relative">
          
          {/* Desktop Horizontal Connecting Track */}
          <div
            className="hidden md:block absolute top-7 left-[15%] right-[15%] h-[1px] bg-card-border z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === STEPS.length - 1;

              return (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.12, ease: "easeOut" }}
                  className="group relative flex flex-col"
                >
                  {/* Step Indicator Header */}
                  <div className="flex items-center justify-between md:justify-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-card-border flex items-center justify-center text-charcoal shadow-subtle group-hover:border-accent group-hover:shadow-card transition-all duration-200">
                      <Icon className="w-5 h-5 text-accent transition-transform duration-200 group-hover:scale-110" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-canvas-subtle border border-card-border text-charcoal-muted">
                        STEP {step.number}
                      </span>
                      {!isLast && (
                        <ArrowRight className="w-3.5 h-3.5 text-charcoal-faint hidden md:inline-block ml-1 opacity-50" />
                      )}
                    </div>
                  </div>

                  {/* Mobile Connecting Line */}
                  {!isLast && (
                    <div
                      className="md:hidden absolute left-7 top-14 bottom-[-40px] w-[1px] bg-card-border -z-10"
                      aria-hidden="true"
                    />
                  )}

                  {/* Step Content */}
                  <div className="space-y-2.5 pl-0 md:pl-0">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-charcoal font-sans">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] font-medium text-charcoal leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed pt-1 border-t border-card-borderSubtle">
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
