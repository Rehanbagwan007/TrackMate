import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthPage } from "./pages/Auth";
import { AttendancePage } from "./pages/AttendancePage";
import { DocumentEditor } from "./pages/DocumentEditor";
import { SpreadsheetEditor } from "./pages/SpreadsheetEditor";
import { PresentationEditor } from "./pages/PresentationEditor";
import { CodeEditor } from "./pages/CodeEditor";
import AdminDashboard from "./pages/AdminDashboard";
import HODDashboard from "./pages/HODDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./components/MainLayout";
import DashboardRedirect from "./components/DashboardRedirect";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<DashboardRedirect />} />
                <Route path="/attendance" element={<AttendancePage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/hod" element={<HODDashboard />} />
                <Route path="/faculty" element={<FacultyDashboard />} />
                <Route
                  path="/editor/document"
                  element={<DocumentEditor />}
                />
                <Route
                  path="/editor/spreadsheet"
                  element={<SpreadsheetEditor />}
                />
                <Route
                  path="/editor/presentation"
                  element={<PresentationEditor />}
                />
                <Route path="/editor/code" element={<CodeEditor />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
