import mdx from "@astrojs/mdx"
import starlight from "@astrojs/starlight"
import svelte from "@astrojs/svelte"
import { defineConfig } from "astro/config"
import browserslist from "browserslist"
import { browserslistToTargets } from "lightningcss"
import UnoCSS from "unocss/astro"
import Icons from "unplugin-icons/vite"
import { SITE, TITLE } from "#@/const.js"
import { customCollections } from "#@/feature/primitive/icon-unocss.js"
import { generateOgpObject } from "#@/feature/primitive/ogp.js"

const starlightConfig = {
  title: TITLE,
  logo: {
    src: "/src/assets/totto2727.webp",
    replacesTitle: true,
  },
  social: {
    github: "https://github.com/totto2727",
  },
  sidebar: [
    {
      label: "Talk",
      link: "/talk",
    },
    {
      label: "Article",
      link: "/article",
    },
  ],
  lastUpdated: true,
  locales: {
    root: {
      label: "日本語",
      lang: "ja",
    },
  },
  head: [
    {
      tag: "style",
      content: `
@view-transition {
	navigation: auto;
}
`.trim(),
    },
    ...generateOgpObject({
      title: TITLE,
      image: new URL("/ogp.png", SITE),
      alt: TITLE,
    }),
  ],
} satisfies Parameters<typeof starlight>[0]

const vite = {
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist(">= 0.25%")),
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
  resolve: {
    alias: [
      { find: "icon:svelte", replacement: "~icons" },
      { find: "icon:astro", replacement: "~icons" },
    ],
  },
  plugins: [
    Icons({
      compiler: "astro",
      customCollections,
    }),
    Icons({
      compiler: "svelte",
      customCollections,
    }),
  ],
} satisfies Parameters<typeof defineConfig>[0]["vite"]

export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  site: SITE,
  integrations: [svelte(), UnoCSS(), starlight(starlightConfig), mdx()],
  vite,
})
