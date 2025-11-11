import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginImport from "eslint-plugin-import"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config([
	// Ignoră foldere de build
	{
		ignores: ["dist", "build"],
	},

	// Config principal pentru TypeScript + React + FSD + importuri
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: "module",
			globals: {
				...globals.browser,
			},
		},
		plugins: {
			import: eslintPluginImport,
		},
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			// Dezactivează regulile care se bat cap în cap cu Prettier
			eslintConfigPrettier,
		],
		settings: {
			"import/resolver": {
				typescript: {
					project: "./tsconfig.json",
				},
				node: {
					extensions: [".js", ".jsx", ".ts", ".tsx"],
				},
			},
		},
		rules: {
			// Importuri de bază
			"import/no-unresolved": "error",
			"import/first": "error",

			// Lăsăm Prettier să se ocupe de spații / ordine
			"import/newline-after-import": "off",
			"import/order": "off",
			"sort-imports": "off",

			// React Fast Refresh
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

			// FSD: restricții între layere
			"import/no-restricted-paths": [
				"error",
				{
					zones: [
						{
							target: "./src/app",
							from: [
								"./src/pages",
								"./src/processes",
								"./src/widgets",
								"./src/features",
								"./src/entities",
								"./src/shared",
							],
						},
						{
							target: "./src/pages",
							from: [
								"./src/processes",
								"./src/widgets",
								"./src/features",
								"./src/entities",
								"./src/shared",
							],
						},
						{
							target: "./src/widgets",
							from: ["./src/features", "./src/entities", "./src/shared"],
						},
						{
							target: "./src/features",
							from: ["./src/entities", "./src/shared"],
						},
						{
							target: "./src/entities",
							from: ["./src/shared"],
						},
					],
				},
			],
		},
	},

	// React Hooks rules
	reactHooks.configs["recommended-latest"],

	// Vite + React Fast Refresh
	reactRefresh.configs.vite,
])
