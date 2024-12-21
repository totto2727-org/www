import { getCollection } from 'astro:content'

// TODO: Add Return type
export async function findManyArticle({ includesDraft = false }) {
  return getCollection(
    'docs',
    article =>
      article.id.startsWith('article') && article.id !== 'article.mdx',
  ).then((articles) => {
    return articles
      .filter(article => includesDraft || !article.data.draft)
      .toSorted((a, b) => {
        return a.id < b.id ? 1 : -1
      })
  })
}
