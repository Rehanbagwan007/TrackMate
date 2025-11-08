import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useRole } from "@/contexts/RoleContext";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  FileText,
  Users,
  Settings,
  LogOut,
  User,
  QrCode,
  Award,
  FileSpreadsheet,
  Presentation,
  Code,
  Building2,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// Mock user data - in real app this would come from auth context
const user = {
  name: "John Doe",
  email: "john@example.com",
  role: "STUDENT",
  department: "Computer Science",
  avatar: "",
};

// Role-based navigation items
const getNavigationItems = (role: string) => {
  const baseItems = {
    student: [
      { title: "Dashboard", url: "/", icon: LayoutDashboard },
      { title: "Attendance", url: "/attendance", icon: Calendar },
      { title: "Assignments", url: "/assignments", icon: BookOpen },
      { title: "Notes", url: "/notes", icon: FileText },
      { title: "QR Scanner", url: "/scanner", icon: QrCode },
      { title: "Grades", url: "/grades", icon: Award },
    ],
    faculty: [
      { title: "Dashboard", url: "/faculty", icon: LayoutDashboard },
      { title: "My Classes", url: "/faculty", icon: BookOpen },
      { title: "Attendance", url: "/attendance", icon: Calendar },
      { title: "Assignments", url: "/faculty", icon: ClipboardCheck },
      { title: "Materials", url: "/materials", icon: FileText },
    ],
    hod: [
      { title: "Dashboard", url: "/hod", icon: LayoutDashboard },
      { title: "Faculty", url: "/hod", icon: Users },
      { title: "Students", url: "/hod", icon: GraduationCap },
      { title: "Reports", url: "/reports", icon: FileText },
      { title: "Announcements", url: "/announcements", icon: Award },
    ],
    admin: [
      { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
      { title: "Departments", url: "/admin", icon: Building2 },
      { title: "Faculty", url: "/admin", icon: Users },
      { title: "Students", url: "/admin", icon: GraduationCap },
      { title: "Analytics", url: "/analytics", icon: Award },
    ],
  };

  return baseItems[role as keyof typeof baseItems] || baseItems.student;
};

const editorItems = [
  { title: "Document Editor", url: "/editor/document", icon: FileText },
  { title: "Spreadsheet", url: "/editor/spreadsheet", icon: FileSpreadsheet },
  { title: "Presentation", url: "/editor/presentation", icon: Presentation },
  { title: "Code Editor", url: "/editor/code", icon: Code },
];

const userItems = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { role } = useRole();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const navigationItems = getNavigationItems(role);

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary rounded-lg">
            <BookOpen className="h-6 w-6 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-semibold text-foreground">EduClass</h2>
              <p className="text-sm text-muted-foreground">Smart Classroom</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={`flex items-center space-x-3 ${
                        isActive(item.url)
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Editors
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {editorItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={`flex items-center space-x-3 ${
                        isActive(item.url)
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={`flex items-center space-x-3 ${
                        isActive(item.url)
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {!collapsed && (
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground uppercase">{user.role}</p>
                <p className="text-xs text-muted-foreground truncate">{user.department}</p>
              </div>
            </div>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
        {collapsed && (
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}