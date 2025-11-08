import { Layout } from "@/components/Layout";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, ClipboardCheck, FileText, Bell, Play, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "My Classes",
    value: "4",
    subtitle: "Active courses",
    icon: <BookOpen className="h-5 w-5" />,
    variant: "primary" as const,
  },
  {
    title: "Total Students",
    value: "186",
    subtitle: "Across classes",
    icon: <Users className="h-5 w-5" />,
    variant: "success" as const,
  },
  {
    title: "Pending Assignments",
    value: "8",
    subtitle: "To evaluate",
    icon: <ClipboardCheck className="h-5 w-5" />,
    variant: "warning" as const,
  },
  {
    title: "Study Materials",
    value: "24",
    subtitle: "Uploaded",
    icon: <FileText className="h-5 w-5" />,
    variant: "default" as const,
  },
];

const myClasses = [
  {
    subject: "Data Structures",
    code: "CS201",
    students: 45,
    nextClass: "Today, 9:00 AM",
    room: "Room 301",
    attendance: 87,
  },
  {
    subject: "Algorithms",
    code: "CS202",
    students: 52,
    nextClass: "Tomorrow, 11:00 AM",
    room: "Room 205",
    attendance: 91,
  },
  {
    subject: "Database Systems",
    code: "CS301",
    students: 48,
    nextClass: "Today, 2:00 PM",
    room: "Room 108",
    attendance: 85,
  },
  {
    subject: "Web Development",
    code: "CS302",
    students: 41,
    nextClass: "Wednesday, 10:00 AM",
    room: "Room 402",
    attendance: 89,
  },
];

const assignments = [
  {
    title: "Binary Tree Implementation",
    subject: "Data Structures",
    submissions: 42,
    total: 45,
    dueDate: "2 days ago",
    status: "overdue",
  },
  {
    title: "Sorting Algorithm Analysis",
    subject: "Algorithms",
    submissions: 48,
    total: 52,
    dueDate: "Tomorrow",
    status: "pending",
  },
  {
    title: "Database Design Project",
    subject: "Database Systems",
    submissions: 45,
    total: 48,
    dueDate: "In 3 days",
    status: "active",
  },
];

const FacultyDashboard = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground shadow-elevated">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-2">Faculty Dashboard</h1>
            <p className="text-primary-foreground/90 text-lg">Welcome back, Dr. Sarah Johnson</p>
            <div className="flex items-center space-x-4 mt-4">
              <Button variant="secondary" size="sm" className="gap-2">
                <Play className="h-4 w-4" />
                Start Attendance
              </Button>
              <Button variant="secondary" size="sm" className="gap-2">
                <Upload className="h-4 w-4" />
                Upload Material
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
          {/* My Classes */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>My Classes</span>
                </CardTitle>
                <Button variant="outline" size="sm">View Schedule</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {myClasses.map((classItem, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{classItem.subject}</h4>
                        <p className="text-sm text-muted-foreground">{classItem.code} • {classItem.room}</p>
                      </div>
                      <Badge variant="default">
                        {classItem.attendance}% attendance
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{classItem.students} Students</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          {classItem.nextClass}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Manage</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Assignments to Evaluate */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ClipboardCheck className="h-5 w-5 text-primary" />
                  <span>Assignments</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {assignments.map((assignment, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{assignment.title}</h4>
                      <Badge 
                        variant={
                          assignment.status === "overdue" 
                            ? "destructive" 
                            : assignment.status === "pending" 
                            ? "default" 
                            : "secondary"
                        }
                      >
                        {assignment.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{assignment.subject}</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">
                        {assignment.submissions}/{assignment.total} submitted
                      </span>
                      <span className="text-muted-foreground">{assignment.dueDate}</span>
                    </div>
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

export default FacultyDashboard;
