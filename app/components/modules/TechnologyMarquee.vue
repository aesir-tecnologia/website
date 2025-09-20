<template>
  <BaseSection :id="id" :variant="variant" padding="tight" :container="false">
    <template v-if="background" #background>
      <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.1),_transparent_80%)]" />
    </template>
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
      <SectionHeader
        :eyebrow="eyebrow"
        :title="title"
        :description="description"
        align="center"
        :icon="icon"
      />
      <div class="relative w-full overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 py-6 dark:border-slate-900/60 dark:bg-slate-950/60">
        <div
          class="flex gap-12 whitespace-nowrap py-2 font-medium text-slate-700 motion-reduce:animate-none dark:text-slate-200"
          :style="trackStyles"
          :class="['animate-[marquee_var(--marquee-duration)_linear_infinite]', { 'pause-on-hover': pauseOnHover }]"
          aria-hidden="true"
        >
          <span
            v-for="(tech, index) in loopItems"
            :key="`${tech}-${index}`"
            class="flex items-center text-lg tracking-wide text-slate-800/80 dark:text-slate-100/90"
          >
            {{ tech }}
          </span>
        </div>
      </div>
      <p v-if="caption" class="text-sm text-slate-400">
        {{ caption }}
      </p>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'

type SectionVariant = InstanceType<typeof BaseSection>['$props']['variant']

const props = withDefaults(defineProps<{
  id?: string
  eyebrow?: string
  title: string
  description?: string
  caption?: string
  icon?: string
  items: string[]
  speed?: number
  variant?: SectionVariant
  background?: boolean
  pauseOnHover?: boolean
}>(), {
  id: undefined,
  eyebrow: undefined,
  description: undefined,
  caption: undefined,
  icon: undefined,
  speed: 28,
  variant: 'dark',
  background: true,
  pauseOnHover: true,
})

const loopItems = computed(() => [...props.items, ...props.items])

const trackStyles = computed(() => ({
  '--marquee-duration': `${Math.max(props.speed, 12)}s`
}))

const variant = props.variant
const background = props.background
const id = props.id
const eyebrow = props.eyebrow
const title = props.title
const description = props.description
const icon = props.icon
const caption = props.caption
const pauseOnHover = props.pauseOnHover
</script>

<style scoped>
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.pause-on-hover:hover {
  animation-play-state: paused;
}
</style>
