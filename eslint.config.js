import pluginVue from 'eslint-plugin-vue'
import vueTsConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  ...pluginVue.configs['flat/essential'],
  ...vueTsConfig(),
  skipFormatting,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]