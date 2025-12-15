import { cn } from "@shared/utils/cn"

import { tabsContentCva } from "./tabs-styles"
import { useTabsContext } from "../lib/use-tabs-state"
import type { TabsContentProps } from "../model/types"

export const TabsContent = ({ value, children, className, ...props }: TabsContentProps) => {
    const { activeValue } = useTabsContext()
    const isActive = activeValue === value

    if (!isActive) return null

    return (
        <div
            role="tabpanel"
            data-state={isActive ? "active" : "inactive"}
            className={cn(
                tabsContentCva({
                    state: isActive ? "active" : "inactive",
                }),
                className,
            )}
            {...props}
        >
            {children}
        </div>
    )
}
