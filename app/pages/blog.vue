<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>Insights on Vibe Coding, Scale, and Modern Engineering</h1>
          <p class="section-subhead">
            Stay ahead with guidance on transforming AI-generated prototypes, building production-ready systems, and scaling high-performing teams.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="grid grid--three">
          <article v-for="post in featured" :key="post.title" class="card card--muted">
            <p class="service-focus">{{ post.category }}</p>
            <h2>{{ post.title }}</h2>
            <p>{{ post.summary }}</p>
            <NuxtLink :to="post.to" class="card-cta">{{ post.cta }}</NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--gradient">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>Popular Topics We Cover</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="topic in topics" :key="topic.title" class="card card--muted">
            <h3>{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="card card--bright">
          <h3>Have a question you'd like us to explore?</h3>
          <p>Reach out with your toughest vibe coding, scalability, and team-building challenges. We might feature it in an upcoming deep dive.</p>
          <NuxtLink to="/contact" class="card-cta">Submit a Topic</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog | Aesir Tecnologia',
  description: 'Articles on vibe coding cleanup, secure architecture, scaling engineering teams, and building production-ready software.'
})

const featured = [
  {
    category: 'Vibe Coding Cleanup',
    title: 'From Prototype to Production: Avoiding AI-Generated Pitfalls',
    summary: 'Learn the common issues found in AI-generated MVPs and how to resolve them before fundraising or launch.',
    to: '/contact',
    cta: 'Request the Guide'
  },
  {
    category: 'Scaling & Architecture',
    title: 'Designing Systems That Survive Real User Load',
    summary: 'Architectural strategies that make scaling predictable, from caching to observability.',
    to: '/services/vibe-coding-cleanup',
    cta: 'See Our Cleanup Process'
  },
  {
    category: 'People & Process',
    title: 'Augmenting Teams With AI-Literate Developers',
    summary: 'Discover how hybrid teams blend AI tooling with senior engineering oversight.',
    to: '/services/staff-augmentation',
    cta: 'Find Your Developer'
  }
]

const topics = [
  {
    title: 'Vibe Coding Cleanup',
    description: 'Security hardening, architecture restructuring, and production readiness for AI-generated codebases.'
  },
  {
    title: 'Custom Development',
    description: 'Framework comparisons, best practices, and case studies from our Laravel, Vue, and React projects.'
  },
  {
    title: 'Team Scaling',
    description: 'Strategies for onboarding remote developers, blending AI tooling, and sustaining delivery velocity.'
  }
]
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 6rem;
}

h1 {
  font-size: clamp(2.5rem, 3.5vw, 3.25rem);
  margin: 0;
}

</style>
