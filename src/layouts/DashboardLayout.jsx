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

      <SidebarInset className="flex flex-col flex-1 h-full bg-background w-full min-w-0 overflow-hidden px-15 ">
        <header className="flex h-10 shrink-0 items-center px-6 bg-card w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium text-foreground text-base">
                  {title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* Scrollable content area */}
        <div className="flex flex-1 flex-col w-full h-full min-w-0 overflow-y-auto p-6  ">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
