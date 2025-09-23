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
    <Card className="shadow-card hover:shadow-elevated transition-smooth">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className={`p-2 rounded-full ${config.bgColor}`}>
            <Icon className={`h-4 w-4 ${config.color}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-foreground truncate">{title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
                {course && (
                  <p className="text-xs text-muted-foreground mt-1 font-medium">{course}</p>
                )}
              </div>
              {status && (
                <Badge variant={statusConfig[status].variant} className="ml-2 shrink-0">
                  {statusConfig[status].label}
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-1 mt-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{time}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}