import { getCollection } from "astro:content"

export function findManyArticle() {
	return getCollection(
		"docs",
		(article) =>
			article.id.startsWith("article") && article.id !== "article.mdx",
	).then((articles) => {
		return articles
		.filter((article) => article.data.draft === false)
		.toSorted((a, b) => {
			return a.id < b.id ? 1 : -1
		})
	})
}