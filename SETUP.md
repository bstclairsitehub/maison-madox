# Maison Madox - Next.js 14 Site Setup

A luxury French design studio website built with Next.js 14, featuring dark elegant aesthetic with champagne gold accents.

## Quick Start

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
maison-madox-nextjs/
├── app/
│   ├── blog/
│   │   ├── page.tsx          # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx      # Individual blog post
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── BlogPreview.tsx       # Blog preview section
│   ├── Footer.tsx            # Footer
│   ├── Header.tsx            # Header navigation
│   ├── HeroSection.tsx       # Hero section
│   ├── PostCard.tsx          # Blog post card
│   ├── ProductsGrid.tsx      # Products section
│   └── ProjectsGrid.tsx      # Projects section
├── package.json
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json
└── next.config.js
```

## Features

- **Dark Luxury Design** - Deep blacks (#0A0A0A) with champagne gold accents (#C9A96E)
- **Typography** - Cormorant Garamond for headings, Montserrat for body text
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Blog System** - Dynamic blog posts with slug-based routing
- **SEO Optimized** - Metadata and static generation for performance
- **Components** - Reusable, modular React components

## Color Palette

- **Noir** - `#0A0A0A` (Primary background)
- **Champagne** - `#C9A96E` (Accent/gold highlights)
- **Marble** - `#F4F1EC` (Light text/backgrounds)
- **Graphite** - `#1C1C1C` (Secondary background)
- **Mist** - `#9B9B9B` (Muted text)

## Pages

- **Home** (`/`) - Hero, products, projects, blog preview, about section
- **Blog** (`/blog`) - Grid of all blog posts
- **Blog Posts** (`/blog/[slug]`) - Individual article pages
  - The Art of Restraint in Modern Design
  - Behind the Nocturne Collection
  - A Studio Visit in the Marais

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Cormorant Garamond, Montserrat

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Notes

- All blog posts are generated at build time with static generation
- The site uses client-side components where necessary (indicated by 'use client')
- Tailwind CSS is configured for the custom color palette
- Google Fonts are imported in the global CSS for optimal performance
