import type { RouteObject } from "react-router-dom";
import Dashboard from "../../pages/Company/Dashboard";
import BusinessInfo from "../../pages/company/BusinessInfo";

export const CompanyRouter: RouteObject[] = [
  { path:"/company", element:<Dashboard/> },
  {path:"/company/info", element:<BusinessInfo/>}
];