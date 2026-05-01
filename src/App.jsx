import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './services/AuthContext';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ChildProfile from './pages/ChildProfile/ChildProfile';
import Homework from './pages/Homework/Homework';
import Messages from './pages/Messages/Messages';
import Psychologist from './pages/Psychologist/Psychologist';
import Schedule from './pages/Schedule/Schedule';
import Notifications from './pages/Notifications/Notifications';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<ChildProfile />} />
        <Route path="homework" element={<Homework />} />
        <Route path="messages" element={<Messages />} />
        <Route path="psychologist" element={<Psychologist />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
