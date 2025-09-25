import { legalContent, type LegalSlug } from '~/data/content/legal'

export const useLegalContent = (slug: LegalSlug) => {
  return legalContent[slug]
}

export type { LegalContent } from '~/data/content/legal'
