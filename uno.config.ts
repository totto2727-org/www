import presetTagify from '@unocss/preset-tagify'
import {
  defineConfig,
  mergeConfigs,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { customCollections } from './src/feature/primitive/icon-unocss.js'

export default mergeConfigs([
  defineConfig({
    presets: [
      presetUno({
        dark: {
          dark: '[data-theme="dark"]',
          light: '[data-theme="light"]',
        },
      }),
      presetIcons({
        collections: customCollections,
      }),
      presetTagify(),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
  }),
])
