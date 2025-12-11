import type { RouteObject } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";

export const HomeRouter: RouteObject[] = [
  { path:"/", element:<Dashboard/> }
];