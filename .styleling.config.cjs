export default {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': null,
  },
  overrides: [
    {
      files: ['**/*.html', '**/*.css', '**/*.jsx', '**/*.tsx'],
      customSyntax: 'postcss-html',
    },
  ],
};
