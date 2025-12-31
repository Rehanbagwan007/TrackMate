import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Circle } from "lucide-react";

interface Task {
  id: string;
  title: string;
  subtitle: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggle?: (id: string) => void;
}

export function TaskList({ tasks, onToggle }: TaskListProps) {
  const completedCount = tasks.filter(t => t.completed).length;
  
  return (
    <Card className="bg-secondary text-secondary-foreground p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">Onboarding Task</h3>
        <span className="text-2xl font-bold">{completedCount}/{tasks.length}</span>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-start gap-3 cursor-pointer group"
            onClick={() => onToggle?.(task.id)}
          >
            <div className="mt-0.5">
              {task.completed ? (
                <CheckCircle2 className="h-5 w-5 text-primary" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                {task.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{task.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
