import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const CreateNotePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [course, setCourse] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // Here you would typically handle the form submission, e.g., save the note to a database.
    // For this example, we'll just navigate back to the notes page.
    console.log({ title, course, content });
    navigate('/notes');
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Create Note</h1>
          <p className="text-muted-foreground mt-1">Fill out the form below to create a new note.</p>
        </div>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={title} onChange={e => setTitle(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="course">Course</Label>
                <Input id="course" value={course} onChange={e => setCourse(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" value={content} onChange={e => setContent(e.target.value)} className="min-h-[200px]" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => navigate('/notes')}>Cancel</Button>
                <Button onClick={handleSubmit}>Save Note</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateNotePage;
