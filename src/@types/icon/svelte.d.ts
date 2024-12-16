declare module "icon:svelte/*" {
  import { SvelteComponent } from "svelte"
  import type { SvelteHTMLElements } from "svelte/elements"

  export default class extends SvelteComponent<SvelteHTMLElements["svg"]> {}
}
