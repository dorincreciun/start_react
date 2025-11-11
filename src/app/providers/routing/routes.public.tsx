import type { RouteObject } from "react-router";

import { TRouter } from "@shared/const/react-router.const";

import { DefaultPage } from "@pages/default/DefaultPage";
import { FallBackPage } from "@pages/fallback/FallBackPage";

export const RoutesPublic: RouteObject[] = [
  { path: TRouter.DEFAULT, element: <DefaultPage /> },
  { path: TRouter.FALLBACK, element: <FallBackPage /> },
];
