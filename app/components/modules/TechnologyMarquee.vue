<template>
  <BaseSection :id="id" :variant="variant" padding="tight" :container="false">
    <template v-if="background" #background>
      <BackgroundVariant :tone="backgroundTone" />
    </template>
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
      <SectionHeader
        :eyebrow="eyebrow"
        :title="title"
        :description="description"
        align="center"
        :icon="icon"
      />
      <div
        class="relative w-full overflow-hidden rounded-3xl border py-6 transition-colors"
        :style="marqueeContainerStyle"
      >
        <div
          class="flex gap-12 whitespace-nowrap py-2 font-medium motion-reduce:animate-none"
          :style="trackStyles"
          :class="['animate-[marquee_var(--marquee-duration)_linear_infinite]', { 'pause-on-hover': pauseOnHover }]"
          aria-hidden="true"
        >
          <span
            v-for="(tech, index) in loopItems"
            :key="`${tech}-${index}`"
            class="flex items-center text-lg tracking-wide"
            :style="itemStyle"
          >
            {{ tech }}
          </span>
        </div>
      </div>
      <p v-if="caption" class="text-sm" :style="captionStyle">
        {{ caption }}
      </p>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BackgroundVariant from '~/components/ui/BackgroundVariant.vue'
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
  backgroundTone?: InstanceType<typeof BackgroundVariant>['$props']['tone']
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
  backgroundTone: 'neutral',
  pauseOnHover: true,
})

const loopItems = computed(() => [...props.items, ...props.items])

const trackStyles = computed(() => ({
  '--marquee-duration': `${Math.max(props.speed, 12)}s`
}))

const { surfaceColor, borderColor, textColor } = useUiTokens()

const marqueeContainerStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  color: textColor('primary'),
  backdropFilter: 'blur(12px)',
}))

const itemStyle = computed(() => ({
  color: textColor('primary'),
}))

const captionStyle = computed(() => ({
  color: textColor('subtle'),
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
const backgroundTone = props.backgroundTone
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
