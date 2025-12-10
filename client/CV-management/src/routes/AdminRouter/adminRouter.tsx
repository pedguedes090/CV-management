import type { RouteObject } from "react-router-dom";
import AdminPage from "../../components/Admin/AdminHeader/AdminNavbar";

export const adminRoutes: RouteObject[] = [
  { path: "", element: <AdminPage /> }
];