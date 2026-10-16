import { Routes as ReactRouterRoutes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import DashboardLayout from "../layouts/dashboard-layout";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/dashboard";
import ExplorePage from "../pages/explore";
import MapPage from "../pages/map";
import NotFoundPage from "../pages/NotFoundPage";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/map" element={<MapPage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
