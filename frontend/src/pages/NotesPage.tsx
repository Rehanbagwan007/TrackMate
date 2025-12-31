import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Book, Trash2, Edit } from "lucide-react";

const NotesPage = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([
    { id: 1, title: "React State Management", course: "Advanced React", date: "2024-12-15", content: "..." },
    { id: 2, title: "Normalization in Databases", course: "Databases", date: "2024-12-10", content: "..." },
  ]);

  const handleDelete = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Notes</h1>
            <p className="text-muted-foreground mt-1">Create, view, and manage your course notes.</p>
          </div>
          <Button className="flex items-center gap-2" onClick={() => navigate('/notes/create')}>
            <PlusCircle className="h-4 w-4" />
            Create Note
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map(note => (
            <Card key={note.id} className="shadow-card flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span className='max-w-[200px]'>{note.title}</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDelete(note.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <Book className="h-4 w-4" />
                    <span>{note.course}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{note.content}</p>
                 <p className='text-xs text-muted-foreground mt-4'>{note.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NotesPage;
