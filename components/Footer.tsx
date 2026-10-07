"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ShieldAlert, Info, ChevronDown } from "lucide-react";
import FooterModal from "./FooterModal";
import Logo from "./Logo";

type ModalType = "about" | "careers" | "contact" | "help" | "privacy" | "terms" | null;

interface FooterLinkItem {
  name: string;
  modal?: ModalType;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLinkItem[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
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
      { name: "About", modal: "about" },
      { name: "Careers", modal: "careers" },
      { name: "Contact", modal: "contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help center", modal: "help" },
      { name: "Privacy", modal: "privacy" },
      { name: "Terms", modal: "terms" },
    ],
  },
];

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const closeModal = () => setActiveModal(null);

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
              <Logo className="w-5 h-5 text-accent transition-transform duration-200 group-hover:scale-105" />
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
                      {link.modal ? (
                        <button
                          type="button"
                          onClick={() => setActiveModal(link.modal ?? null)}
                          className="text-xs sm:text-sm text-charcoal-muted hover:text-charcoal transition-colors duration-150 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 rounded-sm text-left"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          href={link.href ?? "#"}
                          className="text-xs sm:text-sm text-charcoal-muted hover:text-charcoal transition-colors duration-150 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 rounded-sm"
                        >
                          {link.name}
                        </Link>
                      )}
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
            <button
              type="button"
              onClick={() => setActiveModal("privacy")}
              className="hover:text-charcoal transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 rounded-sm"
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => setActiveModal("terms")}
              className="hover:text-charcoal transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 rounded-sm"
            >
              Terms
            </button>
            <span className="text-charcoal-faint">·</span>
            <span className="font-mono text-[11px] text-charcoal-faint">
              v1.0.0
            </span>
          </div>
        </div>

      </div>

      {/* Reusable Dialog Modals */}

      {/* ABOUT MODAL */}
      <FooterModal
        isOpen={activeModal === "about"}
        onClose={closeModal}
        title="About Fermor"
        eyebrow="Company"
      >
        <p>
          Fermor is a financial clarity platform designed to help people understand where their money goes, make better financial decisions, and stay connected to their goals.
        </p>
        <div className="p-3.5 rounded-xl border border-card-border bg-canvas-subtle/60 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-muted block">
              Project Author
            </span>
            <span className="text-sm font-semibold text-charcoal">
              Created by Vijayapandian T
            </span>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-subtle text-accent border border-accent/20">
            Fermor Assignment
          </span>
        </div>
      </FooterModal>

      {/* CAREERS MODAL */}
      <FooterModal
        isOpen={activeModal === "careers"}
        onClose={closeModal}
        title="Careers at Fermor"
        eyebrow="Opportunities"
      >
        <p>
          We&apos;re building a clearer way for people to understand and grow their finances.
        </p>
        <div className="p-4 rounded-xl border border-card-borderSubtle bg-canvas-subtle/50 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
            <span className="w-2 h-2 rounded-full bg-charcoal-muted" />
            <span>Current Status</span>
          </div>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            No open positions at the moment. Check back later for future opportunities.
          </p>
        </div>
      </FooterModal>

      {/* CONTACT MODAL */}
      <FooterModal
        isOpen={activeModal === "contact"}
        onClose={closeModal}
        title="Contact Fermor"
        eyebrow="Get in Touch"
      >
        <p>
          Have a question or want to know more about Fermor? Get in touch.
        </p>
        <div className="p-4 rounded-xl border border-card-border bg-canvas-subtle/60 space-y-3">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-muted block">
              Contact Person
            </span>
            <span className="text-base font-semibold text-charcoal">
              Vijayapandian T
            </span>
          </div>
          <div className="pt-2 border-t border-card-borderSubtle">
            <a
              href="mailto:vijayapandian112007@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 rounded-sm"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>vijayapandian112007@gmail.com</span>
            </a>
          </div>
        </div>
      </FooterModal>

      {/* HELP CENTER MODAL */}
      <FooterModal
        isOpen={activeModal === "help"}
        onClose={closeModal}
        title="Help Center"
        eyebrow="Support & FAQs"
      >
        <p>
          Need help understanding Fermor?
        </p>
        <div className="space-y-2.5 pt-1">
          <details className="group rounded-xl border border-card-border bg-canvas-subtle/50 p-3.5 transition-colors">
            <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-xs sm:text-sm text-charcoal select-none">
              <span>What is Fermor?</span>
              <ChevronDown className="w-4 h-4 text-charcoal-muted transition-transform group-open:rotate-180" />
            </summary>
            <p className="pt-2.5 text-xs text-charcoal-muted leading-relaxed border-t border-card-borderSubtle mt-2.5">
              Fermor is a modern financial clarity platform designed to help people understand where their money goes, make better financial decisions, and stay connected to their goals.
            </p>
          </details>

          <details className="group rounded-xl border border-card-border bg-canvas-subtle/50 p-3.5 transition-colors">
            <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-xs sm:text-sm text-charcoal select-none">
              <span>How does Fermor help me understand my finances?</span>
              <ChevronDown className="w-4 h-4 text-charcoal-muted transition-transform group-open:rotate-180" />
            </summary>
            <p className="pt-2.5 text-xs text-charcoal-muted leading-relaxed border-t border-card-borderSubtle mt-2.5">
              Fermor consolidates account information, translates transactions into clear spending velocity metrics, tracks emergency reserves, and connects day-to-day decisions with long-term targets.
            </p>
          </details>

          <details className="group rounded-xl border border-card-border bg-canvas-subtle/50 p-3.5 transition-colors">
            <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-xs sm:text-sm text-charcoal select-none">
              <span>How can I get started?</span>
              <ChevronDown className="w-4 h-4 text-charcoal-muted transition-transform group-open:rotate-180" />
            </summary>
            <p className="pt-2.5 text-xs text-charcoal-muted leading-relaxed border-t border-card-borderSubtle mt-2.5">
              Explore the overview dashboard, review your automated clarity score, and use the interactive insights to deploy funds toward your target goals.
            </p>
          </details>
        </div>
      </FooterModal>

      {/* PRIVACY MODAL */}
      <FooterModal
        isOpen={activeModal === "privacy"}
        onClose={closeModal}
        title="Privacy"
        eyebrow="Data & Protection"
      >
        <p>
          Fermor is designed with privacy in mind. This assignment demonstrates a frontend concept and does not collect or process real financial information.
        </p>
        <div className="p-3.5 rounded-xl border border-card-borderSubtle bg-canvas-subtle/60 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-charcoal-muted leading-relaxed">
            Do not enter real financial or sensitive information into this demonstration.
          </p>
        </div>
      </FooterModal>

      {/* TERMS MODAL */}
      <FooterModal
        isOpen={activeModal === "terms"}
        onClose={closeModal}
        title="Terms"
        eyebrow="Notice"
      >
        <p>
          Fermor is a frontend product concept created as part of a frontend development assignment.
        </p>
        <div className="p-3.5 rounded-xl border border-card-borderSubtle bg-canvas-subtle/60 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-charcoal-muted shrink-0 mt-0.5" />
          <p className="text-xs text-charcoal-muted leading-relaxed">
            This demonstration is not a financial service, banking platform, or financial advice product.
          </p>
        </div>
      </FooterModal>

    </footer>
  );
}
