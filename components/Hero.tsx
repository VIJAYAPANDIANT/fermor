"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";
import FinancialPreview from "./FinancialPreview";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            {/* Small Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-charcoal-muted bg-canvas-subtle border border-card-border">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Financial clarity platform</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-charcoal leading-[1.07] font-sans">
                Your money, <br className="hidden sm:inline" />
                <span className="text-charcoal-muted">made clearer.</span>
              </h1>
              
              {/* Supporting Text */}
              <p className="text-base sm:text-lg lg:text-[19px] text-charcoal-muted leading-relaxed max-w-xl font-normal">
                Understand where your money goes, make smarter decisions, and build toward what matters.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <Link
                href="#get-started"
                className="group inline-flex items-center justify-center gap-2 bg-charcoal text-canvas hover:bg-charcoal-light active:scale-[0.98] px-6 py-3.5 rounded-full text-sm font-semibold shadow-subtle hover:shadow-card transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
              
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-charcoal active:scale-[0.98] px-6 py-3.5 rounded-full text-sm font-medium border border-card-border hover:border-card-border/80 shadow-subtle transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <span>Explore Fermor</span>
              </Link>
            </motion.div>

            {/* Reassuring Trust Cues */}
            <motion.div
              variants={itemVariants}
              className="pt-3 sm:pt-4 border-t border-card-border/60 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-charcoal-muted"
            >
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>Read-only bank connections</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>256-bit encryption</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>No sponsored financial products</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Custom Financial Preview */}
          <div className="lg:col-span-6 xl:col-span-6 lg:pl-4">
            <FinancialPreview />
          </div>

        </div>
      </div>
    </section>
  );
}
