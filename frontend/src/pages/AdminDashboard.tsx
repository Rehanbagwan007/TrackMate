import { Layout } from "@/components/Layout";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Building2, TrendingUp, Bell, Plus, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useEnrollmentStore } from "@/lib/enrollmentStore";

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

const AdminDashboard = () => {
  const [showCreateDeptForm, setShowCreateDeptForm] = useState(false);
  const [departmentName, setDepartmentName] = useState('');
  const [departmentCode, setDepartmentCode] = useState('');
  const [hodName, setHodName] = useState('');
  const [hodEmail, setHodEmail] = useState('');
  const [hodPassword, setHodPassword] = useState('');
  const enrollment = useEnrollmentStore();

  useEffect(() => {
    if (!enrollment.loading) enrollment.loadAll();
  }, []);

  const stats = [
    {
      title: "Total Departments",
      value: (enrollment.departments?.length || 0).toString(),
      subtitle: "Active",
      icon: <Building2 className="h-5 w-5" />,
      variant: "primary" as const,
    },
    {
      title: "Total Faculty",
      value: (enrollment.faculty?.length || 0).toString(),
      subtitle: "Across departments",
      icon: <Users className="h-5 w-5" />,
      variant: "success" as const,
    },
    {
      title: "Total Students",
      value: (enrollment.students?.length || 0).toString(),
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

  const handleCreateDepartmentAndHod = async () => {
    try {
      const dept = await enrollment.createDepartment({ name: departmentName, code: departmentCode });
      await enrollment.createHod({ name: hodName, email: hodEmail, password: hodPassword, departmentId: dept.id });
      // Reset form and hide
      setDepartmentName('');
      setDepartmentCode('');
      setHodName('');
      setHodEmail('');
      setHodPassword('');
      setShowCreateDeptForm(false);
    } catch (err: any) {
      alert(err.message || 'Failed');
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground shadow-elevated">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-2">Institute Admin Dashboard</h1>
            <p className="text-primary-foreground/90 text-lg">Manage your institution efficiently</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span>Departments Overview</span>
                </CardTitle>
                <Button variant="outline" size="sm" onClick={() => setShowCreateDeptForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  New Department
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {showCreateDeptForm && (
                  <div className="p-4 rounded-lg border border-border bg-muted/50">
                    <h4 className="font-semibold text-lg mb-4">Enroll New Department & HOD</h4>
                    <div className="space-y-4">
                      <input className="w-full p-2 border rounded" placeholder="Department Name" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} />
                      <input className="w-full p-2 border rounded" placeholder="Department Code" value={departmentCode} onChange={(e) => setDepartmentCode(e.target.value)} />
                      <input className="w-full p-2 border rounded" placeholder="HOD Name" value={hodName} onChange={(e) => setHodName(e.target.value)} />
                      <input className="w-full p-2 border rounded" placeholder="HOD Email" value={hodEmail} onChange={(e) => setHodEmail(e.target.value)} />
                      <input className="w-full p-2 border rounded" placeholder="HOD Password" type="password" value={hodPassword} onChange={(e) => setHodPassword(e.target.value)} />
                      <div className="flex gap-2">
                        <Button onClick={handleCreateDepartmentAndHod}>Create</Button>
                        <Button variant="ghost" onClick={() => setShowCreateDeptForm(false)}>Cancel</Button>
                      </div>
                    </div>
                  </div>
                )}

                {enrollment.departments.map((dept: any, index: number) => (
                  <div key={index} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{dept.name}</h4>
                        <p className="text-sm text-muted-foreground">HOD: {dept.hod?.name || 'N/A'}</p>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{dept.faculty?.length || 0} Faculty</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <span>{dept.students?.length || 0} Students</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

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
