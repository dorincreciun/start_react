import type { ButtonHTMLAttributes, ReactNode, Ref } from "react"

import type { VariantProps } from "class-variance-authority"

import { buttonVr } from "@shared/components/Button/styles/button-vr"

export interface IButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
		NonNullable<VariantProps<typeof buttonVr>> {
	children: ReactNode
	isLoading?: boolean
	ref?: Ref<HTMLButtonElement>
	iconOnly?: boolean
	badge?: number
}

export interface ISpinnerProps {
	size?: number
	className?: string
}
