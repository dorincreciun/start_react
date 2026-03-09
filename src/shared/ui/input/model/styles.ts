import { cva } from "class-variance-authority"

export const inputRootStyles = cva(
    [
        "flex items-center w-full rounded-md border border-slate-200 bg-white transition-all",
        "focus-within:ring-2 focus-within:ring-slate-400 focus-within:ring-offset-1 focus-within:border-slate-300",
        "has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none",
    ],
    {
        variants: {
            size: {
                sm: "h-8 gap-1.5 px-2",
                md: "h-10 gap-2 px-3",
                lg: "h-12 gap-3 px-4",
            },
        },
        defaultVariants: {
            size: "md",
        },
    },
)

export const inputFieldStyles =
    "w-full bg-transparent border-none p-0 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-0"
export const inputIconStyles = "flex items-center justify-center text-slate-400 shrink-0"
export const inputAddonStyles = "text-slate-400 text-sm font-medium select-none whitespace-nowrap"
