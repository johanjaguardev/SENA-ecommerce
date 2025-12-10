// .stylelint.config.cjs
export default {
  // 1. Cambia stylelint-config-standard por stylelint-config-standard-scss
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  plugins: ['stylelint-order'],
  rules: {
    // Estas reglas suelen ser más compatibles con SCSS
    'scss/dollar-variable-pattern': null, // ejemplo para no forzar formato de variables
    'order/properties-alphabetical-order': null,
  },
  overrides: [
    {
      // 2. Define la sintaxis SCSS para archivos SCSS
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      // 3. Define la sintaxis HTML/JSX/TSX usando postcss-html, pero asegúrate de que el parser SCSS se aplique dentro de <style>
      // Ya tienes esta parte, pero Stylelint necesita saber que el contenido es SCSS/CSS
      files: ['**/*.html', '**/*.jsx', '**/*.tsx'],
      customSyntax: 'postcss-html',
    },
  ],
};
