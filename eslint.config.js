import js from "@eslint/js"
import eslintPluginImport from "eslint-plugin-import"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config([
	{ ignores: ["dist"] },
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: { ecmaVersion: 2020, sourceType: "module", globals: globals.browser },
		plugins: { import: eslintPluginImport },
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			reactHooks.configs["recommended-latest"],
			reactRefresh.configs.vite,
		],
		settings: {
			"import/resolver": {
				typescript: { project: "./tsconfig.json" },
				alias: {
					map: [
						["@", "./src"],
						["@app", "./src/app"],
						["@pages", "./src/pages"],
						["@shared", "./src/shared"],
					],
					extensions: [".ts", ".tsx", ".js", ".jsx"],
				},
			},
		},
		rules: {
			"import/no-unresolved": "error",

			// "import/order": [
			//     "error",
			//     {
			//         "newlines-between": "always",
			//         alphabetize: {order: "asc", caseInsensitive: true},
			//         groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
			//         pathGroups: [
			//             {
			//                 pattern: "@/**",
			//                 group: "internal",
			//                 position: "before",
			//             },
			//         ],
			//         pathGroupsExcludedImportTypes: ["builtin"],
			//     },
			// ],

			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		},
	},
])
