import type { ReactElement, ReactNode } from "react"

export interface DropdownContextProps {
    isOpen: boolean
    toggle: () => void
}

export interface DropdownRootProps {
    children: [ReactElement<DropdownTriggerProps>, ReactElement<DropdownBodyProps>]
}

export interface DropdownTriggerProps {
    children: ReactNode
    onClick?: () => void
}

export interface DropdownBodyProps {
    children: ReactNode
}
