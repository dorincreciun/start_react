import { createContext } from "react"

import type { DropdownContextProps } from "./types"

export const DropdownContext = createContext<DropdownContextProps | null>(null)
