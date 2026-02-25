# Error





---

## About

Build a sleek SaaS landing page for 'Zenith Analytics', a real-time data analytics platform for e-commerce businesses. Pages: Home (hero with live data visualization mockup, feature highlights with animated counters, pricing tiers, integration logos, customer testimonials), Features (detailed feature breakdowns with interactive demos and comparison tables), Pricing (three-tier pricing cards with toggle for monthly/annual, FAQ accordion), Case Studies (grid of client success stories with metrics and before/after stats), Blog (article list with category filters and featured post), Contact (demo request form with calendar booking widget, office locations map). Brand colors are electric blue (#2563EB) and cyan (#06B6D4) with a deep navy background (#0F172A). Dark theme, glassmorphism UI elements, smooth scroll animations, and subtle particle effects. Target audience is e-commerce founders and growth teams looking for actionable analytics. Tech stack: Next.js 14 App Router, React, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui components, Zod validation. Include API routes for contact form and newsletter with webhook forwarding. Use Unsplash images for all visual content. Make all components fully responsive with mobile-first design.


## Tech Stack

| Technology | Description |
|-----------|-------------|



## Project Structure

```
├── _build_errors/
│   └── parse-errors.txt
├── _no_custom_components.txt
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts
│   │   ├── demo-request/
│   │   │   └── route.ts
│   │   └── newsletter/
│   │       └── route.ts
│   ├── error.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── CTASparkles.tsx
│   ├── ContactForm.tsx
│   ├── FAQAccordion.tsx
│   ├── FeaturesCards3D.tsx
│   ├── FooterMultiColumn.tsx
│   ├── GalleryMasonry.tsx
│   ├── HeroAurora.tsx
│   ├── NavbarSticky.tsx
│   ├── NewsletterSignup.tsx
│   ├── PricingTable.tsx
│   ├── StatsCounter.tsx
│   ├── TeamGrid.tsx
│   ├── TestimonialsAnimated.tsx
│   └── ui/
│       ├── aceternity-input.tsx
│       ├── aceternity-label.tsx
│       ├── animated-testimonials.tsx
│       ├── avatar.tsx
│       ├── backgrounds/
│       │   ├── aurora-background.tsx
│       │   └── sparkles.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── effects/
│       │   └── 3d-card-effect.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       ├── text/
│       │   └── text-generate-effect.tsx
│       └── textarea.tsx
├── error.txt
└── lib/
    ├── utils.ts
    ├── validators.ts
    └── webhook.ts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mm2eanz1.git

# Navigate to the project
cd proj_mm2eanz1

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mm2eanz1)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
