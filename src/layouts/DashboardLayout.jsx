import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import Header from "./Header";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const pageTitles = {
  "/dashboard": "Analytics",
  "/explore": "Explore",
  "/map": "Live Map",
  "/customer": "Customer",
  "/user/lists": "User Lists",
  "/user/profile": "User Profile",
};

export default function DashboardLayout() {
  const { pathname } = useLocation();
  const title = pageTitles[pathname] ?? "eSakay";

  return (
    <SidebarProvider className="flex h-screen w-full overflow-hidden">
      <AppSidebar />

      <SidebarInset className="flex flex-col flex-1 min-h-screen bg-background w-full min-w-0">
        {/* Enhanced Header */}
        <Header />

        {/* Main Content Area */}
        <div className="flex-1 w-full overflow-y-auto p-10 bg-gray-50">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<a href="/" />}>
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="bg-white rounded-sm p-6 w-full">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
