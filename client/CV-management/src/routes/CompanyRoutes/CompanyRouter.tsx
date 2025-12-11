import type { RouteObject } from 'react-router-dom';
import Dashboard from '../../pages/Company/Dashboard';
import CandidateDetail from '../../pages/Company/CandidateDetail';

export const CompanyRouter: RouteObject[] = [
  {
    path: '/company',
    element: <Dashboard />,
  },
  {
    path: '/company/candidate/:id',
    element: <CandidateDetail />,
  },
];
