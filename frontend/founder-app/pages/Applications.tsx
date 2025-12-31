import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  FileText, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  Eye,
  Download
} from "lucide-react";
import { toast } from "sonner";

export const Applications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const applications = [
    {
      id: "APP-001",
      institute: "MIT Technology Institute",
      submittedBy: "Dr. Sarah Johnson",
      email: "s.johnson@mit.edu",
      date: "2024-01-15",
      status: "pending",
      students: 2500,
      plan: "Enterprise Pro",
      country: "USA",
      description: "Leading technology institute seeking comprehensive educational platform for engineering programs."
    },
    {
      id: "APP-002", 
      institute: "Stanford Business School",
      submittedBy: "Prof. Michael Chen",
      email: "m.chen@stanford.edu",
      date: "2024-01-14",
      status: "approved",
      students: 1800,
      plan: "Enterprise",
      country: "USA",
      description: "Business school requiring advanced analytics and collaboration tools for MBA programs."
    },
    {
      id: "APP-003",
      institute: "Harvard Medical School",
      submittedBy: "Dr. Emily Rodriguez",
      email: "e.rodriguez@harvard.edu", 
      date: "2024-01-13",
      status: "review",
      students: 3200,
      plan: "Enterprise Pro",
      country: "USA",
      description: "Medical institution needing specialized tools for medical education and research collaboration."
    },
    {
      id: "APP-004",
      institute: "Oxford University",
      submittedBy: "Prof. James Wilson",
      email: "j.wilson@oxford.ac.uk",
      date: "2024-01-12", 
      status: "rejected",
      students: 1500,
      plan: "Enterprise",
      country: "UK",
      description: "Historic university seeking modern educational technology solutions."
    },
    {
      id: "APP-005",
      institute: "University of Tokyo",
      submittedBy: "Prof. Hiroshi Tanaka",
      email: "h.tanaka@u-tokyo.ac.jp",
      date: "2024-01-11",
      status: "pending",
      students: 2800,
      plan: "Enterprise Pro",
      country: "Japan",
      description: "Leading Japanese university requiring multilingual educational platform."
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

  const handleApprove = (appId: string) => {
    toast.success(`Application ${appId} approved successfully!`);
  };

  const handleReject = (appId: string) => {
    toast.error(`Application ${appId} rejected.`);
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.institute.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.submittedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Applications</h1>
            <p className="text-muted-foreground">Review and manage enterprise application submissions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="border-border/50">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search applications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="review">Under Review</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications List */}
        <div className="grid gap-4">
          {filteredApplications.map((app) => (
            <Card key={app.id} className="border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {app.institute}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Application ID: {app.id} • Submitted by {app.submittedBy}
                    </CardDescription>
                  </div>
                  {getStatusBadge(app.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Contact</p>
                    <p className="text-sm">{app.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Students</p>
                    <p className="text-sm">{app.students.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Plan</p>
                    <Badge variant="outline">{app.plan}</Badge>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Description</p>
                  <p className="text-sm text-foreground">{app.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Submitted on {app.date} • {app.country}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    {app.status === "pending" && (
                      <>
                        <Button 
                          size="sm" 
                          variant="default"
                          onClick={() => handleApprove(app.id)}
                        >
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleReject(app.id)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <Card className="border-border/50">
            <CardContent className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No applications found</h3>
              <p className="text-muted-foreground">
                {searchTerm || statusFilter !== "all" 
                  ? "Try adjusting your search or filter criteria"
                  : "No applications have been submitted yet"
                }
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};