"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  PieChart,
  Sparkles,
  Target,
  TrendingUp,
  ArrowDownRight,
  Check,
} from "lucide-react";

export default function Features() {
  const shouldReduceMotion = useReducedMotion();
  const [activeBar, setActiveBar] = useState<number | null>(null);

  const monthlyProgress = [
    { month: "May", amount: 820, height: 42 },
    { month: "Jun", amount: 1150, height: 58 },
    { month: "Jul", amount: 1340, height: 68 },
    { month: "Aug", amount: 1620, height: 82 },
    { month: "Sep", amount: 1830, height: 94 },
  ];

  return (
    <section
      id="features"
      className="relative py-16 sm:py-20 lg:py-24 bg-canvas border-t border-card-border scroll-mt-20"
    >
      <span id="product" className="sr-only" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2">
            <span className="eyebrow-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Built around you</span>
            </span>
          </div>

          <h2 className="section-heading">
            Everything you need to understand your money.
          </h2>

          <p className="section-subtext">
            Thoughtfully designed tools that connect everyday decisions with your long-term picture.
          </p>
        </div>

        {/* Asymmetric Editorial Bento Grid (7+5 / 5+7) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* FEATURE 1: Financial overview (Large - Col 7) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:col-span-12 lg:col-span-7 group rounded-2xl border border-card-border bg-card p-6 sm:p-7 lg:p-8 shadow-subtle hover:shadow-card hover:border-charcoal/25 hover:-translate-y-0.5 transition-all duration-150 flex flex-col justify-between"
          >
            <div className="space-y-1.5 mb-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-muted flex items-center gap-1.5">
                  <PieChart className="w-3.5 h-3.5 text-accent" />
                  Core Architecture
                </span>
                <span className="text-[10px] font-mono text-accent bg-accent-subtle px-2 py-0.5 rounded border border-accent-border/40">
                  REAL-TIME
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-charcoal">
                Financial overview
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed max-w-lg">
                See balances, spending and savings in one clear picture.
              </p>
            </div>

            {/* Visual: Miniature Balance + Spending Preview */}
            <div className="rounded-xl border border-card-borderSubtle bg-canvas-subtle/50 p-4 space-y-3.5">
              <div className="flex flex-wrap items-baseline justify-between gap-3 pb-2.5 border-b border-card-borderSubtle">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-muted block">
                    Combined Assets
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-charcoal font-sans">
                    $24,680<span className="text-xs font-mono font-normal text-charcoal-muted">.00</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-charcoal-muted block">Spending</span>
                    <span className="font-semibold text-charcoal">$3,240</span>
                  </div>
                  <div className="w-[1px] h-5 bg-card-border" />
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-charcoal-muted block">Savings</span>
                    <span className="font-semibold text-accent">$8,420</span>
                  </div>
                </div>
              </div>

              {/* Miniature Sparkline Graphic */}
              <div className="w-full h-14 relative">
                <svg
                  viewBox="0 0 400 65"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="miniSpark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(var(--color-accent))" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="rgb(var(--color-accent))" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10 50 C 70 48, 120 38, 180 38 C 240 38, 280 22, 340 22 C 370 22, 385 10, 395 10 L 395 65 L 10 65 Z"
                    fill="url(#miniSpark)"
                  />
                  <path
                    d="M 10 50 C 70 48, 120 38, 180 38 C 240 38, 280 22, 340 22 C 370 22, 385 10, 395 10"
                    fill="none"
                    stroke="rgb(var(--color-accent))"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="395" cy="10" r="3" fill="rgb(var(--color-accent))" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[10px] text-charcoal-muted font-mono pt-0.5">
                <span>6-month trend</span>
                <span className="text-accent font-semibold">+8.4% monthly trajectory</span>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 2: Smart insights (Col 5) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
            className="md:col-span-12 lg:col-span-5 group rounded-2xl border border-card-border bg-card p-6 sm:p-7 lg:p-8 shadow-subtle hover:shadow-card hover:border-charcoal/25 hover:-translate-y-0.5 transition-all duration-150 flex flex-col justify-between"
          >
            <div className="space-y-1.5 mb-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-muted flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  Pattern Recognition
                </span>
                <span className="text-[10px] font-mono text-charcoal-muted bg-canvas-subtle px-2 py-0.5 rounded border border-card-border">
                  SIGNALS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-charcoal">
                Smart insights
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Understand patterns and changes without digging through spreadsheets.
              </p>
            </div>

            {/* Visual: Insight Notification UI */}
            <div className="rounded-xl border border-accent-border/50 bg-accent-subtle/40 p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                  <ArrowDownRight className="w-3.5 h-3.5" />
                  Dining spend is down 14% this month.
                </span>
              </div>

              <p className="text-xs text-charcoal-muted leading-relaxed">
                You spent <span className="font-semibold text-charcoal">$340 less</span> than your 60-day baseline across weekend dining.
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-accent-border/40 text-[10px] font-mono text-accent">
                <span>Automated Recommendation</span>
                <span className="font-semibold">Move $250 to Goals</span>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 3: Goals (Col 5) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
            className="md:col-span-12 lg:col-span-5 group rounded-2xl border border-card-border bg-card p-6 sm:p-7 lg:p-8 shadow-subtle hover:shadow-card hover:border-charcoal/25 hover:-translate-y-0.5 transition-all duration-150 flex flex-col justify-between"
          >
            <div className="space-y-1.5 mb-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-muted flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-accent" />
                  Target Tracking
                </span>
                <span className="text-[10px] font-mono text-charcoal-muted bg-canvas-subtle px-2 py-0.5 rounded border border-card-border">
                  PURPOSE
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-charcoal">
                Goals
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Connect everyday financial decisions to the things you&apos;re working toward.
              </p>
            </div>

            {/* Visual: Goal Progress Indicator UI */}
            <div className="rounded-xl border border-card-borderSubtle bg-canvas-subtle/50 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-charcoal">Emergency fund</span>
                  <span className="text-[10px] font-mono text-charcoal-muted block">Liquid safety reserve</span>
                </div>
                <div className="text-right">
                  <span className="text-sm sm:text-base font-bold text-accent font-sans">72%</span>
                  <span className="text-[10px] font-mono text-charcoal-muted block">complete</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="w-full h-1.5 rounded-full bg-card border border-card-border overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ width: "72%" }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-charcoal-muted">
                  <span>Current: $7,200</span>
                  <span>Target: $10,000</span>
                </div>
              </div>

              <div className="pt-2 border-t border-card-borderSubtle flex items-center gap-1.5 text-[11px] text-charcoal-muted">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>On track for December completion</span>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 4: Progress (Col 7) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.16, ease: "easeOut" }}
            className="md:col-span-12 lg:col-span-7 group rounded-2xl border border-card-border bg-card p-6 sm:p-7 lg:p-8 shadow-subtle hover:shadow-card hover:border-charcoal/25 hover:-translate-y-0.5 transition-all duration-150 flex flex-col justify-between"
          >
            <div className="space-y-1.5 mb-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-muted flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-accent" />
                  Habit Dynamics
                </span>
                <span className="text-[10px] font-mono text-accent bg-accent-subtle px-2 py-0.5 rounded border border-accent-border/40">
                  VELOCITY
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-charcoal">
                Progress
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed max-w-lg">
                See how your financial habits change over time.
              </p>
            </div>

            {/* Visual: Monthly Habit / Trend Visualization */}
            <div className="rounded-xl border border-card-borderSubtle bg-canvas-subtle/50 p-4 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-charcoal">Monthly Net Savings Trend</span>
                <span className="font-mono text-[11px] text-charcoal-muted">
                  {activeBar !== null
                    ? `${monthlyProgress[activeBar].month}: +$${monthlyProgress[activeBar].amount}`
                    : "Steady growth"}
                </span>
              </div>

              {/* Monthly Histogram Bars */}
              <div className="h-16 flex items-end justify-between gap-3 pt-1">
                {monthlyProgress.map((item, idx) => {
                  const isHovered = activeBar === idx;
                  const isLast = idx === monthlyProgress.length - 1;

                  return (
                    <div
                      key={item.month}
                      onMouseEnter={() => setActiveBar(idx)}
                      onMouseLeave={() => setActiveBar(null)}
                      className="flex-1 flex flex-col items-center gap-1 h-full justify-end cursor-pointer group/bar"
                    >
                      <div
                        className={`w-full max-w-[42px] rounded-t-sm transition-all duration-150 ${
                          isHovered || isLast
                            ? "bg-accent shadow-subtle"
                            : "bg-charcoal/20 group-hover/bar:bg-charcoal/35"
                        }`}
                        style={{ height: `${item.height}%` }}
                      />
                      <span
                        className={`text-[10px] font-mono transition-colors ${
                          isHovered || isLast
                            ? "text-charcoal font-semibold"
                            : "text-charcoal-muted"
                        }`}
                      >
                        {item.month}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-card-borderSubtle flex items-center justify-between text-[11px] text-charcoal-muted">
                <span>5 consecutive months of positive surplus</span>
                <span className="font-semibold text-accent font-mono">+123% velocity</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
