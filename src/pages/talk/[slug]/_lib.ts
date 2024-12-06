export const getTalkArticlePath = (slug: string) => {
	return `/talk/${slug}/article`
}

export const getTalkSlidePath = (slug: string) => {
	return `/talk/${slug}/slide`
}

export function getTalkOgpImagePath(slug: string) {
	return `/talk/${slug}/ogp.png`
}
