module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html/vue',
    'stylelint-config-prettier-scss',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-prettier',
    'stylelint-z-index-value-constraint',
  ],
  rules: {
    // Allow prettier to format stylelint reported issues
    'prettier/prettier': true,

    /**
     * SCSS specific rules
     */
    // Disabling the rule because we prefer having parenthesis
    'scss/at-rule-conditional-no-parentheses': null,

    // Disabling the rule because we cannot configure the rule
    // to match prettier
    'scss/operator-no-newline-after': null,
    'scss/at-import-partial-extension': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/no-global-function-names': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/dollar-variable-empty-line-before': 'never',

    /**
     * Plugin rules
     */
    'order/properties-alphabetical-order': true,
    'plugin/z-index-value-constraint': {
      min: 0,
      max: 10,
    },

    /**
     * Other rules
     */
    // We disable this rule, because we disallow ids
    // through the selector-max-specificity rule
    'selector-id-pattern': null,

    // More info about the BEM convention pattern:
    // https://gist.github.com/Potherca/f2a65491e63338659c3a0d2b07eee382
    // The pattern is modified to satisfy the rule. According to 'selector-class-pattern'
    // we shouldn't include '.' in the pattern, as it is already implemented by the library
    'selector-class-pattern': [
      '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
      {
        resolveNestedSelectors: true,
      },
    ],
    'alpha-value-notation': 'number',
    'at-rule-no-vendor-prefix': true,
    'color-function-notation': 'legacy',
    'declaration-block-no-duplicate-properties': true,
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',
    'media-feature-name-no-vendor-prefix': true,
    'no-unknown-animations': true,
    'selector-max-type': 0,
    'selector-pseudo-element-colon-notation': 'single',
    'max-nesting-depth': [
      2,
      {
        ignore: ['blockless-at-rules'],
      },
    ],
    'number-max-precision': 2,
    'property-no-vendor-prefix': true,
    'selector-max-specificity': '0,2,0',
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'value-keyword-case': 'lower',
  },
}
