import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const GradesPage = () => {
  const grades = [
    { course: "Advanced React", grade: "A", creditHours: 3 },
    { course: "Software Engineering", grade: "A-", creditHours: 4 },
    { course: "Databases", grade: "B+", creditHours: 3 },
    { course: "Operating Systems", grade: "A", creditHours: 3 },
  ];

  const getGradeBadge = (grade: string) => {
    const gradeMap: { [key: string]: string } = {
        "A": "success",
        "A-": "success",
        "B+": "warning",
        "B": "warning",
        "B-": "warning",
    }
    return <Badge variant={gradeMap[grade] || "default"}>{grade}</Badge>;
  };

  const calculateGPA = () => {
      const gradePoints: {[key: string]: number} = {
          "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7
      }
      let totalPoints = 0;
      let totalCredits = 0;
      grades.forEach(g => {
          totalPoints += (gradePoints[g.grade] || 0) * g.creditHours;
          totalCredits += g.creditHours;
      })
      return (totalPoints/totalCredits).toFixed(2)
  }

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Grades</h1>
            <p className="text-muted-foreground mt-1">Check your academic performance.</p>
          </div>
           <Card className='p-3 text-center'>
                <p className='text-sm text-muted-foreground'>Overall GPA</p>
                <p className='text-2xl font-bold'>{calculateGPA()}</p>
            </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Course Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Credit Hours</TableHead>
                  <TableHead>Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {grades.map((grade, i) => (
                  <TableRow key={i}>
                    <TableCell>{grade.course}</TableCell>
                    <TableCell>{grade.creditHours}</TableCell>
                    <TableCell>{getGradeBadge(grade.grade)}</TableCell>
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

export default GradesPage;
