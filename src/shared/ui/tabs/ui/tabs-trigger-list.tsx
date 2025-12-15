import { cn } from "@shared/utils/cn"

import type { TabsTriggerListProps } from "../model/types"

export const TabsTriggerList = ({ className, children, ...props }: TabsTriggerListProps) => {
    return (
        <div role="tablist" className={cn("flex gap-2", className)} {...props}>
            {children}
        </div>
    )
}
