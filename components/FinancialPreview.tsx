"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Sparkles, ShieldCheck, Check } from "lucide-react";

// Monthly balance trend data points (SVG coordinate system)
const DATA_POINTS = [
  { month: "Nov", val: 18200, x: 20, y: 72 },
  { month: "Dec", val: 19800, x: 70, y: 64 },
  { month: "Jan", val: 21400, x: 120, y: 52 },
  { month: "Feb", val: 20900, x: 170, y: 56 },
  { month: "Mar", val: 22850, x: 220, y: 38 },
  { month: "Apr", val: 24680, x: 280, y: 18 },
];

export default function FinancialPreview() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<"overview" | "breakdown">("overview");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // SVG curved path builder
  const svgPath = "M 20 72 C 45 70, 50 64, 70 64 C 95 64, 100 52, 120 52 C 145 52, 150 56, 170 56 C 195 56, 200 38, 220 38 C 250 38, 255 18, 280 18";
  const svgArea = `${svgPath} L 280 90 L 20 90 Z`;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto lg:max-w-none"
    >
      {/* Outer Floating Card Container */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-card-border shadow-card p-5 sm:p-7 transition-all duration-300 hover:shadow-elevated">
        
        {/* Top Account Meta Header */}
        <div className="flex items-center justify-between pb-5 border-b border-card-borderSubtle">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-canvas-subtle border border-card-border flex items-center justify-center text-charcoal">
              <ShieldCheck className="w-4 h-4 text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-charcoal tracking-tight">Main Treasury</span>
                <span className="text-[11px] font-mono text-charcoal-muted">· 4021</span>
              </div>
              <p className="text-[11px] text-charcoal-muted">Liquid assets & reserves</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-subtle/80 border border-accent-border/60">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-medium text-accent">Synced</span>
          </div>
        </div>

        {/* Primary Metric: Total Balance */}
        <div className="pt-5 pb-4">
          <div className="flex items-baseline justify-between mb-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-muted">
              Total balance
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent bg-accent-subtle px-2 py-0.5 rounded-full border border-accent-border/40">
              <TrendingUp className="w-3 h-3" />
              <span>+$1,830 (+8.0%)</span>
            </span>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal font-sans">
              $24,680
            </span>
            <span className="text-xs font-mono text-charcoal-muted">.00 USD</span>
          </div>
        </div>

        {/* Small Line Chart (Trajectory) */}
        <div className="relative py-2 px-1 rounded-xl bg-canvas-subtle/40 border border-card-borderSubtle mb-5">
          <div className="flex items-center justify-between px-2 pt-1 pb-1">
            <span className="text-[11px] font-medium text-charcoal-muted">6-Month Trajectory</span>
            <span className="text-[10px] font-mono text-charcoal-faint">
              {hoveredIndex !== null ? `${DATA_POINTS[hoveredIndex].month}: $${DATA_POINTS[hoveredIndex].val.toLocaleString()}` : "Trend +$6,480"}
            </span>
          </div>

          <div className="w-full h-24 relative overflow-hidden">
            <svg
              viewBox="0 0 300 95"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              aria-label="Balance trajectory chart"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#124E3F" stopOpacity="0.16" />
                  <stop offset="90%" stopColor="#124E3F" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Horizontal Reference Lines */}
              <line x1="10" y1="20" x2="290" y2="20" stroke="#E7E5DD" strokeDasharray="3 3" strokeWidth="0.8" />
              <line x1="10" y1="56" x2="290" y2="56" stroke="#E7E5DD" strokeDasharray="3 3" strokeWidth="0.8" />

              {/* Area Under Curve */}
              <path d={svgArea} fill="url(#chartGradient)" />

              {/* Line Stroke */}
              <path
                d={svgPath}
                fill="none"
                stroke="#124E3F"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Interactive Data Points */}
              {DATA_POINTS.map((pt, idx) => (
                <g key={pt.month} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                  {/* Outer ring for current point */}
                  {idx === DATA_POINTS.length - 1 && (
                    <circle cx={pt.x} cy={pt.y} r="6" fill="#124E3F" fillOpacity="0.2" className="animate-ping" />
                  )}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={hoveredIndex === idx || idx === DATA_POINTS.length - 1 ? 4 : 2.5}
                    fill={hoveredIndex === idx || idx === DATA_POINTS.length - 1 ? "#124E3F" : "#FFFFFF"}
                    stroke="#124E3F"
                    strokeWidth="1.8"
                    className="cursor-pointer transition-all duration-150"
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Month Labels */}
          <div className="flex justify-between px-2 pt-1 text-[10px] font-mono text-charcoal-muted">
            {DATA_POINTS.map((pt) => (
              <span key={pt.month}>{pt.month}</span>
            ))}
          </div>
        </div>

        {/* Secondary Metrics Grid: Monthly Spending & Savings Indicator */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          
          {/* Monthly Spending Card */}
          <div className="p-3.5 rounded-xl border border-card-border bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-muted">
                  Monthly spending
                </span>
                <span className="text-[10px] font-mono text-charcoal-muted">81% of cap</span>
              </div>
              <div className="text-xl font-semibold text-charcoal font-sans tracking-tight">
                $3,240
              </div>
            </div>

            {/* Spending Categories Segmented Bar */}
            <div className="mt-3 space-y-1.5">
              <div className="w-full h-1.5 rounded-full bg-canvas-subtle overflow-hidden flex gap-0.5">
                <div className="h-full bg-charcoal rounded-l-full" style={{ width: "48%" }} title="Housing: 48%" />
                <div className="h-full bg-charcoal-muted" style={{ width: "28%" }} title="Food & Living: 28%" />
                <div className="h-full bg-accent-border" style={{ width: "24%" }} title="Discretionary: 24%" />
              </div>

              <div className="flex items-center justify-between text-[10px] text-charcoal-muted">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-charcoal inline-block" /> Housing
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-charcoal-muted inline-block" /> Food
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-border inline-block" /> Other
                </span>
              </div>
            </div>
          </div>

          {/* Savings Indicator Card */}
          <div className="p-3.5 rounded-xl border border-card-border bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-muted">
                  Savings
                </span>
                <span className="text-[10px] font-semibold text-accent">On track</span>
              </div>
              <div className="text-xl font-semibold text-charcoal font-sans tracking-tight">
                $8,420
              </div>
            </div>

            {/* Savings Progress Indicator */}
            <div className="mt-3 space-y-1.5">
              <div className="w-full h-1.5 rounded-full bg-canvas-subtle overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-500"
                  style={{ width: "84.2%" }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] text-charcoal-muted font-mono">
                <span>Goal: $10,000</span>
                <span className="text-accent font-semibold">84% achieved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Health / Insight Indicator Banner */}
        <div className="rounded-xl border border-accent-border/50 bg-accent-subtle/50 p-3.5 flex items-start gap-3">
          <div className="p-1 rounded-md bg-accent text-white mt-0.5 shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs leading-relaxed">
            <div className="font-semibold text-charcoal flex items-center gap-2">
              <span>Financial clarity score: 94/100</span>
              <span className="text-[10px] font-mono text-accent font-medium">Optimal</span>
            </div>
            <p className="text-charcoal-muted text-[11px] mt-0.5">
              Discretionary spending is 12% lower than your 90-day baseline. You have <span className="font-medium text-charcoal">$540</span> safe to route toward your savings goal.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
