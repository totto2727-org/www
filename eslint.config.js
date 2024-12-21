import antfu from '@antfu/eslint-config'
import perfectionist from 'eslint-plugin-perfectionist'

export default antfu({
  astro: true,
  formatters: {
    prettierOptions: {
      vueIndentScriptAndStyle: false,
    },
  },
  svelte: true,
  unocss: true,
})
  .override(
    'antfu/perfectionist/setup',
    {
      rules: perfectionist.configs['recommended-natural'].rules,
    },
  )
