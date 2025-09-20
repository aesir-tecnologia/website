<template>
  <div class="flex flex-col">
    <HeroSection
      :eyebrow="hero.eyebrow"
      :title="hero.title"
      :lead="hero.lead"
      :primary-cta="heroPrimaryCta"
      :secondary-cta="heroSecondaryCta"
      :proof-points="hero.proofPoints"
      :highlights="hero.highlights"
      :highlight-title="hero.highlightTitle"
    />

    <BaseSection v-if="overview" id="service-overview" background="surface">
      <div class="grid gap-6 md:grid-cols-2">
        <UCard :ui="cardUi">
          <template #header>
            <h2 class="text-xl font-semibold text-slate-50">{{ overview.leftTitle }}</h2>
          </template>
          <p v-if="overview.leftDescription" class="text-sm text-slate-300">{{ overview.leftDescription }}</p>
          <BulletList :items="overview.leftList" />
        </UCard>
        <UCard :ui="cardUi">
          <template #header>
            <h2 class="text-xl font-semibold text-slate-50">{{ overview.rightTitle }}</h2>
          </template>
          <p v-if="overview.rightDescription" class="text-sm text-slate-300">{{ overview.rightDescription }}</p>
          <BulletList :items="overview.rightList" />
        </UCard>
      </div>
    </BaseSection>

    <BaseSection v-if="process" id="service-process">
      <div class="space-y-10">
        <SectionHeader :title="process.title" />
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <UCard v-for="step in process.primary" :key="step.title" :ui="cardUi">
            <template #header>
              <h3 class="text-lg font-semibold text-slate-50">{{ step.title }}</h3>
            </template>
            <BulletList :items="step.items" />
          </UCard>
        </div>
        <div v-if="process.secondary?.length" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <UCard v-for="step in process.secondary" :key="step.title" :ui="cardUi">
            <template #header>
              <h3 class="text-lg font-semibold text-slate-50">{{ step.title }}</h3>
            </template>
            <BulletList :items="step.items" />
          </UCard>
        </div>
      </div>
    </BaseSection>

    <BaseSection v-if="deliverables || audiences" id="service-deliverables" background="surface">
      <div class="grid gap-6 md:grid-cols-2">
        <UCard v-if="deliverables" :ui="cardUi">
          <template #header>
            <h3 class="text-lg font-semibold text-slate-50">{{ deliverables.title }}</h3>
          </template>
          <BulletList :items="deliverables.items" />
        </UCard>
        <UCard v-if="audiences" :ui="cardUi">
          <template #header>
            <h3 class="text-lg font-semibold text-slate-50">{{ audiences.title }}</h3>
          </template>
          <BulletList :items="audiences.items" />
        </UCard>
      </div>
    </BaseSection>

    <BaseSection v-if="serviceValue" id="service-value">
      <div class="grid gap-6 md:grid-cols-2">
        <UCard v-if="serviceValue.highlights?.length" :ui="cardUi">
          <template #header>
            <h3 class="text-lg font-semibold text-slate-50">{{ valueHighlightTitle }}</h3>
          </template>
          <BulletList :items="serviceValue.highlights" />
        </UCard>
        <UCard v-if="serviceValue.messages?.length" :ui="cardUi">
          <template #header>
            <h3 class="text-lg font-semibold text-slate-50">{{ valueMessagesTitle }}</h3>
          </template>
          <BulletList :items="serviceValue.messages" />
        </UCard>
      </div>
    </BaseSection>

    <BaseSection v-if="cta" id="contact" background="cta">
      <SectionHeader :title="cta.title" :subhead="cta.description" align="center" />
      <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <AppLinkButton :to="localizeLink(cta.primary)" intent="primary" size="lg">
          {{ cta.primary.label }}
        </AppLinkButton>
        <AppLinkButton v-if="cta.secondary" :to="localizeLink(cta.secondary)" intent="ghost" size="lg">
          {{ cta.secondary.label }}
        </AppLinkButton>
      </div>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

interface ServiceStep {
  title: string
  items: string[]
}

interface ServiceSection {
  title: string
  items: string[]
}

interface ServiceCta {
  label: string
  to?: string
}

interface ServiceContent {
  metaTitle?: string
  metaDescription?: string
  hero: {
    eyebrow?: string
    title: string
    lead: string
    primaryCta?: ServiceCta
    secondaryCta?: ServiceCta
    proofPoints?: string[]
    highlights?: Array<{ title: string; description: string }>
    highlightTitle?: string
  }
  overview?: {
    leftTitle: string
    leftDescription?: string
    leftList: string[]
    rightTitle: string
    rightDescription?: string
    rightList: string[]
  }
  process?: {
    title: string
    primary: ServiceStep[]
    secondary?: ServiceStep[]
  }
  deliverables?: ServiceSection
  audiences?: ServiceSection
  value?: {
    highlightTitle?: string
    highlights?: string[]
    messagesTitle?: string
    messages?: string[]
  }
  cta?: {
    title: string
    description?: string
    primary: ServiceCta
    secondary?: ServiceCta
  }
}

const route = useRoute() as RouteLocationNormalizedLoaded
const localePath = useLocalePath()
const { t } = useI18n()

const servicesCopy = useServicesContent()

const fallbackServices: Record<string, ServiceContent> = {
  'staff-augmentation': {
    metaTitle: 'Staff Augmentation | Aesir Tecnologia',
    metaDescription:
      'Pre-vetted remote developers experienced with traditional coding and AI-assisted workflows. Flexible engagements from part-time to full-time.',
    hero: {
      title: 'Expert Developers Who Speak Both Traditional Code and AI',
      lead: 'Scale your development capacity with remote-first professionals who integrate seamlessly with your team and toolchain.',
      primaryCta: { label: 'Find Your Developer', to: '/services/staff-augmentation#contact' },
      secondaryCta: { label: 'View All Services', to: '/services' }
    },
    overview: {
      leftTitle: 'Overview',
      leftList: [
        'Pre-vetted senior and mid-level developers',
        'Expertise in your technology stack',
        'Remote-first professionals with excellent communication',
        'Flexible engagement models from part-time to full-time',
        'Direct integration with your existing workflows',
        'Ongoing support and account management'
      ],
      rightTitle: 'Developer Expertise',
      rightList: [
        'Frontend: React, Vue.js, Angular, JavaScript/TypeScript',
        'Backend: PHP/Laravel, Node.js, Python/Django, .NET',
        'Mobile: React Native, Flutter, iOS, Android',
        'DevOps: AWS, Docker, CI/CD, Linux administration',
        'Databases: MySQL, PostgreSQL, MongoDB, Redis'
      ]
    },
    process: {
      title: 'Engagement Models',
      primary: [
        { title: 'Short-term Projects', items: ['1-6 month engagements for specific deliverables and product pushes.'] },
        { title: 'Long-term Partnerships', items: ['6+ month collaborations for ongoing development and product growth.'] },
        { title: 'Team Extension', items: ['Add multiple developers to expand velocity without hiring overhead.'] }
      ],
      secondary: [
        { title: 'Specialized Roles', items: ['Senior architects, tech leads, or niche specialists on demand.'] }
      ]
    },
    deliverables: {
      title: 'Why Choose Our Developers',
      items: [
        'Rigorous technical screening process',
        'Strong communication skills',
        'Remote work experience and self-management',
        'Cultural fit assessment for every placement'
      ]
    },
    audiences: {
      title: 'Target Messaging',
      items: [
        'Need developers who understand both traditional coding and AI assistance?',
        "Scale your team with experts who've seen it all.",
        "Remote developers who integrate like they're sitting next to you."
      ]
    },
    value: {
      highlightTitle: 'Highlights',
      highlights: [
        'Developers experienced with AI-assisted and traditional workflows',
        'Flexible commitments from rapid engagements to embedded team members',
        'Dedicated account management to keep delivery unblocked'
      ],
      messagesTitle: 'Key Messages',
      messages: [
        'Scale your team without pausing product delivery for hiring cycles.',
        'Partner with professionals who plug directly into your tooling and rituals.',
        'Bring AI-native expertise to your roadmap without sacrificing code quality.'
      ]
    },
    cta: {
      title: 'Scale Your Team Without Delay',
      description: 'Tell us about your stack, workflows, and goals so we can match the right developers.',
      primary: { label: 'Find Your Developer', to: '/contact' },
      secondary: { label: 'Audit Your App', to: '/services/vibe-coding-cleanup' }
    }
  },
  'mobile-development': {
    metaTitle: 'Mobile Development | Aesir Tecnologia',
    metaDescription:
      'Native iOS, Android, and cross-platform mobile applications built with React Native, Flutter, and modern APIs.',
    hero: {
      title: 'Native and Cross-Platform Mobile Solutions',
      lead: 'Mobile applications that deliver exceptional user experiences across iOS and Android, from concept to launch and growth.',
      primaryCta: { label: 'Build Your Mobile App', to: '/services/mobile-development#contact' },
      secondaryCta: { label: 'View All Services', to: '/services' }
    },
    overview: {
      leftTitle: 'Overview',
      leftList: [
        'iOS and Android native apps',
        'Cross-platform applications (React Native, Flutter)',
        'Progressive web apps',
        'API integrations and real-time features',
        'Mobile-first web experiences'
      ],
      rightTitle: 'Delivery Process',
      rightList: [
        'Strategy: evaluate platform fit and success metrics',
        'Design: user-centered design and rapid prototyping',
        'Development: native or cross-platform builds with tight communication',
        'Testing: device and performance testing for stability',
        'Launch: store submission and release coordination',
        'Growth: analytics, A/B testing, and updates'
      ]
    },
    deliverables: {
      title: 'Technologies Used',
      items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'JavaScript & TypeScript', 'API integration']
    },
    audiences: {
      title: 'Target Messaging',
      items: [
        'Deliver native-quality experiences across platforms.',
        'Balance speed and performance with cross-platform tooling.',
        'Launch with confidence backed by rigorous testing and analytics.'
      ]
    },
    value: {
      highlightTitle: 'Highlights',
      highlights: [
        'Strategy, design, development, and growth support in one partner',
        'Native iOS, Android, and cross-platform expertise',
        'Robust QA, analytics, and monitoring baked into every launch'
      ],
      messagesTitle: 'Key Messages',
      messages: [
        'Ship mobile products with a partner who owns outcomes, not just code.',
        'Choose the right stack—native or cross-platform—based on your goals.',
        'Keep improving after launch with data-informed iteration.'
      ]
    },
    cta: {
      title: 'Launch Your Next Mobile Experience',
      description: 'Share your platform goals, priority features, and schedule so we can assemble the right mobile team.',
      primary: { label: 'Build Your Mobile App', to: '/contact' },
      secondary: { label: 'Explore Web Development', to: '/services/web-development' }
    }
  },
  'game-development': {
    metaTitle: 'Game Development | Aesir Tecnologia',
    metaDescription: 'Unity and HTML5 game development for mobile and web, including gamification and interactive content.',
    hero: {
      title: 'Interactive Games and Immersive Experiences',
      lead: 'Build engaging games and gamified experiences with Unity and HTML5 to captivate your audience across web and mobile.',
      primaryCta: { label: 'Create Your Game', to: '/services/game-development#contact' },
      secondaryCta: { label: 'View All Services', to: '/services' }
    },
    overview: {
      leftTitle: 'Overview',
      leftList: [
        'Mobile games for iOS and Android',
        'Web-based games and interactive content',
        'Educational and training games',
        'Gamification features for apps',
        'HTML5 games and animations'
      ],
      rightTitle: 'Development Services',
      rightList: [
        'Concept development and narrative planning',
        'Art and animation production',
        'Unity, HTML5, and JavaScript engineering',
        'Quality assurance and device testing',
        'Publishing support and analytics'
      ]
    },
    deliverables: {
      title: 'Technologies Used',
      items: ['Unity', 'HTML5', 'JavaScript', 'WebGL', 'Mobile SDKs']
    },
    audiences: {
      title: 'Target Messaging',
      items: [
        'Deliver immersive experiences that drive engagement.',
        'Combine storytelling, art, and engineering to ship compelling games.',
        'Extend your product strategy with gamified touchpoints.'
      ]
    },
    value: {
      highlightTitle: 'Highlights',
      highlights: [
        'Unity and HTML5 game development for mobile and web',
        'End-to-end support from concept to live operations',
        'Design, art, and engineering collaborating under one roof'
      ],
      messagesTitle: 'Key Messages',
      messages: [
        'Create experiences that keep audiences returning again and again.',
        'Blend gamification and product strategy to drive measurable outcomes.',
        'Trust a team that understands both storytelling and technical delivery.'
      ]
    },
    cta: {
      title: 'Bring Your Experience to Life',
      description: 'Share your concept, audience, and platform needs to start production planning.',
      primary: { label: 'Create Your Game', to: '/contact' },
      secondary: { label: 'Integrate With Your App', to: '/services/web-development' }
    }
  }
}

const slug = computed(() => route.params.slug as string)

const serviceContent = computed<ServiceContent | undefined>(() => {
  const detail = servicesCopy.value?.detail?.[slug.value]
  return detail as ServiceContent | undefined ?? fallbackServices[slug.value]
})

if (!serviceContent.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

useSeoDefaults({
  title: serviceContent.value.metaTitle ?? serviceContent.value.hero.title,
  description: serviceContent.value.metaDescription ?? serviceContent.value.hero.lead
})

const cardUi = {
  base: 'border border-slate-800/70 bg-slate-900/60 backdrop-blur rounded-3xl h-full',
  body: 'p-6 sm:p-8'
}

const hero = computed(() => serviceContent.value!.hero)
const heroPrimaryCta = computed(() => localizeLink(hero.value.primaryCta))
const heroSecondaryCta = computed(() => localizeLink(hero.value.secondaryCta))

const overview = computed(() => serviceContent.value?.overview)
const process = computed(() => serviceContent.value?.process)
const deliverables = computed(() => serviceContent.value?.deliverables)
const audiences = computed(() => serviceContent.value?.audiences)
const serviceValue = computed(() => serviceContent.value?.value)
const cta = computed(() => serviceContent.value?.cta)

const defaultHighlightTitle = computed(() => t('services.detail.common.highlights'))
const defaultMessagesTitle = computed(() => t('services.detail.common.messages'))

const valueHighlightTitle = computed(
  () => serviceValue.value?.highlightTitle ?? defaultHighlightTitle.value
)
const valueMessagesTitle = computed(
  () => serviceValue.value?.messagesTitle ?? defaultMessagesTitle.value
)

function localizeLink(cta?: ServiceCta) {
  if (!cta?.to) {
    return undefined
  }
  const [path, hash] = cta.to.split('#')
  const localized = localePath(path)
  return hash ? `${localized}#${hash}` : localized
}
</script>
