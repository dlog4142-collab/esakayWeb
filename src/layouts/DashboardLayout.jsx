import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/explore": "Explore",
  "/map": "Live Map",
  "/user/lists": "User Lists",
  "/user/profile": "User Profile",
};

export default function DashboardLayout() {
  const { pathname } = useLocation();
  const title = pageTitles[pathname] ?? "eSakay";

  return (
    <SidebarProvider className="flex h-screen w-full overflow-hidden">
      <AppSidebar />

      <SidebarInset className="flex flex-col flex-1 h-full bg-background w-full min-w-0 overflow-hidden">
        <div className="flex-1 w-full overflow-y-auto px-5">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
