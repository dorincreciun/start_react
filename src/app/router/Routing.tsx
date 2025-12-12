import { type IndexRouteObject, type NonIndexRouteObject, useRoutes } from "react-router"

import { DefaultPage } from "@pages/default"
import { FallBackPage } from "@pages/fallback"

import { type AppRoute, ROUTES } from "@shared/const/routes"

type AppNonIndexRouteObject = Omit<NonIndexRouteObject, "path" | "children"> & {
    path: AppRoute
    children?: AppRouteObject[]
}

type AppIndexRouteObject = Omit<IndexRouteObject, "children"> & {
    index: true
    children?: never
}

export type AppRouteObject = AppNonIndexRouteObject | AppIndexRouteObject

const PublicRoutes: AppRouteObject[] = [
    { path: ROUTES.FALLBACK, element: <FallBackPage /> },
    { path: ROUTES.DEFAULT, element: <DefaultPage /> },
]

const PrivateRoutes: AppRouteObject[] = [{ path: ROUTES.CABINET, element: <div>Cabinet</div> }]

export const Routing = () => {
    return useRoutes([...PublicRoutes, ...PrivateRoutes])
}
