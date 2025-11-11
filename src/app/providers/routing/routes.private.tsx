import type { RouteObject } from "react-router";

import { RouteGuard } from "@app/providers/routing/RouteGuard";

export const RoutesPrivate: RouteObject[] = [
  { element: <RouteGuard />, children: [] },
];
