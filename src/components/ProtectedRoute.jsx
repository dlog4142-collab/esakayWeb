import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  //const isAuthenticated = Boolean(localStorage.getItem('auth_token'));
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
