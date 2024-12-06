import type { APIContext } from "astro"
import { findManyTalk } from "#@/feature/talk/repository/findManyTalk.js"
import { generateTalkOgpImage } from "./_lib.ogp"

export async function getStaticPaths() {
	const talkList = await findManyTalk()
	return talkList.map((talk) => ({
		params: {
			slug: talk.slug,
		},
		props: {
			slug: talk.slug,
			titleSplitted: talk.data.title.split("<wbr/>"),
		},
	}))
}

export async function GET(context: APIContext) {
	const props = context.props as Awaited<
		ReturnType<typeof getStaticPaths>
	>[number]["props"]

	return generateTalkOgpImage(props.titleSplitted)
}
