import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoleProvider } from "./contexts/RoleContext";
import Index from "./pages/Index";
import { AuthPage } from "./pages/Auth";
import { AttendancePage } from "./pages/AttendancePage";
import AssignmentsPage from "./pages/AssignmentsPage";
import ProfilePage from "./pages/ProfilePage";
import NotesPage from "./pages/NotesPage";
import CreateNotePage from "./pages/CreateNotePage";
import GradesPage from "./pages/GradesPage";
import { DocumentEditor } from "./pages/DocumentEditor";
import { SpreadsheetEditor } from "./pages/SpreadsheetEditor";
import { PresentationEditor } from "./pages/PresentationEditor";
import { CodeEditor } from "./pages/CodeEditor";
import AdminDashboard from "./pages/AdminDashboard";
import HODDashboard from "./pages/HODDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import MyClassesPage from "./pages/MyClassesPage";
import FacultyAttendancePage from "./pages/FacultyAttendancePage";
import FacultyAssignmentsPage from "./pages/FacultyAssignmentsPage";
import MaterialsPage from "./pages/MaterialsPage";
import QRScannerPage from "./pages/QRScannerPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RoleProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/attendance" element={<AttendancePage />} />
              <Route path="/assignments" element={<AssignmentsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/notes" element={<NotesPage />} />
              <Route path="/notes/create" element={<CreateNotePage />} />
              <Route path="/grades" element={<GradesPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/hod" element={<HODDashboard />} />
              <Route path="/faculty" element={<FacultyDashboard />} />
              <Route path="/faculty/my-classes" element={<MyClassesPage />} />
              <Route path="/faculty/attendance" element={<FacultyAttendancePage />} />
              <Route path="/faculty/assignments" element={<FacultyAssignmentsPage />} />
              <Route path="/faculty/materials" element={<MaterialsPage />} />
              <Route path="/student" element={<StudentDashboard />} />
              <Route path="/scanner" element={<QRScannerPage />} />
              <Route path="/editor/document" element={<DocumentEditor />} />
              <Route path="/editor/spreadsheet" element={<SpreadsheetEditor />} />
              <Route path="/editor/presentation" element={<PresentationEditor />} />
              <Route path="/editor/code" element={<CodeEditor />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </RoleProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
