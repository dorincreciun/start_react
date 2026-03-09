import type { ButtonHTMLAttributes, ReactNode } from "react"

import type { VariantProps } from "class-variance-authority"

import { buttonStyles } from "./styles"

type ButtonNativeProps = ButtonHTMLAttributes<HTMLButtonElement>
type ButtonStylesProps = VariantProps<typeof buttonStyles>

interface ButtonCustomProps {
    isLoading?: boolean
    asChild?: boolean
    badge?: boolean | number
}

export type ButtonProps = ButtonNativeProps & ButtonStylesProps & ButtonCustomProps

export interface ButtonSpinnerProps {
    isLoading?: boolean
}

export interface ButtonContentProps {
    isLoading?: boolean
    children: ReactNode
}
