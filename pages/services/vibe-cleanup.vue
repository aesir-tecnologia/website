<template>
  <div class="space-y-24">
    <!-- Hero Section -->
    <section class="relative overflow-hidden px-6 pt-28">
      <div class="absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-600/25 blur-[140px]"></div>
      <div class="absolute -left-10 top-40 h-80 w-80 rounded-full bg-indigo-500/25 blur-[120px]"></div>
      <div class="mx-auto max-w-6xl">
        <div class="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-600/40 via-slate-900/70 to-slate-900/90 px-10 py-16 text-center backdrop-blur-xl">
          <div class="badge-chip mx-auto w-fit">Vibe Coding Cleanup Service</div>
          <h1 class="mt-6 text-4xl font-semibold text-white md:text-5xl">
            The First and Only Vibe Coding Cleanup Service
          </h1>
          <p class="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-blue-100">
            Your vibe-coded app works, but is it ready for real users and business growth? We take AI-generated applications and transform them into secure, scalable, maintainable systems that can handle production traffic and continued development.
          </p>
          <NuxtLink to="/contact" class="primary-cta mt-10 inline-flex">
            Audit My Vibe-Coded App
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Problem Statement -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-5xl text-center">
        <div class="section-heading">
          <h2>The Problem We Solve</h2>
          <p>Vibe coding tools like Cursor, Replit Agent, and Lovable create functional prototypes fast, but the generated code often has:</p>
        </div>
        <div class="mt-12 grid gap-8 text-left md:grid-cols-2">
          <div class="space-y-5">
            <div class="glass-card flex items-start gap-4 px-6 py-5">
              <span class="text-xl">⚠️</span>
              <span class="text-base text-slate-200">Security vulnerabilities and exposed endpoints</span>
            </div>
            <div class="glass-card flex items-start gap-4 px-6 py-5">
              <span class="text-xl">⚠️</span>
              <span class="text-base text-slate-200">Poor architecture that doesn't scale</span>
            </div>
            <div class="glass-card flex items-start gap-4 px-6 py-5">
              <span class="text-xl">⚠️</span>
              <span class="text-base text-slate-200">Lack of proper error handling and validation</span>
            </div>
          </div>
          <div class="space-y-5">
            <div class="glass-card flex items-start gap-4 px-6 py-5">
              <span class="text-xl">⚠️</span>
              <span class="text-base text-slate-200">No testing framework or documentation</span>
            </div>
            <div class="glass-card flex items-start gap-4 px-6 py-5">
              <span class="text-xl">⚠️</span>
              <span class="text-base text-slate-200">Performance bottlenecks and inefficient queries</span>
            </div>
            <div class="glass-card flex items-start gap-4 px-6 py-5">
              <span class="text-xl">⚠️</span>
              <span class="text-base text-slate-200">Technical debt that blocks future development</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Process -->
    <section class="px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>Our Vibe Cleanup Process</h2>
          <p>A comprehensive 6-step process to transform your AI-generated code into production-ready software.</p>
        </div>
        <div class="mt-16 grid gap-10 lg:grid-cols-2">
          <div class="glass-card">
            <div class="flex items-start gap-5">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-lg font-semibold text-blue-200">1</div>
              <div>
                <h3 class="text-2xl font-semibold text-white">Comprehensive Code Audit</h3>
                <ul class="mt-4 space-y-2 text-sm text-slate-300">
                  <li>• Security vulnerability assessment</li>
                  <li>• Performance and scalability analysis</li>
                  <li>• Code quality and structure review</li>
                  <li>• Database optimization opportunities</li>
                  <li>• Architecture assessment</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="glass-card">
            <div class="flex items-start gap-5">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-lg font-semibold text-blue-200">2</div>
              <div>
                <h3 class="text-2xl font-semibold text-white">Security Hardening</h3>
                <ul class="mt-4 space-y-2 text-sm text-slate-300">
                  <li>• Input validation and sanitization</li>
                  <li>• Authentication and authorization fixes</li>
                  <li>• API security and rate limiting</li>
                  <li>• Data encryption and secure storage</li>
                  <li>• OWASP compliance implementation</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="glass-card">
            <div class="flex items-start gap-5">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-lg font-semibold text-blue-200">3</div>
              <div>
                <h3 class="text-2xl font-semibold text-white">Architecture Restructuring</h3>
                <ul class="mt-4 space-y-2 text-sm text-slate-300">
                  <li>• Modular code organization</li>
                  <li>• Separation of concerns</li>
                  <li>• Scalable database design</li>
                  <li>• Caching strategy implementation</li>
                  <li>• Load balancing preparation</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="glass-card">
            <div class="flex items-start gap-5">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-lg font-semibold text-blue-200">4</div>
              <div>
                <h3 class="text-2xl font-semibold text-white">Performance Optimization</h3>
                <ul class="mt-4 space-y-2 text-sm text-slate-300">
                  <li>• Database query optimization</li>
                  <li>• Frontend performance improvements</li>
                  <li>• API response time reduction</li>
                  <li>• Memory usage optimization</li>
                  <li>• CDN and asset optimization</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="glass-card">
            <div class="flex items-start gap-5">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-lg font-semibold text-blue-200">5</div>
              <div>
                <h3 class="text-2xl font-semibold text-white">Production Readiness</h3>
                <ul class="mt-4 space-y-2 text-sm text-slate-300">
                  <li>• Comprehensive testing suite (unit, integration, e2e)</li>
                  <li>• Error handling and logging</li>
                  <li>• Monitoring and alerting setup</li>
                  <li>• CI/CD pipeline implementation</li>
                  <li>• Documentation and code comments</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="glass-card">
            <div class="flex items-start gap-5">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-lg font-semibold text-blue-200">6</div>
              <div>
                <h3 class="text-2xl font-semibold text-white">Scalability Preparation</h3>
                <ul class="mt-4 space-y-2 text-sm text-slate-300">
                  <li>• Horizontal scaling architecture</li>
                  <li>• Microservices consideration</li>
                  <li>• Database sharding strategy</li>
                  <li>• Caching layer implementation</li>
                  <li>• Auto-scaling configuration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What You Get -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>What You Get</h2>
        </div>
        <div class="mt-14 grid gap-6 md:grid-cols-2">
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">📊 Security Report</h3>
            <p class="mt-3 text-sm text-slate-300">Detailed vulnerability assessment and fixes.</p>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">⚡ Performance Benchmark</h3>
            <p class="mt-3 text-sm text-slate-300">Before/after performance metrics.</p>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">🏗️ Clean Codebase</h3>
            <p class="mt-3 text-sm text-slate-300">Well-structured, maintainable code.</p>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">📚 Documentation</h3>
            <p class="mt-3 text-sm text-slate-300">Technical docs and development guidelines.</p>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">🧪 Testing Suite</h3>
            <p class="mt-3 text-sm text-slate-300">Comprehensive test coverage.</p>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">🚀 Deployment Strategy</h3>
            <p class="mt-3 text-sm text-slate-300">Production deployment plan.</p>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">📈 Scalability Roadmap</h3>
            <p class="mt-3 text-sm text-slate-300">Future growth recommendations.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Perfect For -->
    <section class="px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>Perfect For</h2>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          <div class="glass-card px-6 py-7 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20 text-2xl">💼</div>
            <h3 class="text-lg font-semibold text-white">Entrepreneurs seeking investment</h3>
            <p class="mt-2 text-sm text-slate-300">With vibe-coded MVPs requiring technical due diligence.</p>
          </div>
          <div class="glass-card px-6 py-7 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-2xl">🚀</div>
            <h3 class="text-lg font-semibold text-white">Startups moving from MVP to market</h3>
            <p class="mt-2 text-sm text-slate-300">Ready to scale their applications for real users.</p>
          </div>
          <div class="glass-card px-6 py-7 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/20 text-2xl">🏢</div>
            <h3 class="text-lg font-semibold text-white">Businesses needing production deployment</h3>
            <p class="mt-2 text-sm text-slate-300">Transforming AI-generated apps into reliable systems.</p>
          </div>
          <div class="glass-card px-6 py-7 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/20 text-2xl">👨‍💼</div>
            <h3 class="text-lg font-semibold text-white">Non-technical founders</h3>
            <p class="mt-2 text-sm text-slate-300">With working prototypes ready for production deployment.</p>
          </div>
          <div class="glass-card px-6 py-7 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20 text-2xl">🔄</div>
            <h3 class="text-lg font-semibold text-white">Companies switching from rapid prototyping to serious development</h3>
            <p class="mt-2 text-sm text-slate-300">Moving into sustainable, long-term growth.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Common Issues We Fix -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>Common Vibe Coding Issues We Fix</h2>
        </div>
        <div class="mt-12 grid gap-8 lg:grid-cols-2">
          <div class="space-y-6">
            <div class="glass-card flex items-start gap-4 px-6 py-6">
              <span class="text-2xl">🔓</span>
              <div>
                <h3 class="text-lg font-semibold text-white">Exposed admin panels and debug endpoints</h3>
                <p class="mt-2 text-sm text-slate-300">Critical security vulnerabilities that attackers can exploit.</p>
              </div>
            </div>
            <div class="glass-card flex items-start gap-4 px-6 py-6">
              <span class="text-2xl">🔑</span>
              <div>
                <h3 class="text-lg font-semibold text-white">Hardcoded API keys and credentials</h3>
                <p class="mt-2 text-sm text-slate-300">Sensitive data exposed in source code.</p>
              </div>
            </div>
            <div class="glass-card flex items-start gap-4 px-6 py-6">
              <span class="text-2xl">💉</span>
              <div>
                <h3 class="text-lg font-semibold text-white">Missing input validation</h3>
                <p class="mt-2 text-sm text-slate-300">Leading to injection attacks and data corruption.</p>
              </div>
            </div>
            <div class="glass-card flex items-start gap-4 px-6 py-6">
              <span class="text-2xl">🐌</span>
              <div>
                <h3 class="text-lg font-semibold text-white">Inefficient database queries</h3>
                <p class="mt-2 text-sm text-slate-300">Causing application slowdowns and crashes.</p>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <div class="glass-card flex items-start gap-4 px-6 py-6">
              <span class="text-2xl">💥</span>
              <div>
                <h3 class="text-lg font-semibold text-white">Poor error handling</h3>
                <p class="mt-2 text-sm text-slate-300">Causing unexpected crashes and poor user experience.</p>
              </div>
            </div>
            <div class="glass-card flex items-start gap-4 px-6 py-6">
              <span class="text-2xl">🔐</span>
              <div>
                <h3 class="text-lg font-semibold text-white">Lack of proper user authentication</h3>
                <p class="mt-2 text-sm text-slate-300">Security risks and unauthorized access.</p>
              </div>
            </div>
            <div class="glass-card flex items-start gap-4 px-6 py-6">
              <span class="text-2xl">🍝</span>
              <div>
                <h3 class="text-lg font-semibold text-white">Unstructured spaghetti code</h3>
                <p class="mt-2 text-sm text-slate-300">Making updates and maintenance impossible.</p>
              </div>
            </div>
            <div class="glass-card flex items-start gap-4 px-6 py-6">
              <span class="text-2xl">📈</span>
              <div>
                <h3 class="text-lg font-semibold text-white">No scalability planning</h3>
                <p class="mt-2 text-sm text-slate-300">Applications that can't handle growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition & Messaging -->
    <section class="px-6">
      <div class="mx-auto max-w-6xl rounded-3xl border border-slate-800/60 bg-slate-900/80 px-10 py-14 backdrop-blur-xl">
        <div class="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 class="text-3xl font-semibold text-white">Value Proposition</h3>
            <ul class="mt-6 space-y-4 text-base text-slate-300">
              <li>• Turn AI-generated prototypes into investable assets</li>
              <li>• Fix security vulnerabilities before they become breaches</li>
              <li>• Transform unscalable code into enterprise-ready systems</li>
              <li>• Bridge the gap between AI tools and professional development</li>
            </ul>
          </div>
          <div>
            <h3 class="text-3xl font-semibold text-white">Target Messaging</h3>
            <div class="mt-6 space-y-4 text-base text-slate-300">
              <p>"Your competitors are building with AI. Don't let them beat you to market because of technical issues."</p>
              <p>"Investors will scrutinize your technical foundation. Make sure it passes."</p>
              <p>"Scale confidently knowing your foundation is solid."</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-6 pb-12">
      <div class="mx-auto max-w-5xl text-center">
        <div class="rounded-3xl border border-blue-500/30 bg-blue-600/30 px-10 py-14 backdrop-blur-2xl">
          <h2 class="text-3xl font-semibold text-white md:text-4xl">Transform Your AI-Generated App Today</h2>
          <p class="mt-4 text-lg text-blue-100">Don't let technical issues hold back your business growth. Get a professional audit and transformation plan for your vibe-coded application.</p>
          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <NuxtLink to="/contact" class="primary-cta">Get Your Free Audit</NuxtLink>
            <NuxtLink to="/about" class="secondary-cta">Learn About Our Process</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Vibe Coding Cleanup - Transform AI-Generated Code Into Production-Ready Software',
  meta: [
    { name: 'description', content: 'The first and only vibe coding cleanup service. Transform your AI-generated MVP into secure, scalable, production-ready software.' }
  ]
})
</script>
