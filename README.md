# Wenting Shi - Official Website

Official website for Steinway Artist Wenting Shi, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Full-screen scroll-snapping sections
- Responsive design (desktop, tablet, mobile)
- YouTube video background on hero section with sound toggle
- Sticky background images that stay fixed while scrolling through multiple pages
- Dynamic concert date handling (automatically categorizes upcoming vs past)
- News and Concerts sections with navigation
- Contact form via Formspree
- Static export for GitHub Pages hosting

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages (static export)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/wsbio](http://localhost:3000/wsbio) with your browser to see the result.

## Build & Deploy

Build for production:

```bash
npm run build
```

The static output will be in the `out` directory.

### GitHub Pages Deployment

The site is configured for GitHub Pages deployment at `https://chirsmakise.github.io/wsbio/`.

To deploy:
1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy to the `gh-pages` branch

### Custom Domain

To use a custom domain (e.g., `wentingshi.com`):

1. Update `next.config.mjs` - remove or comment out `basePath` and `assetPrefix`
2. Keep the `CNAME` file in `public/` with your domain
3. Configure DNS settings with your domain provider

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── news/              # News pages
│   ├── concerts/          # Concerts page
│   └── resume/            # Artistic resume page
├── components/            # React components
│   ├── sections/          # Page sections (Hero, News, Concerts, etc.)
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ScrollIndicator.tsx
└── data/
    └── content.ts         # Site content and data
```

## Content Management

All site content is managed in `src/data/content.ts`:

- `siteConfig` - Site metadata and social links
- `newsItems` - News articles
- `allConcerts` - Concert listings (automatically sorted by date)
- `bioContent` - Biography text
- `contactInfo` - Contact form settings

## Background Images

Background images are stored in `public/images/`:

- **Hero section**: Uses YouTube video embed (video ID configured in `HeroSection.tsx`)
- **News sections**: `news.JPG` - shared sticky background across 3 news pages
- **Concerts section**: `upcoming_concerts.JPG` - vertical image centered on desktop, hidden on mobile
- **Biography section**: `artist.JPG` - vertical image on right side on desktop, hidden on mobile

### Adding More Section Pages

To add more pages to a section (e.g., more concerts):

1. Update the container height in `globals.css` (e.g., `height: 200vh` for 2 pages)
2. Add additional section components in `page.tsx`
