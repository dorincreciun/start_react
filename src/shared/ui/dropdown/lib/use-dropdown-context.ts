import { useContext } from "react"

import { DropdownContext } from "../model/context"

export const useDropdownContext = () => {
    const ctx = useContext(DropdownContext)

    if (!ctx) {
        throw new Error("useDropdownContext must be used within <Dropdown.Root>.")
    }

    return ctx
}
