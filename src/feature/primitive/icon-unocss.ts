import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export const customCollections = {
  my: FileSystemIconLoader('./public/icon', svg =>
    svg.replace(/^<svg /, '<svg fill="currentColor" ')),
}
