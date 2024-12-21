export const TITLE = 'とっとの適当ブログ？'
export const SITE = 'https://www.totto2727.dev'

export function generateTitle(title: string, suffix?: string) {
  return `${title} - ${suffix ?? TITLE}`
}
