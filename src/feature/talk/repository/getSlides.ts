import { getCollection } from "astro:content"

export function findTalkMany() {
	return getCollection("talk").then((talks) => {
		return talks.toSorted((a, b) => {
			return a.id < b.id ? 1 : -1
		})
	})
}
