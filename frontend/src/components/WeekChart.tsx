import { Card } from "@/components/ui/card";

interface WeekChartProps {
  data: {
    day: string;
    hours: number;
  }[];
  maxHours?: number;
}

export function WeekChart({ data, maxHours = 10 }: WeekChartProps) {
  return (
    <div className="flex items-end justify-between h-32 gap-2">
      {data.map((item, index) => {
        const height = (item.hours / maxHours) * 100;
        const isHighest = item.hours === Math.max(...data.map(d => d.hours));
        
        return (
          <div key={index} className="flex flex-col items-center flex-1 gap-2">
            <div className="relative w-full flex items-end justify-center" style={{ height: '100px' }}>
              <div
                className={`w-full rounded-t-lg transition-all duration-500 ${
                  isHighest ? 'bg-primary' : 'bg-secondary'
                }`}
                style={{ height: `${height}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground font-medium">{item.day}</span>
          </div>
        );
      })}
    </div>
  );
}
