import { Routes as ReactRouterRoutes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AppSidebar from "../components/layout/AppSidebar";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      {/* Public Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes using AppSidebarLayout */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppSidebar />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route
            path="/explore"
            element={
              <div className="p-4 text-lg font-medium">Explore Page</div>
            }
          />
          <Route
            path="/map"
            element={
              <div className="p-4 text-lg font-medium">
                Live Tracking Map Page
              </div>
            }
          />
        </Route>
      </Route>

      {/* Redirect root to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* 404 Fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
