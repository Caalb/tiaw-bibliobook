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
		indent: 'off',
		'no-new': 'off',
		'no-tabs': 'off',
		semi: ['error', 'always'],
		'vue/html-indent': ['error', 'tab'],
		'vue/order-in-components': 'off',
	},
};
