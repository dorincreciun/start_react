import { cn } from "@shared/utils/cn"

import { tabsTriggerCva } from "./tabs-styles"
import { useTabsContext } from "../lib/use-tabs-state"
import type { TabsTriggerProps } from "../model/types"

export const TabsTrigger = ({ value, children, className, ...props }: TabsTriggerProps) => {
    const { changeTab, activeValue } = useTabsContext()
    const isActive = activeValue === value

    return (
        <button
            role="tab"
            aria-selected={isActive}
            data-state={isActive ? "active" : "inactive"}
            className={cn(
                tabsTriggerCva({
                    state: isActive ? "active" : "inactive",
                }),
                className,
            )}
            onClick={() => changeTab(value)}
            type="button"
            {...props}
        >
            {children}
        </button>
    )
}
