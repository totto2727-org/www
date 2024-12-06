import { generateOgImage } from "#@/feature/primitive/ogImage.jsx"

export async function GET() {
	return generateOgImage(["とっとの適当ブログ？"])
}
