/* eslint-env node */
module.exports = {

	extends: [
		'eslint:all',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:react/recommended',
	],

	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		ecmaVersion: 2017,
		sourceType: 'module',
	},

	plugins: [
		'import',
		'react',
	],

	rules: {
		'capitalized-comments': ['off'],
		'comma-dangle': ['error', 'always-multiline'],
		'indent': ['error', 'tab'],
		'line-comment-position': ['off'],
		'linebreak-style': ['error', 'unix'],
		'max-len': ['error', { code: 128, tabWidth: 2 }],
		'newline-after-var': ['off'],
		'newline-before-return': ['off'],
		'no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
		'no-inline-comments': ['off'],
		'no-tabs': ['off'],
		'object-curly-newline': ['off'],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
		'one-var': ['off'],
		'padded-blocks': ['off'],
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'spaced-comment': ['off'],
	},

}
