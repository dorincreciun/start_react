import type {Config} from "prettier"

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
	objectWrap: "collapse",
	singleAttributePerLine: true,

	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],

	importOrder: [
		"^react(.*)$",
		"<THIRD_PARTY_MODULES>",
		"^@shared/(.*)$",
		"^@pages/(.*)$",
		"^[./]"
	],

	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderParserPlugins: ["typescript", "jsx"],
}

export default config
