// @ts-ignore Astro ComponentProps
import type StarlightPage from "@astrojs/starlight/components/StarlightPage.astro"
import type { ComponentProps } from "astro/types"
import { P, S } from "#@/feature/effect.js"

export function generateOgpObject({
	image,
	alt,
	url,
	title,
	description,
}: {
	title: string
	image: URL
	alt: string
	url?: URL
	description?: string
}): NonNullable<ComponentProps<typeof StarlightPage>["frontmatter"]["head"]> {
	const ogp = [
		{ tag: "meta", attrs: { property: "og:title", content: title } },
		{ tag: "meta", attrs: { property: "og:type", content: "website" } },
		{ tag: "meta", attrs: { property: "og:locale", content: "ja_JP" } },
		{ tag: "meta", attrs: { property: "og:image", content: image.href } },
		{
			tag: "meta",
			attrs: { property: "og:image:type", content: "image/png" },
		},
		{ tag: "meta", attrs: { property: "og:image:alt", content: alt } },
		{ tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
		{ tag: "meta", attrs: { property: "og:image:height", content: "630" } },
		{
			tag: "meta",
			attrs: { name: "twitter:card", content: "summary_large_image" },
		},
		{ tag: "meta", attrs: { name: "twitter:site", content: "@totto2727" } },
		{
			tag: "meta",
			attrs: { name: "twitter:creator", content: "@totto2727" },
		},
	] satisfies ComponentProps<typeof StarlightPage>["frontmatter"]["head"]

	if (P.isNotNullable(description) && S.isNonEmpty(description)) {
		ogp.push({
			tag: "meta",
			attrs: { property: "og:description", content: description },
		} as const)
	}

	// Astroで自動生成される
	if (P.isNotNullable(url)) {
		ogp.push({
			tag: "meta",
			attrs: { property: "og:url", content: url.href },
		} as const)
	}

	return ogp
}
