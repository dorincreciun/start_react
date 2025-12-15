import { useState } from "react"

import { TabsContent } from "./tabs-content"
import { TabsContentList } from "./tabs-content-list"
import { TabsTrigger } from "./tabs-trigger"
import { TabsTriggerList } from "./tabs-trigger-list"
import { TabsContext } from "../model/context"
import type { TabsRootProps, TabsValue } from "../model/types"

const TabsRoot = ({
    defaultValue = "0",
    value: controlledValue,
    onValueChange,
    children,
}: TabsRootProps) => {
    const [internalValue, setInternalValue] = useState<TabsValue>(defaultValue)

    const activeValue = controlledValue ?? internalValue
    const isControlled = controlledValue !== undefined

    const changeTab = (newValue: TabsValue): void => {
        if (!isControlled) {
            setInternalValue(newValue)
        }
        onValueChange?.(newValue)
    }

    return (
        <TabsContext value={{ activeValue, changeTab }}>
            <div>{children}</div>
        </TabsContext>
    )
}

export const Tabs = {
    Root: TabsRoot,
    TriggerList: TabsTriggerList,
    Trigger: TabsTrigger,
    ContentList: TabsContentList,
    Content: TabsContent,
} as const
