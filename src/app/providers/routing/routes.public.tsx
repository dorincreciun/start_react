import type {RouteObject} from "react-router";

import {DefaultPage} from "@pages/default/DefaultPage.tsx";
import {FallBackPage} from "@pages/fallback/FallBackPage.tsx";
import {TRouter} from "@shared/const/react-router.const.ts";

export const RoutesPublic: RouteObject[] = [
    {path: TRouter.DEFAULT, element: <DefaultPage />},
    {path: TRouter.FALLBACK, element: <FallBackPage />},
]