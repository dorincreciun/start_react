import { cva } from "class-variance-authority"

export const buttonStyles = cva(
    [
        "inline-flex items-center justify-center whitespace-nowrap",
        "rounded-md font-medium",
        "ring-offset-background",
        "transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
    ],
    {
        variants: {
            size: {
                sm: "h-8 px-3 text-xs gap-1.5",
                md: "h-10 px-4 text-sm gap-2",
                lg: "h-12 px-6 text-base gap-3",
            },
            variant: {
                default: [
                    "bg-white border border-slate-200 text-slate-500",
                    "hover:bg-slate-50",
                    "focus-visible:ring-slate-400",
                ],
            },
        },
        defaultVariants: {
            size: "md",
            variant: "default",
        },
    },
)

export const badgeStyles =
    "inline-flex absolute -top-2 -right-2 h-4.5 min-w-[18px] items-center justify-center rounded-full bg-slate-100 px-1.5 text-[10px] font-bold text-slate-600 border border-slate-200/50"
