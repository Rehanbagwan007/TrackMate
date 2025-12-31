import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const MyClassesPage = () => {
  const classes = [
    { id: 1, name: "Advanced React", students: 45, code: "CS-305" },
    { id: 2, name: "Software Engineering", students: 52, code: "SE-401" },
    { id: 3, name: "Databases", students: 60, code: "DB-201" },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Classes</h1>
            <p className="text-muted-foreground mt-1">Manage your courses and enrolled students.</p>
          </div>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Create Class
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map(cls => (
            <Card key={cls.id} className="shadow-card">
              <CardHeader>
                <CardTitle>{cls.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{cls.code}</p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{cls.students} Students</p>
                <Button variant="outline" className="mt-4 w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MyClassesPage;
