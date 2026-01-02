
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useEnrollmentStore } from "@/lib/enrollmentStore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Fingerprint } from "lucide-react";
import Webcam from "react-webcam";

const FacultyDashboard = () => {
  const enrollment = useEnrollmentStore();
  const [show, setShow] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [year, setYear] = useState(1);
  const [semester, setSemester] = useState(1);
  const [division, setDivision] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [faceImage, setFaceImage] = useState<string | null>(null);
  const [biometricTemplate, setBiometricTemplate] = useState('');
  const [biometricStatus, setBiometricStatus] = useState('Not Captured');
  const webcamRef = useRef<Webcam>(null);

  useEffect(() => {
    enrollment.loadAll();
  }, []);

  const handleCaptureFaceData = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setFaceImage(imageSrc);
    }
  };

  const handleCaptureBiometric = () => {
    console.log("Initiating biometric capture...");
    setBiometricTemplate("captured_biometric_template_placeholder");
    setBiometricStatus("Captured");
  };

  const handleEnroll = async () => {
    if (!departmentId) {
      alert('Please select a department');
      return;
    }
    try {
      await enrollment.enrollStudent({
        name: studentName,
        email: studentEmail,
        password,
        rollNumber,
        phone,
        year: Number(year),
        semester: Number(semester),
        division,
        departmentId,
        faceData: faceImage,
        biometricTemplate,
      });
      setStudentName('');
      setStudentEmail('');
      setPassword('');
      setRollNumber('');
      setPhone('');
      setYear(1);
      setSemester(1);
      setDivision('');
      setDepartmentId('');
      setFaceImage(null);
      setBiometricTemplate('');
      setBiometricStatus('Not Captured');
      setShow(false);
    } catch (err: any) {
      alert(err.message || 'Failed');
    }
  };

  return (
    <Layout>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Enroll New Student</CardTitle>
            <Button onClick={() => setShow(!show)}>{show ? 'Cancel' : 'Enroll Student'}</Button>
          </CardHeader>
          {show && (
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Full Name</Label>
                    <Input id="studentName" placeholder="John Doe" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rollNumber">Roll Number</Label>
                    <Input id="rollNumber" placeholder="C001" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentEmail">Email</Label>
                  <Input id="studentEmail" type="email" placeholder="student@example.com" value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 1234567890" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select onValueChange={setDepartmentId} value={departmentId}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {enrollment.departments.map((dept: any) => (
                          <SelectItem key={dept.id} value={dept.id}>{dept.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="division">Division</Label>
                    <Input id="division" placeholder="A" value={division} onChange={(e) => setDivision(e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input id="year" type="number" placeholder="1" value={year} onChange={(e) => setYear(Number(e.target.value))} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="semester">Semester</Label>
                    <Input id="semester" type="number" placeholder="1" value={semester} onChange={(e) => setSemester(Number(e.target.value))} required />
                  </div>
                </div>

                <div className="space-y-4">
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
                            <Button onClick={handleCaptureFaceData} className="gap-2">
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <Button onClick={handleEnroll} className="w-full" disabled={!faceImage}>Enroll Student</Button>
              </div>
            </CardContent>
          )}
        </Card>
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
