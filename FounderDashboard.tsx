import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Building2, 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Search, 
  Eye, 
  Mail, 
  Phone, 
  Calendar,
  Filter,
  Download,
  BarChart3,
  Settings,
  LogOut,
  Shield
} from "lucide-react";

interface Application {
  id: string;
  instituteName: string;
  contactPerson: string;
  email: string;
  phone: string;
  studentCount: number;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  message: string;
  address: string;
  website?: string;
}

export const FounderDashboard = () => {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: '1',
      instituteName: 'Harvard University',
      contactPerson: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@harvard.edu',
      phone: '+1-617-495-1000',
      studentCount: 23000,
      submittedAt: '2024-01-15T10:30:00Z',
      status: 'pending',
      message: 'We are interested in implementing EduVision across our computer science department to enhance our smart classroom capabilities.',
      address: 'Cambridge, MA 02138, United States',
      website: 'https://harvard.edu'
    },
    {
      id: '2',
      instituteName: 'MIT',
      contactPerson: 'Prof. Michael Chen',
      email: 'michael.chen@mit.edu',
      phone: '+1-617-253-1000',
      studentCount: 11520,
      submittedAt: '2024-01-14T14:22:00Z',
      status: 'approved',
      message: 'Looking to integrate advanced classroom management system for our engineering programs.',
      address: 'Cambridge, MA 02139, United States',
      website: 'https://mit.edu'
    },
    {
      id: '3',
      instituteName: 'Stanford University',
      contactPerson: 'Dr. Emily Rodriguez',
      email: 'emily.rodriguez@stanford.edu',
      phone: '+1-650-723-2300',
      studentCount: 17249,
      submittedAt: '2024-01-13T09:15:00Z',
      status: 'rejected',
      message: 'We need a comprehensive solution for our business school smart classrooms.',
      address: 'Stanford, CA 94305, United States',
      website: 'https://stanford.edu'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [responseMessage, setResponseMessage] = useState('');

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.instituteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusUpdate = (applicationId: string, newStatus: 'approved' | 'rejected') => {
    setApplications(prev => 
      prev.map(app => 
        app.id === applicationId 
          ? { ...app, status: newStatus }
          : app
      )
    );
    setSelectedApplication(null);
    setResponseMessage('');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800 border-green-200"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 border-red-200"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    }
  };

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    approved: applications.filter(app => app.status === 'approved').length,
    rejected: applications.filter(app => app.status === 'rejected').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">EduVision Founder Dashboard</h1>
              <p className="text-sm text-muted-foreground">Enterprise Application Management</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Building2 className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{stats.total}</p>
                  <p className="text-sm text-muted-foreground">Total Applications</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">{stats.pending}</p>
                  <p className="text-sm text-muted-foreground">Pending Review</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{stats.approved}</p>
                  <p className="text-sm text-muted-foreground">Approved</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <XCircle className="h-8 w-8 text-red-500" />
                <div>
                  <p className="text-2xl font-bold">{stats.rejected}</p>
                  <p className="text-sm text-muted-foreground">Rejected</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Applications Table */}
          <Card className="lg:col-span-3 border-border/50">
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Enterprise Applications</CardTitle>
                  <CardDescription>Review and manage institution applications</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Analytics
                  </Button>
                </div>
              </div>
              
              {/* Filters */}
              <div className="flex space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search institutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Institution</TableHead>
                      <TableHead>Contact Person</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{application.instituteName}</div>
                            <div className="text-sm text-muted-foreground">{application.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{application.contactPerson}</div>
                            <div className="text-sm text-muted-foreground">{application.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{application.studentCount.toLocaleString()}</span>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(application.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">
                              {new Date(application.submittedAt).toLocaleDateString()}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setSelectedApplication(application)}
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                Review
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>{application.instituteName}</DialogTitle>
                                <DialogDescription>
                                  Application Details and Review
                                </DialogDescription>
                              </DialogHeader>
                              
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label className="text-sm font-medium">Contact Person</Label>
                                    <p className="text-sm text-muted-foreground">{application.contactPerson}</p>
                                  </div>
                                  <div>
                                    <Label className="text-sm font-medium">Email</Label>
                                    <p className="text-sm text-muted-foreground">{application.email}</p>
                                  </div>
                                  <div>
                                    <Label className="text-sm font-medium">Phone</Label>
                                    <p className="text-sm text-muted-foreground">{application.phone}</p>
                                  </div>
                                  <div>
                                    <Label className="text-sm font-medium">Student Count</Label>
                                    <p className="text-sm text-muted-foreground">{application.studentCount.toLocaleString()}</p>
                                  </div>
                                </div>
                                
                                <div>
                                  <Label className="text-sm font-medium">Address</Label>
                                  <p className="text-sm text-muted-foreground">{application.address}</p>
                                </div>
                                
                                {application.website && (
                                  <div>
                                    <Label className="text-sm font-medium">Website</Label>
                                    <p className="text-sm text-muted-foreground">{application.website}</p>
                                  </div>
                                )}
                                
                                <div>
                                  <Label className="text-sm font-medium">Message</Label>
                                  <p className="text-sm text-muted-foreground">{application.message}</p>
                                </div>
                                
                                <div>
                                  <Label htmlFor="response">Response Message (Optional)</Label>
                                  <Textarea
                                    id="response"
                                    placeholder="Add a response message for the institution..."
                                    value={responseMessage}
                                    onChange={(e) => setResponseMessage(e.target.value)}
                                  />
                                </div>
                              </div>
                              
                              <DialogFooter className="space-x-2">
                                <Button
                                  variant="outline"
                                  onClick={() => handleStatusUpdate(application.id, 'rejected')}
                                  className="border-red-200 text-red-800 hover:bg-red-50"
                                >
                                  <XCircle className="w-4 h-4 mr-2" />
                                  Reject
                                </Button>
                                <Button
                                  onClick={() => handleStatusUpdate(application.id, 'approved')}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Approve
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions Sidebar */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Send Bulk Email
              </Button>
              <Button className="w-full" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Applications
              </Button>
              <Button className="w-full" variant="outline">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
              <Button className="w-full" variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Manage Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};