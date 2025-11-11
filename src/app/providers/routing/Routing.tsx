import { useRoutes } from "react-router";

import { RoutesPrivate } from "@app/providers/routing/routes.private.tsx";
import { RoutesPublic } from "@app/providers/routing/routes.public.tsx";

export const Routing = () => useRoutes([...RoutesPublic, ...RoutesPrivate]);
