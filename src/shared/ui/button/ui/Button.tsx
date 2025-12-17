import { Slot } from "@radix-ui/react-slot"

import { cn } from "@shared/utils/cn"

import { buttonStyles } from "./styles"
import type { ButtonProps } from "../model/types"

const buttonCva = (props: Record<string, unknown>) => buttonStyles(props as never)

export const Button = (props: ButtonProps) => {
    const { isLoading, disabled, children, className, asChild, ...rest } = props

    const isDisabled = Boolean(disabled || isLoading)
    const btnClasses = cn(buttonCva(rest as Record<string, unknown>), "relative", className)

    const Component = asChild ? Slot : "button"

    return (
        <Component
            disabled={isDisabled}
            aria-disabled={isDisabled}
            aria-busy={isLoading}
            className={btnClasses}
            {...rest}
        >
            {children}
        </Component>
    )
}
