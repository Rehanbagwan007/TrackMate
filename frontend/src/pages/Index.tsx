import { useRole } from "@/contexts/RoleContext";
import AdminDashboard from "./AdminDashboard";
import HODDashboard from "./HODDashboard";
import FacultyDashboard from "./FacultyDashboard";
import StudentDashboard from "./StudentDashboard";

const Index = () => {
    const { role } = useRole();

    switch (role) {
        case "admin":
            return <AdminDashboard />;
        case "hod":
            return <HODDashboard />;
        case "faculty":
            return <FacultyDashboard />;
        case "student":
            return <StudentDashboard />;
        default:
            return <StudentDashboard />;
    }
}

export default Index;