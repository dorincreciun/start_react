import { Loader2 } from "lucide-react"

import type { ButtonSpinnerProps } from "../model/types"

export const ButtonSpinner = ({ isLoading }: ButtonSpinnerProps) => {
    if (!isLoading) return null

    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-slate-500" />
        </div>
    )
}
