"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  PieChart,
  Sparkles,
  Target,
  TrendingUp,
  ArrowDownRight,
  ShieldCheck,
  Check,
  SlidersHorizontal,
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
      id="product"
      className="relative py-20 sm:py-28 lg:py-36 bg-canvas border-t border-card-border/80 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-charcoal-muted bg-canvas-subtle border border-card-border">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-wider">Built around you</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-charcoal leading-[1.12] font-sans">
            Everything you need to understand your money.
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal">
            Thoughtfully designed tools that connect everyday decisions with your long-term picture.
          </p>
        </div>

        {/* Asymmetric Editorial Bento Grid (7+5 / 5+7) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* FEATURE 1: Financial overview (Large - Col 7) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="md:col-span-12 lg:col-span-7 group rounded-2xl sm:rounded-3xl border border-card-border bg-white p-6 sm:p-9 shadow-subtle hover:shadow-card hover:border-charcoal/30 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-muted flex items-center gap-1.5">
                  <PieChart className="w-3.5 h-3.5 text-accent" />
                  Core Architecture
                </span>
                <span className="text-[10px] font-mono text-accent bg-accent-subtle px-2 py-0.5 rounded border border-accent-border/50">
                  REAL-TIME
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-charcoal">
                Financial overview
              </h3>
              <p className="text-sm sm:text-[15px] text-charcoal-muted leading-relaxed max-w-lg">
                See balances, spending and savings in one clear picture.
              </p>
            </div>

            {/* Visual: Miniature Balance + Spending Preview */}
            <div className="rounded-xl border border-card-borderSubtle bg-canvas-subtle/50 p-4 sm:p-5 space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3 pb-3 border-b border-card-borderSubtle">
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
                  <div className="w-[1px] h-6 bg-card-border" />
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-charcoal-muted block">Savings</span>
                    <span className="font-semibold text-accent">$8,420</span>
                  </div>
                </div>
              </div>

              {/* Miniature Sparkline Graphic */}
              <div className="w-full h-16 relative">
                <svg
                  viewBox="0 0 400 65"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="miniSpark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#124E3F" stopOpacity="0.14" />
                      <stop offset="100%" stopColor="#124E3F" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10 50 C 70 48, 120 38, 180 38 C 240 38, 280 22, 340 22 C 370 22, 385 10, 395 10 L 395 65 L 10 65 Z"
                    fill="url(#miniSpark)"
                  />
                  <path
                    d="M 10 50 C 70 48, 120 38, 180 38 C 240 38, 280 22, 340 22 C 370 22, 385 10, 395 10"
                    fill="none"
                    stroke="#124E3F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="395" cy="10" r="3" fill="#124E3F" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[11px] text-charcoal-muted font-mono pt-1">
                <span>6-month trend</span>
                <span className="text-accent font-semibold">+8.4% monthly trajectory</span>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 2: Smart insights (Col 5) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="md:col-span-12 lg:col-span-5 group rounded-2xl sm:rounded-3xl border border-card-border bg-white p-6 sm:p-9 shadow-subtle hover:shadow-card hover:border-charcoal/30 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-muted flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  Pattern Recognition
                </span>
                <span className="text-[10px] font-mono text-charcoal-muted bg-canvas-subtle px-2 py-0.5 rounded border border-card-border">
                  SIGNALS
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-charcoal">
                Smart insights
              </h3>
              <p className="text-sm sm:text-[15px] text-charcoal-muted leading-relaxed">
                Understand patterns and changes without digging through spreadsheets.
              </p>
            </div>

            {/* Visual: Insight Notification UI */}
            <div className="rounded-xl border border-accent-border/60 bg-accent-subtle/50 p-4 sm:p-5 space-y-3">
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
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.14, ease: "easeOut" }}
            className="md:col-span-12 lg:col-span-5 group rounded-2xl sm:rounded-3xl border border-card-border bg-white p-6 sm:p-9 shadow-subtle hover:shadow-card hover:border-charcoal/30 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-muted flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-accent" />
                  Target Tracking
                </span>
                <span className="text-[10px] font-mono text-charcoal-muted bg-canvas-subtle px-2 py-0.5 rounded border border-card-border">
                  PURPOSE
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-charcoal">
                Goals
              </h3>
              <p className="text-sm sm:text-[15px] text-charcoal-muted leading-relaxed">
                Connect everyday financial decisions to the things you&apos;re working toward.
              </p>
            </div>

            {/* Visual: Goal Progress Indicator UI */}
            <div className="rounded-xl border border-card-borderSubtle bg-canvas-subtle/50 p-4 sm:p-5 space-y-3.5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-semibold text-charcoal">Emergency fund</span>
                  <span className="text-[11px] font-mono text-charcoal-muted block">Liquid safety reserve</span>
                </div>
                <div className="text-right">
                  <span className="text-base font-bold text-accent font-sans">72%</span>
                  <span className="text-[10px] font-mono text-charcoal-muted block">complete</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="w-full h-2 rounded-full bg-white border border-card-border overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: "72%" }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-muted">
                  <span>Current: $7,200</span>
                  <span>Target: $10,000</span>
                </div>
              </div>

              <div className="pt-2 border-t border-card-borderSubtle flex items-center gap-1.5 text-xs text-charcoal-muted">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>On track for December 2026 completion</span>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 4: Progress (Col 7) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-12 lg:col-span-7 group rounded-2xl sm:rounded-3xl border border-card-border bg-white p-6 sm:p-9 shadow-subtle hover:shadow-card hover:border-charcoal/30 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-muted flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-accent" />
                  Habit Dynamics
                </span>
                <span className="text-[10px] font-mono text-accent bg-accent-subtle px-2 py-0.5 rounded border border-accent-border/50">
                  VELOCITY
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-charcoal">
                Progress
              </h3>
              <p className="text-sm sm:text-[15px] text-charcoal-muted leading-relaxed max-w-lg">
                See how your financial habits change over time.
              </p>
            </div>

            {/* Visual: Monthly Habit / Trend Visualization */}
            <div className="rounded-xl border border-card-borderSubtle bg-canvas-subtle/50 p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-charcoal">Monthly Net Savings Trend</span>
                <span className="font-mono text-charcoal-muted">
                  {activeBar !== null
                    ? `${monthlyProgress[activeBar].month}: +$${monthlyProgress[activeBar].amount}`
                    : "Steady growth"}
                </span>
              </div>

              {/* Monthly Histogram Bars */}
              <div className="h-20 flex items-end justify-between gap-3 pt-2">
                {monthlyProgress.map((item, idx) => {
                  const isHovered = activeBar === idx;
                  const isLast = idx === monthlyProgress.length - 1;

                  return (
                    <div
                      key={item.month}
                      onMouseEnter={() => setActiveBar(idx)}
                      onMouseLeave={() => setActiveBar(null)}
                      className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end cursor-pointer group/bar"
                    >
                      <div
                        className={`w-full max-w-[48px] rounded-t-md transition-all duration-200 ${
                          isHovered || isLast
                            ? "bg-accent shadow-subtle"
                            : "bg-charcoal/20 group-hover/bar:bg-charcoal/40"
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
