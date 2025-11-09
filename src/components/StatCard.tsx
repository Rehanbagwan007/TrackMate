import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  variant?: "default" | "success" | "warning" | "primary";
  className?: string;
}

const variantStyles = {
  default: "bg-muted/50 text-muted-foreground",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  primary: "bg-primary/10 text-primary",
};

export function StatCard({ title, value, subtitle, icon, variant = "default", className }: StatCardProps) {
  return (
    <Card className={cn("shadow-card hover:shadow-elevated transition-all duration-300", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="space-y-1.5">
            <p className="text-sm text-muted-foreground font-medium tracking-wide">{title}</p>
            <div className="flex items-baseline space-x-2">
              <p className="text-3xl font-bold text-foreground tracking-tight">{value}</p>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </div>
          <div className={cn(
            "p-3.5 rounded-2xl",
            variantStyles[variant]
          )}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}