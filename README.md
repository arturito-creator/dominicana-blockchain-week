# Dominicana Blockchain Week 2026 Website

A modern, premium landing page for Dominicana Blockchain Week 2026, built with Next.js 16, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Animated Background**: Custom canvas-based animated background with organic wave effects (adapted from portfolio project)
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion animations for scroll-into-view and interactions
- **Modern UI**: Dark, premium design with brand colors
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Accessible**: Semantic HTML and ARIA labels

## Tech Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React**: UI library

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with background and navbar
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── AnimatedBackground.tsx  # Canvas-based animated background
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About/Why Dominicana section
│   ├── Speakers.tsx        # Speakers grid
│   ├── Agenda.tsx          # Event agenda/tracks
│   ├── Venue.tsx           # Venue & travel info
│   ├── Tickets.tsx         # Ticket pricing tiers
│   ├── Sponsors.tsx        # Sponsors & partners
│   ├── Newsletter.tsx      # Newsletter signup
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer with links
└── public/                 # Static assets (add logo here)
```

## Brand Colors

- **Primary Gradient**: `#001d66` → `#00377c` (dark blue)
- **Red Accent**: `#b80c11` (brand red)
- **Dark Red**: `#8c0305`
- **Light Gray**: `#d9d9d9`
- **White**: `#ffffff`

## Customization

### Adding Fonts

**DM Sans** is automatically loaded from Google Fonts via Next.js font optimization.

**Lost in South** font needs to be added manually:
1. Download the font from [DaFont](https://www.dafont.com/lost-in-south.font)
2. Convert to web formats (recommended: .woff2, .woff, .ttf)
3. Place the font files in `public/fonts/` directory:
   - `LostInSouth.woff2` (best for web)
   - `LostInSouth.woff` (fallback)
   - `LostInSouth.ttf` (fallback)
4. The font is already configured in `app/globals.css` and will automatically load

### Adding Logo

Replace the logo placeholder in `components/Hero.tsx` and `components/Navbar.tsx` with your actual logo image. Place the logo file in the `public/` directory.

### Updating Content

- **Speakers**: Edit the `speakers` array in `components/Speakers.tsx`
- **Agenda**: Edit the `schedule` array in `components/Agenda.tsx`
- **Sponsors**: Edit the `sponsors` object in `components/Sponsors.tsx`
- **Tickets**: Edit the `tiers` array in `components/Tickets.tsx`

### Background Customization

The animated background is in `components/AnimatedBackground.tsx`. You can adjust:
- `gap`: Vertical spacing between lines (default: 35)
- `opacity`: Line opacity (currently 0.04-0.12)
- `interactionRadius`: Mouse interaction radius (default: 350)
- Colors: Currently using `rgba(0, 90, 200, opacity)` for blue accent lines

## Next Steps

1. Add your logo image to `public/` and update references
2. Replace placeholder speaker/sponsor data with real data
3. Connect forms (Newsletter, Contact) to API routes
4. Add actual venue details and map
5. Set up ticketing platform integration
6. Add real social media links
7. Configure analytics (if needed)

## Build for Production

```bash
npm run build
npm start
```

## License

Private project for Dominicana Blockchain Week 2026.

