"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const PROBLEMS = [
  {
    number: "01",
    title: "Too much information",
    problem:
      "Your accounts contain plenty of data, but finding what matters can take time.",
    solution: "Bring the important signals into one clear view.",
  },
  {
    number: "02",
    title: "Hard to know what to do next",
    problem:
      "Knowing your balance doesn't necessarily tell you what action to take.",
    solution: "Turn financial activity into useful, understandable insights.",
  },
  {
    number: "03",
    title: "Goals get lost in the noise",
    problem:
      "Long-term financial goals can be difficult to connect with everyday spending.",
    solution: "Keep today's decisions connected to tomorrow's goals.",
  },
];

export default function ProblemSolution() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Heading & Framing (Sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="eyebrow-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Financial clarity</span>
              </span>
            </div>

            <h2 className="section-heading">
              Your finances shouldn&apos;t feel like a puzzle.
            </h2>

            <div className="space-y-2 pt-1 text-base text-charcoal-muted leading-relaxed max-w-md">
              <p>Most financial tools show you numbers.</p>
              <p className="text-charcoal font-medium">
                Fermor helps you understand what those numbers actually mean.
              </p>
            </div>
          </div>

          {/* Right Column: Numbered Editorial Breakdown */}
          <div className="lg:col-span-7 space-y-10 sm:space-y-12">
            {PROBLEMS.map((item, index) => (
              <motion.div
                key={item.number}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                className={`${
                  index !== PROBLEMS.length - 1
                    ? "pb-10 sm:pb-12 border-b border-card-border"
                    : ""
                } space-y-5`}
              >
                {/* Number & Title */}
                <div className="flex items-baseline gap-4 sm:gap-5">
                  <span className="font-mono text-xl sm:text-2xl font-light text-charcoal-faint tracking-tighter">
                    {item.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-charcoal">
                    {item.title}
                  </h3>
                </div>

                {/* Problem vs Fermor Solution Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-1 sm:pl-9">
                  {/* The Friction */}
                  <div className="space-y-1 p-3.5 sm:p-4 rounded-xl bg-canvas-subtle/30 border border-card-borderSubtle">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-muted block">
                      The Friction
                    </span>
                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  {/* With Fermor */}
                  <div className="space-y-1 rounded-xl bg-white border border-card-border p-3.5 sm:p-4 shadow-subtle">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      With Fermor
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-charcoal leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
