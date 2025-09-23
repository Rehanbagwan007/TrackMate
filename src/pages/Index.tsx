import { Layout } from "@/components/Layout";
import { StatCard } from "@/components/StatCard";
import { ClassCard } from "@/components/ClassCard";
import { ActivityCard } from "@/components/ActivityCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, TrendingUp, Award, Bell, Calendar } from "lucide-react";

// Mock data - in real app this would come from API
const stats = [
  {
    title: "Attendance Rate",
    value: "87%",
    subtitle: "This month",
    icon: <CheckCircle className="h-5 w-5" />,
    variant: "success" as const,
  },
  {
    title: "Pending Tasks",
    value: "12",
    subtitle: "Assignments",
    icon: <Clock className="h-5 w-5" />,
    variant: "warning" as const,
  },
  {
    title: "Due Today",
    value: "3",
    subtitle: "Tasks",
    icon: <Bell className="h-5 w-5" />,
    variant: "primary" as const,
  },
  {
    title: "Average GPA",
    value: "8.4",
    subtitle: "Current",
    icon: <TrendingUp className="h-5 w-5" />,
    variant: "default" as const,
  },
];

const todaysClasses = [
  {
    title: "Data Structures",
    instructor: "Prof. Johnson",
    time: "9:00 AM",
    room: "Room 301",
    status: "current" as const,
    attendanceRate: 85,
    classCode: "CS2024001",
  },
  {
    title: "Operating Systems",
    instructor: "Dr. Smith",
    time: "11:00 AM",
    room: "Room 205",
    status: "next" as const,
    classCode: "CS2024002",
  },
  {
    title: "Database Systems",
    instructor: "Prof. Davis",
    time: "2:00 PM",
    room: "Room 108",
    status: "next" as const,
    classCode: "CS2024003",
  },
];

const recentActivities = [
  {
    type: "grade" as const,
    title: "Assignment Graded",
    description: "Data Structures Project - Score: 92/100",
    time: "2 hours ago",
    status: "graded" as const,
    course: "CS2024001",
  },
  {
    type: "material" as const,
    title: "New Material Posted",
    description: "Week 8 Lecture Notes - Operating Systems",
    time: "1 day ago",
    status: "new" as const,
    course: "CS2024002",
  },
  {
    type: "assignment" as const,
    title: "Assignment Due Soon",
    description: "Database Design Project - Due in 2 days",
    time: "2 days ago",
    status: "due" as const,
    course: "CS2024003",
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground shadow-elevated">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-2">Good morning, John!</h1>
            <p className="text-primary-foreground/90 text-lg">Ready for another productive day of learning?</p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="bg-primary-foreground/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">Computer Science</span>
              </div>
              <div className="bg-primary-foreground/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">ID: CS2024001</span>
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Classes */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Today's Classes</span>
                </CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {todaysClasses.map((classItem, index) => (
                  <ClassCard key={index} {...classItem} />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Updates */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <span>Recent Updates</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <ActivityCard key={index} {...activity} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
