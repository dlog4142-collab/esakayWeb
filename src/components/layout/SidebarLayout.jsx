import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export default function SidebarLayout() {
  return (
    // EVERYTHING that uses sidebar components must be wrapped inside SidebarProvider
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* AppSidebar is inside SidebarProvider -> Fixes the error! */}
        <AppSidebar />

        {/* Main Workspace Area */}
        <main className="flex-1 flex flex-col bg-background min-w-0">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-background z-10">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <span className="font-semibold text-sm">
              eSakay Management Portal
            </span>
          </header>

          <div className="p-6 flex-1">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
