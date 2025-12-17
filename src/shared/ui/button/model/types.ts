import type { ButtonHTMLAttributes } from "react"

import type { VariantProps } from "class-variance-authority"

import { buttonStyles } from "../ui/styles"

type ButtonNativeProps = ButtonHTMLAttributes<HTMLButtonElement>
type ButtonStylesProps = VariantProps<typeof buttonStyles>

interface ButtonCustomProps {
    isLoading?: boolean
    asChild?: boolean
}

export type ButtonProps = ButtonNativeProps & ButtonStylesProps & ButtonCustomProps
