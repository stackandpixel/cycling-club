# Pedal Tribe India · Community Cycling Platform

> **Ride Together. Go Further.**
> Premier digital hub for Pune's grassroots cycling collective, road pelotons, Western Ghats gravel tours, mountain biking trails, and community events.

---

## 1. Overview & Brand Identity

- **Brand Name:** Pedal Tribe India
- **Tagline:** Ride Together. Go Further.
- **HQ Location:** Pune, Maharashtra, India (Senapati Bapat Road & Chandani Chowk hubs)
- **Visual Aesthetic:** Charcoal black (`#0a0a0a`), warm white, electric lime green (`#ccff00`), safety orange accents, bold athletic typography (Teko & Plus Jakarta Sans), elevation contours, and route-inspired telemetry line graphics.

---

## 2. Key Architecture & Features

### A. Dedicated Pages & Navigation
- **Homepage (`/`):** Cinematic Western Ghats hero, live metrics ticker, community narrative, featured group rides, 8 cycling discipline cards, Sahyadri route hubs, membership preview, events teaser, rider stories, and Instagram showcase.
- **Ride Discovery (`/rides`):** Multi-criteria filtering across 12 full ride listings:
  - Discipline filter (Road, Mountain Biking, Gravel, Beginner, Endurance, Social, Night Rides, Skills).
  - Difficulty filter (Beginner, Intermediate, Advanced, Epic/Century).
  - Distance range filter (< 40km, 40-80km, 80-120km, 120km+).
  - Text search (titles, landmarks, start locations).
  - Sorting (Scheduled date, Distance ascending/descending, Elevation gain).
  - Clear empty state with instant reset button.
- **Dedicated Ride Detail Page (`/rides/:slug`):**
  - Interactive SVG Route Topography & Elevation visualizer with hover altitude inspection.
  - Comprehensive ride overview, route corridor, meeting instructions.
  - Interactive required equipment checklist (tap to check off gear before departure).
  - Safety protocols & refreshment notes.
  - Accordion FAQs.
  - Sticky registration action box with pre-formatted WhatsApp registration message.
- **Routes & Destinations (`/routes`):** Highlighting Tamhini Ghat, Mulshi Lake, Sinhagad Fort, Lonavala Old Highway, Panshet Dam, Vetal Tekdi trails, and national inspiration hubs with clear distinction between club-supported routes and suggested destinations.
- **Events & Challenges (`/events`):** Brevet simulations, Sinhagad KOM climb, trailside mechanics clinics, full moon midnight rides, and rural school charity tours.
- **Club Membership (`/membership`):** “Your Next Ride Starts Here” detailing Community Member (Free), Regular Rider, and Club Supporter tiers, alongside the 4-point Rider Pledge.
- **Community Gallery (`/gallery`):** Category-filtered photography showcase with an accessible keyboard-navigable Lightbox (Escape, ArrowLeft, ArrowRight).
- **Safety Constitution & Checklist (`/safety`):** Pre-ride 2-Minute M-Check, universal pack hand signals, hydration and fueling rules, saddle bag essentials, and emergency protocols.
- **About the Tribe (`/about`):** Grassroots origins in Pune, community values, and audience profiles.

### B. WhatsApp & Instagram Integration
- **Click-to-chat WhatsApp utility:** Official `https://wa.me/91XXXXXXXXXX?text=ENCODED_MESSAGE` format with number normalization and `encodeURIComponent`.
- **Pre-filled Enquiry Dispatcher:** Formats ride registrations, preferred dates, rider names, bicycle types, and participant counts.
- **Floating WhatsApp Widget:** Fixed bottom-right action button with unread ping indicator and expandable quick-response options.
- **Instagram Showcase:** 6 interactive tiles featuring like/comment counters and direct profile link.

---

## 3. Technology Stack

- **Framework:** React 19 + Vite 8 + TypeScript
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom typography and topo patterns
- **Icons:** Lucide React
- **Typography:** Google Fonts (`Plus Jakarta Sans` for body, `Teko` for athletic display headlines)
- **Deployment:** Static-friendly (Vercel, Cloudflare Pages, GitHub Pages, or containerized Docker)

---

## 4. Setup, Development & Build Instructions

### Local Development
```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev
```

### Production Build
```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Testing & Quality Verification Checklist

- [x] **Responsive Layout:** Tested seamlessly from 320px mobile screens up to 2560px ultrawide displays.
- [x] **Zero Console Errors:** Clean build with `npm run build` and `tsc --noEmit`.
- [x] **Navigation:** All 8 top-level routes and mobile drawer toggle function correctly.
- [x] **Filter Interactivity:** Category pills, difficulty dropdown, distance selectors, and search queries react in real-time with verified zero-match empty states.
- [x] **Elevation Profile:** Interactive SVG renders proportional gradients, distance markers, and hover inspection tooltips.
- [x] **WhatsApp Click-to-Chat:** Correctly encodes rider details, opens official WhatsApp window, and prompts user to hit send without making false claims of database persistence.
- [x] **Gallery Lightbox:** Supports backdrop click-dismiss, close button, and keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`).
- [x] **Accessibility:** High contrast text ratios, proper `aria-label` attributes on modal controls, and semantic headings.

---

## 6. Fictional Data to Replace Before Production Launch

Before launching for a real cycling club, replace the following placeholder items in `src/config/clubConfig.ts` and `src/data/`:

1. **WhatsApp Contact Number:** Replace `rawNumber: "919823045199"` with the club coordinator's verified WhatsApp business number.
2. **Social Media Handles:** Update `instagramUrl` and `stravaUrl` with the official club profiles.
3. **Rollout Meeting Points:** Confirm physical assembly spots, parking permissions, and morning gates (e.g. Pune University, Chandani Chowk Shell station).
4. **Sample Ride Dates & Fees:** Update illustrative dates (e.g. "Upcoming Saturday") with verified event dates and accurate support vehicle fee structures.
5. **Rider Testimonials:** Replace sample quotes with genuine member reviews and stories.
6. **Imagery:** Replace vector asset fallbacks with original photography captured on club rides as documented in `src/data/assetManifest.ts`.
