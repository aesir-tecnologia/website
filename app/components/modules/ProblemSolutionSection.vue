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
        <UCard :ui="cardUi">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ challengeTitle }}</h3>
            <BulletList :items="challenges" />
          </div>
        </UCard>
        <UCard :ui="cardUi">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50">{{ impactTitle }}</h3>
            <BulletList :items="impacts" />
          </div>
        </UCard>
      </ContentGrid>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
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
  backgroundTone: 'indigo',
  backgroundAlign: 'top',
})

const cardUi = {
  base: 'relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-lg shadow-slate-200/60 dark:border-slate-900/60 dark:bg-slate-950/40 dark:shadow-slate-950/50',
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
