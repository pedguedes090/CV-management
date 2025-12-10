import type { RouteObject } from "react-router-dom";
import Dashboard from "../../pages/Company/Dashboard";

export const CompanyRouter: RouteObject[] = [
  { path:"/", element:<Dashboard/> }
];