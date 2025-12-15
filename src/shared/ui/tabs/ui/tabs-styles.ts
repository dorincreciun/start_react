import { cva } from "class-variance-authority"

export const tabsTriggerCva = cva(
    [
        // layout
        "inline-flex items-center justify-center whitespace-nowrap",
        "rounded-md px-4 py-2 text-sm",

        // motion
        "transition-colors",

        // focus (shadcn-like)
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",

        // disabled
        "disabled:pointer-events-none disabled:opacity-50",
    ],
    {
        variants: {
            state: {
                active: ["bg-muted/80", "text-foreground", "shadow-sm"],
                inactive: ["bg-muted/30", "text-muted-foreground", "hover:bg-muted/55"],
            },
        },
        defaultVariants: {
            state: "inactive",
        },
    },
)

export const tabsContentCva = cva(
    [
        // spacing + anim
        "mt-3",
        "animate-in fade-in-50 duration-200",

        // focus
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    ],
    {
        variants: {
            state: {
                active: "block",
                inactive: "hidden",
            },
        },
        defaultVariants: {
            state: "active",
        },
    },
)
