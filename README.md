# Jabcore - Premium Software Development Company Website

> **"The core of your new app."**

A modern, fully responsive website for Jabcore, a premium software development company specializing in enterprise solutions and innovative digital products.

## ✨ Features

### Core Functionality
- **Light/Dark Theme Toggle** - Seamless theme switching with localStorage persistence
- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop (including ultrawide displays)
- **Smooth Scroll Animations** - Elements fade in elegantly as you scroll
- **Working Contact Form** - Full validation with success/error handling
- **Sticky Navigation** - Always accessible header with smooth anchor scrolling
- **Mobile Menu** - Slide-in drawer navigation for mobile devices

### Sections
1. **Hero** - Animated background with floating particles, brand introduction, and dual CTAs
2. **Services (B2B)** - Four premium service cards:
   - Mobile App Development
   - Corporate & Enterprise Systems
   - Web Applications
   - Websites
3. **Studio (Innovation)** - Showcase of Jabcore's internal products:
   - TaskFlow AI
   - DevPulse
   - CloudSync Pro
4. **About** - Company mission, values, and development philosophy
5. **Contact** - Fully functional contact form with validation
6. **Footer** - Social links, quick navigation, and theme toggle

## 🎨 Design Philosophy

- **Modern Tech Aesthetic** - Clean, professional, and cutting-edge
- **Premium Quality** - Enterprise-grade design with attention to detail
- **Purposeful Animation** - Smooth, physics-based motion that enhances UX
- **Accessible** - WCAG AA compliant color contrasts, semantic HTML, ARIA attributes

## 🎨 Color Palette

- **Primary**: Deep electric blue (`oklch(0.45 0.15 255)`) - Technology and trust
- **Accent**: Bright cyan (`oklch(0.75 0.15 195)`) - Innovation and energy
- **Backgrounds**: Clean whites and deep blacks with subtle grays
- All color pairings exceed WCAG AA contrast requirements

## 🔤 Typography

- **Headlines**: Space Grotesk (Bold, 600, 500) - Modern, technical character
- **Body**: Inter (Regular, Medium, Semibold, Bold) - Clean, highly legible
- **Hierarchy**: Clear visual distinction from 72px hero titles to 14px captions

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **shadcn/ui** component library
- **React Hook Form + Zod** for form validation
- **Phosphor Icons** for iconography
- **Sonner** for toast notifications

## 📦 Installation

The website is ready to run in the Spark environment. All dependencies are pre-installed.

## 🚀 Development

The site is built as a single-page application with smooth scroll navigation between sections.

### Key Files

```
src/
├── App.tsx                          # Main app with theme management
├── index.css                        # Custom styles and theme variables
├── components/
│   ├── sections/
│   │   ├── Navigation.tsx          # Sticky header with mobile menu
│   │   ├── Hero.tsx                # Hero section with animations
│   │   ├── Services.tsx            # B2B services showcase
│   │   ├── Studio.tsx              # Internal products
│   │   ├── About.tsx               # Company information
│   │   ├── Contact.tsx             # Contact form
│   │   └── Footer.tsx              # Footer with theme toggle
│   └── ui/                         # shadcn components
```

## 📝 Contact Form

The contact form includes:
- **Client-side validation** using Zod schema
- **Real-time error messages** for better UX
- **Loading states** during submission
- **Success toast** notification
- **Auto-reset** after successful submission

### Backend Integration

Currently, the form submission is simulated with a 1.5-second delay. To integrate with a real backend:

1. Replace the simulated delay in `Contact.tsx`:
```typescript
const onSubmit = async (data: FormData) => {
  setIsSubmitting(true)
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    
    if (!response.ok) throw new Error('Failed to send message')
    
    toast.success('Message sent successfully!', {
      description: "We'll get back to you within 24 hours.",
    })
    form.reset()
  } catch (error) {
    toast.error('Failed to send message', {
      description: 'Please try again later.',
    })
  } finally {
    setIsSubmitting(false)
  }
}
```

2. Create an API endpoint that accepts:
```json
{
  "name": "string",
  "company": "string",
  "email": "string",
  "message": "string"
}
```

## 🎯 Theme System

The theme system uses:
- **localStorage** for persistence across sessions
- **CSS custom properties** for smooth transitions
- **System preference detection** on first visit
- **Instant theme switching** with no flash

Toggle locations:
- Navigation bar (desktop/mobile)
- Footer section

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (stacked layouts, hamburger menu)
- **Tablet**: 768px - 1024px (2-column grids)
- **Desktop**: > 1024px (4-column services, full navigation)
- **Ultrawide**: > 1536px (maintains max-width for readability)

## ⚡ Performance

- **Smooth 60fps animations** using Framer Motion
- **Intersection Observer** for scroll-triggered animations
- **Optimized re-renders** with proper React patterns
- **Lazy animation triggers** only animate when in viewport

## 📄 License

Built for Jabcore. All rights reserved.

---

**Made with precision by Jabcore** 🔵
