import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginImport from "eslint-plugin-import"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config([
	{
		ignores: ["dist", "build"],
	},

	{
		files: ["**/*.{ts,tsx,js,jsx}"],
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
			reactHooks.configs["recommended-latest"],
			reactRefresh.configs.vite,
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
			"import/no-unresolved": "error",
			"import/first": "error",

			"import/newline-after-import": "off",
			"import/order": "off",
			"sort-imports": "off",

			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

			"import/no-restricted-paths": [
				"error",
				{
					zones: [
						{
							target: "./src/shared",
							from: [
								"./src/entities",
								"./src/features",
								"./src/widgets",
								"./src/pages",
								"./src/processes",
								"./src/app",
							],
						},
						{
							target: "./src/entities",
							from: ["./src/features", "./src/widgets", "./src/pages", "./src/processes", "./src/app"],
						},
						{
							target: "./src/features",
							from: ["./src/widgets", "./src/pages", "./src/processes", "./src/app"],
						},
						{
							target: "./src/widgets",
							from: ["./src/pages", "./src/processes", "./src/app"],
						},
						{
							target: "./src/pages",
							from: ["./src/processes", "./src/app"],
						},
						{
							target: "./src/processes",
							from: ["./src/app"],
						},
					],
				},
			],
		},
	},
])
