import { servicesContent } from '~/data/content/services'

const detailKeyMap = {
  'vibe-coding-cleanup': 'vibeCodingCleanup',
  'web-development': 'webDevelopment',
  'staff-augmentation': 'staffAugmentation',
  'mobile-development': 'mobileDevelopment',
  'game-development': 'gameDevelopment'
} as const

export type ServiceSlug = keyof typeof detailKeyMap

export const useServicesOverviewContent = () => servicesContent.overview

export const useServiceContent = (slug: ServiceSlug) => {
  const key = detailKeyMap[slug]
  return servicesContent.details[key]
}

export const useAllServiceContent = () => servicesContent.details

export type ServicesContent = typeof servicesContent
