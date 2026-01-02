import { Layout } from "@/components/Layout";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen, TrendingUp, Bell, ClipboardList } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Department Faculty",
    value: "24",
    subtitle: "Active",
    icon: <Users className="h-5 w-5" />,
    variant: "primary" as const,
  },
  {
    title: "Total Students",
    value: "456",
    subtitle: "Enrolled",
    icon: <GraduationCap className="h-5 w-5" />,
    variant: "success" as const,
  },
  {
    title: "Active Courses",
    value: "18",
    subtitle: "This semester",
    icon: <BookOpen className="h-5 w-5" />,
    variant: "default" as const,
  },
  {
    title: "Attendance Rate",
    value: "88%",
    subtitle: "Department avg",
    icon: <TrendingUp className="h-5 w-5" />,
    variant: "warning" as const,
  },
];

const facultyList = [
  { name: "Dr. Sarah Johnson", subject: "Data Structures", students: 45, classes: 3, status: "active" },
  { name: "Prof. Michael Chen", subject: "Algorithms", students: 52, classes: 4, status: "active" },
  { name: "Dr. Robert Smith", subject: "Database Systems", students: 48, classes: 3, status: "active" },
  { name: "Prof. Emily Davis", subject: "Web Development", students: 51, classes: 4, status: "on-leave" },
];

const recentActivity = [
  {
    type: "assignment",
    title: "Mid-term Evaluation Pending",
    faculty: "Dr. Sarah Johnson",
    time: "2 hours ago",
    priority: "high",
  },
  {
    type: "attendance",
    title: "Low Attendance Alert",
    faculty: "Data Structures Class",
    time: "1 day ago",
    priority: "medium",
  },
  {
    type: "announcement",
    title: "Department Meeting Tomorrow",
    faculty: "All Faculty",
    time: "2 days ago",
    priority: "low",
  },
];

import { useEffect, useState } from "react";
import { useEnrollmentStore } from "@/lib/enrollmentStore";
import { useAuthStore } from "@/lib/useAuthStore";

const HODDashboard = () => {
  const enrollment = useEnrollmentStore()
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => { enrollment.loadAll() }, [])

  const handleCreateFaculty = async () => {
    try {
      await enrollment.createFaculty({ name, email, password })
      setShowForm(false)
      setName('')
      setEmail('')
      setPassword('')
    } catch (err: any) { alert(err.message || 'Failed') }
  }

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground shadow-elevated">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-2">HOD Dashboard</h1>
            <p className="text-primary-foreground/90 text-lg">Computer Science Department</p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="bg-primary-foreground/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">Dr. Sarah Johnson - HOD</span>
              </div>
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
          {/* Faculty Management */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Department Faculty</span>
                </CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {enrollment.faculty.map((faculty: any, index: number) => (
                  <div key={index} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">{faculty.name}</h4>
                          <Badge variant={faculty.status === "active" ? "default" : "secondary"}>
                            {faculty.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{faculty.subject}</p>
                      </div>
                      <Button variant="ghost" size="sm">Details</Button>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <span>{faculty.students ?? '—'} Students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{faculty.classes ?? '—'} Classes/Week</span>
                      </div>
                    </div>
                  </div>
                ))}
                {showForm && (
                  <div className="p-4 rounded-lg border border-border">
                    <input className="w-full p-2 border rounded mb-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="w-full p-2 border rounded mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="w-full p-2 border rounded mb-2" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="flex gap-2"><Button onClick={handleCreateFaculty}>Create Faculty</Button><Button variant="ghost" onClick={() => setShowForm(false)}>Cancel</Button></div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{activity.title}</h4>
                      <Badge variant={activity.priority === "high" ? "destructive" : activity.priority === "medium" ? "default" : "secondary"}>
                        {activity.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      <ClipboardList className="h-3 w-3 inline mr-1" />
                      {activity.faculty}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
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

export default HODDashboard;
