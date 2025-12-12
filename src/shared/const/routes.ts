export const ROUTES = {
    DEFAULT: "/",
    FALLBACK: "*",

    CABINET: "/cabinet",
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
