import mdx from "@astrojs/mdx"
import starlight from "@astrojs/starlight"
import svelte from "@astrojs/svelte"
import { defineConfig } from "astro/config"
import browserslist from "browserslist"
import { browserslistToTargets } from "lightningcss"
import UnoCSS from "unocss/astro"
import Icons from "unplugin-icons/vite"
import { customCollections } from "#@/feature/primitive/icon-unocss.js"

const starlightConfig = {
	title: "とっとの適当ブログ？",
	logo: {
		src: "/src/assets/houston.webp",
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
	],
	customCss: ["./src/feature/primitive/global.css"],
	lastUpdated: true,
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
	site: "https://www.totto2727.dev",
	integrations: [svelte(), UnoCSS(), starlight(starlightConfig), mdx()],
	vite,
})
