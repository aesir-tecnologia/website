<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>Terms & Conditions</h1>
          <p class="section-subhead">The following outlines the terms for engaging with Aesir Tecnologia's services.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="card card--muted">
          <p>Service engagements are governed by mutual agreements detailing scope, deliverables, and timelines. All work is performed on a best-effort basis using industry-leading practices for security, performance, and reliability. Contact <a href="mailto:hello@aesir.dev">hello@aesir.dev</a> for contract details or clarifications.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Terms & Conditions | Aesir Tecnologia',
  description: 'Review the engagement terms and conditions for Aesir Tecnologia services.'
})
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
