module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['jest'],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'import/first': 'off',
    'import/order': 'off',
    'no-new': 'off',
    'no-tabs': 'off',
    semi: ['error', 'always'],
    'vue/html-indent': ['error', 'tab'],
    'vue/order-in-components': 'off',
    'camelcase': 'off',
    'arrow-parens': [
      'error',
      'always',
    ],
    'arrow-body-style': [
      2,
      'as-needed',
    ],
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'linebreak-style': [
      2,
      'unix',
    ],
    'new-cap': [
      2,
      {
        'properties': false,
      },
    ],
    'no-unused-vars': [
      2,
      {
        'vars': 'all',
        'args': 'after-used',
      },
    ],
    'no-use-before-define': [
      2,
    ],
    'no-trailing-spaces': [
      2,
    ],
    'quotes': [
      2,
      'single',
    ],
    'wrap-iife': [
      2,
      'outside',
    ],
    'strict': [
      2,
      'global',
    ],
    'brace-style': 2,
    'block-spacing': [
      2,
      'always',
    ],
    'keyword-spacing': [2, {'before': true, 'after': true, 'overrides': {}}],
    'space-before-blocks': 2,
    'space-before-function-paren': [2, {'anonymous': 'always', 'named': 'never'}],
    'comma-spacing': [2, {'before': false, 'after': true}],
    'comma-style': [2, 'last'],
    'no-lonely-if': 2,
    'array-bracket-spacing': [2, 'never'],
    'no-spaced-func': [2],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
  },
};
