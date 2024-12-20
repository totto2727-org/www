import { getCollection } from 'astro:content'

// TODO: Add Return type
export async function findManyTalk() {
  return getCollection('talk').then((talks) => {
    return talks
      .filter(talk => talk.data.draft === false)
      .toSorted((a, b) => {
        return a.id < b.id ? 1 : -1
      })
  })
}
