import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import { FounderAuth } from './components/FounderAuth';
import { FounderDashboard } from './pages/FounderDashboard';
import { Applications } from './pages/Applications';
import { ActiveInstitutes } from './pages/ActiveInstitutes';
import { AppSidebar } from './components/AppSidebar';
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <>
        <FounderAuth onAuthenticated={() => setIsAuthenticated(true)} />
        <Toaster />
      </>
    );
  }

  return (
    <Router>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<FounderDashboard />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/institutes" element={<ActiveInstitutes />} />
            </Routes>
          </main>
        </div>
        <Toaster />
      </SidebarProvider>
    </Router>
  );
}

export default App;