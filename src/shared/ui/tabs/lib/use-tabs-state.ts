import { useContext } from "react"

import { TabsContext } from "../model/context"
import type { TabsContextValue } from "../model/types"

export const useTabsContext = (): TabsContextValue => {
    const context = useContext(TabsContext)

    if (!context) {
        throw new Error("useTabsContext trebuie folosit în interiorul Tabs.Root")
    }

    return context
}
