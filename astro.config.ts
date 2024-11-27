import mdx from "@astrojs/mdx"
import starlight from "@astrojs/starlight"
import svelte from "@astrojs/svelte"
import { defineConfig } from "astro/config"
import browserslist from "browserslist"
import { browserslistToTargets } from "lightningcss"
import UnoCSS from "unocss/astro"
import Icons from "unplugin-icons/vite"
import { customCollections } from "#@/feature/primitive/icon-unocss.js"

export default defineConfig({
	site: "https://www.totto2727.dev",
	integrations: [
		svelte(),
		UnoCSS({ injectReset: true }),
		starlight({
			title: "totto2727",
			social: {
				github: "https://github.com/totto2727",
			},
			sidebar: [
				{
					label: "Slide",
					link: "/slide",
				},
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", slug: "guides/example" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
		mdx(),
	],
	vite: {
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
	},
})
