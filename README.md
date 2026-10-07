# Fermor

> **Your money, made clearer.**  
> A high-craft, editorial fintech platform designed and engineered as a benchmark frontend implementation for Fermor.

---

## 1. Executive Summary & Philosophy

Modern personal finance interfaces frequently suffer from two opposing extremes: dense, unapproachable spreadsheet grids (traditional banking), or hyper-saturated, gamified crypto dashboards overloaded with neon glows and synthetic noise.

**Fermor** was architected from first principles to represent a third path: **calm, intelligent, and editorial clarity**. 

Every design and engineering decision prioritizes legibility, cognitive breathing room, and tangible financial comprehension. The interface leads users through an intentional narrative arc:
$$\text{Understand} \longrightarrow \text{Act} \longrightarrow \text{Grow}$$

---

## 2. Technical Architecture & Stack

| Layer | Technology | Version | Rationale |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js (App Router)](https://nextjs.org/) | `15.1.7` | Hybrid static prerendering, zero layout shift, server/client boundary optimization |
| **UI Library** | [React](https://react.dev/) | `19.0.0` | Latest concurrent rendering primitives and fine-grained state reactivity |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `5.7.3` | Strict type safety, interface-driven props, zero `any` allocations |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `3.4.17` | Atomic design tokens, zero runtime CSS overhead, responsive breakpoint engine |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) | `12.4.7` | Hardware-accelerated physics, declarative stagger sequences, `prefers-reduced-motion` integration |
| **Icons** | [Lucide React](https://lucide.dev/) | `1.16.0` | Clean, accessible vector icons tree-shaken per import |

---

## 3. Core Engineering Highlights

### A. Dual Theme Engine with Anti-FOUT Guarantee
Fermor implements a custom, zero-dependency theme engine supporting **Light Mode** (warm paper substrate) and **Obsidian Dark Mode** (matte carbon substrate).

* **Zero Flash of Unstyled Theme (FOUT)**: An inline script executes in `<head>` before browser DOM paint, evaluating `localStorage` and `window.matchMedia('(prefers-color-scheme: dark)')` to prevent theme flicker on cold loads.
* **RGB Channel CSS Token Architecture**: Design tokens are declared as raw RGB channels (`250 249 245`), enabling Tailwind's opacity modifier syntax (`rgb(var(--color-canvas) / <alpha-value>)`) across all surfaces and states.

#### Token System Mapping

| Design Token | Light Mode (`:root`) | Dark Mode (`.dark`) | Purpose |
| :--- | :--- | :--- | :--- |
| `--color-canvas` | `#FAF9F5` (Warm Paper) | `#0D0E12` (Matte Obsidian) | Root page substrate |
| `--color-canvas-subtle` | `#F4F2EB` | `#14161C` | Secondary section fills & tags |
| `--color-charcoal` | `#121316` | `#F3F4F6` | Primary typographic hierarchy |
| `--color-charcoal-muted` | `#666973` | `#9CA3AF` | Secondary body text & descriptions |
| `--color-accent` | `#124E3F` (Forest Pine) | `#2DD4BF` (Luminous Mint) | Growth vectors, active telemetry |
| `--color-card` | `#FFFFFF` | `#13151B` | Elevated container surfaces |
| `--color-card-border` | `#E7E5DD` | `#232630` | 1px hairline structural dividers |

---

### B. Bespoke SVG Vector Data Engine
Rather than importing heavy third-party charting packages (e.g. Recharts or Chart.js, which add 120kB+ of minified runtime and canvas overhead), all financial curves, sparklines, and telemetry charts are **handcrafted with native SVG vector mathematics**.

* **Normalized Coordinate Projections**: Fixed viewBox coordinates (`viewBox="0 0 600 200"`) eliminate cumulative layout shift (CLS).
* **Cubic Bézier Interpolation**: Trajectory lines utilize continuous cubic Bézier commands (`C x1 y1, x2 y2, x y`) for natural curvature.
* **Theme-Reactive Vector Assets**: Dynamic CSS variable stroke/fill mapping (`rgb(var(--color-accent))`) ensures charts transition seamlessly between Forest Pine and Luminous Mint upon theme toggling.
* **Zero Dependency Footprint**: 0 kB added to the JavaScript bundle for charting libraries.

---

### C. Accessibility & Inclusive Design (WCAG 2.1 AA)
* **Reduced Motion Compliance**: Every Framer Motion component consumes `useReducedMotion()`. When motion preferences are active, position transforms (`y: 16`) and stagger delays are collapsed to instantaneous zero-offset transitions.
* **Focus States**: High-contrast, visible focus rings (`focus-visible:ring-2 focus-visible:ring-accent/40`) across all interactive controls.
* **Modal Dialog Hygiene**: The mobile navigation drawer enforces background scroll locking (`document.body.style.overflow = "hidden"`), trap-aware dialog semantics, and accessible <kbd>Esc</kbd> key dismissal.
* **Semantic Structure**: Proper landmark tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) and strict typographic heading hierarchy (`h1` $\rightarrow$ `h2` $\rightarrow$ `h3`).

---

## 4. Homepage Section Blueprint

The homepage orchestrates 10 sequential, modular sections:

```
[ Navbar ] ──────────────────── Sticky elevation with theme toggle, wordmark & mobile drawer
     │
[ Hero & Financial Preview ] ── Editorial value proposition paired with interactive balance telemetry
     │
[ Value Strip ] ─────────────── Transitional 3-pillar anchor (Understand · Act · Grow)
     │
[ Problem → Solution ] ──────── Sticky 2-column comparative analysis of financial friction
     │
[ Financial Overview ] ──────── 6-month net worth trajectory curve with hover telemetry inspection
     │
[ How Fermor Works ] ────────── 3-step structured journey with responsive connective track lines
     │
[ Features ] ────────────────── Asymmetric 7+5 and 5+7 bento grid with bespoke micro-visualizations
     │
[ Final CTA ] ───────────────── Elevated closing container with subtle financial vector grid
     │
[ Footer ] ──────────────────── Semantic navigation columns, copyright, privacy & versioning
```

---

## 5. Project Directory Structure

```text
fermor/
├── app/
│   ├── globals.css              # Custom properties, Tailwind base layers, typography tokens
│   ├── layout.tsx               # Root layout, anti-FOUT theme script, metadata & viewport
│   ├── not-found.tsx            # Branded, accessible 404 fallback page
│   └── page.tsx                 # Single-page orchestrator mounting sections sequentially
├── components/
│   ├── ThemeProvider.tsx        # React Context theme manager with localStorage persistence
│   ├── Navbar.tsx               # Responsive header, desktop nav pills & theme toggle button
│   ├── Hero.tsx                 # Value proposition, editorial headline & trust cues
│   ├── FinancialPreview.tsx     # Hero interactive financial card & trajectory curve
│   ├── ValueStrip.tsx           # 3-pillar benefit strip with hairline dividers
│   ├── ProblemSolution.tsx      # Comparative friction analysis with desktop sticky framing
│   ├── FinancialOverview.tsx    # 6-month net worth chart showcase & metric modules
│   ├── HowItWorks.tsx           # 3-step journey (Connect → Understand → Act)
│   ├── Features.tsx             # Asymmetric bento grid with custom telemetry micro-UIs
│   ├── FinalCTA.tsx             # High-contrast closing call-to-action container
│   └── Footer.tsx               # Editorial site footer with navigation columns & legal links
├── public/
│   └── favicon.ico              # Vector brand mark
├── eslint.config.mjs            # Flat ESLint configuration with typescript-eslint
├── next.config.ts               # Next.js compiler configuration
├── postcss.config.mjs           # PostCSS Tailwind plugin pipeline
├── tailwind.config.ts           # Tokenized color extensions, shadows, font declarations
├── tsconfig.json                # TypeScript strict mode configuration with path aliases
└── package.json                 # Project scripts and dependencies
```

---

## 6. Getting Started

### Prerequisites
* **Node.js**: `v18.17.0` or higher (tested on Node `v22.x` / `v24.x`)
* **Package Manager**: `npm` (`v9.x`+) or `pnpm` (`v9.x`+)

### 1. Clone & Install
```bash
git clone https://github.com/VIJAYAPANDIANT/fermor.git
cd fermor
npm install
```

### 2. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the development server with Hot Module Replacement (HMR).

### 3. Static Typecheck & Linting
```bash
npm run lint
```
*Validates TypeScript strict types and enforces clean ESLint code standards (0 errors, 0 warnings).*

### 4. Production Build Verification
```bash
npm run build
```
Compiles and generates optimized static assets for the App Router:
```text
Route (app)                              Size  First Load JS
┌ ○ /                                 51.3 kB         159 kB
└ ○ /_not-found                         123 B         103 kB
+ First Load JS shared by all          103 kB
```

### 5. Local Production Preview
```bash
npm run start
```

---

## 7. Deployment Pipeline

The application is fully optimized for **zero-config deployment on [Vercel](https://vercel.com)**:

1. Push your repository to GitHub.
2. In the Vercel dashboard, click **Add New Project** and select `fermor`.
3. Vercel automatically detects Next.js App Router and provisions edge caching, route pre-rendering, and asset compression.
4. Click **Deploy**.

---

## 8. Senior Engineering Decisions & Trade-Offs

1. **Native SVG Math vs. Heavy Charting Libraries**:
   * *Decision*: Handcrafted SVG vectors for all charts and sparklines.
   * *Rationale*: Saves over 120 kB of third-party bundle weight, prevents canvas re-render penalties, ensures crisp 4K Retina vector rendering, and directly inherits CSS custom properties across theme toggles.
2. **CSS Custom Properties with RGB Channels**:
   * *Decision*: Declare theme values in RGB format (`250 249 245`) rather than static hex.
   * *Rationale*: Allows seamless utilization of Tailwind's alpha channel modifiers (`bg-canvas/90`, `text-accent/40`) without requiring duplicate color definitions.
3. **Head-Injected Anti-FOUT Script**:
   * *Decision*: A self-executing script placed directly within `<head>` in `RootLayout`.
   * *Rationale*: Prevents the dreaded white-to-dark flash on page reload by resolving `localStorage` before the first paint cycle.
4. **Fluid Asymmetric Bento Grids**:
   * *Decision*: Dynamic `7+5` and `5+7` layout cadence in the Features section instead of uniform three-card repetitions.
   * *Rationale*: Creates natural visual rhythm, guides user attention toward key telemetry, and collapses cleanly into single-column mobile cards.

---

## 9. License & Attribution

Developed as a frontend developer assignment for **Fermor**.  
Authored with craft, precision, and architectural discipline.
