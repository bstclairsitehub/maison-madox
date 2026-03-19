# Maison Madox

A luxury design studio and fashion brand site built with Next.js 14, TypeScript, and Tailwind CSS. Dark, editorial aesthetic with a focus on craftsmanship, products, and projects.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Runtime | Node.js 18+ |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, products grid, projects, blog preview |
| `/blog` | Blog listing page |
| `/blog/[slug]` | Individual article page |

## Components

| Component | Description |
|---|---|
| `Header` | Navigation with brand wordmark |
| `Footer` | Footer with links and contact |
| `HeroSection` | Full-screen homepage hero |
| `ProductsGrid` | Product catalog section |
| `ProjectsGrid` | Portfolio/projects section |
| `BlogPreview` | Homepage blog post previews |
| `PostCard` | Blog post preview card |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
maison-madox-nextjs/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   └── blog/
│       ├── page.tsx            # Blog listing
│       └── [slug]/
│           └── page.tsx        # Article detail
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ProductsGrid.tsx
│   ├── ProjectsGrid.tsx
│   ├── BlogPreview.tsx
│   └── PostCard.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Design System

- **Background:** Near-black (`#0A0A0A`)
- **Surface:** Dark charcoal (`#141414`)
- **Text:** Off-white (`#F5F0E8`)
- **Accent:** Champagne gold (`#C9A96E`)
- **Typography:** Cormorant Garamond (headings), Inter (body)

---

## Deployment

### Vercel (recommended)

```bash
git push origin main
```

Import on [vercel.com](https://vercel.com). No environment variables required for the base build.

---

## Author

Designed and developed by **St. Clair Design Co.**

---

## License

Private — all rights reserved.
