export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-stylus'],
  plugins: ['stylelint-order', 'stylelint-stylus'],
  rules: {
    'order/properties-alphabetical-order': true,
    'color-no-invalid-hex': true,
    'stylus/color-hex-case': 'lower',
    'color-hex-length': 'long'
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ]
};
