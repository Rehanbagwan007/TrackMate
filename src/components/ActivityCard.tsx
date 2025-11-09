import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, Award, Bell } from "lucide-react";

interface ActivityCardProps {
  type: "assignment" | "material" | "grade" | "announcement";
  title: string;
  description: string;
  time: string;
  status?: "new" | "due" | "graded";
  course?: string;
}

const typeConfig = {
  assignment: { icon: FileText, color: "text-primary", bgColor: "bg-primary/10" },
  material: { icon: Bell, color: "text-success", bgColor: "bg-success/10" },
  grade: { icon: Award, color: "text-warning", bgColor: "bg-warning/10" },
  announcement: { icon: Bell, color: "text-destructive", bgColor: "bg-destructive/10" },
};

const statusConfig = {
  new: { label: "New", variant: "default" as const },
  due: { label: "Due Soon", variant: "warning" as const },
  graded: { label: "Graded", variant: "success" as const },
};

export function ActivityCard({ type, title, description, time, status, course }: ActivityCardProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
      <CardContent className="p-5">
        <div className="flex items-start space-x-4">
          <div className={`p-2.5 rounded-2xl ${config.bgColor}`}>
            <Icon className={`h-5 w-5 ${config.color}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground truncate">{title}</h4>
                <p className="text-sm text-muted-foreground mt-1.5">{description}</p>
                {course && (
                  <p className="text-xs text-muted-foreground mt-1.5 font-medium">{course}</p>
                )}
              </div>
              {status && (
                <Badge variant={statusConfig[status].variant} className="ml-2 shrink-0 rounded-full">
                  {statusConfig[status].label}
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-1.5 mt-3 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{time}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}