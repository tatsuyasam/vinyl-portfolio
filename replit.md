# Cinematic Portfolio Website

## Overview
A high-end SvelteKit portfolio website inspired by Unveil.fr, featuring dark luxury aesthetics, smooth inertia scrolling, GSAP animations, and cinematic visual effects.

**Last Updated:** October 28, 2025

## Current State
- ✅ Fully functional SvelteKit application with TypeScript
- ✅ Dark theme with elegant typography
- ✅ Smooth Lenis scrolling implementation
- ✅ GSAP-powered scroll animations
- ✅ Magnetic cursor with hover morphing
- ✅ Hero, Projects, About, and Contact sections
- ✅ Project detail pages with page transitions
- ✅ Responsive layout for desktop and mobile
- ✅ Cinematic grain overlay

## Project Architecture

### Tech Stack
- **Framework:** SvelteKit 2.x with Svelte 5
- **Styling:** TailwindCSS 4.x
- **Animations:** GSAP 3.x with ScrollTrigger
- **Smooth Scroll:** Lenis (@studio-freight/lenis)
- **Build Tool:** Vite 7.x
- **Language:** TypeScript

### Project Structure
```
src/
├── app.html              # HTML template
├── app.css               # Global styles with Tailwind
├── routes/
│   ├── +layout.svelte    # Root layout with Lenis & cursor
│   ├── +page.svelte      # Home page (all sections)
│   └── projects/
│       └── [slug]/
│           └── +page.svelte  # Project detail pages
└── lib/
    └── components/
        ├── Hero.svelte         # Hero section with zoom animation
        ├── Projects.svelte     # Projects gallery with diagonal cards
        ├── ProjectCard.svelte  # Individual project card
        ├── About.svelte        # About section
        ├── Contact.svelte      # Contact links section
        └── MagneticCursor.svelte  # Custom magnetic cursor
```

## Features Implemented

### Visual Design
- Dark theme (charcoal/black #0a0a0a background)
- Off-white text (#f5f5f5)
- Grain/noise overlay for cinematic texture
- Modern Inter font family
- Fullscreen sections with minimal content

### Animations
- **Hero Section:** Fade-in + zoom animation, animated scroll cue
- **Projects:** Diagonal/angled card layout with hover scale, glow, and overlay reveal
- **Scroll Animations:** GSAP ScrollTrigger for fade/slide on section entrance
- **Page Transitions:** Smooth opacity transitions between routes
- **Magnetic Cursor:** Morphs size and opacity on hover over interactive elements

### Interactive Elements
- Smooth inertia scrolling (Lenis)
- Hover effects on project cards
- Animated underline on contact links
- Click-through to project detail pages
- Back button with fade transition

## Sample Projects
The portfolio includes 4 sample projects:
1. **Cinematic Brand Experience** - Web Design
2. **Luxury E-Commerce** - Development
3. **Immersive Portfolio** - Creative Direction
4. **Motion Graphics Studio** - Animation

## Development

### Running the Project
```bash
npm run dev    # Start dev server on http://localhost:5000
npm run build  # Build for production
npm run preview  # Preview production build
```

### Customization Guide
1. **Update Personal Info:** Edit `src/lib/components/Hero.svelte` (name) and `Contact.svelte` (email, socials)
2. **Add/Edit Projects:** Modify the `projects` array in `src/lib/components/Projects.svelte` and add corresponding detail data in `src/routes/projects/[slug]/+page.svelte`
3. **Change Colors:** Update `tailwind.config.js` theme colors
4. **Modify Animations:** Adjust GSAP timelines in individual component files

## Responsive Design
- Mobile-first approach with TailwindCSS breakpoints
- Magnetic cursor hidden on mobile (touch devices)
- Responsive typography scaling (text-4xl md:text-7xl patterns)
- Grid layouts adapt from 1 column (mobile) to 2 columns (desktop)

## Recent Changes
- **2025-10-28:** Initial project creation with all core features
  - SvelteKit project scaffolding
  - TailwindCSS and GSAP integration
  - All sections and components built
  - Lenis smooth scrolling configured
  - Magnetic cursor implemented
  - Project detail pages with routing

## Notes
- The `@studio-freight/lenis` package has been deprecated in favor of `lenis` - consider updating in future
- Cursor is hidden on mobile devices for better touch UX
- All images use Unsplash placeholders - replace with real project images
- WebGL/Three.js background can be added as enhancement (not in MVP)

## User Preferences
- None specified yet
