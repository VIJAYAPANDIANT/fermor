# Fermor — Your Money, Made Clearer

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vercel Ready](https://img.shields.io/badge/Deployment-Vercel_Ready-000000?style=flat-square&logo=vercel)](https://vercel.com/)

**Fermor** is a modern financial platform engineered to deliver **financial clarity, not simply banking**. The interface prioritizes calm, intelligent, trustworthy, and simple design patterns—helping people understand where their money goes, make smarter decisions, and build toward what matters.

Built from first principles as an editorial, high-craft web application rather than an AI-generated template.

---

## ✦ Design Philosophy

* **Canvas Substrate**: Warm off-white (`#FAF9F5`) providing an organic, paper-like feel rather than cold digital white.
* **Typographic Hierarchy**: Deep charcoal (`#121316`) body text with generous tracking, paired with monospaced accents for tabular figures and telemetry.
* **Calibrated Accent**: A single forest-pine green (`#124E3F`) reserved strictly for positive financial velocity and intentional signals—avoiding generic neon or purple gradient tropes.
* **Asymmetric Editorial Layout**: Bento grids configured with dynamic pacing (`7+5` / `5+7`) to prevent monotonous card repetition.
* **Authentic Interface Visualizations**: Every chart, sparkline, and telemetry module is built with native React, CSS, and SVG math—no generic stock illustrations or placeholder images.
* **Restrained Motion Physics**: Micro-interactions hover within a `2–4px` range with soft border adjustments, fully adhering to `prefers-reduced-motion`.

---

## ✦ System Architecture

```text
fermor/
├── app/
│   ├── globals.css         # Reset, font smoothing, CSS variables & reduced-motion rules
│   ├── layout.tsx          # Root layout, metadata, viewport & canvas container
│   └── page.tsx            # Clean page orchestrator mounting sections sequentially
├── components/
│   ├── Navbar.tsx          # Responsive navigation, brand wordmark & mobile drawer
│   ├── Hero.tsx            # Value proposition, editorial headline & trust cues
│   ├── FinancialPreview.tsx # Interactive hero financial interface & trajectory chart
│   ├── ValueStrip.tsx      # Transitional 3-benefit strip (Understand, Act, Grow)
│   ├── ProblemSolution.tsx # Sticky 2-column comparative analysis of financial friction
│   ├── FinancialOverview.tsx # 6-month net worth trajectory showcase with metric modules
│   ├── HowItWorks.tsx      # 3-step journey (Connect → Understand → Act) with track lines
│   └── Features.tsx        # Asymmetric bento grid with bespoke micro-visualizations
├── public/
│   └── favicon.ico         # Vector brand mark
├── tailwind.config.ts      # Design tokens (canvas, charcoal, accent, subtle shadows)
├── tsconfig.json           # TypeScript configuration with @/* path aliases
└── package.json            # Scripts & project dependencies
```

---

## ✦ Key Sections & Capabilities

### 1. Header Navigation (`Navbar.tsx`)
* Typography-first brand wordmark (`FERMOR`) with responsive desktop pill navigation.
* Scroll-aware elevation transition: activates a frosted background (`backdrop-blur-md`) and hairline border when scrolled.
* Touch-optimized mobile drawer with background scroll lock and accessible <kbd>Esc</kbd> key dismissal.

### 2. Editorial Hero (`Hero.tsx` & `FinancialPreview.tsx`)
* Editorial typography hierarchy leading with *"Your money, made clearer."*
* Bank-grade security cues highlighting 256-bit encryption, read-only connections, and ad-free architecture.
* **Financial Preview Interface**:
  * Real-time portfolio telemetry (`$24,680.00`) with month-over-month trajectory (`+$1,830`).
  * 6-month SVG area curve with interactive data nodes and hover inspection.
  * Segmented monthly spending bar (`$3,240`) categorized across Housing, Food, and Discretionary.
  * Savings progress bar (`$8,420` of `$10,000` goal).
  * Automated financial clarity score card (94/100).

### 3. Value Strip (`ValueStrip.tsx`)
* Seamless boundary section highlighting three core pillars:
  * **Understand**: *See your financial picture clearly.*
  * **Act**: *Know what deserves your attention.*
  * **Grow**: *Build better financial habits over time.*
* Horizontal desktop layout with hairline dividers; transforms into cleanly stacked rows on mobile devices.

### 4. Problem → Solution Analysis (`ProblemSolution.tsx`)
* Editorial two-column layout with a desktop-sticky heading (*"Your finances shouldn't feel like a puzzle."*).
* Numbered narrative points (`01`, `02`, `03`) contrasting conventional financial friction against Fermor's approach:
  * *Too much information* → Consolidated essential signals.
  * *Hard to know what to do next* → Actionable, understandable insights.
  * *Goals get lost in the noise* → Connecting daily decisions with future targets.

### 5. Consolidated Financial Overview (`FinancialOverview.tsx`)
* Product showcase featuring a responsive 600px SVG coordinate area chart mapping net worth from April through September.
* Supporting metric cards for Monthly Spending, Emergency Fund Reserves, and Inflow Velocity (`+12.4%`).
* Automated Fermor intelligence banner contextualizing spending drops and savings timelines.

### 6. Process Journey (`HowItWorks.tsx`)
* 3-step journey (**Connect** → **Understand** → **Act**).
* Features horizontal connective track lines across desktop columns that transform into a continuous vertical timeline on mobile viewports.

### 7. Asymmetric Features Bento (`Features.tsx`)
* Modular `7+5` and `5+7` asymmetric layout avoiding cookie-cutter cards.
* Interactive micro-visualizations:
  * **Financial Overview**: Inline sparkline and consolidated asset split.
  * **Smart Insights**: Ambient notification card detailing category drops and automated transfers.
  * **Goals**: Safety cushion tracker with target milestone completion estimates.
  * **Progress**: 5-month net savings histogram with interactive bar hover states.

---

## ✦ Getting Started

### Prerequisites
* **Node.js**: `v18.17.0` or higher (tested on Node `v24.x`)
* **npm**: `v9.x` or higher

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/fermor.git
cd fermor
npm install
```

### Development Server
Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
Validate types, linting, and compile static production pages:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run start
```

---

## ✦ Design System Tokens

| Token | Hex / Value | Purpose |
| :--- | :--- | :--- |
| `canvas` | `#FAF9F5` | Primary warm off-white page substrate |
| `canvas-subtle` | `#F4F2EB` | Secondary container backgrounds & badges |
| `charcoal` | `#121316` | High-contrast headings and primary CTAs |
| `charcoal-muted` | `#666973` | Secondary text, descriptions, and labels |
| `charcoal-faint` | `#9699A3` | Numerals, telemetry tags, and borders |
| `accent` | `#124E3F` | Forest-pine indicator for growth & insights |
| `accent-subtle`| `#EDF5F2` | Background fills for positive badges |
| `card-border` | `#E7E5DD` | Crisp structural 1px hairline divider borders |

---

## ✦ Accessibility & Performance

* **Motion Preferences**: Every Framer Motion component references `useReducedMotion()` to remove position transforms and duration delays when users enable reduced motion.
* **Zero Layout Shift**: Fixed coordinate viewBoxes on SVGs prevent reflow and cumulative layout shift (CLS).
* **Semantic HTML**: Strict heading hierarchy (`h1` through `h3`), `<header>`, `<main>`, `<section>`, and `<nav>`.
* **Keyboard Navigation**: Mobile navigation and interactive elements support keyboard navigation (<kbd>Tab</kbd>, <kbd>Enter</kbd>, <kbd>Esc</kbd>) with explicit focus rings.

---

## ✦ Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into the Vercel dashboard.
3. Vercel automatically detects Next.js App Router and applies optimal caching and edge delivery.

---

## ✦ License

This project is licensed under the [MIT License](LICENSE).
