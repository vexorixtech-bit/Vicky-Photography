# Photography Portfolio Website - Specification Document

## 1. Project Overview

**Project Name:** Lens & Light Photography Portfolio
**Type:** Single Page Application (SPA) - Photography Portfolio Website
**Core Functionality:** A modern, responsive photography portfolio website for a freelance photographer featuring portfolio gallery, booking system, and contact functionality.
**Target Users:** Potential clients seeking photography services (weddings, events, portraits, fashion)

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Pages:**
- Home Page (`/`)
- Portfolio Page (`/portfolio`)
- About Page (`/about`)
- Services Page (`/services`)
- Booking Page (`/booking`)
- Contact Page (`/contact`)

**Responsive Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 2.2 Visual Design

**Color Palette:**

*Dark Theme:*
- Background Primary: `#0D0D0D` (rich black)
- Background Secondary: `#1A1A1A` (dark charcoal)
- Surface: `#262626` (elevated surface)
- Text Primary: `#F5F5F5` (off-white)
- Text Secondary: `#A3A3A3` (muted gray)
- Accent: `#C9A227` (luxury gold)
- Accent Hover: `#E6B82D` (bright gold)
- Border: `#333333`

*Light Theme:*
- Background Primary: `#FAFAFA` (off-white)
- Background Secondary: `#FFFFFF` (pure white)
- Surface: `#F5F5F5` (light gray)
- Text Primary: `#1A1A1A` (rich black)
- Text Secondary: `#6B6B6B` (medium gray)
- Accent: `#B8860B` (dark gold)
- Accent Hover: `#C9A227` (bright gold)
- Border: `#E5E5E5`

**Typography:**
- Headings: `'Cormorant Garamond', serif` - elegant, editorial feel
- Body: `'Outfit', sans-serif` - modern, clean
- Hero Font Size: 4rem (desktop), 2.5rem (mobile)
- H1: 3rem
- H2: 2.25rem
- H3: 1.5rem
- Body: 1rem
- Small: 0.875rem

**Spacing System:**
- Base unit: 4px
- Container max-width: 1280px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card padding: 24px

**Visual Effects:**
- Box shadows: `0 4px 24px rgba(0,0,0,0.15)` (dark), `0 4px 24px rgba(0,0,0,0.08)` (light)
- Border radius: 4px (buttons), 8px (cards), 0 (images for editorial look)
- Transitions: 300ms ease-out
- Hover scale: 1.02

### 2.3 Components

**Navbar:**
- Fixed position, transparent on hero, solid on scroll
- Logo (left), Navigation links (center), Theme toggle (right)
- Mobile: hamburger menu with slide-in drawer
- Active link indicator

**Footer:**
- Three columns: Quick links, Contact info, Social links
- Copyright notice
- Back to top button

**Buttons:**
- Primary: Gold background, dark text
- Secondary: Transparent with gold border
- States: hover (scale + brightness), disabled (opacity)

**Cards:**
- Content cards with subtle shadow
- Image cards with hover overlay

**Forms:**
- Floating labels
- Input focus: gold border
- Error states: red border + message

**Lightbox:**
- Full-screen overlay with dark backdrop
- Image centered with nav arrows
- Close button top-right
- Keyboard navigation (ESC, arrows)

---

## 3. Functionality Specification

### 3.1 Core Features

**Navigation:**
- Smooth scroll between sections on home
- Page routing with React Router
- Active link highlighting

**Portfolio Gallery:**
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Category filters: All, Wedding, Pre-wedding, Events, Portrait, Fashion
- Smooth filter animation
- Lightbox on click with prev/next navigation

**Theme Toggle:**
- Toggle between dark/light themes
- Persist preference in localStorage
- Smooth transition between themes

**Animations:**
- Page load: staggered fade-in
- Scroll reveal: elements fade in from bottom
- Hover effects on cards and buttons

**Testimonials Slider:**
- Auto-rotate (5 seconds)
- Manual navigation with dots
- Pause on hover

### 3.2 Forms

**Booking Form Fields:**
- Name (required)
- Email (required, validated)
- Phone (required)
- Event type (dropdown: Wedding, Pre-wedding, Event, Portrait, Fashion, Other)
- Date (date picker, required)
- Message (textarea, optional)

**Contact Form Fields:**
- Name (required)
- Email (required, validated)
- Subject (dropdown)
- Message (textarea, required)

### 3.3 Data

**Sample Images (portfolio):**
- 15 placeholder images with categories
- Using Unsplash source URLs

**Sample Testimonials:**
- 3 testimonials with name, location, quote

**Sample Services:**
- Wedding packages (Basic/Standard/Premium)
- Event packages
- Studio packages

---

## 4. Acceptance Criteria

### Visual Checkpoints:
- [ ] Navbar renders correctly with logo, links, theme toggle
- [ ] Hero section displays with large background image
- [ ] Portfolio grid displays images in responsive grid
- [ ] Filter buttons work and filter images correctly
- [ ] Lightbox opens on image click with navigation
- [ ] Theme toggle switches between dark/light themes
- [ ] All pages are accessible and render correctly
- [ ] Forms display with proper validation
- [ ] Mobile navigation works with hamburger menu
- [ ] Animations play smoothly on page load

### Functional Checkpoints:
- [ ] All navigation links work correctly
- [ ] Portfolio filters show correct category images
- [ ] Lightbox navigation works (click + keyboard)
- [ ] Theme persists on page reload
- [ ] Forms validate and show success message
- [ ] Testimonial slider auto-rotates
- [ ] WhatsApp button opens chat

---

## 5. Technical Implementation

**Tech Stack:**
- Frontend: React 18 + Vite
- Routing: React Router DOM v6
- Styling: Tailwind CSS v3
- Icons: Lucide React
- Animations: Framer Motion

**File Structure:**
```
/src
  /components
    /Navbar.jsx
    /Footer.jsx
    /Lightbox.jsx
    /ThemeToggle.jsx
    /WhatsAppButton.jsx
    /TestimonialSlider.jsx
  /pages
    /Home.jsx
    /Portfolio.jsx
    /About.jsx
    /Services.jsx
    /Booking.jsx
    /Contact.jsx
  /context
    /ThemeContext.jsx
  /hooks
    /useScrollReveal.js
  /data
    /images.js
    /testimonials.js
    /services.js
  /index.css
  App.jsx
  main.jsx
```

**API Integration:**
- Forms will store data in localStorage (demo mode)
- Backend integration ready for production

---