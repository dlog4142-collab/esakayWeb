import { Routes as ReactRouterRoutes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import LoginPage from "../pages/LoginPage";
import ExplorePage from "../pages/sidebars/ExplorePage";
import AnalyticsPage from "../pages/sidebars/AnalyticsPage";
import UserProfilePage from "../pages/sidebars/User/UserProfilePage";
import UserListsPage from "../pages/sidebars/User/UserListsPage";
import MapPage from "../pages/sidebars/MapPage";
import NotFoundPage from "../pages/NotFoundPage";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="dashboard">
            <Route index element={<AnalyticsPage />} />
            <Route path="explore" element={<ExplorePage />} />
          </Route>

          <Route path="user">
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="lists" element={<UserListsPage />} />
          </Route>

          <Route path="map" element={<MapPage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
