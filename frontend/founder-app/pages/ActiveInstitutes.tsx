import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Building2, 
  Users, 
  Calendar,
  TrendingUp,
  Settings,
  Eye,
  AlertTriangle
} from "lucide-react";
import { toast } from "sonner";

export const ActiveInstitutes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [planFilter, setPlanFilter] = useState("all");

  const institutes = [
    {
      id: "INST-001",
      name: "Stanford Business School",
      contactPerson: "Prof. Michael Chen",
      email: "m.chen@stanford.edu",
      activatedDate: "2023-12-01",
      plan: "Enterprise",
      students: 1800,
      activeUsers: 1650,
      country: "USA",
      status: "active",
      usage: 92,
      revenue: "$15,000"
    },
    {
      id: "INST-002",
      name: "University of Cambridge",
      contactPerson: "Dr. Elizabeth Moore",
      email: "e.moore@cam.ac.uk",
      activatedDate: "2023-11-15",
      plan: "Enterprise Pro",
      students: 2200,
      activeUsers: 2100,
      country: "UK",
      status: "active",
      usage: 98,
      revenue: "$25,000"
    },
    {
      id: "INST-003",
      name: "Tokyo Institute of Technology",
      contactPerson: "Prof. Hiroshi Yamamoto",
      email: "h.yamamoto@titech.ac.jp",
      activatedDate: "2023-10-20",
      plan: "Enterprise Pro",
      students: 3000,
      activeUsers: 2850,
      country: "Japan",
      status: "active",
      usage: 95,
      revenue: "$28,000"
    },
    {
      id: "INST-004",
      name: "Melbourne Business School",
      contactPerson: "Dr. Sarah Thompson",
      email: "s.thompson@mbs.edu.au",
      activatedDate: "2023-09-10",
      plan: "Enterprise",
      students: 1500,
      activeUsers: 1200,
      country: "Australia",
      status: "warning",
      usage: 80,
      revenue: "$12,000"
    },
    {
      id: "INST-005",
      name: "ETH Zurich",
      contactPerson: "Prof. Klaus Mueller",
      email: "k.mueller@ethz.ch",
      activatedDate: "2023-08-25",
      plan: "Enterprise Pro",
      students: 2800,
      activeUsers: 2650,
      country: "Switzerland",
      status: "active",
      usage: 94,
      revenue: "$26,500"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { variant: "default" as const, text: "Active" },
      warning: { variant: "destructive" as const, text: "Needs Attention" },
      inactive: { variant: "outline" as const, text: "Inactive" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    
    return (
      <Badge variant={config.variant}>
        {config.text}
      </Badge>
    );
  };

  const getUsageBadge = (usage: number) => {
    if (usage >= 90) return <Badge variant="default">High Usage</Badge>;
    if (usage >= 70) return <Badge variant="secondary">Normal Usage</Badge>;
    return <Badge variant="destructive">Low Usage</Badge>;
  };

  const handleManageInstitute = (instituteId: string) => {
    toast.success(`Opening management panel for ${instituteId}`);
  };

  const filteredInstitutes = institutes.filter(institute => {
    const matchesSearch = institute.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institute.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institute.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = planFilter === "all" || institute.plan.toLowerCase().includes(planFilter.toLowerCase());
    return matchesSearch && matchesPlan;
  });

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Active Institutes</h1>
            <p className="text-muted-foreground">Monitor and manage institutes using EduVision</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              Analytics
            </Button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Institutes</p>
                  <p className="text-2xl font-bold">{institutes.length}</p>
                </div>
                <Building2 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold">{institutes.reduce((sum, inst) => sum + inst.students, 0).toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold">{institutes.reduce((sum, inst) => sum + inst.activeUsers, 0).toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                  <p className="text-2xl font-bold">$106.5K</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-border/50">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search institutes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <Select value={planFilter} onValueChange={setPlanFilter}>
                  <SelectTrigger>
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Plans</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="pro">Enterprise Pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Institutes List */}
        <div className="grid gap-4">
          {filteredInstitutes.map((institute) => (
            <Card key={institute.id} className="border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      {institute.name}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {institute.id} • Contact: {institute.contactPerson}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {getStatusBadge(institute.status)}
                    {institute.status === "warning" && (
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Plan</p>
                    <Badge variant="outline">{institute.plan}</Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Students</p>
                    <p className="text-sm font-bold">{institute.students.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                    <p className="text-sm font-bold">{institute.activeUsers.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Usage</p>
                    {getUsageBadge(institute.usage)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                    <p className="text-sm font-bold text-green-600">{institute.revenue}/month</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Active since {institute.activatedDate} • {institute.country}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    <Button 
                      size="sm" 
                      variant="default"
                      onClick={() => handleManageInstitute(institute.id)}
                    >
                      <Settings className="h-4 w-4 mr-1" />
                      Manage
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredInstitutes.length === 0 && (
          <Card className="border-border/50">
            <CardContent className="text-center py-12">
              <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No institutes found</h3>
              <p className="text-muted-foreground">
                {searchTerm || planFilter !== "all" 
                  ? "Try adjusting your search or filter criteria"
                  : "No institutes are currently active"
                }
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};