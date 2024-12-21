declare module 'icon:svelte/*' {
  import type { SvelteHTMLElements } from 'svelte/elements'

  import { SvelteComponent } from 'svelte'

  export default class extends SvelteComponent<SvelteHTMLElements['svg']> {}
}
