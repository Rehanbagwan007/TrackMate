import { useRole, UserRole } from "@/contexts/RoleContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, GraduationCap, User, Users, Building2 } from "lucide-react";

export function RoleSwitcher() {
  const { role, setRole } = useRole();
  const navigate = useNavigate();

  const roles: { value: UserRole; label: string; icon: any; route: string }[] = [
    { value: 'student', label: 'Student', icon: GraduationCap, route: '/' },
    { value: 'faculty', label: 'Faculty', icon: User, route: '/faculty' },
    { value: 'hod', label: 'HOD', icon: Users, route: '/hod' },
    { value: 'admin', label: 'Admin', icon: Building2, route: '/admin' },
  ];

  const currentRole = roles.find(r => r.value === role);

  const handleRoleChange = (newRole: UserRole, route: string) => {
    setRole(newRole);
    navigate(route);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          {currentRole && <currentRole.icon className="h-4 w-4" />}
          {currentRole?.label}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Switch Role (Demo)</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {roles.map((r) => (
          <DropdownMenuItem
            key={r.value}
            onClick={() => handleRoleChange(r.value, r.route)}
            className="gap-2"
          >
            <r.icon className="h-4 w-4" />
            {r.label}
            {role === r.value && <span className="ml-auto text-xs">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
