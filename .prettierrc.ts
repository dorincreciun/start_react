import type { Config } from "prettier"

const config: Config = {
	experimentalTernaries: true,
	experimentalOperatorPosition: "start",

	printWidth: 120,
	tabWidth: 4,
	useTabs: true,

	semi: false,
	singleQuote: false,
	trailingComma: "all",
	bracketSpacing: true,
	arrowParens: "always",
	singleAttributePerLine: true,

	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],

	importOrder: [
		// React first
		"^react$",
		"^react-dom$",
		"^react-router(-dom)?$",

		// then other external
		"<THIRD_PARTY_MODULES>",

		// FSD layers
		"^@app/(.*)$",
		"^@pages/(.*)$",
		"^@processes/(.*)$",
		"^@widgets/(.*)$",
		"^@features/(.*)$",
		"^@entities/(.*)$",
		"^@shared/(.*)$",

		// finally relative imports
		"^[./]",
	],

	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderParserPlugins: ["typescript", "jsx"],
}

export default config
