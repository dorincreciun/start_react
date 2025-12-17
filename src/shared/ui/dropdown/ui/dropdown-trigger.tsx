import { useDropdownContext } from "../lib/use-dropdown-context"
import type { DropdownTriggerProps } from "../model/types"

export const DropdownTrigger = ({ children, onClick }: DropdownTriggerProps) => {
    const { toggle } = useDropdownContext()

    return (
        <div
            onClick={() => {
                toggle()
                onClick?.()
            }}
        >
            {children}
        </div>
    )
}
