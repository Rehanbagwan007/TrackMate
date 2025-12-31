import { Layout } from "@/components/Layout";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Building2, TrendingUp, Bell, Plus, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Departments",
    value: "12",
    subtitle: "Active",
    icon: <Building2 className="h-5 w-5" />,
    variant: "primary" as const,
  },
  {
    title: "Total Faculty",
    value: "156",
    subtitle: "Across departments",
    icon: <Users className="h-5 w-5" />,
    variant: "success" as const,
  },
  {
    title: "Total Students",
    value: "2,847",
    subtitle: "Enrolled",
    icon: <GraduationCap className="h-5 w-5" />,
    variant: "default" as const,
  },
  {
    title: "Avg Attendance",
    value: "86%",
    subtitle: "This month",
    icon: <TrendingUp className="h-5 w-5" />,
    variant: "warning" as const,
  },
];

const recentAnnouncements = [
  {
    title: "Winter Break Schedule",
    department: "All Departments",
    date: "2 days ago",
    priority: "high",
  },
  {
    title: "Faculty Meeting - End of Semester",
    department: "Administration",
    date: "5 days ago",
    priority: "medium",
  },
  {
    title: "New Lab Equipment Installed",
    department: "Computer Science",
    date: "1 week ago",
    priority: "low",
  },
];

const departments = [
  { name: "Computer Science", hod: "Dr. Sarah Johnson", faculty: 24, students: 456 },
  { name: "Mechanical Engineering", hod: "Prof. Michael Chen", faculty: 18, students: 387 },
  { name: "Electrical Engineering", hod: "Dr. Robert Smith", faculty: 21, students: 412 },
  { name: "Civil Engineering", hod: "Prof. Emily Davis", faculty: 16, students: 298 },
];

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground shadow-elevated">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-2">Institute Admin Dashboard</h1>
            <p className="text-primary-foreground/90 text-lg">Manage your institution efficiently</p>
            <div className="flex items-center space-x-4 mt-4">
              <Button variant="secondary" size="sm" className="gap-2">
                <UserPlus className="h-4 w-4" />
                Add Faculty
              </Button>
              <Button variant="secondary" size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                New Announcement
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Departments Overview */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span>Departments Overview</span>
                </CardTitle>
                <Button variant="outline" size="sm">Manage All</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{dept.name}</h4>
                        <p className="text-sm text-muted-foreground">HOD: {dept.hod}</p>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{dept.faculty} Faculty</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <span>{dept.students} Students</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Announcements */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <span>Announcements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAnnouncements.map((announcement, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{announcement.title}</h4>
                      <Badge variant={announcement.priority === "high" ? "destructive" : announcement.priority === "medium" ? "default" : "secondary"}>
                        {announcement.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{announcement.department}</p>
                    <p className="text-xs text-muted-foreground">{announcement.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
