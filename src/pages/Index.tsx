import { useRole } from "./contexts/RoleContext";
import AdminDashboard from "./pages/AdminDashboard";
import HODDashboard from "./pages/HODDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import StudentDashboard from "./pages/StudentDashboard";

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