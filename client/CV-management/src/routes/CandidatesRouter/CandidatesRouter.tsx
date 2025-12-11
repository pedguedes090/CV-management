import type { RouteObject } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Register  from "../../pages/Login/Register";
import ProfileManagement from "../../pages/profileManagement/ProfileManagement";
import JobHunting from "../../pages/Job/JobHunting"
import JobDetail from "../../pages/Job/JobDetail";
export const CandidatesRouter: RouteObject[] = [
  { path:"/login", element:<Login/> },
  { path:"/register", element:<Register/> },
  { path:"/profilemanagement", element:<ProfileManagement/> },
  { path:"/job", element:<JobHunting/> },
  { path:"/job/1", element:<JobDetail/> },
];