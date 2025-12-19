import { Home, Book, Calendar, FileText, Settings, LogOut, Users, BarChart2, Folder, Edit2, Code, File, Presentation, GitBranch, Cpu, LayoutDashboard, BookOpen, ClipboardCheck, Award, QrCode } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useRole } from "../contexts/RoleContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// Role-based navigation items
const getNavigationItems = (role: string) => {
  const baseItems = {
    student: [
      { title: "Dashboard", url: "/student", icon: LayoutDashboard },
      { title: "Attendance", url: "/attendance", icon: Calendar },
      { title: "Assignments", url: "/assignments", icon: BookOpen },
      { title: "Notes", url: "/notes", icon: FileText },
      { title: "QR Scanner", url: "/scanner", icon: QrCode },
      { title: "Grades", url: "/grades", icon: Award },
    ],
    faculty: [
      { title: "Dashboard", url: "/faculty", icon: LayoutDashboard },
      { title: "My Classes", url: "/faculty/my-classes", icon: BookOpen },
      { title: "Attendance", url: "/faculty/attendance", icon: Calendar },
      { title: "Assignments", url: "/faculty/assignments", icon: ClipboardCheck },
      { title: "Materials", url: "/faculty/materials", icon: FileText },
    ],
    hod: [
      { title: "Dashboard", url: "/hod", icon: LayoutDashboard },
      { title: "Faculty", url: "/hod/faculty", icon: Users },
    ],
    admin: [
        { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
    ]
  };

  return baseItems[role] || [];
};

const editorLinks = [
    { title: "Document Editor", url: "/editor/document", icon: Edit2 },
    { title: "Spreadsheet", url: "/editor/spreadsheet", icon: File },
    { title: "Presentation", url: "/editor/presentation", icon: Presentation },
    { title: "Code Editor", url: "/editor/code", icon: Code },
];

const AppSidebar = () => {
  const { role } = useRole();
  const navigationItems = getNavigationItems(role);

  return (
    <aside className="w-64 min-h-screen flex flex-col p-4 bg-card border-r fixed">
      <div className="flex items-center gap-3 mb-8">
        <GitBranch className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold">TrackMate</h1>
      </div>

      <nav className="flex flex-col gap-2 mb-8">
          <p className="text-xs text-muted-foreground uppercase mb-2">Navigation</p>
        {navigationItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            end={item.url === '/faculty' || item.url === '/student' || item.url === '/hod' || item.url === '/admin'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            {item.title}
          </NavLink>
        ))}
      </nav>
      
      <nav className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground uppercase mb-2">Editors</p>
           {editorLinks.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            {item.title}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto">
          <div className="flex items-center gap-3 p-3 rounded-md hover:bg-muted cursor-pointer">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-muted-foreground">{role ? role.toUpperCase() : "NONE"}</p>
            </div>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:bg-muted cursor-pointer mt-2">
          <LogOut className="h-5 w-5" />
          Logout
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
