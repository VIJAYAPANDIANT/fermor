# Fermor

Your money, made clearer.

A modern fintech homepage designed and developed as a frontend developer assignment for Fermor.

## Overview

Fermor is designed as a modern financial clarity platform that helps users understand their financial picture, identify useful insights, and make more informed decisions.

This implementation focuses on creating a calm, premium, and approachable fintech experience rather than a traditional banking interface or a noisy crypto dashboard.

## Live Demo

Coming soon

## Features

- **Responsive Fintech Homepage**: Polished layout scaling seamlessly from 360px mobile viewports up to 1440px+ ultra-wide desktop displays.
- **Dual Theme Modes**: Instant toggle between Warm Editorial Light Mode (`#FAF9F5`) and Obsidian Dark Mode (`#0D0E12`) with anti-FOUT zero-flicker persistence.
- **Modern Product Visualizations**: Handcrafted interactive SVG financial charts and trajectory curves with zero third-party charting bloat.
- **Financial Overview Dashboard**: 6-month net asset growth curve with interactive hover node inspection, emergency reserve trackers, and liquidity velocity metrics.
- **Spending and Savings Insights**: Segmented category allocation bars, automated pattern recognition banners, and target completion trackers.
- **Responsive Navigation**: Frosted header with scroll elevation, desktop navigation pills, quick theme toggle, and touch-optimized mobile drawer with background scroll lock.
- **How Fermor Works**: 3-step structured journey (*Connect → Understand → Act*) featuring responsive connective timeline tracks.
- **Asymmetric Feature Bento**: Modular `7+5` and `5+7` grid layout highlighting core architecture, smart signals, goals, and habit dynamics.
- **Final Call-to-Action**: High-contrast closing section housed within an elevated container with subtle financial vector grid lines.
- **Micro-Interactions & Physics**: Restrained 2–4px hover physics and fluid transitions adhering to user motion preferences.
- **Accessibility (WCAG 2.1 AA)**: Semantic HTML landmarks, keyboard navigation (<kbd>Tab</kbd>, <kbd>Enter</kbd>, <kbd>Esc</kbd>), visible focus rings, and strict `prefers-reduced-motion` compliance.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript 5.7**
- **Tailwind CSS 3.4**
- **Framer Motion 12**
- **Lucide React**

*(All charts, sparklines, and telemetry curves are implemented using native SVG coordinate math—avoiding heavy charting libraries like Recharts or Chart.js for minimal bundle size and instant initial load.)*

## Design Approach

### Product Thinking
The homepage is structured around an intentional three-stage user journey:  
**Understand → Act → Grow**

The hero establishes Fermor's core value proposition, immediately backed by real-time interface telemetry. This is followed by a comparative friction analysis, net worth showcase, step-by-step workflow, asymmetric feature showcase, and a focused closing call-to-action.

### Visual Direction
The design intentionally uses:
- **Restrained Fintech Aesthetics**: Calm and editorial rather than generic SaaS or saturated crypto styling.
- **Intentional Typography**: High-contrast charcoal text with generous tracking and monospace accents for tabular figures.
- **Generous Whitespace**: Structured vertical rhythm and balanced padding across all viewport breakpoints.
- **Hairline Dividers**: Crisp 1px structural borders (`#E7E5DD` light / `#232630` dark).
- **Subtle Surfaces**: Warm paper substrate in light mode (`#FAF9F5`) and deep matte obsidian in dark mode (`#0D0E12`).
- **Limited Accent Color**: Forest pine (`#124E3F`) in light mode and luminous mint (`#2DD4BF`) in dark mode, reserved strictly for growth vectors and intentional signals.

### Responsive Design
The layout adapts cleanly across all devices:
- **Mobile (360px – 430px)**: Single-column stacked cards, full-width touch-friendly CTA buttons, and an accessible mobile dialog drawer.
- **Tablet (768px – 1024px)**: Balanced two-column transitions with responsive chart aspect ratios.
- **Desktop (1280px – 1440px+)**: Multi-column editorial bento grids with generous whitespace and zero horizontal overflow (`0px`).

## Project Structure

```text
fermor/
├── app/                  # Next.js App Router
│   ├── globals.css       # Tokenized design system & reduced motion resets
│   ├── layout.tsx        # Root layout, anti-FOUT theme script, SEO metadata
│   ├── not-found.tsx     # Custom accessible 404 page
│   └── page.tsx          # Single-page orchestrator mounting sections sequentially
├── components/           # Modular UI sections
│   ├── ThemeProvider.tsx # Context-based theme engine with localStorage persistence
│   ├── Navbar.tsx        # Sticky header, desktop nav pills, theme toggle & mobile menu
│   ├── Hero.tsx          # Value proposition, editorial headline & trust cues
│   ├── FinancialPreview.tsx # Interactive balance card & 6-month trajectory curve
│   ├── ValueStrip.tsx    # 3-pillar benefit strip (Understand · Act · Grow)
│   ├── ProblemSolution.tsx  # Sticky comparative analysis of financial friction
│   ├── FinancialOverview.tsx # Net worth curve showcase & metric modules
│   ├── HowItWorks.tsx    # 3-step structured timeline with connective track lines
│   ├── Features.tsx      # Asymmetric bento grid with custom micro-visualizations
│   ├── FinalCTA.tsx      # High-contrast closing call-to-action container
│   └── Footer.tsx        # Navigation columns, copyright, legal links & versioning
├── public/               # Static assets
│   └── favicon.ico       # Brand favicon
├── eslint.config.mjs     # ESLint configuration
├── tailwind.config.ts    # Design tokens & color channel extensions
├── tsconfig.json         # Strict TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js `18.17.0` or higher
- npm `9.x` or higher

### 1. Clone the repository
```bash
git clone https://github.com/VIJAYAPANDIANT/fermor.git
cd fermor
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deployment

### Run production build
```bash
npm run build
```

### Run static lint check
```bash
npm run lint
```

### Run production server
```bash
npm run start
```

The application is production-ready and configured for zero-config deployment on [Vercel](https://vercel.com).

## Design Decisions

- **Handcrafted SVG Vector Math**: Instead of introducing heavy charting bundles that add 100kB+ to the bundle and trigger canvas repaints, all visualizations are written directly with native SVG paths (`C` cubic Bézier curves). This ensures instantaneous rendering, retina sharpness, and zero bundle bloat.
- **Zero-Flicker Dual Theme Engine**: Implemented via raw RGB CSS variables (`var(--color-canvas) / <alpha-value>`) combined with a pre-paint `<script>` in `<head>`. This prevents the Flash of Unstyled Theme (FOUT) while preserving Tailwind's alpha transparency modifiers.
- **Component-Driven Modular Architecture**: Every section is fully isolated with clean TypeScript interfaces and independent logic, preventing layout coupling and making future iterations straightforward.
- **Inclusive Accessibility**: Built with native support for `prefers-reduced-motion`, visible focus outlines, WCAG 2.1 AA compliant contrast ratios across both light and dark palettes, and accessible keyboard dialog traps.

---

*Developed for the Fermor Frontend Developer Assignment.*
