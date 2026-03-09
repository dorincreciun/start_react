import { createContext, useContext } from "react"

export type InputSize = "sm" | "md" | "lg"

interface InputContextProps {
    size: InputSize
}

export const InputContext = createContext<InputContextProps | null>(null)

export const useInputContext = () => {
    const context = useContext(InputContext)
    if (!context) {
        throw new Error("Input sub-components must be used within <Input.Root>.")
    }
    return context
}
