import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
//import { RoleSwitcher } from "@/components/RoleSwitcher";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border/50 bg-card/30 backdrop-blur-md sticky top-0 z-40">
            <div className="h-full px-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-accent rounded-xl transition-colors" />
                <h1 className="text-xl font-bold text-foreground tracking-tight">TrackMate</h1>
              </div>
             {  /* <RoleSwitcher /> */ }
            </div>
          </header>
          <main className="flex-1 p-6 bg-background">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}