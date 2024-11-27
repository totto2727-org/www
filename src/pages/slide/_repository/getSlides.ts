import { getCollection } from "astro:content"

export function getSlides() {
	return getCollection("docs", (docs) => docs.id.startsWith("slide"))
}
