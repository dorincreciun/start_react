import type { ButtonHTMLAttributes, FC } from "react"

import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "@shared/utils/cn"
import { renderWithAsChild } from "@shared/utils/with-as-child"

const buttonCva = cva([], {
	variants: {
		color: {
			danger: "",
			success: "",
			info: "",
		},
		size: {
			xs: "",
			sm: "",
			md: "",
			lg: "",
		},
		kind: {
			solid: "",
			outline: "",
		},
	},
	defaultVariants: {
		color: "info",
		size: "md",
		kind: "solid",
	},
})

type ButtonVariantProps = VariantProps<typeof buttonCva>

type TNativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">

interface IButtonProps extends TNativeButtonProps, ButtonVariantProps {
	asChild?: boolean
}

export const Button: FC<IButtonProps> = (props) => {
	const { asChild, children, className, color, size, kind, ...rest } = props

	const variantClassName = buttonCva({ color, size, kind })
	const finalClassName = cn(variantClassName, className)

	return renderWithAsChild({
		Component: "button",
		asChild,
		children,
		className: finalClassName,
		...rest,
	})
}
