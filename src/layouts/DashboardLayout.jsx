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
        <header className="flex h-10 shrink-0 items-center p-4 mt-3 bg-card w-full ">
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

        <div className="flex-1 w-full overflow-y-auto ">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
