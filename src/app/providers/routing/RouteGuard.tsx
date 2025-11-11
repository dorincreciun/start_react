import { Navigate, Outlet } from "react-router";

import { TRouter } from "@shared/const/react-router.const";

export const RouteGuard = () => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to={TRouter.DEFAULT} />;
  }

  return <Outlet />;
};
