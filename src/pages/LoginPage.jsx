import { useNavigate } from 'react-router-dom';
import { authApi } from '../api/authApi';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Simulate login call
    const res = await authApi.login({ email: 'test@example.com', password: 'password' });
    localStorage.setItem('auth_token', res.token);
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Simulate Login</button>
    </div>
  );
}
