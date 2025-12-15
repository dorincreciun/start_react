import { cn } from "@shared/utils/cn"

import type { TabsContentListProps } from "../model/types"

export const TabsContentList = ({ className, children, ...props }: TabsContentListProps) => {
    return (
        <div className={cn("mt-4", className)} {...props}>
            {children}
        </div>
    )
}
