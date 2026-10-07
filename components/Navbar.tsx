"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Logo from "./Logo";

const NAV_LINKS = [
  { name: "Product", href: "#product" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Overview", href: "#overview" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          ? "bg-canvas/90 backdrop-blur-md border-b border-card-border shadow-[0_1px_8px_rgba(18,19,22,0.03)]"
          : "bg-canvas/70 backdrop-blur-sm border-b border-card-borderSubtle"
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
            <Logo className="w-5 h-5 text-accent transition-transform duration-200 group-hover:scale-105" />
            <span className="font-semibold text-sm sm:text-base tracking-[0.22em] text-charcoal font-sans transition-colors group-hover:text-charcoal-light">
              FERMOR
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-1 bg-card/85 border border-card-border rounded-full px-3.5 py-1.5 shadow-subtle backdrop-blur-sm"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-charcoal-muted hover:text-charcoal px-3 py-1 rounded-full hover:bg-canvas-subtle transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Mode Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full text-charcoal-muted hover:text-charcoal bg-card hover:bg-canvas-subtle border border-card-border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 shadow-subtle"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-accent transition-transform duration-200 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-charcoal-muted transition-transform duration-200 hover:-rotate-12" />
            )}
          </button>

          <Link
            href="#get-started"
            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full text-xs font-semibold text-canvas bg-charcoal hover:bg-charcoal-light active:scale-[0.98] transition-all duration-150 shadow-subtle hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
          >
            <span>Get started</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </Link>
        </div>

        {/* Mobile Action Triggers */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-charcoal-muted hover:text-charcoal bg-card border border-card-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-accent" />
            ) : (
              <Moon className="w-4 h-4 text-charcoal-muted" />
            )}
          </button>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-charcoal hover:bg-canvas-subtle border border-card-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-charcoal" />
            ) : (
              <Menu className="w-5 h-5 text-charcoal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-canvas/98 backdrop-blur-xl border-b border-card-border z-40 px-6 py-8 flex flex-col justify-between animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-charcoal-faint px-2 mb-2">
                Navigation
              </p>
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-charcoal hover:text-accent px-3 py-2.5 rounded-xl hover:bg-canvas-subtle transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Theme Toggle in Mobile Menu */}
            <div className="pt-4 border-t border-card-border">
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-card border border-card-border">
                <span className="text-xs font-mono uppercase tracking-wider text-charcoal-muted">
                  Theme mode
                </span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-charcoal bg-canvas-subtle border border-card-border transition-colors"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-accent" />
                      <span>Light mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-charcoal-muted" />
                      <span>Dark mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-card-border flex flex-col gap-3 pb-8">
            <Link
              href="#get-started"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-semibold bg-charcoal text-canvas hover:bg-charcoal-light rounded-full shadow-subtle transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
