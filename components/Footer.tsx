import React from "react";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#overview" },
      { name: "How it works", href: "#how-it-works" },
      { name: "Product details", href: "#product" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help center", href: "#help" },
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-canvas text-charcoal" aria-label="Site Footer">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-16 pb-12 sm:pb-14">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 sm:pb-14">
          
          {/* Brand Column (Left - 5 Cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm"
              aria-label="Fermor Home"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent transition-transform duration-200 group-hover:scale-110" />
              <span className="font-semibold text-base tracking-[0.22em] text-charcoal font-sans transition-colors group-hover:text-charcoal-light">
                FERMOR
              </span>
            </Link>

            <p className="text-sm text-charcoal-muted leading-relaxed max-w-sm">
              A clearer way to understand, act and grow financially.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono text-charcoal-muted bg-canvas-subtle border border-card-border">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Bank-grade 256-bit encryption</span>
              </span>
            </div>
          </div>

          {/* Navigation Columns (Right - 7 Cols) */}
          <nav
            aria-label="Footer Navigation"
            className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8"
          >
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-charcoal font-semibold">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-charcoal-muted hover:text-charcoal transition-colors duration-150 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 rounded-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

        </div>

        {/* Bottom Bar Divider */}
        <div className="pt-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted">
          <div>
            © 2026 Fermor. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#privacy"
              className="hover:text-charcoal transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 rounded-sm"
            >
              Privacy
            </Link>
            <Link
              href="#terms"
              className="hover:text-charcoal transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 rounded-sm"
            >
              Terms
            </Link>
            <span className="text-charcoal-faint">·</span>
            <span className="font-mono text-[11px] text-charcoal-faint">
              v1.0.0
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
