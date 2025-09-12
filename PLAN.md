# Website Update Plan - Aesir Tecnologia

## 📋 Comprehensive Todo List for Structure & Copy Updates

### 1. **Homepage Updates**
- **Hero Section**: Replace current copy with "Transform Your AI-Generated MVP Into Production-Ready Software" messaging
- **Problem Statement Section**: Add new section highlighting AI-generated code challenges
- **Services Overview**: Transform to 3-way split (50% Vibe Coding, 25% Web Dev, 25% Staff Aug)
- **Vibe Coding Deep Dive**: Add dedicated section explaining the cleanup service
- **Technology Carousel**: Create animated logo carousel component with 12 technologies
- **Client Success**: Update testimonials to focus on vibe coding transformations
- **Final CTA Section**: Add triple CTA for different service types

### 2. **Services Section (New)**
Create main services page and 5 service-specific pages:
- **Main Services Page** (`/services`): Overview with 3 primary services
- **Vibe Coding Cleanup** (`/services/vibe-coding-cleanup`): 50% focus, detailed process
- **Web Development** (`/services/web-development`): Custom solutions messaging
- **Staff Augmentation** (`/services/staff-augmentation`): Remote team expertise
- **Mobile Development** (`/services/mobile-development`): Native and cross-platform
- **Game Development** (`/services/game-development`): Unity and HTML5 games

### 3. **Navigation Updates**
- Add "Services" to main navigation with dropdown/submenu
- Reorganize navigation structure: Home, Services, About, Process, Work, Blog, Contact

### 4. **Translation Files**
Update both `messages/en.json` and `messages/pt.json` with:
- All new hero and homepage copy
- Service page content for all 5 services
- New CTAs and buttons
- Problem statement content
- Vibe coding specific terminology

### 5. **About Page Updates**
- Update hero to "Building Software Excellence for Over a Decade"
- Refresh mission statement with AI/traditional coding bridge messaging
- Update values section with new approach copy

### 6. **Contact Page Updates**
- Update hero to "Let's Build Something Great Together"
- Add project type dropdown with new service categories
- Create specific CTAs for each service type
- Add "Schedule a Call" alternative option

### 7. **Work/Portfolio Page**
- Focus case studies on transformation stories
- Add "before/after" AI cleanup examples
- Update client testimonials with vibe coding success stories

### 8. **Component Updates**
- **Technology Carousel**: New auto-scrolling component with 12 tech logos
- **Service Cards**: New components for service overview
- **Process Visualization**: Component for 6-step vibe cleanup process
- **CTA Variations**: Multiple CTA button styles for different services

### 9. **Footer Updates**
- Update company description
- Refresh newsletter copy
- Add service quick links

## 🎯 Implementation Strategy

I'll update the website systematically:
1. Start with translation files to establish all new copy
2. Update homepage with new hero and sections
3. Create Services pages structure
4. Update navigation to include Services
5. Refresh About, Contact, and Work pages
6. Create new components (carousel, service cards)
7. Test all pages in both EN and PT languages

## 📚 Reference Documentation

For detailed copy and messaging guidelines, refer to:
- **docs/COPY-EN.md**: Complete English copy for all pages and sections
- **docs/COPY-PT_BR.md**: Complete Portuguese copy for all pages and sections

These files contain the exact messaging, headlines, descriptions, and CTAs to be implemented across the website.

## 📝 Key Copy Changes from Marketing Docs

### Homepage Hero
**Current**: "Expert development and staff augmentation services."
**New**: "Transform Your AI-Generated MVP Into Production-Ready Software"

### Value Proposition
**Focus**: Vibe coding cleanup as primary service (50% emphasis)
- Security hardening
- Performance optimization
- Architecture restructuring
- Production readiness

### Target Audiences
1. **Primary**: Entrepreneurs with vibe-coded MVPs
2. **Secondary**: Businesses needing custom development
3. **Tertiary**: Companies scaling development teams

### Service Breakdown
- **Vibe Coding Cleanup** (50%): First-mover advantage in AI code cleanup
- **Web Development** (25%): Custom solutions when AI isn't enough
- **Staff Augmentation** (25%): Developers who understand both worlds

## 🚀 Expected Outcomes

This transformation will position Aesir Tecnologia as:
- The first and only specialized vibe coding cleanup service
- Bridge between AI-generated prototypes and production systems
- Complete solution provider (cleanup + custom dev + team scaling)
- Security-first approach to AI-generated code

The new structure emphasizes technical expertise in transforming AI-generated MVPs into investable, scalable production systems while maintaining full-service development capabilities.

---

## 🤖 Implementation Prompt for Claude Code

**Prompt**: Please systematically implement this comprehensive website update plan using specialized subagents for optimal execution. Use the Task tool to launch multiple agents in parallel whenever possible to maximize efficiency.

### Execution Strategy

**Phase 1: Foundation Setup**
- Launch `general-purpose` agent to analyze current codebase structure and patterns
- Launch `general-purpose` agent to parse and organize content from docs/COPY-EN.md and docs/COPY-PT_BR.md
- Launch `general-purpose` agent to audit existing translation files (messages/en.json, messages/pt.json)

**Validation Gate 1 - Foundation Validation**
- Launch `general-purpose` agent for code review of foundation analysis
- Launch `general-purpose` agent to verify adherence to project specifications from CLAUDE.md
- Launch `general-purpose` agent using Playwright MCP to test current site functionality baseline

**Phase 2: Content Implementation** 
- Launch `general-purpose` agent for Homepage Updates (Section 1)
- Launch `general-purpose` agent for Services Section creation (Section 2) 
- Launch `general-purpose` agent for Navigation Updates (Section 3)
- Launch `general-purpose` agent for Translation Files updates (Section 4)

**Validation Gate 2 - Content Implementation Validation**
- Launch `general-purpose` agent for comprehensive code review of all content changes
- Launch `general-purpose` agent to verify specification adherence for homepage and services
- Launch `general-purpose` agent using Playwright MCP to test homepage, services pages, and navigation in both EN/PT locales

**Phase 3: Page Refinements**
- Launch `general-purpose` agent for About Page Updates (Section 5)
- Launch `general-purpose` agent for Contact Page Updates (Section 6) 
- Launch `general-purpose` agent for Work/Portfolio Page updates (Section 7)

**Validation Gate 3 - Page Refinements Validation**
- Launch `general-purpose` agent for code review of About, Contact, and Work page changes
- Launch `general-purpose` agent to verify specification adherence for updated pages
- Launch `general-purpose` agent using Playwright MCP to test About, Contact, and Work pages functionality and forms

**Phase 4: Component Development**
- Launch `general-purpose` agent for Component Updates (Section 8)
- Launch `general-purpose` agent for Footer Updates (Section 9)

**Validation Gate 4 - Component Development Validation**
- Launch `general-purpose` agent for code review of new components and footer changes
- Launch `general-purpose` agent to verify component specifications and reusability patterns
- Launch `general-purpose` agent using Playwright MCP to test all new components (carousel, service cards, CTAs) across different pages

**Phase 5: Final Quality Assurance**
- Launch `general-purpose` agent for end-to-end testing across all pages in both EN and PT languages
- Launch `general-purpose` agent to verify all links and navigation work correctly
- Launch `general-purpose` agent to validate responsive design across all new pages

**Final Validation Gate - Complete System Validation**
- Launch `general-purpose` agent for comprehensive code review of entire implementation
- Launch `general-purpose` agent to verify complete adherence to all specifications
- Launch `general-purpose` agent using Playwright MCP for full end-to-end testing of entire website functionality, forms, navigation, and responsive behavior

### Agent Task Distribution Guidelines

**Implementation Agents** should:
1. **Reference Documentation**: Always consult docs/COPY-EN.md and docs/COPY-PT_BR.md for exact copy
2. **Follow Project Conventions**: Adhere to patterns established in CLAUDE.md
3. **Maintain Internationalization**: Ensure all changes support both EN and PT locales
4. **Use Existing Components**: Leverage current component library before creating new ones
5. **Verify Implementation**: Test changes in development environment before completion

**Validation Gate Agents** must perform:
1. **Code Review**: 
   - Check code quality, patterns, and adherence to project conventions
   - Verify proper internationalization implementation
   - Review component structure and reusability
   - Validate proper import statements and file organization
2. **Specification Adherence**:
   - Verify implementation matches docs/COPY-EN.md and docs/COPY-PT_BR.md exactly
   - Check that all required sections from PLAN.md are implemented
   - Confirm proper Next.js App Router patterns are followed
   - Validate Tailwind CSS v4 usage and styling patterns
3. **Browser Testing with Playwright MCP**:
   - Test functionality in both EN and PT locales
   - Verify responsive design across different screen sizes
   - Test all interactive elements (forms, navigation, CTAs)
   - Validate animations and transitions work properly
   - Check for console errors or accessibility issues

### Execution Command

Run agents in parallel using single message with multiple Task tool calls:
```
Launch all Phase 1 agents simultaneously, then proceed through phases systematically, running agents in parallel within each phase for maximum efficiency.
```

This approach ensures systematic implementation while maintaining code quality and project conventions throughout the transformation process.