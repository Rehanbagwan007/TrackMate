import { useAuthStore } from "@/store";
import { Navigate } from "react-router-dom";

const DashboardRedirect = () => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  switch (user.role.toLowerCase()) {
    case "admin":
      return <Navigate to="/admin" />;
    case "hod":
      return <Navigate to="/hod" />;
    case "faculty":
      return <Navigate to="/faculty" />;
    case "student":
      return <Navigate to="/student" />;
    default:
      return <Navigate to="/auth" />;
  }
};

export default DashboardRedirect;
