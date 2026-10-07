# Fermor — Your Money, Made Clearer

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vercel Ready](https://img.shields.io/badge/Deployment-Vercel_Ready-000000?style=flat-square&logo=vercel)](https://vercel.com/)

**Fermor** is a modern financial platform engineered to deliver **financial clarity, not simply banking**. The interface prioritizes calm, intelligent, trustworthy, and simple design patterns—helping people understand where their money goes, make smarter decisions, and build toward what matters.

Built from first principles as an editorial, high-craft web application rather than an AI-generated template.

---

## ✦ Live Demo

**Coming soon** *(Available upon Vercel deployment)*

---

## ✦ Key Features & Capabilities

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

---

## ✦ Design Philosophy & Tokens

* **Canvas Substrate**: Warm off-white (`#FAF9F5`) in Light Mode; deep matte obsidian (`#0D0E12`) in Dark Mode.
* **Typographic Hierarchy**: Deep charcoal (`#121316`) body text with generous tracking, paired with monospaced accents for tabular figures and telemetry.
* **Calibrated Accent**: Forest-pine green (`#124E3F`) in Light Mode and luminous mint (`#2DD4BF`) in Dark Mode—reserved strictly for growth vectors and intentional signals.
* **Asymmetric Editorial Layout**: Bento grids configured with dynamic pacing (`7+5` / `5+7`) to prevent monotonous card repetition.
* **Authentic Interface Visualizations**: Every chart, sparkline, and telemetry module is built with native React, CSS, and SVG math—no heavy external dependencies.
* **Restrained Motion Physics**: Micro-interactions hover within a `2–4px` range with soft border adjustments, fully adhering to `prefers-reduced-motion`.

### Token System Mapping

| Token | Light Mode (`:root`) | Dark Mode (`.dark`) | Purpose |
| :--- | :--- | :--- | :--- |
| `canvas` | `#FAF9F5` (Warm Paper) | `#0D0E12` (Matte Obsidian) | Root page substrate |
| `canvas-subtle` | `#F4F2EB` | `#14161C` | Secondary section fills & badges |
| `charcoal` | `#121316` | `#F3F4F6` | Primary typographic hierarchy |
| `charcoal-muted` | `#666973` | `#9CA3AF` | Secondary body text & descriptions |
| `accent` | `#124E3F` (Forest Pine) | `#2DD4BF` (Luminous Mint) | Growth vectors, active telemetry |
| `card` | `#FFFFFF` | `#13151B` | Elevated container surfaces |
| `card-border` | `#E7E5DD` | `#232630` | Crisp structural 1px hairline divider borders |

---

## ✦ System Architecture

```text
fermor/
├── app/
│   ├── globals.css              # Reset, font smoothing, RGB CSS variables & reduced-motion rules
│   ├── layout.tsx               # Root layout, metadata, viewport, anti-FOUT theme script
│   ├── not-found.tsx            # Custom accessible 404 page
│   └── page.tsx                 # Clean page orchestrator mounting sections sequentially
├── components/
│   ├── ThemeProvider.tsx        # React Context theme manager with localStorage persistence
│   ├── Navbar.tsx               # Responsive navigation, brand wordmark, theme toggle & mobile drawer
│   ├── Hero.tsx                 # Value proposition, editorial headline & trust cues
│   ├── FinancialPreview.tsx     # Interactive hero financial interface & trajectory chart
│   ├── ValueStrip.tsx           # Transitional 3-benefit strip (Understand · Act · Grow)
│   ├── ProblemSolution.tsx      # Sticky 2-column comparative analysis of financial friction
│   ├── FinancialOverview.tsx    # 6-month net worth trajectory showcase with metric modules
│   ├── HowItWorks.tsx           # 3-step journey (Connect → Understand → Act) with track lines
│   ├── Features.tsx             # Asymmetric bento grid with bespoke micro-visualizations
│   ├── FinalCTA.tsx             # High-contrast closing call-to-action container
│   └── Footer.tsx               # Editorial site footer with navigation columns & legal links
├── public/
│   └── favicon.ico              # Vector brand mark
├── eslint.config.mjs            # Flat ESLint configuration with typescript-eslint
├── next.config.ts               # Next.js compiler configuration
├── tailwind.config.ts           # Tokenized color extensions, shadows, font declarations
├── tsconfig.json                # TypeScript strict mode configuration with path aliases
└── package.json                 # Project scripts and dependencies
```

---

## ✦ Getting Started

### Prerequisites
* **Node.js**: `v18.17.0` or higher (tested on Node `v22.x` / `v24.x`)
* **npm**: `v9.x` or higher

### 1. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/VIJAYAPANDIANT/fermor.git
cd fermor
npm install
```

### 2. Development Server
Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Static Typecheck & Linting
Validate TypeScript types and ESLint standards:

```bash
npm run lint
```

### 4. Production Build
Compile static production pages and optimize bundle assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run start
```

---

## ✦ Deployment

This project is optimized for zero-config deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. In the Vercel dashboard, click **Add New Project** and import `fermor`.
3. Vercel automatically detects Next.js App Router and applies optimal caching and edge delivery.
4. Click **Deploy**.

---

## ✦ Design Decisions & Engineering Highlights

- **Handcrafted SVG Vector Math**: Instead of introducing heavy charting bundles that add 120kB+ to the bundle and trigger canvas repaints, all visualizations are written directly with native SVG paths (`C` cubic Bézier curves). This ensures instantaneous rendering, retina sharpness, and zero bundle bloat.
- **Zero-Flicker Dual Theme Engine**: Implemented via raw RGB CSS variables (`var(--color-canvas) / <alpha-value>`) combined with a pre-paint `<script>` in `<head>`. This prevents the Flash of Unstyled Theme (FOUT) while preserving Tailwind's alpha transparency modifiers.
- **Component-Driven Modular Architecture**: Every section is fully isolated with clean TypeScript interfaces and independent logic, preventing layout coupling and making future iterations straightforward.
- **Inclusive Accessibility**: Built with native support for `prefers-reduced-motion`, visible focus outlines, WCAG 2.1 AA compliant contrast ratios across both light and dark palettes, and accessible keyboard dialog traps.

---

*Developed for the Fermor Frontend Developer Assignment.*
