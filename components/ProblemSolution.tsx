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
    <section className="relative py-20 sm:py-28 lg:py-36 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Heading & Framing (Sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-charcoal-muted bg-canvas-subtle border border-card-border">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="uppercase tracking-wider">Financial clarity</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-charcoal leading-[1.12] font-sans">
              Your finances shouldn&apos;t feel like a puzzle.
            </h2>

            <div className="space-y-3 pt-1 text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-md">
              <p>Most financial tools show you numbers.</p>
              <p className="text-charcoal font-medium">
                Fermor helps you understand what those numbers actually mean.
              </p>
            </div>
          </div>

          {/* Right Column: Numbered Editorial Breakdown */}
          <div className="lg:col-span-7 space-y-12 sm:space-y-16">
            {PROBLEMS.map((item, index) => (
              <motion.div
                key={item.number}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                className={`${
                  index !== PROBLEMS.length - 1
                    ? "pb-12 sm:pb-16 border-b border-card-border/80"
                    : ""
                } space-y-6`}
              >
                {/* Number & Title */}
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-2xl sm:text-3xl font-light text-charcoal-faint tracking-tighter">
                    {item.number}
                  </span>
                  <h3 className="text-2xl sm:text-[26px] font-semibold tracking-tight text-charcoal">
                    {item.title}
                  </h3>
                </div>

                {/* Problem vs Fermor Solution Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 pt-2 pl-0 sm:pl-12">
                  {/* The Friction */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-muted block">
                      The Friction
                    </span>
                    <p className="text-sm sm:text-[15px] text-charcoal-muted leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  {/* With Fermor */}
                  <div className="space-y-1.5 rounded-xl bg-canvas-subtle/70 border border-card-border/70 p-4 sm:p-5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      With Fermor
                    </span>
                    <p className="text-sm sm:text-[15px] font-medium text-charcoal leading-relaxed">
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
