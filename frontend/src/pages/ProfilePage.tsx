import { Layout } from "@/components/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, GraduationCap, Building } from "lucide-react";

const ProfilePage = () => {
  const student = {
    name: "John Doe",
    studentId: "S-12345",
    email: "john.doe@university.edu",
    phone: "+1 234 567 890",
    department: "Computer Science",
    semester: "5th",
    avatar: "https://github.com/shadcn.png", // placeholder
  };

  const profileStats = [
      { title: "Courses Enrolled", value: "6" },
      { title: "Overall Attendance", value: "92%" },
      { title: "Current CGPA", value: "3.8" },
  ]

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground mt-1">View and manage your personal information.</p>
        </div>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <Avatar className="h-32 w-32 mb-4 md:mb-0">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold">{student.name}</h2>
                <p className="text-muted-foreground">{student.studentId}</p>
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{student.email}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{student.phone}</span>
                    </div>
                </div>
                 <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
                     <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span>{student.department}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        <span>{student.semester} Semester</span>
                    </div>
                </div>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profileStats.map(stat => (
                 <Card key={stat.title}>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="text-3xl font-bold">{stat.value}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
