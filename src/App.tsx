import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { AuthPage } from "./pages/Auth";
import { AttendancePage } from "./pages/AttendancePage";
import { DocumentEditor } from "./pages/DocumentEditor";
import { SpreadsheetEditor } from "./pages/SpreadsheetEditor";
import { PresentationEditor } from "./pages/PresentationEditor";
import { CodeEditor } from "./pages/CodeEditor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/editor/document" element={<DocumentEditor />} />
          <Route path="/editor/spreadsheet" element={<SpreadsheetEditor />} />
          <Route path="/editor/presentation" element={<PresentationEditor />} />
          <Route path="/editor/code" element={<CodeEditor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
