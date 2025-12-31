import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileText } from "lucide-react";

const FacultyAssignmentsPage = () => {
  const assignments = [
    { id: 1, title: "React Hooks Essay", course: "Advanced React", submitted: 40, total: 45 },
    { id: 2, title: "Database Design Project", course: "Databases", submitted: 48, total: 52 },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Assignment Management</h1>
            <p className="text-muted-foreground mt-1">Create, evaluate, and manage assignments.</p>
          </div>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Create Assignment
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assignments.map(assignment => (
            <Card key={assignment.id} className="shadow-card">
              <CardHeader>
                <CardTitle>{assignment.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{assignment.course}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Submissions</p>
                  <p>{assignment.submitted} / {assignment.total}</p>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  View Submissions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FacultyAssignmentsPage;
