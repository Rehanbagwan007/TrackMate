import { Layout } from "@/components/Layout";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen, TrendingUp, Bell, ClipboardList, Plus, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";
import { fetchHODDashboard } from "@/lib/api";
import { useAuthStore } from "@/lib/useAuthStore";

const recentActivity = [
  {
    type: "assignment",
    title: "Mid-term Evaluation Pending",
    faculty: "Dr. Sarah Johnson",
    time: "2 hours ago",
    priority: "high",
  },
  {
    type: "attendance",
    title: "Low Attendance Alert",
    faculty: "Data Structures Class",
    time: "1 day ago",
    priority: "medium",
  },
  {
    type: "announcement",
    title: "Department Meeting Tomorrow",
    faculty: "All Faculty",
    time: "2 days ago",
    priority: "low",
  },
];

const HODDashboard = () => {
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [showEnrollFacultyForm, setShowEnrollFacultyForm] = useState(false);
  const [facultyName, setFacultyName] = useState('');
  const [facultyEmail, setFacultyEmail] = useState('');
  const [facultyPassword, setFacultyPassword] = useState('');
  const [faceImage, setFaceImage] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);
  const { token } = useAuthStore();

  useEffect(() => {
    const getDashboardData = async () => {
      if (token) {
        try {
          const data = await fetchHODDashboard(token);
          console.log(data)
          setDashboardData(data);
        } catch (error) {
          console.error("Error fetching HOD dashboard data:", error);
        }
      }
    };

    getDashboardData();
  }, [token]);

  const stats = dashboardData ? [
    {
      title: "Department Faculty",
      value: (dashboardData.faculty?.length || 0).toString(),
      subtitle: "Active",
      icon: <Users className="h-5 w-5" />,
      variant: "primary" as const,
    },
    {
      title: "Total Students",
      value: (dashboardData.students?.length || 0).toString(),
      subtitle: "Enrolled",
      icon: <GraduationCap className="h-5 w-5" />,
      variant: "success" as const,
    },
    {
      title: "Active Courses",
      value: "18", // This seems to be hardcoded, we can update it if the API provides this data
      subtitle: "This semester",
      icon: <BookOpen className="h-5 w-5" />,
      variant: "default" as const,
    },
    {
      title: "Attendance Rate",
      value: "88%", // This also seems hardcoded
      subtitle: "Department avg",
      icon: <TrendingUp className="h-5 w-5" />,
      variant: "warning" as const,
    },
  ] : [];

  const captureFaceData = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setFaceImage(imageSrc);
    }
  };

  const handleEnrollFaculty = async () => {
    // This functionality will likely need to be adapted to the new API structure
    // For now, it is disabled
    alert("Enrollment functionality is under construction.");
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground shadow-elevated">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-2">HOD Dashboard</h1>
            <p className="text-primary-foreground/90 text-lg">{dashboardData?.name || "Loading..."}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Department Faculty</span>
                </CardTitle>
                <Button variant="outline" size="sm" onClick={() => setShowEnrollFacultyForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Enroll Faculty
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {showEnrollFacultyForm && (
                  <div className="p-4 rounded-lg border border-border bg-muted/50">
                    <h4 className="font-semibold text-lg mb-4">Enroll New Faculty</h4>
                    <div className="space-y-4">
                      <input className="w-full p-2 border rounded" placeholder="Faculty Name" value={facultyName} onChange={(e) => setFacultyName(e.target.value)} />
                      <input className="w-full p-2 border rounded" placeholder="Faculty Email" value={facultyEmail} onChange={(e) => setFacultyEmail(e.target.value)} />
                      <input className="w-full p-2 border rounded" placeholder="Password" type="password" value={facultyPassword} onChange={(e) => setFacultyPassword(e.target.value)} />
                      
                      <div className="p-4 border rounded bg-gray-100 text-center space-y-4">
                        <h5 className="font-semibold">Face Enrollment</h5>
                        {faceImage ? (
                          <div className="flex flex-col items-center gap-4">
                            <img src={faceImage} alt="Captured face" className="rounded-lg w-48 h-auto" />
                            <Button variant="outline" onClick={() => setFaceImage(null)}>Retake Photo</Button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-4">
                            <Webcam
                              audio={false}
                              ref={webcamRef}
                              screenshotFormat="image/jpeg"
                              className="rounded-lg"
                              width={320}
                              height={240}
                            />
                            <Button onClick={captureFaceData} className="gap-2">
                              <Camera className="h-4 w-4" />
                              Capture Photo
                            </Button>
                          </div>
                        )}
                      </div>

                      <div className="p-4 border rounded bg-gray-100 text-center">
                         <h5 className="font-semibold">Fingerprint Enrollment</h5>
                        <p className="text-sm text-gray-500 mt-2">Fingerprint enrollment requires a separate desktop application and is not supported directly in the browser.</p>
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={handleEnrollFaculty} disabled={!faceImage}>Enroll</Button>
                        <Button variant="ghost" onClick={() => setShowEnrollFacultyForm(false)}>Cancel</Button>
                      </div>
                    </div>
                  </div>
                )}

                {dashboardData && Array.isArray(dashboardData.faculty) && dashboardData.faculty.map((faculty: any, index: number) => (
                  <div key={index} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{faculty.name}</h4>
                        <p className="text-sm text-muted-foreground">{faculty.subject || 'No subject assigned'}</p>
                      </div>
                      <Button variant="ghost" size="sm">Details</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{activity.title}</h4>
                      <Badge variant={activity.priority === "high" ? "destructive" : activity.priority === "medium" ? "default" : "secondary"}>
                        {activity.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      <ClipboardList className="h-3 w-3 inline mr-1" />
                      {activity.faculty}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HODDashboard;
