// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default withNuxt({
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    'vue/no-multiple-template-root': 'off',
    ...eslintConfigPrettier.rules,
    ...eslintPluginPrettierRecommended.rules,
  },
});
