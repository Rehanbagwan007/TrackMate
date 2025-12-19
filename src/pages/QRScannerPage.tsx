import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QRScannerPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
        <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Scan QR Code</h1>
        </div>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <QrCode className="h-6 w-6" />
              Scan Attendance QR
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-8">
            <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center mb-6">
              <p className="text-muted-foreground">QR Scanner will appear here.</p>
            </div>
            <p className="text-center text-muted-foreground">Point your camera at the QR code provided by the faculty to mark your attendance.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default QRScannerPage;
