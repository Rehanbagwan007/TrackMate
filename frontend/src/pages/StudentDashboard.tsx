
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeekChart } from "@/components/WeekChart";
import { ProgressRing } from "@/components/ProgressRing";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Bell, Cpu, QrCode } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/lib/useAuthStore";
import api from "@/lib/api";

const StudentDashboard = () => {
    const navigate = useNavigate();
    const token = useAuthStore((s) => s.token)
    const [loading, setLoading] = useState(true)
    const [attendanceData, setAttendanceData] = useState<any[]>([])
    const [upcomingClasses, setUpcomingClasses] = useState<any[]>([])
    const [announcements, setAnnouncements] = useState<any[]>([])

    useEffect(() => {
        if (!token) return setLoading(false)
        setLoading(true)
        api.fetchStudentDashboard(token).then((res) => {
            setUpcomingClasses(res.upcomingClasses || [])
            setAnnouncements(res.announcements || [])
            setAttendanceData(res.attendanceData || [])
        }).catch(() => {
            setUpcomingClasses([])
            setAnnouncements([])
            setAttendanceData([])
        }).finally(() => setLoading(false))
    }, [token])

    if (loading) return <div>Loading...</div>

    return (
    <Layout>
      <div className="space-y-6">
        <div className='flex items-center justify-between'>
          <div>
            <h1 className="text-3xl font-bold">Student Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, John!</p>
          </div>
            <Button className="flex items-center gap-2" onClick={() => navigate("/student/qr-scanner")}>
                <QrCode className="h-5 w-5" />
                Scan QR
            </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Attendance Overview */}
            <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5" /> Attendance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Your attendance for the week</p>
                    <WeekChart data={attendanceData} />
                </CardContent>
            </Card>

            {/* Assignment Progress */}
            <Card className="flex flex-col items-center justify-center">
                <CardHeader>
                    <CardTitle>Assignment Progress</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <ProgressRing progress={75} size={120} label="Completed" />
                    <p className="text-center"><span className="font-bold">3/4</span> assignments submitted</p>
                </CardContent>
            </Card>

            {/* Study Time Tracker */}
            <Card className="flex flex-col items-center justify-center">
                 <CardHeader>
                    <CardTitle>Study Time Tracker</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-2">
                    <p className="text-4xl font-bold">4.5h</p>
                    <p className="text-muted-foreground">Today</p>
                    <Button size="sm" variant="outline">Start Timer</Button>
                </CardContent>
            </Card>
            
            {/* Upcoming Classes */}
            <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5"/> Upcoming Classes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {upcomingClasses.map(c => (
                        <div key={c.name} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                            <div>
                                <p className="font-semibold">{c.name}</p>
                                <p className="text-sm text-muted-foreground">{c.faculty}</p>
                            </div>
                            <p className="text-sm font-medium">{c.time}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Announcements */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Bell className="h-5 w-5"/> Announcements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                     {announcements.map(a => (
                        <div key={a.title} className="p-2 rounded-lg bg-muted/50">
                            <p className="font-semibold text-sm">{a.title}</p>
                            <p className="text-xs text-muted-foreground">{a.from} - {a.time}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
            
            {/* AI Notebook */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Cpu className="h-5 w-5"/> AI Notebook</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <p className="text-sm text-center text-muted-foreground">Generate notes, quizzes, and summaries from your course material.</p>
                    <Button>Launch AI Notebook</Button>
                </CardContent>
            </Card>

        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
