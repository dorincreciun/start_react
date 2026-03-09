import { Slot } from "@radix-ui/react-slot"

import { cn } from "@shared/utils/cn"

import { ButtonSpinner } from "./button-spinner"
import { badgeStyles, buttonStyles } from "../model/styles"
import type { ButtonProps } from "../model/types"

export const Button = (props: ButtonProps) => {
    const { isLoading, disabled, children, className, asChild, badge, size, variant, ...rest } =
        props

    const isDisabled = Boolean(disabled || isLoading)

    const Component = asChild ? Slot : "button"

    return (
        <Component
            disabled={isDisabled}
            aria-disabled={isDisabled}
            aria-busy={isLoading}
            className={cn(buttonStyles({ size, variant }), "relative", className)}
            {...rest}
        >
            <ButtonSpinner isLoading={isLoading} />

            <span
                className={cn(
                    "flex w-full items-center transition-opacity",
                    isLoading ? "opacity-0" : "opacity-100",
                )}
            >
                {children}
                {badge !== undefined && <span className={badgeStyles}>{badge}</span>}
            </span>
        </Component>
    )
}
