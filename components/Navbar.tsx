"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Product", href: "#product" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-card-border/80 shadow-[0_1px_8px_rgba(18,19,22,0.03)]"
          : "bg-canvas/60 backdrop-blur-sm border-b border-card-border/40"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm"
            aria-label="Fermor Home"
          >
            {/* Subtle architectural emblem */}
            <span className="w-2.5 h-2.5 rounded-full bg-accent transition-transform duration-200 group-hover:scale-125" />
            <span className="font-semibold text-[15px] sm:text-base tracking-[0.22em] text-charcoal font-sans transition-colors group-hover:text-charcoal-light">
              FERMOR
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-1 bg-surface/70 border border-card-border/70 rounded-full px-4 py-1.5 shadow-subtle"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-charcoal-muted hover:text-charcoal px-3 py-1 rounded-full hover:bg-canvas-subtle transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#signin"
            className="text-[13px] font-medium text-charcoal-muted hover:text-charcoal px-3 py-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-md"
          >
            Sign in
          </Link>
          <Link
            href="#get-started"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium bg-charcoal text-canvas hover:bg-charcoal-light active:scale-[0.98] transition-all duration-150 rounded-full px-4 py-2 shadow-subtle hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
          >
            <span>Get started</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-charcoal hover:bg-canvas-subtle border border-card-border/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-charcoal" />
          ) : (
            <Menu className="w-5 h-5 text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-canvas/98 backdrop-blur-xl border-b border-card-border z-40 px-6 py-8 flex flex-col justify-between animate-in fade-in slide-in-from-top-2 duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-widest text-charcoal-faint px-2">
              Navigation
            </p>
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-charcoal hover:text-accent px-3 py-2.5 rounded-lg hover:bg-canvas-subtle transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-card-border/80 flex flex-col gap-3 pb-8">
            <Link
              href="#signin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-medium text-charcoal hover:bg-canvas-subtle rounded-xl border border-card-border transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="#get-started"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-medium bg-charcoal text-canvas hover:bg-charcoal-light rounded-xl shadow-subtle transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
