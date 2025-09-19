<template>
  <div class="page">
    <section class="section hero">
      <div class="container section-inner">
        <div class="section-header">
          <h1>Let's Build Something Great Together</h1>
          <p class="section-subhead">
            Ready to turn your idea into reality? We'd love to hear about your project and discuss how we can help.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container section-inner">
        <div class="grid grid--two">
          <article class="card card--muted">
            <h2>Project Inquiry</h2>
            <p>Share the essentials so we can prepare a tailored proposal.</p>
            <ul>
              <li v-for="item in projectInquiry" :key="item">{{ item }}</li>
            </ul>
          </article>
          <article class="card card--muted">
            <h2>Engagement Models</h2>
            <ul>
              <li v-for="model in engagementModels" :key="model.title">
                <strong>{{ model.title }}:</strong> {{ model.description }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--gradient">
      <div class="container section-inner">
        <div class="grid contact-grid">
          <form class="card contact-form" @submit.prevent>
            <h3>Send Project Details</h3>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required>
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@company.com" required>
            </label>
            <label>
              Company (optional)
              <input type="text" name="company" placeholder="Company name">
            </label>
            <label>
              Project Type
              <select name="projectType" required>
                <option value="" disabled selected>Select a project type</option>
                <option v-for="option in projectTypes" :key="option" :value="option">{{ option }}</option>
              </select>
            </label>
            <label>
              Project Description
              <textarea name="description" rows="4" placeholder="Tell us about your project, goals, and challenges." required />
            </label>
            <label>
              Timeline
              <input type="text" name="timeline" placeholder="Desired timeline">
            </label>
            <label>
              Budget Range
              <input type="text" name="budget" placeholder="Estimated budget range">
            </label>
            <button type="submit" class="btn btn--primary">Send Project Details</button>
          </form>
          <article class="card card--bright">
            <h3>Prefer to talk directly?</h3>
            <p>Schedule a consultation call to discuss your project in detail and map next steps.</p>
            <NuxtLink to="/contact#schedule" class="card-cta">Schedule a Call</NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section id="schedule" class="section">
      <div class="container section-inner">
        <div class="card card--muted">
          <h3>Schedule a Call</h3>
          <p>Email <a href="mailto:hello@aesir.dev">hello@aesir.dev</a> with your availability or send us a calendar invite. We'll confirm a time within one business day.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact | Aesir Tecnologia',
  description: 'Reach out to Aesir Tecnologia to discuss vibe coding cleanup, custom web and mobile development, and staff augmentation projects.'
})

const projectInquiry = [
  'Project type and scope',
  'Timeline and budget',
  'Technical requirements',
  'Business goals'
]

const engagementModels = [
  { title: 'Project-Based', description: 'Fixed scope with defined deliverables for predictable outcomes.' },
  { title: 'Retainer', description: 'Ongoing development and support for continuous improvement.' },
  { title: 'Consultation', description: 'Technical guidance, planning, and architecture reviews.' }
]

const projectTypes = [
  'Vibe Coding Cleanup',
  'Custom Web Development',
  'Mobile Development',
  'Game Development',
  'Staff Augmentation',
  'Consultation'
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

.contact-grid {
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(15, 23, 42, 0.9);
}

.contact-form label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: rgba(226, 232, 240, 0.85);
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.4);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  color: #e2e8f0;
  font-size: 0.95rem;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: rgba(56, 189, 248, 0.6);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
}

.contact-form button {
  align-self: flex-start;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

</style>
