# CLAUDE.md

This file provides guidance for Claude Code when working on this project.

## Project Overview

This is the official website for Steinway Artist Wenting Shi, built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS in `globals.css`
- **Deployment:** GitHub Pages (static export)

## Key Commands

```bash
npm install     # Install dependencies
npm run dev     # Start development server (http://localhost:3000/wsbio)
npm run build   # Build for production (outputs to /out)
npm run lint    # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with all sections
│   ├── globals.css        # Global styles and section backgrounds
│   ├── news/              # News detail pages
│   ├── concerts/          # Concerts listing page
│   └── resume/            # Artistic resume page
├── components/
│   ├── sections/          # Page sections (Hero, News, Concerts, Biography, Contact)
│   ├── Header.tsx         # Fixed header with sound toggle and menu
│   ├── Footer.tsx
│   └── ScrollIndicator.tsx
└── data/
    └── content.ts         # All site content (concerts, news, bio, etc.)
```

## Section Background Pattern

Sections use a sticky background pattern for smooth scrolling:

1. **Container** (e.g., `.news-container`) - sets height based on number of pages
2. **Sticky background** - gradient or image that stays fixed while scrolling
3. **Sticky overlay** - gradient for text readability
4. **Content wrapper** - contains the actual section components

Example in `globals.css`:
```css
.news-container { height: 300vh; }  /* 3 pages */
.concerts-container { height: 100vh; }  /* 1 page */
```

To add more pages: increase container height and add section components in `page.tsx`.

## Background Images

Located in `public/images/`:
- Hero: YouTube video embed (ID in `HeroSection.tsx`)
- News: `news.JPG` - horizontal, 25% position on mobile
- Concerts: `upcoming_concerts.JPG` - vertical, centered, hidden on mobile
- Biography: `artist.JPG` - vertical, right-aligned, hidden on mobile

## Content Management

All content is in `src/data/content.ts`:
- `heroContent` - Hero section text
- `newsItems` - News articles
- `allConcerts` - Concert listings (auto-sorted by date)
- `bioContent` - Biography text
- `contactInfo` - Contact form settings
- `siteConfig` - Site metadata and social links

## Important Notes

- YouTube video requires `mute=1` for autoplay (browser policy)
- Sound toggle syncs between header button and hero "Listen Now" button
- Sections without `imageSrc` prop use container's sticky background
- Mobile breakpoint: 768px (md in Tailwind)
