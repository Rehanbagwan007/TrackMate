import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, User, Calendar } from "lucide-react";

interface ClassCardProps {
  title: string;
  instructor: string;
  time: string;
  room: string;
  status: "current" | "next" | "completed";
  attendanceRate?: number;
  classCode?: string;
}

const statusConfig = {
  current: { label: "Current", variant: "success" as const, className: "border-success/20 bg-success/5" },
  next: { label: "Next", variant: "warning" as const, className: "border-warning/20 bg-warning/5" },
  completed: { label: "Completed", variant: "secondary" as const, className: "border-border" },
};

export function ClassCard({ title, instructor, time, room, status, attendanceRate, classCode }: ClassCardProps) {
  const config = statusConfig[status];

  return (
    <Card className={`shadow-card hover:shadow-elevated transition-smooth ${config.className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            {classCode && (
              <p className="text-sm text-muted-foreground font-mono">{classCode}</p>
            )}
          </div>
          <Badge variant={config.variant}>{config.label}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{instructor}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{room}</span>
          </div>
          {attendanceRate !== undefined && (
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-sm text-muted-foreground">Attendance</span>
              <span className="text-sm font-medium text-foreground">{attendanceRate}%</span>
            </div>
          )}
          {status === "current" && (
            <Button variant="default" className="w-full mt-4" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Mark Attendance
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}