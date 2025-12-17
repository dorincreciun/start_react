import { useState } from "react"

import { DropdownBody } from "./dropdown-body"
import { DropdownTrigger } from "./dropdown-trigger"
import { DropdownContext } from "../model/context"
import type { DropdownRootProps } from "../model/types"

const DropdownRoot = ({ children }: DropdownRootProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggle = () => setIsOpen((prev) => !prev)

    return <DropdownContext value={{ isOpen, toggle }}>{children}</DropdownContext>
}

export const Dropdown = {
    Root: DropdownRoot,
    Trigger: DropdownTrigger,
    Body: DropdownBody,
}
