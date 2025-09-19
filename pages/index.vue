<template>
  <div class="space-y-24">
    <!-- Hero Section -->
    <section class="relative overflow-hidden px-6 pt-28 lg:pt-32">
      <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-600/30 blur-[120px]"></div>
      <div class="absolute -right-20 top-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-[120px]"></div>
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="relative z-10">
            <div class="badge-chip">Production-ready, investor-approved</div>
            <h1 class="mt-6 text-4xl font-semibold text-white md:text-6xl">
              Transform Your AI-Generated MVP Into Production-Ready Software
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              We take vibe-coded applications and turn them into secure, scalable systems ready for real users and business growth. Plus full-stack development and expert staff augmentation.
            </p>
            <div class="mt-10 flex flex-col gap-4 sm:flex-row">
              <NuxtLink to="/contact" class="primary-cta">
                <span>Audit My AI-Generated App</span>
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/services" class="secondary-cta">
                Explore Our Services
              </NuxtLink>
            </div>

            <div class="mt-12 grid gap-4 sm:grid-cols-3">
              <div class="rounded-2xl border border-slate-700/60 bg-slate-900/60 px-4 py-5">
                <div class="flex items-center gap-2 text-sm font-medium text-emerald-300">
                  <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">✓</span>
                  Vibe coding cleanup specialists
                </div>
              </div>
              <div class="rounded-2xl border border-slate-700/60 bg-slate-900/60 px-4 py-5">
                <div class="flex items-center gap-2 text-sm font-medium text-sky-300">
                  <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">✓</span>
                  Full-stack development expertise
                </div>
              </div>
              <div class="rounded-2xl border border-slate-700/60 bg-slate-900/60 px-4 py-5">
                <div class="flex items-center gap-2 text-sm font-medium text-indigo-300">
                  <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">✓</span>
                  Expert remote developers
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="glass-card">
              <div class="mb-8">
                <p class="text-sm uppercase tracking-[0.35em] text-slate-400">Focus Areas</p>
                <h3 class="mt-2 text-2xl font-semibold text-white">Cleanup • Build • Scale</h3>
                <p class="mt-3 text-sm leading-relaxed text-slate-300">
                  We stabilize AI-generated foundations, design scalable architectures, and embed senior engineers into teams that need momentum.
                </p>
              </div>
              <div class="grid gap-4">
                <div class="stat-card">
                  <h3>72%</h3>
                  <p>Faster Hardening</p>
                </div>
                <div class="stat-card">
                  <h3>0</h3>
                  <p>Critical CVEs Post-launch</p>
                </div>
                <div class="stat-card">
                  <h3>24/7</h3>
                  <p>Senior Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Statement Section -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-5xl text-center">
        <div class="section-heading">
          <h2>Your AI-Generated App Works... But Is It Ready for Business?</h2>
          <p>
            Vibe coding tools like Cursor, Replit Agent, and Lovable create functional prototypes fast. But AI-generated code often contains security vulnerabilities, performance bottlenecks, and architectural issues that prevent scaling.
          </p>
        </div>
        <div class="mt-16 grid gap-10 text-left lg:grid-cols-2">
          <div class="space-y-5 rounded-3xl border border-red-500/20 bg-red-500/5 p-8 shadow-xl">
            <h3 class="text-2xl font-semibold text-white">What Happens Next</h3>
            <ul class="space-y-4 text-base text-slate-200">
              <li class="flex items-start gap-3">
                <span class="mt-1 text-lg text-red-400">✗</span>
                <span>Your app crashes under real user load</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 text-lg text-red-400">✗</span>
                <span>Security vulnerabilities expose sensitive data</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 text-lg text-red-400">✗</span>
                <span>Technical debt makes new features impossible</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 text-lg text-red-400">✗</span>
                <span>Investors question your technical foundation</span>
              </li>
            </ul>
          </div>
          <div class="glass-card">
            <h3 class="text-2xl font-semibold text-white">The Market Reality</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-200">
              Thousands of entrepreneurs are building with AI tools daily. Most create functional MVPs but lack the engineering expertise to make them production-ready. That's where we come in.
            </p>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4">
                <p class="text-sm uppercase tracking-[0.3em] text-slate-400">100% Coverage</p>
                <p class="mt-2 text-lg font-semibold text-white">Security • Performance • Architecture</p>
              </div>
              <div class="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4">
                <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Production Launch</p>
                <p class="mt-2 text-lg font-semibold text-white">Under 90 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview Section -->
    <section class="px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>Three Ways We Transform Your Software Vision Into Reality</h2>
        </div>
        <div class="mt-16 grid gap-8 lg:grid-cols-3">
          <div class="glass-card border-blue-500/40 bg-gradient-to-br from-blue-600/30 via-slate-900/60 to-slate-900/80">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
              Primary Focus · 50%
            </div>
            <h3 class="text-2xl font-semibold text-white">Vibe Coding Cleanup</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-200">
              Turn your AI-generated MVP into production-ready software with our comprehensive cleanup process.
            </p>
            <NuxtLink to="/services/vibe-cleanup" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white">
              Audit My App
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
          <div class="glass-card">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              25% Focus
            </div>
            <h3 class="text-2xl font-semibold text-white">Custom Web Development</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-200">
              Full-stack applications built for performance and scalability using modern technologies.
            </p>
            <NuxtLink to="/services/web-development" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-white">
              Start Your Project
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
          <div class="glass-card">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">
              25% Focus
            </div>
            <h3 class="text-2xl font-semibold text-white">Expert Staff Augmentation</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-200">
              Skilled developers who integrate seamlessly with your team for short-term or long-term projects.
            </p>
            <NuxtLink to="/services/staff-augmentation" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-purple-200 transition hover:text-white">
              Find Your Developer
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Vibe Coding Deep Dive Section -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>From Prototype to Production: The Only Vibe Coding Cleanup Service You Need</h2>
        </div>
        <div class="mt-16 grid gap-12 lg:grid-cols-2">
          <div class="glass-card border-blue-500/30">
            <h3 class="text-2xl font-semibold text-white">The Market Reality</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-200">
              Thousands of entrepreneurs are building with AI tools daily. Most create functional MVPs but lack the engineering expertise to make them production-ready. That's where we come in.
            </p>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4">
                <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Security</p>
                <p class="mt-2 text-lg font-semibold text-white">Hardening & Compliance</p>
              </div>
              <div class="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4">
                <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Scalability</p>
                <p class="mt-2 text-lg font-semibold text-white">Performance & Architecture</p>
              </div>
            </div>
          </div>
          <div class="glass-card">
            <h3 class="text-2xl font-semibold text-white">Our Transformation Process</h3>
            <div class="mt-6 grid gap-6">
              <div>
                <h4 class="text-lg font-semibold text-blue-200">Security Hardening</h4>
                <p class="mt-2 text-sm text-slate-300">Fix vulnerabilities, implement proper authentication, secure API endpoints.</p>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-blue-200">Performance Optimization</h4>
                <p class="mt-2 text-sm text-slate-300">Database optimization, caching strategies, load balancing preparation.</p>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-blue-200">Architecture Restructuring</h4>
                <p class="mt-2 text-sm text-slate-300">Clean code organization, scalable design patterns, maintainable structure.</p>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-blue-200">Production Readiness</h4>
                <p class="mt-2 text-sm text-slate-300">Testing suites, monitoring, CI/CD pipelines, documentation.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16">
          <h3 class="text-center text-2xl font-semibold text-white">Perfect For</h3>
          <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div class="glass-card px-6 py-8 text-center">
              <h4 class="text-lg font-semibold text-white">Entrepreneurs seeking investment</h4>
              <p class="mt-3 text-sm text-slate-300">With vibe-coded MVPs requiring technical due diligence.</p>
            </div>
            <div class="glass-card px-6 py-8 text-center">
              <h4 class="text-lg font-semibold text-white">Startups moving from MVP to market</h4>
              <p class="mt-3 text-sm text-slate-300">Ready to scale their applications for real users.</p>
            </div>
            <div class="glass-card px-6 py-8 text-center">
              <h4 class="text-lg font-semibold text-white">Businesses needing production deployment</h4>
              <p class="mt-3 text-sm text-slate-300">Turning AI-generated MVPs into reliable systems.</p>
            </div>
            <div class="glass-card px-6 py-8 text-center">
              <h4 class="text-lg font-semibold text-white">Non-technical founders</h4>
              <p class="mt-3 text-sm text-slate-300">With working prototypes seeking reliable production systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Expertise Section -->
    <section class="px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>Modern Technologies, Production-Grade Results</h2>
          <p>Our tech stack spans battle-tested frameworks and modern tooling that supports scale, security, and delightful UX.</p>
        </div>
        <TechnologyCarousel class="mt-12" />
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>The Technical Partner Your Growing Business Needs</h2>
        </div>
        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="glass-card px-6 py-8 text-center">
            <h3 class="text-xl font-semibold text-white">Vibe Coding Specialists</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-300">Specialized agency focused on transforming AI-generated code into production systems.</p>
          </div>
          <div class="glass-card px-6 py-8 text-center">
            <h3 class="text-xl font-semibold text-white">Full-Stack Expertise</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-300">Complete web and mobile development capabilities when you need custom solutions.</p>
          </div>
          <div class="glass-card px-6 py-8 text-center">
            <h3 class="text-xl font-semibold text-white">Proven Remote Team</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-300">Expert developers who integrate seamlessly with your existing workflows.</p>
          </div>
          <div class="glass-card px-6 py-8 text-center">
            <h3 class="text-xl font-semibold text-white">Built for Scale</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-300">Applications designed to handle growth from day one with proper architecture and optimization.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Success Section -->
    <section class="px-6">
      <div class="mx-auto max-w-4xl">
        <div class="glass-card px-10 py-12 text-center">
          <p class="text-sm uppercase tracking-[0.35em] text-slate-400">Client Success</p>
          <blockquote class="mt-6 text-2xl font-light leading-relaxed text-white">
            “Aesir took our Cursor-generated prototype and transformed it into a system that handles 10,000+ daily users. The security audit alone saved us from potential disasters we never knew existed.”
          </blockquote>
          <p class="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">— SaaS Startup Founder</p>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="px-6 pb-12">
      <div class="mx-auto max-w-6xl rounded-3xl border border-slate-700/60 bg-slate-900/70 px-10 py-14 text-center backdrop-blur-xl">
        <h2 class="text-3xl font-semibold text-white md:text-4xl">Ready to Make Your Application Production-Ready?</h2>
        <p class="mt-4 text-lg text-slate-300">Pick the track that fits your roadmap and we’ll build the launch plan together.</p>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <div class="glass-card bg-slate-900/90 px-6 py-8 text-left">
            <h3 class="text-xl font-semibold text-white">For Vibe-Coded MVPs</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-300">Get a professional security and scalability audit of your AI-generated application.</p>
            <NuxtLink to="/contact" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white">
              Request Audit
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
          <div class="glass-card bg-slate-900/90 px-6 py-8 text-left">
            <h3 class="text-xl font-semibold text-white">For Custom Development</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-300">Need a solution built from scratch? Let's discuss your requirements.</p>
            <NuxtLink to="/contact" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-white">
              Start Your Project
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
          <div class="glass-card bg-slate-900/90 px-6 py-8 text-left">
            <h3 class="text-xl font-semibold text-white">For Team Scaling</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-300">Looking to add expert developers to your team?</p>
            <NuxtLink to="/contact" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-200 transition hover:text-white">
              Find Your Developer
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Aesir Tecnologia - Transform AI-Generated MVPs Into Production-Ready Software',
  meta: [
    { name: 'description', content: 'We take vibe-coded applications and turn them into secure, scalable systems ready for real users and business growth.' }
  ]
})
</script>
