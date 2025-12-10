import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../pages/Company/Dashboard';

export default function CompanyRouter() {
  return (
    <Routes>
      <Route path="/company" element={<Dashboard />} />
    </Routes>
  );
}
