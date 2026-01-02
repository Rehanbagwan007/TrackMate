import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import AdminDashboard from "@/pages/AdminDashboard";
import HODDashboard from "@/pages/HODDashboard";
import FacultyDashboard from "@/pages/FacultyDashboard";
import StudentDashboard from "@/pages/StudentDashboard";
import { useAuthStore } from "@/lib/useAuthStore";
import { useEffect } from "react";

function App() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const isHydrated = useAuthStore((state) => state._hydrated);

  useEffect(() => {
    // Manually trigger rehydration on app start
    useAuthStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    // checkAuth is called only after the store is hydrated
    if (isHydrated) {
      checkAuth();
    }
  }, [isHydrated, checkAuth]);

  // Render nothing or a loading spinner until hydration is complete
  if (!isHydrated) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {
          !token ? (
            // If not authenticated, all routes lead to login
            <Route path="*" element={<Navigate to="/login" />} />
          ) : (
            // If authenticated, setup routes based on role
            <>
              <Route
                path="/"
                element={
                  user?.role === 'INSTITUTE_ADMIN' ? (
                    <Navigate to="/admin" />
                  ) : user?.role === 'HOD' ? (
                    <Navigate to="/hod" />
                  ) : user?.role === 'FACULTY' ? (
                    <Navigate to="/faculty" />
                  ) : user?.role === 'STUDENT' ? (
                    <Navigate to="/student" />
                  ) : (
                    <Navigate to="/login" /> // Fallback
                  )
                }
              />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/hod" element={<HODDashboard />} />
              <Route path="/faculty" element={<FacultyDashboard />} />
              <Route path="/student" element={<StudentDashboard />} />
              {/* Redirect any other path to the dashboard */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
