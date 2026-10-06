import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FAF9F5",
          subtle: "#F4F2EB",
          muted: "#EDEAE1",
        },
        charcoal: {
          DEFAULT: "#121316",
          light: "#2B2D33",
          muted: "#666973",
          faint: "#9699A3",
        },
        accent: {
          DEFAULT: "#124E3F",
          hover: "#0D3A2F",
          subtle: "#EDF5F2",
          border: "#B2D8CD",
        },
        card: {
          DEFAULT: "#FFFFFF",
          border: "#E7E5DD",
          borderSubtle: "#F0EEE8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(18, 19, 22, 0.04), 0 1px 2px rgba(18, 19, 22, 0.02)",
        card: "0 4px 20px -2px rgba(18, 19, 22, 0.05), 0 2px 6px -1px rgba(18, 19, 22, 0.03)",
        elevated: "0 12px 32px -4px rgba(18, 19, 22, 0.08), 0 4px 12px -2px rgba(18, 19, 22, 0.03)",
      },
    },
  },
  plugins: [],
};

export default config;
