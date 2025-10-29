# Cinematic Portfolio Website

## Overview
A high-end SvelteKit portfolio website inspired by Unveil.fr, featuring dark luxury aesthetics, smooth inertia scrolling, GSAP animations, and cinematic visual effects.

**Last Updated:** October 29, 2025

## Current State
- ✅ Fully functional SvelteKit application with TypeScript
- ✅ Dark theme with elegant typography
- ✅ Instant scroll response (Lenis with 0 delay)
- ✅ Diagonal scrolling vinyl record collection
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
        ├── Projects.svelte     # Vinyl collection with diagonal scroll
        ├── VinylRecord.svelte  # Individual vinyl record component
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
- **Vinyl Records:** Diagonal scrolling that glides across screen as you scroll, with rotation and scale hover effects
- **Scroll Animations:** GSAP ScrollTrigger for fade/slide on section entrance
- **Page Transitions:** Smooth opacity transitions between routes
- **Magnetic Cursor:** Morphs size and opacity on hover over interactive elements
- **Instant Scroll Response:** Lenis configured with 0 delay for immediate feedback

### Interactive Elements
- Instant scroll response (Lenis duration: 0)
- Diagonal scrolling vinyl collection
- Hover effects on vinyl records (scale + rotation)
- Realistic vinyl design with grooves, center label, and hole
- Animated underline on contact links
- Click-through to project detail pages
- Back button with fade transition

## Sample Music Collection
The portfolio includes 6 sample vinyl records:
1. **Midnight Jazz** - Album · 2024
2. **Neon Dreams** - EP · 2024
3. **Cosmic Flow** - Single · 2023
4. **Urban Pulse** - Album · 2023
5. **Velvet Sunrise** - EP · 2023
6. **Electric Soul** - Single · 2024

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
- **2025-10-29:** Vinyl record browsing experience with diagonal scrolling
  - Reduced Lenis scroll delay to 0 for instant response
  - Replaced project cards with realistic vinyl record design
  - Implemented diagonal scrolling animation that glides vinyls across screen
  - Fixed hover rotation to use absolute values (prevents drift)
  - Enhanced scroll offset for more dramatic diagonal movement
  - Updated section title to "Music Collection"
  
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
