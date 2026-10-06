"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  TrendingUp,
  Sparkles,
  ArrowDownRight,
  ShieldCheck,
  Calendar,
  ChevronDown,
} from "lucide-react";

interface DataPoint {
  month: string;
  val: number;
  x: number;
  y: number;
}

const HISTORY_DATA: DataPoint[] = [
  { month: "April", val: 19400, x: 40, y: 150 },
  { month: "May", val: 20850, x: 140, y: 122 },
  { month: "June", val: 21600, x: 240, y: 104 },
  { month: "July", val: 22200, x: 340, y: 92 },
  { month: "August", val: 23450, x: 440, y: 64 },
  { month: "September", val: 24680, x: 550, y: 30 },
];

export default function FinancialOverview() {
  const shouldReduceMotion = useReducedMotion();
  const [activePoint, setActivePoint] = useState<DataPoint | null>(null);

  // Smooth SVG path definition across 600x200 canvas
  const chartPath =
    "M 40 150 C 90 145, 100 122, 140 122 C 180 122, 200 104, 240 104 C 280 104, 300 92, 340 92 C 380 92, 400 64, 440 64 C 485 64, 510 30, 550 30";
  const areaPath = `${chartPath} L 550 190 L 40 190 Z`;

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-canvas border-t border-card-border/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-charcoal-muted bg-canvas-subtle border border-card-border">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-wider">One clear view</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-charcoal leading-[1.12] font-sans">
            See your financial life at a glance.
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal">
            Bring balances, spending, savings and financial signals into one simple overview.
          </p>
        </div>

        {/* Large Product Showcase Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl sm:rounded-3xl border border-card-border bg-white shadow-elevated p-6 sm:p-9 lg:p-11 relative"
        >
          {/* Top Interface Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-card-borderSubtle">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-canvas-subtle border border-card-border flex items-center justify-center text-charcoal shadow-subtle">
                <ShieldCheck className="w-4 h-4 text-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-charcoal">Consolidated Portfolio</span>
                  <span className="text-xs font-mono text-charcoal-muted">· Live</span>
                </div>
                <p className="text-xs text-charcoal-muted">All connected accounts and deposits</p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal-muted bg-canvas-subtle border border-card-border px-3 py-1.5 rounded-lg">
                <Calendar className="w-3.5 h-3.5 text-charcoal-muted" />
                <span>Last 6 months</span>
              </span>
            </div>
          </div>

          {/* Primary Balance Section */}
          <div className="pt-8 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-muted block mb-1">
                Total balance
              </span>
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal font-sans">
                  $24,680
                </span>
                <span className="text-sm font-mono text-charcoal-muted">.00</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent bg-accent-subtle px-3 py-1 rounded-full border border-accent-border/50">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+8.4% this month</span>
              </span>
              <span className="text-xs text-charcoal-muted font-mono hidden sm:inline">
                +$1,920 since August
              </span>
            </div>
          </div>

          {/* 6-Month Trajectory Area / Line Chart */}
          <div className="relative py-4 px-2 sm:px-4 rounded-2xl bg-canvas-subtle/40 border border-card-borderSubtle mb-8">
            <div className="flex items-center justify-between pb-3 px-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-medium text-charcoal">Net Worth Trajectory</span>
              </div>
              <span className="text-xs font-mono text-charcoal-muted">
                {activePoint
                  ? `${activePoint.month}: $${activePoint.val.toLocaleString()}`
                  : "Hover points to inspect balance"}
              </span>
            </div>

            <div className="w-full h-44 sm:h-56 lg:h-64 relative overflow-hidden">
              <svg
                viewBox="0 0 600 200"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
                aria-label="6-month financial trajectory chart"
              >
                <defs>
                  <linearGradient id="overviewGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#124E3F" stopOpacity="0.14" />
                    <stop offset="95%" stopColor="#124E3F" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Subtle Horizontal Reference Guidelines */}
                <line x1="20" y1="40" x2="580" y2="40" stroke="#E7E5DD" strokeDasharray="3 3" strokeWidth="0.8" />
                <line x1="20" y1="95" x2="580" y2="95" stroke="#E7E5DD" strokeDasharray="3 3" strokeWidth="0.8" />
                <line x1="20" y1="150" x2="580" y2="150" stroke="#E7E5DD" strokeDasharray="3 3" strokeWidth="0.8" />

                {/* Area Gradient Fill */}
                <path d={areaPath} fill="url(#overviewGradient)" />

                {/* Smooth Trajectory Line */}
                <path
                  d={chartPath}
                  fill="none"
                  stroke="#124E3F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Interactive Data Nodes */}
                {HISTORY_DATA.map((pt, idx) => {
                  const isActive = activePoint?.month === pt.month;
                  const isLatest = idx === HISTORY_DATA.length - 1;

                  return (
                    <g
                      key={pt.month}
                      onMouseEnter={() => setActivePoint(pt)}
                      onMouseLeave={() => setActivePoint(null)}
                      className="cursor-pointer"
                    >
                      {isLatest && (
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="7"
                          fill="#124E3F"
                          fillOpacity="0.15"
                          className="animate-ping"
                        />
                      )}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isActive || isLatest ? 4.5 : 3}
                        fill={isActive || isLatest ? "#124E3F" : "#FFFFFF"}
                        stroke="#124E3F"
                        strokeWidth="2"
                        className="transition-all duration-150"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Month Axis Labels */}
            <div className="flex justify-between px-3 pt-3 text-[11px] font-mono text-charcoal-muted border-t border-card-borderSubtle mt-1">
              {HISTORY_DATA.map((pt) => (
                <span
                  key={pt.month}
                  className={
                    activePoint?.month === pt.month ? "text-charcoal font-semibold" : ""
                  }
                >
                  {pt.month}
                </span>
              ))}
            </div>
          </div>

          {/* Supporting Metrics + Insight Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            
            {/* Metric 1: Spending */}
            <div className="md:col-span-4 p-5 rounded-2xl border border-card-border bg-white flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-muted">
                  Spending
                </span>
                <div className="text-2xl sm:text-3xl font-semibold text-charcoal font-sans tracking-tight">
                  $3,240
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-charcoal-muted border-t border-card-borderSubtle mt-4">
                <span>Paced within $3,800 limit</span>
                <span className="font-mono text-accent font-medium">85% cap</span>
              </div>
            </div>

            {/* Metric 2: Savings */}
            <div className="md:col-span-4 p-5 rounded-2xl border border-card-border bg-white flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-muted">
                  Savings
                </span>
                <div className="text-2xl sm:text-3xl font-semibold text-charcoal font-sans tracking-tight">
                  $8,420
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-charcoal-muted border-t border-card-borderSubtle mt-4">
                <span>Emergency fund progress</span>
                <span className="font-mono text-accent font-medium">84.2%</span>
              </div>
            </div>

            {/* Metric 3: Monthly Change */}
            <div className="md:col-span-4 p-5 rounded-2xl border border-card-border bg-white flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-muted">
                  Monthly change
                </span>
                <div className="text-2xl sm:text-3xl font-semibold text-accent font-sans tracking-tight flex items-baseline gap-1">
                  <span>+12.4%</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-charcoal-muted border-t border-card-borderSubtle mt-4">
                <span>Net liquidity velocity</span>
                <span className="font-mono text-charcoal">+$1,420 net</span>
              </div>
            </div>

          </div>

          {/* Fermor Insight Card */}
          <div className="mt-5 rounded-2xl border border-accent-border/60 bg-accent-subtle/60 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 shadow-subtle mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>

            <div className="space-y-1 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                  Fermor Insight
                </span>
                <span className="text-[11px] text-charcoal-muted font-mono">· Automated analysis</span>
              </div>

              <p className="text-sm sm:text-[15px] font-semibold text-charcoal leading-snug">
                Your spending is trending lower than the previous month.
              </p>
              
              <p className="text-xs sm:text-[13px] text-charcoal-muted leading-relaxed">
                Discretionary expenses are down 14% compared to August. You are on track to exceed your quarterly savings milestone by $480.
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
