# Vibe Coding Components Documentation

This document describes the new components created for the Vibe Coding transformation of the Aesir website.

## Components Overview

### 1. TechnologyCarousel (`/src/components/TechnologyCarousel.jsx`)

An auto-scrolling carousel displaying technology logos/names with smooth infinite scroll animation.

**Props:**
- `className?: string` - Additional CSS classes
- `pauseOnHover?: boolean` - Whether to pause animation on hover (default: true)

**Features:**
- 12 predefined technologies: PHP, Laravel, JavaScript, Vue.js, React, Next.js, React Native, Node.js, Flutter, Python, Django, Unity
- Infinite scroll animation with seamless loop
- Responsive design with gradient fade edges
- Hover to pause functionality
- Color-coded technology names

**Usage:**
```jsx
import { TechnologyCarousel } from '@/components/TechnologyCarousel'

<TechnologyCarousel className="my-8" pauseOnHover={true} />
```

### 2. ServiceCard (`/src/components/ServiceCard.jsx`)

Reusable service card component with multiple emphasis levels and integrated CTA buttons.

**Props:**
- `icon?: ReactNode` - Icon element to display
- `title: string` - Service title
- `description: string` - Service description
- `ctaText?: string` - Call-to-action button text
- `ctaHref?: string` - Call-to-action link URL
- `emphasis?: 'primary' | 'secondary'` - Visual emphasis level (default: 'secondary')
- `className?: string` - Additional CSS classes
- `invert?: boolean` - Invert colors for dark backgrounds

**ServiceGrid Component:**
Container component for arranging service cards in a responsive grid.

**Usage:**
```jsx
import { ServiceCard, ServiceGrid } from '@/components/ServiceCard'

<ServiceGrid>
  <ServiceCard
    icon={<YourIcon />}
    title="Vibe Coding Cleanup"
    description="Transform your messy codebase..."
    ctaText="Start Cleanup"
    ctaHref="/services/vibe-cleanup"
    emphasis="primary"
  />
  <ServiceCard
    title="Web Development"
    description="Modern web applications..."
    ctaText="Learn More"
    ctaHref="/services/web"
  />
</ServiceGrid>
```

### 3. ProcessVisualization (`/src/components/ProcessVisualization.jsx`)

Components for visualizing multi-step processes with numbered steps, descriptions, and deliverables.

**ProcessVisualization Props:**
- `steps: Array<ProcessStep>` - Array of step objects
- `title?: string` - Section title
- `description?: string` - Section description
- `className?: string` - Additional CSS classes

**ProcessStep Object:**
```typescript
{
  title: string
  description: string
  deliverables?: string[]
}
```

**ProcessStepsHorizontal:**
Alternative horizontal layout for smaller sections.

**Usage:**
```jsx
import { ProcessVisualization } from '@/components/ProcessVisualization'

const steps = [
  {
    title: 'Code Audit & Analysis',
    description: 'We thoroughly examine your existing codebase...',
    deliverables: ['Comprehensive code audit report', 'Performance analysis']
  },
  // ... more steps
]

<ProcessVisualization
  title="Our Process"
  description="A proven methodology..."
  steps={steps}
/>
```

### 4. CTAVariations (`/src/components/CTAVariations.jsx`)

Multiple call-to-action button styles with different emphasis levels and visual treatments.

**Components:**
- `PrimaryCTA` - Most prominent, gradient background, for Vibe Coding Cleanup
- `SecondaryCTA` - Standard CTA for important services
- `OutlineCTA` - Outlined style for less prominent actions
- `TextCTA` - Text-based CTA with arrow for subtle actions
- `LargeCTA` - Extra large CTA for hero sections
- `CTAGroup` - Container for arranging multiple CTAs

**Common Props:**
- `children: ReactNode` - Button content
- `href?: string` - If provided, renders as Link, otherwise as button
- `className?: string` - Additional CSS classes
- `invert?: boolean` - Invert colors for dark backgrounds

**CTAGroup Props:**
- `alignment?: 'left' | 'center' | 'right'` - Alignment of CTAs (default: 'left')

**Usage:**
```jsx
import { 
  PrimaryCTA, 
  SecondaryCTA, 
  OutlineCTA, 
  CTAGroup 
} from '@/components/CTAVariations'

<CTAGroup alignment="center">
  <PrimaryCTA href="/services/vibe-cleanup">
    Start Vibe Cleanup
  </PrimaryCTA>
  <SecondaryCTA href="/about">
    Learn More
  </SecondaryCTA>
  <OutlineCTA href="/contact">
    Get Quote
  </OutlineCTA>
</CTAGroup>
```

## Design System Integration

All components follow the existing design patterns:

- **Colors:** Using existing Tailwind CSS v4 theme variables
- **Typography:** Following existing font hierarchy (font-display for headings)
- **Spacing:** Consistent with existing spacing scales
- **Animations:** Using Framer Motion with existing FadeIn patterns
- **Responsive:** Mobile-first responsive design
- **Accessibility:** Proper focus states and semantic HTML

## File Structure

```
src/components/
├── TechnologyCarousel.jsx     # Auto-scrolling tech carousel
├── ServiceCard.jsx           # Service cards and grid
├── ProcessVisualization.jsx  # Process steps visualization
├── CTAVariations.jsx        # Multiple CTA button styles
├── VibeComponents.jsx       # Example usage of all components
└── index.js                 # Component exports
```

## Example Page Integration

See `/src/components/VibeComponents.jsx` for a complete example showing how to use all components together in a page layout.

## Technology Stack

- **React 19** - Component framework
- **Framer Motion** - Animations and transitions
- **Tailwind CSS v4** - Styling with @theme syntax
- **clsx** - Conditional class name handling
- **next-intl** - Internationalization support

## Browser Support

Components are designed to work in all modern browsers with graceful degradation for older browsers. Animations respect `prefers-reduced-motion` settings.