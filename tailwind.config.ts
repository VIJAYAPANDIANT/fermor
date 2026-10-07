import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "rgb(var(--color-canvas) / <alpha-value>)",
          subtle: "rgb(var(--color-canvas-subtle) / <alpha-value>)",
          muted: "rgb(var(--color-canvas-muted) / <alpha-value>)",
        },
        charcoal: {
          DEFAULT: "rgb(var(--color-charcoal) / <alpha-value>)",
          light: "rgb(var(--color-charcoal-light) / <alpha-value>)",
          muted: "rgb(var(--color-charcoal-muted) / <alpha-value>)",
          faint: "rgb(var(--color-charcoal-faint) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          hover: "rgb(var(--color-accent-hover) / <alpha-value>)",
          subtle: "rgb(var(--color-accent-subtle) / <alpha-value>)",
          border: "rgb(var(--color-accent-border) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--color-card) / <alpha-value>)",
          border: "rgb(var(--color-card-border) / <alpha-value>)",
          borderSubtle: "rgb(var(--color-card-border-subtle) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        subtle: "var(--shadow-subtle)",
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
      },
    },
  },
  plugins: [],
};

export default config;
