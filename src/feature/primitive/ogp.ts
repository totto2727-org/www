import type StarlightPage from '@astrojs/starlight/components/StarlightPage.astro'
import type { ComponentProps } from 'astro/types'

import { P, S } from '#@/feature/effect.js'

export function generateOgpObject({
  alt,
  description,
  image,
  title,
  url,
}: {
  alt: string
  description?: string
  image: URL
  title: string
  url?: URL
}): NonNullable<ComponentProps<typeof StarlightPage>['frontmatter']['head']> {
  const ogp = [
    { attrs: { content: title, property: 'og:title' }, tag: 'meta' },
    { attrs: { content: 'website', property: 'og:type' }, tag: 'meta' },
    { attrs: { content: 'ja_JP', property: 'og:locale' }, tag: 'meta' },
    { attrs: { content: image.href, property: 'og:image' }, tag: 'meta' },
    {
      attrs: { content: 'image/png', property: 'og:image:type' },
      tag: 'meta',
    },
    { attrs: { content: alt, property: 'og:image:alt' }, tag: 'meta' },
    { attrs: { content: '1200', property: 'og:image:width' }, tag: 'meta' },
    { attrs: { content: '630', property: 'og:image:height' }, tag: 'meta' },
    {
      attrs: { content: 'summary_large_image', name: 'twitter:card' },
      tag: 'meta',
    },
    { attrs: { content: '@totto2727', name: 'twitter:site' }, tag: 'meta' },
    {
      attrs: { content: '@totto2727', name: 'twitter:creator' },
      tag: 'meta',
    },
  ] satisfies ComponentProps<typeof StarlightPage>['frontmatter']['head']

  if (P.isNotNullable(description) && S.isNonEmpty(description)) {
    ogp.push({
      attrs: { content: description, property: 'og:description' },
      tag: 'meta',
    } as const)
  }

  // Astroで自動生成される
  if (P.isNotNullable(url)) {
    ogp.push({
      attrs: { content: url.href, property: 'og:url' },
      tag: 'meta',
    } as const)
  }

  return ogp
}
