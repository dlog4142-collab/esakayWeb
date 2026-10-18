import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChevronRightIcon,
  DashboardSquare01Icon,
  Logout03Icon,
  UserListIcon,
  Motorbike01Icon,
  Settings01Icon,
  UnfoldMoreIcon,
  UserCircleIcon,
  SecurityWarningIcon,
  UserGroup03Icon,
} from "@hugeicons/core-free-icons";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authApi } from "@/api/authApi";

const navItems = [
  {
    title: "Dashboard",
    url: "/playground",
    icon: DashboardSquare01Icon,
    isActive: true,
    items: [
      { title: "Analytics", url: "/dashboard/analytics" },
      { title: "Invoices", url: "/dashboard/dashboard" },
    ],
  },
  {
    title: "Map",
    url: "/map",
    icon: UserGroup03Icon,
    isActive: true,
    items: [
      { title: "Live Map", url: "/dashboard/analytics" },
      { title: "Explore", url: "/dashboard/explore" },
    ],
  },
  {
    title: "Customer",
    url: "/customer",
    icon: UserListIcon,
  },

  {
    title: "User",
    url: "/user",
    icon: UserGroup03Icon,
    isActive: true,
    items: [
      { title: "Profile", url: "/dashboard/analytics" },
      { title: "List", url: "/dashboard/analytics" },
    ],
  },
  {
    title: "Authentication",
    url: "/authentication",
    icon: SecurityWarningIcon,
    isActive: true,
    items: [
      { title: "Register", url: "/dashboard/analytics" },
      { title: "Forgot Password", url: "/dashboard/analytics" },
      { title: "Reset Password", url: "/dashboard/analytics" },
    ],
  },
];

export function AppSidebar(props) {
  const location = useLocation();
  const navigate = useNavigate();

  // Track open states for items with sub-menus safely via React state
  const [openItems, setOpenItems] = useState({
    Playground: true,
  });

  const toggleItem = (title) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleLogout = async () => {
    await authApi.logout();
    navigate("/login");
  };

  return (
    <Sidebar collapsible="none">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="eSakay">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <HugeiconsIcon icon={Motorbike01Icon} strokeWidth={2} />
              </div>
              <div className="grid flex-1 text-left text-xs leading-tight">
                <span className="truncate font-medium">Acme Inc</span>
                <span className="truncate text-muted-foreground">
                  Enterprise
                </span>
              </div>
              <HugeiconsIcon
                icon={UnfoldMoreIcon}
                strokeWidth={2}
                className="ml-auto size-4"
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const hasSubItems = item.items && item.items.length > 0;
                const isOpen = openItems[item.title];

                if (!hasSubItems) {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        render={<NavLink to={item.url} />}
                        isActive={location.pathname === item.url}
                        tooltip={item.title}
                      >
                        <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      onClick={() => toggleItem(item.title)}
                      tooltip={item.title}
                    >
                      <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                      <span>{item.title}</span>
                      <HugeiconsIcon
                        icon={ChevronRightIcon}
                        strokeWidth={2}
                        className={`ml-auto transition-transform duration-200 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </SidebarMenuButton>

                    {isOpen && (
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              render={<NavLink to={subItem.url} />}
                              isActive={location.pathname === subItem.url}
                            >
                              <span>{subItem.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground"
                  />
                }
              >
                <HugeiconsIcon icon={UserCircleIcon} strokeWidth={2} />
                <div className="grid flex-1 text-left text-xs leading-tight">
                  <span className="truncate font-medium">Admin</span>
                  <span className="truncate text-muted-foreground">
                    hello@example.com
                  </span>
                </div>
                <HugeiconsIcon
                  icon={UnfoldMoreIcon}
                  strokeWidth={2}
                  className="ml-auto"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="end" className="min-w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <HugeiconsIcon icon={UserCircleIcon} strokeWidth={2} />
                  User Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings/account")}>
                  <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onClick={handleLogout}>
                  <HugeiconsIcon icon={Logout03Icon} strokeWidth={2} />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
