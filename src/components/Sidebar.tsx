import { Home, Book, Calendar, FileText, Settings, LogOut, Users, BarChart2, Folder, Edit2, Code, File, Presentation, GitBranch, Cpu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useRole } from "../contexts/RoleContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const studentLinks = [
  { to: "/student", icon: <Home className="h-5 w-5" />, label: "Dashboard" },
  { to: "/attendance", icon: <Calendar className="h-5 w-5" />, label: "Attendance" },
  { to: "/assignments", icon: <FileText className="h-5 w-5" />, label: "Assignments" },
  { to: "/grades", icon: <BarChart2 className="h-5 w-5" />, label: "Grades" },
  { to: "/notes", icon: <Book className="h-5 w-5" />, label: "Notes" },
];

const facultyLinks = [
  { to: "/faculty", icon: <Home className="h-5 w-5" />, label: "Dashboard" },
  { to: "/faculty/my-classes", icon: <Users className="h-5 w-5" />, label: "My Classes" },
  { to: "/faculty/attendance", icon: <Calendar className="h-5 w-5" />, label: "Attendance" },
  { to: "/faculty/assignments", icon: <FileText className="h-5 w-5" />, label: "Assignments" },
  { to: "/faculty/materials", icon: <Folder className="h-5 w-5" />, label: "Materials" },
];

const editorLinks = [
    { to: "/editor/document", icon: <Edit2 className="h-5 w-5"/>, label: "Document Editor" },
    { to: "/editor/spreadsheet", icon: <File className="h-5 w-5"/>, label: "Spreadsheet" },
    { to: "/editor/presentation", icon: <Presentation className="h-5 w-5"/>, label: "Presentation" },
    { to: "/editor/code", icon: <Code className="h-5 w-5"/>, label: "Code Editor" },
];

const Sidebar = () => {
  const { role } = useRole();
  
  const links = role === 'student' ? studentLinks : facultyLinks;

  return (
    <aside className="w-64 min-h-screen flex flex-col p-4 bg-card border-r fixed">
      <div className="flex items-center gap-3 mb-8">
        <GitBranch className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold">TrackMate</h1>
      </div>

      <nav className="flex flex-col gap-2 mb-8">
          <p className="text-xs text-muted-foreground uppercase mb-2">Navigation</p>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to.split("/").length === 2} // More robust check for parent routes
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>

      <nav className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground uppercase mb-2">Editors</p>
           {editorLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`
            }
          >
            {link.icon}
            {link.label}
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

export default Sidebar;
