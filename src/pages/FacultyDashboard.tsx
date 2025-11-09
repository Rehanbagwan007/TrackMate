
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FacultyDashboard = () => {
  return (
    <Layout>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Class Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Subjects, enrolled students will be here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Attendance Control Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Generate time-based or code-based attendance sessions here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Assignment Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Create, evaluate assignments here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notes & Study Material</CardTitle>
          </CardHeader>
          <CardContent>
            <Button>Upload Notes</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Notebook Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <p>AI Notebook tools will be here.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FacultyDashboard;
