
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useEnrollmentStore } from "@/lib/enrollmentStore";

const FacultyDashboard = () => {
  const enrollment = useEnrollmentStore()
  const [show, setShow] = useState(false)
  const [studentName, setStudentName] = useState('')
  const [studentEmail, setStudentEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => { enrollment.loadAll() }, [])

  const handleEnroll = async () => {
    try {
      await enrollment.enrollStudent({ name: studentName, email: studentEmail, password, year: 1, semester: 1, departmentId: enrollment.departments[0]?.id })
      setStudentName(''); setStudentEmail(''); setPassword(''); setShow(false)
    } catch (err: any) { alert(err.message || 'Failed') }
  }

  return (

  // existing JSX moved below
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
