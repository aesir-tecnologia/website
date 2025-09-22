<template>
  <BaseSection :id="id" :variant="variant" padding="default">
    <template v-if="background" #background>
      <BackgroundVariant :tone="backgroundTone" :align="backgroundAlign" />
    </template>
    <div class="space-y-10">
      <SectionHeader
        :eyebrow="eyebrow"
        :title="title"
        :description="description"
        :icon="icon"
      />
      <ContentGrid :columns="2">
        <UCard :ui="cardUi" :style="cardStyle">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold" :style="titleStyle">{{ challengeTitle }}</h3>
            <BulletList :items="challenges" />
          </div>
        </UCard>
        <UCard :ui="cardUi" :style="cardStyle">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold" :style="titleStyle">{{ impactTitle }}</h3>
            <BulletList :items="impacts" />
          </div>
        </UCard>
      </ContentGrid>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BackgroundVariant from '~/components/ui/BackgroundVariant.vue'
import BaseSection from '~/components/shared/BaseSection.vue'
import SectionHeader from '~/components/shared/SectionHeader.vue'
import ContentGrid from '~/components/shared/ContentGrid.vue'
import BulletList from '~/components/shared/BulletList.vue'

type BulletCollection = InstanceType<typeof BulletList>['$props']['items']

type SectionVariant = InstanceType<typeof BaseSection>['$props']['variant']

const props = withDefaults(defineProps<{
  id?: string
  eyebrow?: string
  title: string
  description?: string
  icon?: string
  challengeTitle: string
  impactTitle: string
  challenges: BulletCollection
  impacts: BulletCollection
  variant?: SectionVariant
  background?: boolean
  backgroundTone?: InstanceType<typeof BackgroundVariant>['$props']['tone']
  backgroundAlign?: InstanceType<typeof BackgroundVariant>['$props']['align']
}>(), {
  id: undefined,
  eyebrow: undefined,
  description: undefined,
  icon: undefined,
  variant: 'default',
  background: true,
  backgroundTone: 'primary',
  backgroundAlign: 'top',
})

const { surfaceColor, borderColor, shadow, textColor } = useUiTokens()

const cardStyle = computed(() => ({
  backgroundColor: surfaceColor('elevated'),
  borderColor: borderColor('soft'),
  boxShadow: shadow('soft'),
  color: textColor('primary'),
  '--problem-card-hover-border': borderColor('strong'),
  '--problem-card-hover-shadow': shadow('strong'),
}))

const titleStyle = computed(() => ({
  color: textColor('primary'),
}))

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border p-8 transition duration-300 hover:[border-color:var(--problem-card-hover-border)] hover:[box-shadow:var(--problem-card-hover-shadow)]',
  body: 'space-y-4 p-0'
} as const

const variant = props.variant
const background = props.background
const id = props.id
const eyebrow = props.eyebrow
const title = props.title
const description = props.description
const icon = props.icon
const challengeTitle = props.challengeTitle
const impactTitle = props.impactTitle
const challenges = props.challenges
const impacts = props.impacts
const backgroundTone = props.backgroundTone
const backgroundAlign = props.backgroundAlign
</script>
