"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Eye, CheckCircle2, TrendingUp } from "lucide-react";

const VALUES = [
  {
    icon: Eye,
    step: "01",
    title: "Understand",
    description: "See your financial picture clearly.",
  },
  {
    icon: CheckCircle2,
    step: "02",
    title: "Act",
    description: "Know what deserves your attention.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Grow",
    description: "Build better financial habits over time.",
  },
];

export default function ValueStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative border-y border-card-border bg-canvas-subtle/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-card-border py-6 sm:py-8"
        >
          {VALUES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-3.5 py-4 md:py-1 ${
                  idx === 0
                    ? "md:pr-8"
                    : idx === 1
                    ? "md:px-8"
                    : "md:pl-8"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-card border border-card-border flex items-center justify-center shrink-0 text-charcoal shadow-subtle">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-charcoal-faint tracking-wider">
                      {item.step}
                    </span>
                    <h3 className="text-sm font-semibold text-charcoal tracking-tight font-sans">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-charcoal-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
