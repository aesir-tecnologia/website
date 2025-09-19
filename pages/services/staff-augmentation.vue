<template>
  <div class="space-y-24">
    <!-- Hero Section -->
    <section class="relative overflow-hidden px-6 pt-28">
      <div class="absolute -left-20 top-12 h-96 w-96 rounded-full bg-purple-500/25 blur-[140px]"></div>
      <div class="absolute -right-24 top-40 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]"></div>
      <div class="mx-auto max-w-6xl">
        <div class="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-600/40 via-slate-900/70 to-slate-900/90 px-10 py-16 text-center backdrop-blur-xl">
          <div class="badge-chip mx-auto w-fit">Staff Augmentation</div>
          <h1 class="mt-6 text-4xl font-semibold text-white md:text-5xl">Expert Developers Who Speak Both Traditional Code and AI</h1>
          <p class="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-purple-100">
            Scale your development capacity with experienced developers who become an extension of your team. Short-term and long-term remote engagements with proven expertise in modern technologies.
          </p>
          <NuxtLink to="/contact" class="primary-cta mt-10 inline-flex">Find Your Developer</NuxtLink>
        </div>
      </div>
    </section>

    <!-- What You Get -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>What You Get</h2>
        </div>
        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="glass-card px-6 py-7 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/20 text-2xl">✓</div>
            <h3 class="text-lg font-semibold text-white">Pre-vetted Developers</h3>
            <p class="mt-2 text-sm text-slate-300">Senior and mid-level developers with proven track records.</p>
          </div>
          <div class="glass-card px-6 py-7 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20 text-2xl">🛠️</div>
            <h3 class="text-lg font-semibold text-white">Stack Expertise</h3>
            <p class="mt-2 text-sm text-slate-300">Expertise in your specific technology stack and requirements.</p>
          </div>
          <div class="glass-card px-6 py-7 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-2xl">🌐</div>
            <h3 class="text-lg font-semibold text-white">Remote-First</h3>
            <p class="mt-2 text-sm text-slate-300">Remote-first professionals with excellent communication skills.</p>
          </div>
          <div class="glass-card px-6 py-7 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20 text-2xl">⚡</div>
            <h3 class="text-lg font-semibold text-white">Flexible Engagement</h3>
            <p class="mt-2 text-sm text-slate-300">Part-time to full-time options based on your needs.</p>
          </div>
          <div class="glass-card px-6 py-7 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/20 text-2xl">🔄</div>
            <h3 class="text-lg font-semibold text-white">Direct Integration</h3>
            <p class="mt-2 text-sm text-slate-300">Seamless integration with your existing workflows and tools.</p>
          </div>
          <div class="glass-card px-6 py-7 text-center">
            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/20 text-2xl">🤝</div>
            <h3 class="text-lg font-semibold text-white">Ongoing Support</h3>
            <p class="mt-2 text-sm text-slate-300">Continuous account management and support throughout engagement.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Developer Expertise -->
    <section class="px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>Our Developer Expertise</h2>
        </div>
        <div class="mt-14 grid gap-12 lg:grid-cols-2">
          <div class="glass-card px-8 py-10">
            <h3 class="text-2xl font-semibold text-white">Frontend Development</h3>
            <div class="mt-6 space-y-4 text-sm text-slate-300">
              <div class="flex items-center gap-3"><span class="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200">React</span><span>Modern React with hooks, context, and state management</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-200">Vue.js</span><span>Vue 3 with Composition API and Nuxt.js</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-rose-500/20 px-3 py-1 text-rose-200">Angular</span><span>Angular with TypeScript and RxJS</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-yellow-500/20 px-3 py-1 text-yellow-200">TypeScript</span><span>Type-safe JavaScript development</span></div>
            </div>
            <h3 class="mt-10 text-2xl font-semibold text-white">Mobile Development</h3>
            <div class="mt-6 space-y-4 text-sm text-slate-300">
              <div class="flex items-center gap-3"><span class="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200">React Native</span><span>Cross-platform mobile applications</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-200">Flutter</span><span>Google's UI toolkit for mobile apps</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-slate-500/20 px-3 py-1 text-slate-100">iOS</span><span>Native iOS development with Swift</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-200">Android</span><span>Native Android development with Kotlin</span></div>
            </div>
          </div>
          <div class="glass-card px-8 py-10">
            <h3 class="text-2xl font-semibold text-white">Backend Development</h3>
            <div class="mt-6 space-y-4 text-sm text-slate-300">
              <div class="flex items-center gap-3"><span class="rounded-full bg-purple-500/20 px-3 py-1 text-purple-200">PHP/Laravel</span><span>Robust backend APIs and web applications</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-200">Node.js</span><span>JavaScript backend with Express and NestJS</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200">Python/Django</span><span>Scalable web applications and APIs</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-indigo-500/20 px-3 py-1 text-indigo-200">.NET</span><span>Enterprise applications with C#</span></div>
            </div>
            <h3 class="mt-10 text-2xl font-semibold text-white">DevOps & Infrastructure</h3>
            <div class="mt-6 space-y-4 text-sm text-slate-300">
              <div class="flex items-center gap-3"><span class="rounded-full bg-orange-500/20 px-3 py-1 text-orange-200">AWS</span><span>Cloud infrastructure and services</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200">Docker</span><span>Containerization and deployment</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-200">CI/CD</span><span>Automated testing and deployment pipelines</span></div>
              <div class="flex items-center gap-3"><span class="rounded-full bg-slate-500/20 px-3 py-1 text-slate-100">Linux</span><span>Server administration and automation</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement Models -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>Engagement Models</h2>
        </div>
        <div class="mt-14 grid gap-6 md:grid-cols-2">
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">Short-term Projects</h3>
            <p class="mt-3 text-sm text-slate-300">1-6 months for specific deliverables.</p>
            <ul class="mt-4 space-y-2 text-sm text-slate-300">
              <li>• MVP development</li>
              <li>• Feature additions</li>
              <li>• Bug fixes and optimization</li>
              <li>• Code cleanup and refactoring</li>
            </ul>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">Long-term Partnerships</h3>
            <p class="mt-3 text-sm text-slate-300">6+ months for ongoing development.</p>
            <ul class="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Product development</li>
              <li>• Continuous feature delivery</li>
              <li>• Technical leadership</li>
              <li>• Architecture evolution</li>
            </ul>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">Team Extension</h3>
            <p class="mt-3 text-sm text-slate-300">Multiple developers for larger projects.</p>
            <ul class="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Full development teams</li>
              <li>• Specialized skill sets</li>
              <li>• Scalable team size</li>
              <li>• Integrated workflows</li>
            </ul>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">Specialized Roles</h3>
            <p class="mt-3 text-sm text-slate-300">Senior architects and specialists.</p>
            <ul class="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Technical architects</li>
              <li>• Team leads</li>
              <li>• Security specialists</li>
              <li>• Performance experts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition -->
    <section class="px-6">
      <div class="mx-auto max-w-6xl rounded-3xl border border-slate-800/60 bg-slate-900/80 px-10 py-14 backdrop-blur-xl">
        <div class="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 class="text-3xl font-semibold text-white">Value Proposition</h3>
            <ul class="mt-6 space-y-4 text-base text-slate-300">
              <li>• Developers experienced with both manual coding and AI tools</li>
              <li>• Perfect for teams transitioning to AI-assisted development</li>
              <li>• Remote-first experts with excellent communication</li>
              <li>• Scale your team without lengthy hiring processes</li>
            </ul>
          </div>
          <div>
            <h3 class="text-3xl font-semibold text-white">Target Messaging</h3>
            <div class="mt-6 space-y-4 text-base text-slate-300">
              <p>"Need developers who understand both worlds? Traditional coding and AI assistance?"</p>
              <p>"Scale your team with experts who've seen it all."</p>
              <p>"Remote developers who integrate like they're sitting next to you."</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Developers -->
    <section class="section-shell px-6">
      <div class="mx-auto max-w-6xl">
        <div class="section-heading">
          <h2>Why Choose Our Developers</h2>
        </div>
        <div class="mt-14 grid gap-6 md:grid-cols-2">
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">Rigorous technical screening process</h3>
            <p class="mt-2 text-sm text-slate-300">Hands-on assessments ensure every developer meets our quality bar.</p>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">Strong English communication skills</h3>
            <p class="mt-2 text-sm text-slate-300">Clear collaboration in stand-ups, code reviews, and stakeholder updates.</p>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">Remote work experience & self-management</h3>
            <p class="mt-2 text-sm text-slate-300">Seasoned professionals who thrive in distributed teams.</p>
          </div>
          <div class="glass-card px-8 py-8">
            <h3 class="text-xl font-semibold text-white">Cultural fit assessment</h3>
            <p class="mt-2 text-sm text-slate-300">Developers matched to your team's values and working style.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-6 pb-12">
      <div class="mx-auto max-w-5xl text-center">
        <div class="rounded-3xl border border-purple-500/30 bg-purple-600/25 px-10 py-14 backdrop-blur-2xl">
          <h2 class="text-3xl font-semibold text-white md:text-4xl">Ready to Scale Your Development Team?</h2>
          <p class="mt-4 text-lg text-purple-100">Let's discuss your team needs and find the perfect developers to help you achieve your goals.</p>
          <NuxtLink to="/contact" class="primary-cta mt-8 inline-flex">Find Your Developer</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Staff Augmentation - Expert Developers - Aesir Tecnologia',
  meta: [
    { name: 'description', content: 'Scale your development capacity with experienced developers who become an extension of your team. Remote-first professionals with proven expertise.' }
  ]
})
</script>
