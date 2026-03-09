import React from "react"

import { cn } from "@shared/utils/cn"

import { InputContext, type InputSize } from "../model/context"
import {
    inputAddonStyles,
    inputFieldStyles,
    inputIconStyles,
    inputRootStyles,
} from "../model/styles"

interface InputRootProps {
    children: React.ReactNode
    size?: InputSize
    className?: string
}

const Root = ({ children, size = "md", className }: InputRootProps) => {
    return (
        <InputContext.Provider value={{ size }}>
            <div className={cn(inputRootStyles({ size }), className)}>{children}</div>
        </InputContext.Provider>
    )
}

const Icon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn(inputIconStyles, className)}>{children}</div>
)

const Addon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <span className={cn(inputAddonStyles, className)}>{children}</span>
)

const Field = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, ...props }, ref) => {
        return <input ref={ref} className={cn(inputFieldStyles, className)} {...props} />
    },
)

Field.displayName = "InputField"

export const Input = Object.assign(Root, {
    Field,
    Icon,
    Addon,
})
