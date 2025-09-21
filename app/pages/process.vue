<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>{{ hero.title }}</h1>
          <p class="section-subhead">{{ hero.subheading }}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="grid grid--three">
          <article v-for="step in steps" :key="step.title" class="card card--muted">
            <h2>{{ step.title }}</h2>
            <p>{{ step.description }}</p>
            <ul>
              <li v-for="item in step.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--gradient">
      <div class="container section-inner">
        <div class="section-header section-header--center">
          <h2>{{ benefits.headline }}</h2>
        </div>
        <div class="grid grid--three">
          <article v-for="benefit in benefits.items" :key="benefit.title" class="card card--bright">
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="grid grid--two">
          <article class="card card--muted">
            <h3>{{ differentiation.title }}</h3>
            <ul>
              <li v-for="point in differentiation.items" :key="point">{{ point }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h3>{{ audiences.title }}</h3>
            <ul>
              <li v-for="audience in audiences.items" :key="audience">{{ audience }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useProcessContent } from '~/composables/useProcessContent'

const content = useProcessContent()

useSeoMeta({
  title: content.seo.title,
  description: content.seo.description
})

const hero = content.hero
const steps = content.steps
const benefits = content.benefits
const differentiation = content.differentiation
const audiences = content.audiences
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

.card ul {
  margin: 0;
  padding-left: 1.25rem;
  color: rgba(226, 232, 240, 0.85);
}

</style>
