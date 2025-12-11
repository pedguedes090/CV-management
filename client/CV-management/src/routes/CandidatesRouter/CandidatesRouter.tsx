import type { RouteObject } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Register  from "../../pages/Login/Register";
import ProfileManagement from "../../pages/profileManagement/ProfileManagement";
export const CandidatesRouter: RouteObject[] = [
  { path:"/login", element:<Login/> },
  { path:"/register", element:<Register/> },
  { path:"/profilemanagement", element:<ProfileManagement/> }
];