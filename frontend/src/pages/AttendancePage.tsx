import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, QrCode, CheckCircle, Clock, X } from "lucide-react";

// Mock attendance data
const attendanceData = [
  {
    date: "2024-01-22",
    subject: "Data Structures",
    status: "Present",
    time: "9:00 AM",
    instructor: "Prof. Johnson",
  },
  {
    date: "2024-01-22",
    subject: "Operating Systems",
    status: "Present",
    time: "11:00 AM",
    instructor: "Dr. Smith",
  },
  {
    date: "2024-01-21",
    subject: "Database Systems",
    status: "Absent",
    time: "2:00 PM",
    instructor: "Prof. Davis",
  },
  {
    date: "2024-01-21",
    subject: "Data Structures",
    status: "Present",
    time: "9:00 AM",
    instructor: "Prof. Johnson",
  },
  {
    date: "2024-01-20",
    subject: "Operating Systems",
    status: "Present",
    time: "11:00 AM",
    instructor: "Dr. Smith",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Present":
      return <Badge variant="success" className="flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Present</Badge>;
    case "Absent":
      return <Badge variant="destructive" className="flex items-center gap-1"><X className="h-3 w-3" /> Absent</Badge>;
    case "Late":
      return <Badge variant="warning" className="flex items-center gap-1"><Clock className="h-3 w-3" /> Late</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export function AttendancePage() {
  const [showQRScanner, setShowQRScanner] = useState(false);

  const totalClasses = attendanceData.length;
  const presentCount = attendanceData.filter(item => item.status === "Present").length;
  const attendancePercentage = Math.round((presentCount / totalClasses) * 100);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Attendance</h1>
            <p className="text-muted-foreground mt-1">Track your class attendance and scan QR codes</p>
          </div>
          <Button 
            variant="default" 
            onClick={() => setShowQRScanner(true)}
            className="flex items-center gap-2"
          >
            <QrCode className="h-4 w-4" />
            Scan QR Code
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm text-muted-foreground">Overall Attendance</p>
                  <p className="text-2xl font-bold text-success">{attendancePercentage}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Classes Attended</p>
                  <p className="text-2xl font-bold text-foreground">{presentCount}/{totalClasses}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-warning" />
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold text-foreground">4/5</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attendance History */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Attendance History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attendanceData.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-muted-foreground min-w-[80px]">
                      {new Date(record.date).toLocaleDateString()}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{record.subject}</p>
                      <p className="text-sm text-muted-foreground">{record.instructor} • {record.time}</p>
                    </div>
                  </div>
                  {getStatusBadge(record.status)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* QR Scanner Modal */}
        {showQRScanner && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Scan QR Code
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Position QR code within the frame</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setShowQRScanner(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="default" 
                    className="flex-1"
                    onClick={() => {
                      // In real app, this would process the QR code scan
                      setShowQRScanner(false);
                    }}
                  >
                    Mark Attendance
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
}