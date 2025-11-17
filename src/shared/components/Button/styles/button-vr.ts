import { cva } from "class-variance-authority"








export const buttonVr = cva(
	[
		/* Badge */
		[
			"[&>.badge]:absolute",
			"[&>.badge]:-top-2",
			"[&>.badge]:-right-2",
			"[&>.badge]:flex",
			"[&>.badge]:items-center",
			"[&>.badge]:justify-center",
			"[&>.badge]:size-4",
			"[&>.badge]:rounded-full",
			"[&>.badge]:text-xs",
			"[&>.badge]:leading-none",
			"[&>.badge]:font-normal",
			"[&>.badge]:bg-[--button-badge-bg]",
			"[&>.badge]:text-[--button-badge-text]",
		],

		/* Layout */
		"inline-flex items-center justify-center gap-2",

		/* Interaction */
		"transition-all duration-150 ease-out cursor-pointer",
		"shadow-sm hover:shadow-md focus:shadow-md active:shadow-sm",
		"disabled:shadow-none active:translate-y-[1px] active:shadow-inner",

		/* Focus ring (CSS var) */
		"outline-none focus-visible:ring-2",
		"focus-visible:ring-[--button-ring-color]",
		"focus-visible:ring-offset-2",

		/* Loading */
		"aria-busy:pointer-events-none aria-busy:opacity-70 aria-busy:cursor-wait",

		/* Theming prin CSS vars */
		[
			"bg-[--button-bg]",
			"text-[--button-text]",
			"hover:bg-[--button-hover-bg]",
			"focus:bg-[--button-hover-bg]",
			"active:bg-[--button-active-bg]",
		],
	],
	{
		variants: {
			color: {
				primary: [],
				secondary: [],
			},

			kind: {
				solid: "",
				outline: "",
			},

			size: {
				sm: "",
				md: "",
				lg: "",
			},

			isLoading: {
				true: "",
			},

			iconOnly: {
				true: ["aspect-square", "p-0"],
			},
		},

		defaultVariants: {
			color: "primary",
			kind: "solid",
			size: "md",
		},
	},
)
