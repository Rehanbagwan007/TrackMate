import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const AssignmentsPage = () => {
  const assignments = [
    { id: 1, title: "React Hooks deep dive", course: "Advanced React", dueDate: "2024-12-25", status: "Pending" },
    { id: 2, title: "Final Project Proposal", course: "Software Engineering", dueDate: "2024-12-20", status: "Submitted" },
    { id: 3, title: "Database Design", course: "Databases", dueDate: "2024-12-22", status: "Pending" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "Submitted":
        return <Badge variant="success">Submitted</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Assignments</h1>
            <p className="text-muted-foreground mt-1">Track and manage your assignments</p>
          </div>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignments.map((assignment) => (
                  <TableRow key={assignment.id}>
                    <TableCell>{assignment.title}</TableCell>
                    <TableCell>{assignment.course}</TableCell>
                    <TableCell>{assignment.dueDate}</TableCell>
                    <TableCell>{getStatusBadge(assignment.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AssignmentsPage;
