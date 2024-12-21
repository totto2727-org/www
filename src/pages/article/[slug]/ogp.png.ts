import type { APIContext } from 'astro'

import { generateOgImage } from '#@/feature/primitive/ogImage.jsx'
import { getCollection } from 'astro:content'

export async function GET(context: APIContext) {
  const props = context.props as Awaited<
    ReturnType<typeof getStaticPaths>
  >[number]['props']

  return generateOgImage(props.titleSplitted)
}

export async function getStaticPaths() {
  const articleList = await getCollection(
    'docs',
    v => v.slug.startsWith('article/') && !v.data.draft,
  )
  return articleList.map(talk => ({
    params: {
      slug: talk.slug.replace('article/', ''),
    },
    props: {
      titleSplitted: talk.data.title.split('<wbr/>'),
    },
  }))
}
