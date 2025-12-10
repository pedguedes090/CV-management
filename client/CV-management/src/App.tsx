import { useRoutes } from "react-router-dom";
import { adminRoutes } from "./routes/AdminRouter/adminRouter";
//import { userRoutes } from "./routers/userRouter";

const AppRoutes = () => {
  //const routes = [...userRoutes, ...adminRoutes]; 
  const routes = adminRoutes
  return useRoutes(routes);
};

export default function App() {
  return (
      <AppRoutes />
  );
}