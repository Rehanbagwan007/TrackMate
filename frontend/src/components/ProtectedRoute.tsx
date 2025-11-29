import { useAuthStore } from "@/store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
