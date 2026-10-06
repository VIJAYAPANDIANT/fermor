import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import ProblemSolution from "@/components/ProblemSolution";
import FinancialOverview from "@/components/FinancialOverview";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-charcoal">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueStrip />
        <ProblemSolution />
        <FinancialOverview />
        <HowItWorks />
        <Features />
      </main>
    </div>
  );
}
