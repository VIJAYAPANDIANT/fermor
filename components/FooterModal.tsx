"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

interface FooterModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}

export default function FooterModal({
  isOpen,
  onClose,
  title,
  eyebrow,
  children,
}: FooterModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // Focus close button on open
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="footer-modal-title"
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96, y: 12 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96, y: 8 }
            }
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-card border border-card-border rounded-2xl sm:rounded-3xl shadow-elevated p-6 sm:p-8 text-charcoal max-h-[85vh] overflow-y-auto z-10 space-y-5"
          >
            {/* Header with Title & Close Button */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-card-borderSubtle">
              <div className="space-y-1">
                {eyebrow && (
                  <span className="eyebrow-badge">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{eyebrow}</span>
                  </span>
                )}
                <h2
                  id="footer-modal-title"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-charcoal font-sans"
                >
                  {title}
                </h2>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full text-charcoal-muted hover:text-charcoal bg-canvas-subtle hover:bg-canvas border border-card-border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-sm text-charcoal-muted leading-relaxed font-normal">
              {children}
            </div>

            {/* Modal Footer Bar */}
            <div className="pt-4 border-t border-card-borderSubtle flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-full text-xs font-semibold bg-canvas-subtle hover:bg-card border border-card-border text-charcoal transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 shadow-subtle"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
