import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, PlusCircle } from "lucide-react";

const FacultyAttendancePage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance Control Panel</h1>
          <p className="text-muted-foreground mt-1">Generate and manage attendance sessions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Generate Time-Based Session</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Create an attendance session that is active for a specific duration.</p>
              <Button className="mt-4 w-full">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create Time-Based Session
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Generate Code-Based Session</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Generate a unique code for students to mark their attendance.</p>
              <Button className="mt-4 w-full">
                <QrCode className="h-4 w-4 mr-2" />
                Generate Code
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FacultyAttendancePage;
