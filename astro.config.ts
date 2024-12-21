import { SITE, TITLE } from '#@/const.js'
import { customCollections } from '#@/feature/primitive/icon-unocss.js'
import { generateOgpObject } from '#@/feature/primitive/ogp.js'
import mdx from '@astrojs/mdx'
import starlight from '@astrojs/starlight'
import svelte from '@astrojs/svelte'
import { defineConfig } from 'astro/config'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import UnoCSS from 'unocss/astro'
import Icons from 'unplugin-icons/vite'

const starlightConfig = {
  head: [
    {
      content: `
@view-transition {
  navigation: auto;
}
`.trim(),
      tag: 'style',
    },
    ...generateOgpObject({
      alt: TITLE,
      image: new URL('/ogp.png', SITE),
      title: TITLE,
    }),
  ],
  lastUpdated: true,
  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
    },
  },
  logo: {
    replacesTitle: true,
    src: '/src/assets/totto2727.webp',
  },
  sidebar: [
    {
      label: 'Talk',
      link: '/talk',
    },
    {
      label: 'Article',
      link: '/article',
    },
  ],
  social: {
    github: 'https://github.com/totto2727',
  },
  title: TITLE,
} satisfies Parameters<typeof starlight>[0]

const vite = {
  build: {
    cssMinify: 'lightningcss',
  },
  css: {
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
    transformer: 'lightningcss',
  },
  plugins: [
    Icons({
      compiler: 'astro',
      customCollections,
    }),
    Icons({
      compiler: 'svelte',
      customCollections,
    }),
  ],
  resolve: {
    alias: [
      { find: 'icon:svelte', replacement: '~icons' },
      { find: 'icon:astro', replacement: '~icons' },
    ],
  },
} satisfies Parameters<typeof defineConfig>[0]['vite']

export default defineConfig({
  integrations: [svelte(), UnoCSS(), starlight(starlightConfig), mdx()],
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true,
  },
  site: SITE,
  vite,
})
