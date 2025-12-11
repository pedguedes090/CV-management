import { useRoutes } from "react-router-dom";
import { adminRoutes } from "./routes/AdminRouter/adminRouter";
import { CompanyRouter} from './routes/CompanyRoutes/CompanyRouter';
import { HomeRouter } from "./routes/Dashboard/HomeRouter";
import { CandidatesRouter } from "./routes/CandidatesRouter/CandidatesRouter";
//import { userRoutes } from "./routers/userRouter";
const AppRoutes = () => {
  //const routes = [...userRoutes, ...adminRoutes]; 
  const routes = [...adminRoutes, ...CompanyRouter, ...HomeRouter, ...CandidatesRouter]
  return useRoutes(routes);
};

export default function App() {
  return (
      <AppRoutes />
  );
}