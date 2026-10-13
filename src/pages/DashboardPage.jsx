import { useNavigate } from 'react-router-dom';
import { authApi } from '../api/authApi';

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    authApi.logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Dashboard (Protected Route)</h2>
      <p>You can only see this if you have a valid auth token!</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
