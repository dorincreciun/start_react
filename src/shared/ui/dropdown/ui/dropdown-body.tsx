import { cn } from "@shared/utils/cn"

import { useDropdownContext } from "../lib/use-dropdown-context"
import type { DropdownBodyProps } from "../model/types"

export const DropdownBody = ({ children }: DropdownBodyProps) => {
    const { isOpen } = useDropdownContext()

    return (
        <div
            className={cn(
                "absolute z-50 min-w-max",
                "transition-all duration-200 ease-out",
                !isOpen && "pointer-events-none translate-y-1 scale-95 opacity-0",
                isOpen && "translate-y-0 scale-100 opacity-100",
            )}
        >
            {children}
        </div>
    )
}
