# Fermor

Your money, made clearer.

A modern fintech homepage designed and developed as a frontend developer assignment for Fermor.

## Overview

Fermor is designed as a modern financial clarity platform that helps users understand their financial picture, identify useful insights, and make more informed decisions.

This implementation focuses on creating a calm, premium, and approachable fintech experience rather than a traditional banking interface.

## Live Demo

Coming soon

## Features

- Responsive fintech homepage
- Dual theme modes: Warm editorial light mode & obsidian dark mode with zero-flicker persistence
- Modern financial product visualization
- Financial overview dashboard
- Spending and savings insights
- Responsive navigation with mobile menu drawer
- How Fermor works section
- Feature showcase with asymmetric bento layout
- Final call-to-action
- Mobile-first responsive behavior
- Subtle micro-interactions
- Accessibility considerations and reduced motion support

## Tech Stack

- **Next.js** (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

*(All data visualizations are handcrafted with lightweight, responsive SVG elements for optimal performance and zero external charting dependencies.)*

## Design Approach

### Product Thinking
The homepage is structured around a simple user journey:
**Understand → Act → Grow**

The hero establishes Fermor's core value proposition, followed by the financial problem, product visualization, workflow, feature capabilities, and a closing call-to-action.

### Visual Direction
The design intentionally uses:
- Restrained fintech aesthetics
- Strong, clear typography
- Generous whitespace and vertical rhythm
- Subtle hairline borders (`#E7E5DD`)
- Neutral, paper-like surfaces (`#FAF9F5`)
- Limited, purposeful accent color (forest pine `#124E3F` for positive financial signals)
- Product-focused interactive visualizations

The goal is to avoid generic banking dashboards, neon glows, excessive glassmorphism, or AI-generated SaaS template clichés.

### Responsive Design
The layout adapts cleanly across all viewports—from small mobile devices (360px) and tablets through laptops and wide desktop screens (1440px+). Complex desktop bento grids and coordinate charts collapse into touch-friendly, readable mobile cards without horizontal overflow or clipped content.

## Project Structure

```text
fermor/
├── app/                  # Next.js App Router (layout, page, global styles, 404)
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/           # Modular UI sections
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── FinancialPreview.tsx
│   ├── ValueStrip.tsx
│   ├── ProblemSolution.tsx
│   ├── FinancialOverview.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
└── public/               # Static assets
    └── favicon.ico
```

## Getting Started

### Clone the repository
```bash
git clone https://github.com/VIJAYAPANDIANT/fermor.git
cd fermor
```

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deployment

To validate TypeScript types, linting, and generate an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run start
```

The project is production-ready and configured for seamless zero-config deployment on Vercel.

## Design Decisions

- **Handcrafted SVG Visualizations**: Instead of importing heavy charting bundles, visualizations are implemented with lightweight, zero-dependency SVG paths. This keeps bundle size minimal and ensures instant initial page loads.
- **Component-Driven Modular Architecture**: Each section is an independent, self-contained component with clean TypeScript interfaces, making maintenance and iterative refinement straightforward.
- **Calm, High-Contrast Palette**: The color scheme utilizes warm paper neutrals (`#FAF9F5`) and deep charcoal (`#121316`) with high contrast ratios for readability, pairing restraint with elegance.
- **Accessibility & Reduced Motion**: Full keyboard navigability (including `<dialog>` semantics, mobile menu escape handling, and visible focus rings) alongside native `prefers-reduced-motion` compliance to respect user preferences.

---

*Developed for the Fermor Frontend Developer Assignment.*
