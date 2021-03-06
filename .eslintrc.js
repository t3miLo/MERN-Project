module.exports = {
	"extends": [ 
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"env": {
		"browser": true,
		"node": true
	},
	"rules": {
		"valid-jsdoc": 2,
		"react/jsx-no-undef": 2,
		"react/jsx-wrap-multilines": 2,
		"react/no-string-refs": 0,
		"no-console": 0
	},
	"plugins": [
		"react"
	],

}
