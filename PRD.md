# Planning Guide

A premium, modern website for Jabcore - a software development company that builds enterprise solutions for businesses and develops innovative digital products internally.

**Experience Qualities**: 
1. **Professional** - Enterprise-grade presentation that instills confidence in potential B2B clients through polished design and clear value propositions
2. **Innovative** - Cutting-edge aesthetic with subtle animations and modern interactions that demonstrate technical excellence
3. **Trustworthy** - Clean, accessible design with clear navigation and transparent service offerings that builds credibility

**Complexity Level**: Light Application (multiple features with basic state)
  - Multi-page application with React Router, dark/light theme switching, contact form validation, page transitions, and persistent user preferences

## Essential Features

### Multi-Page Routing
- **Functionality**: Separate pages for Home, Services, Studio, About, and Contact with client-side routing
- **Purpose**: Better organization, improved SEO potential, cleaner URLs, and professional multi-page experience
- **Trigger**: User clicks navigation links or CTAs
- **Progression**: User clicks link → React Router navigation → New page loads instantly → Scroll to top → Active nav state updates
- **Success criteria**: Fast page transitions, browser back/forward works, active navigation indicators, URL updates correctly

### Theme Switcher
- **Functionality**: Toggle between light and dark color modes with logo adaptation
- **Purpose**: Provides user preference and demonstrates attention to detail
- **Trigger**: Click theme toggle button in navigation/footer
- **Progression**: User clicks toggle → Theme changes instantly with smooth transition → Logo switches (dark.png in light mode, light.png in dark mode) → Preference saved to localStorage → Persists across sessions
- **Success criteria**: Theme persists on reload, smooth transitions, logos switch appropriately, accessible controls

### Dynamic Logo System
- **Functionality**: Navigation and footer logos change based on active theme
- **Purpose**: Maintains visual hierarchy and brand consistency across themes
- **Trigger**: Theme changes or page loads with saved theme
- **Progression**: Theme state updates → Logo component re-renders with appropriate asset (dark.png/light.png in nav, black.png/white.png in footer)
- **Success criteria**: Logos visible and appropriate for current theme, smooth transitions, proper contrast

### Contact Form
- **Functionality**: Collects inquiries from potential clients with validation
- **Purpose**: Primary conversion point for B2B leads
- **Trigger**: User navigates to /contact and fills form
- **Progression**: User enters data → Real-time validation → Submit → Loading state → Success/error toast → Form reset on success
- **Success criteria**: All fields validated, accessible error messages, smooth submission flow

### Navigation System
- **Functionality**: Sticky header with React Router links and active state indicators
- **Purpose**: Easy navigation throughout multi-page site
- **Trigger**: Click navigation links or CTA buttons
- **Progression**: User clicks link → React Router navigation → Page changes → Active link highlights → Scroll to top
- **Success criteria**: Active states work, mobile menu works, accessibility support, browser navigation supported

## Edge Case Handling

- **Direct URL Access**: Each route accessible via direct URL, proper page rendering on refresh
- **404 Handling**: Invalid routes redirect to home or show 404 page
- **Slow Connection**: Critical content visible immediately, animations degrade gracefully
- **Small Screens**: Mobile-first responsive design, hamburger menu on mobile, stacked layouts, logos scale appropriately
- **Form Errors**: Clear inline validation, accessible error messages, prevents submission until valid
- **Missing localStorage**: Theme toggle still works, just doesn't persist across sessions

## Design Direction

The design should feel cutting-edge yet serious - a modern tech company that balances innovation with enterprise professionalism. Think Apple's precision meets IBM's credibility. Minimal interface with purposeful animations that enhance rather than distract. Clean whitespace, strong typography hierarchy, and subtle interactive details that reward attention.

## Color Selection

Complementary (opposite colors) - Using deep blue as the primary brand color representing technology and trust, with vibrant cyan accents for energy and innovation.

- **Primary Color**: Deep electric blue (oklch(0.45 0.15 255)) - Represents technology, trust, and corporate professionalism while maintaining modern vibrancy
- **Secondary Colors**: Neutral grays (oklch(0.96 0 0) light, oklch(0.25 0 0) dark) - Supporting backgrounds that let content breathe
- **Accent Color**: Bright cyan (oklch(0.75 0.15 195)) - High-tech energy for CTAs and interactive elements, creates visual excitement
- **Foreground/Background Pairings**: 
  - Background Light (oklch(0.99 0 0)): Dark foreground oklch(0.15 0 0) - Ratio 18.2:1 ✓
  - Background Dark (oklch(0.12 0 0)): Light foreground oklch(0.98 0 0) - Ratio 19.4:1 ✓
  - Primary (oklch(0.45 0.15 255)): White text oklch(1 0 0) - Ratio 7.8:1 ✓
  - Accent (oklch(0.75 0.15 195)): Dark text oklch(0.15 0 0) - Ratio 12.1:1 ✓
  - Card Light (oklch(1 0 0)): Dark text oklch(0.15 0 0) - Ratio 20.1:1 ✓
  - Card Dark (oklch(0.18 0 0)): Light text oklch(0.98 0 0) - Ratio 15.2:1 ✓

## Font Selection

Professional sans-serif fonts that convey modern precision and clarity - Inter for UI elements and body text (geometric, highly legible), paired with Space Grotesk for headlines (distinctive character with technical edge).

- **Typographic Hierarchy**: 
  - H1 (Hero Title): Space Grotesk Bold/72px/tight letter spacing/-0.02em - Maximum impact for "Jabcore"
  - H2 (Section Headers): Space Grotesk Bold/48px/tight letter spacing/-0.01em - Clear section delineation
  - H3 (Card Titles): Space Grotesk Semibold/24px/normal letter spacing - Service and product cards
  - Body (Paragraphs): Inter Regular/18px/relaxed line height/1.7 - Maximum readability
  - Small (Captions): Inter Medium/14px/normal spacing - Labels and metadata
  - CTA Buttons: Inter Semibold/16px/0.01em tracking - Clear call-to-action text

## Animations

Animations should feel premium and purposeful - smooth, physics-based motion that guides attention without causing distraction. Think subtle fade-ins, gentle slides, and micro-interactions that make the interface feel alive and responsive. Every animation serves a functional purpose.

- **Purposeful Meaning**: Animations communicate hierarchy (sections fade in sequence), state changes (theme switch, form submission), and guide user attention (scroll reveals)
- **Hierarchy of Movement**: Hero elements animate first (brand introduction), then sections fade in on scroll (progressive disclosure), CTAs have hover states (interactive affordance), form shows loading state (feedback)

## Component Selection

- **Components**: 
  - Navigation: Custom sticky header with smooth scroll links, mobile sheet/drawer for hamburger menu
  - Hero: Custom animated background with gradient mesh or particles
  - Service Cards: shadcn Card components with custom hover effects
  - Studio Products: shadcn Card with Badge ("Coming Soon")
  - Contact Form: shadcn Form components (Input, Textarea, Button) with react-hook-form validation
  - Theme Toggle: Custom toggle with sun/moon icons from Phosphor
  - Toasts: Sonner for form submission feedback
  - Footer: Custom layout with social links

- **Customizations**: 
  - Animated hero background using framer-motion or CSS gradients
  - Custom card hover effects with subtle scale and glow
  - Scroll-triggered animations using Intersection Observer or framer-motion viewport
  - Gradient mesh backgrounds for sections

- **States**: 
  - Buttons: Default with gradient, hover with glow/scale, active with press, disabled with reduced opacity
  - Form inputs: Default border, focus with ring/glow, error with red border and message, success with green check
  - Cards: Default elevated, hover with lift and enhanced shadow
  - Theme toggle: Smooth rotation and color transition

- **Icon Selection**: 
  - Phosphor icons throughout: DeviceMobile, Database, Globe, Layout for services; Lightbulb, Rocket for studio; Sun/Moon for theme; PaperPlane for contact
  - Icons should be regular weight, using accent color on hover

- **Spacing**: 
  - Section padding: py-24 (desktop), py-16 (mobile)
  - Card gaps: gap-8 (desktop), gap-6 (mobile)
  - Content max-width: max-w-7xl centered
  - Component internal padding: p-6 for cards, p-4 for inputs

- **Mobile**: 
  - Hero: Title scales down to 40px, single column CTAs
  - Services: Stack cards vertically on mobile, 2-column on tablet, 4-column on desktop
  - Navigation: Hamburger menu with slide-in drawer
  - Form: Full width inputs, comfortable touch targets (min 44px)
  - Footer: Stack sections vertically on mobile
