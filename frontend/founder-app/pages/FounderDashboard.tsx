import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Building2, 
  FileText, 
  TrendingUp, 
  Clock, 
  CheckCircle2,
  XCircle,
  AlertCircle
} from "lucide-react";

export const FounderDashboard = () => {
  const stats = [
    {
      title: "Total Applications",
      value: "127",
      change: "+12%",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Active Institutes",
      value: "45",
      change: "+8%",
      icon: Building2,
      color: "text-green-600"
    },
    {
      title: "Pending Reviews",
      value: "23",
      change: "+3%",
      icon: Clock,
      color: "text-yellow-600"
    },
    {
      title: "Revenue Growth",
      value: "$234K",
      change: "+15%",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const recentApplications = [
    {
      id: "APP-001",
      institute: "MIT Technology Institute",
      submittedBy: "Dr. Sarah Johnson",
      date: "2024-01-15",
      status: "pending",
      students: 2500,
      plan: "Enterprise Pro"
    },
    {
      id: "APP-002",
      institute: "Stanford Business School",
      submittedBy: "Prof. Michael Chen",
      date: "2024-01-14",
      status: "approved",
      students: 1800,
      plan: "Enterprise"
    },
    {
      id: "APP-003",
      institute: "Harvard Medical School",
      submittedBy: "Dr. Emily Rodriguez",
      date: "2024-01-13",
      status: "review",
      students: 3200,
      plan: "Enterprise Pro"
    },
    {
      id: "APP-004",
      institute: "Oxford University",
      submittedBy: "Prof. James Wilson",
      date: "2024-01-12",
      status: "rejected",
      students: 1500,
      plan: "Enterprise"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { variant: "secondary" as const, icon: Clock, text: "Pending" },
      approved: { variant: "default" as const, icon: CheckCircle2, text: "Approved" },
      review: { variant: "destructive" as const, icon: AlertCircle, text: "Under Review" },
      rejected: { variant: "outline" as const, icon: XCircle, text: "Rejected" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {config.text}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Founder Dashboard</h1>
            <p className="text-muted-foreground">Manage EduVision enterprise applications</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Export Report</Button>
            <Button>Review Applications</Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">{stat.change}</span> from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Applications */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Applications
            </CardTitle>
            <CardDescription>
              Latest enterprise application submissions requiring review
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left p-2 font-medium text-muted-foreground">Application ID</th>
                    <th className="text-left p-2 font-medium text-muted-foreground">Institute</th>
                    <th className="text-left p-2 font-medium text-muted-foreground">Submitted By</th>
                    <th className="text-left p-2 font-medium text-muted-foreground">Date</th>
                    <th className="text-left p-2 font-medium text-muted-foreground">Students</th>
                    <th className="text-left p-2 font-medium text-muted-foreground">Plan</th>
                    <th className="text-left p-2 font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-2 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentApplications.map((app) => (
                    <tr key={app.id} className="border-b border-border/20 hover:bg-muted/50">
                      <td className="p-2 font-mono text-sm">{app.id}</td>
                      <td className="p-2 font-medium">{app.institute}</td>
                      <td className="p-2 text-muted-foreground">{app.submittedBy}</td>
                      <td className="p-2 text-muted-foreground">{app.date}</td>
                      <td className="p-2">{app.students.toLocaleString()}</td>
                      <td className="p-2">
                        <Badge variant="outline">{app.plan}</Badge>
                      </td>
                      <td className="p-2">{getStatusBadge(app.status)}</td>
                      <td className="p-2">
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">View</Button>
                          {app.status === "pending" && (
                            <>
                              <Button size="sm" variant="default">Approve</Button>
                              <Button size="sm" variant="destructive">Reject</Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Application Review
              </CardTitle>
              <CardDescription>
                Review and approve pending applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Review Applications</Button>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Manage Institutes
              </CardTitle>
              <CardDescription>
                View and manage active institutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">View Institutes</Button>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Analytics
              </CardTitle>
              <CardDescription>
                View detailed analytics and reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">View Analytics</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};