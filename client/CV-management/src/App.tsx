import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import ProfileManagement from './pages/profileManagement/ProfileManagement';
import CompanyDashboard from './pages/Company/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang mặc định - Dashboard */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Trang Profile Management */}
        <Route path="/profile" element={<ProfileManagement />} />
        
        {/* Trang Company Dashboard */}
        <Route path="/company" element={<CompanyDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
