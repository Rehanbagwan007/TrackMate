import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileText, Trash2, Edit } from "lucide-react";

const MaterialsPage = () => {
  const materials = [
    { id: 1, title: "React Hooks Cheatsheet", course: "Advanced React", type: "PDF", date: "2024-12-10" },
    { id: 2, title: "Database Normalization Slides", course: "Databases", type: "PPTX", date: "2024-12-05" },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Materials</h1>
            <p className="text-muted-foreground mt-1">Upload and manage course materials.</p>
          </div>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Upload Material
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map(material => (
            <Card key={material.id} className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className='max-w-[200px]'>{material.title}</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{material.course}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FileText className="h-5 w-5" />
                  <span>{material.type}</span>
                </div>
                <p className='text-xs text-muted-foreground mt-4'>{material.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MaterialsPage;
