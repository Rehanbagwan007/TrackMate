import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/ProgressRing";
import { WeekChart } from "@/components/WeekChart";
import { TaskList } from "@/components/TaskList";
import { CheckCircle, Users, BookOpen, TrendingUp, Play, Pause, Calendar, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const weekData = [
  { day: 'M', hours: 6 },
  { day: 'T', hours: 4 },
  { day: 'W', hours: 7 },
  { day: 'Th', hours: 5 },
  { day: 'F', hours: 8 },
  { day: 'S', hours: 3 },
];

const initialTasks = [
  { id: '1', title: 'Complete Profile', subtitle: 'Add bio and photo', completed: true },
  { id: '2', title: 'Team Meeting', subtitle: 'Sep 15, 10:00', completed: true },
  { id: '3', title: 'Project Update', subtitle: 'Review and approve', completed: false },
  { id: '4', title: 'Q1 Goals', subtitle: 'Set quarterly targets', completed: false },
  { id: '5', title: 'Policy Review', subtitle: 'Aug 12, 18:30', completed: false },
];

const Index = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Welcome Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight">Welcome in, Student</h1>
            <p className="text-muted-foreground mt-1">Track your learning journey</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2">
          <Badge variant="default" className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
            Interviews
          </Badge>
          <Badge variant="outline" className="px-4 py-2 rounded-full">
            Hired
          </Badge>
          <Badge variant="outline" className="px-4 py-2 rounded-full">
            Project Time
          </Badge>
          <Badge variant="outline" className="px-4 py-2 rounded-full">
            Output
          </Badge>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stats Cards - Top Row */}
          <Card className="p-6 col-span-1 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold text-foreground">78</p>
                <p className="text-sm text-muted-foreground mt-1">Employee</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 col-span-1 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold text-foreground">56</p>
                <p className="text-sm text-muted-foreground mt-1">Hirings</p>
              </div>
              <div className="p-3 bg-success/10 rounded-2xl">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
            </div>
          </Card>

          <Card className="p-6 col-span-1 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold text-foreground">203</p>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="p-3 bg-warning/10 rounded-2xl">
                <BookOpen className="h-6 w-6 text-warning" />
              </div>
            </div>
          </Card>

          {/* Profile Card */}
          <Card className="p-6 row-span-2 col-span-1 bg-gradient-card">
            <div className="flex flex-col h-full">
              <Avatar className="h-32 w-32 mx-auto mb-4 ring-4 ring-primary/20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-2xl bg-primary/10">JS</AvatarFallback>
              </Avatar>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-foreground">John Student</h3>
                <p className="text-sm text-muted-foreground">Computer Science</p>
              </div>
              <div className="mt-auto">
                <div className="bg-secondary/50 rounded-2xl p-3 text-center">
                  <p className="text-2xl font-bold text-foreground">$1,200</p>
                  <p className="text-xs text-muted-foreground">Scholarship</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Progress Card */}
          <Card className="p-6 col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-semibold text-foreground mb-1">Progress</h3>
              <p className="text-xs text-muted-foreground mb-4">6.1 h<span className="ml-1">Work Time</span></p>
              <WeekChart data={weekData} />
              <p className="text-xs text-muted-foreground mt-3">This week</p>
            </div>
          </Card>

          {/* Time Tracker Card */}
          <Card className="p-6 col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-semibold text-foreground mb-4">Time tracker</h3>
              <ProgressRing progress={65} size={140} label="Work Time" showValue={false} />
              <div className="mt-4 text-center">
                <p className="text-3xl font-bold text-foreground">02:35</p>
                <p className="text-xs text-muted-foreground">Work Time</p>
              </div>
              <div className="flex gap-2 mt-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-12 w-12"
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                >
                  {isTimerRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                  <span className="h-3 w-3 bg-foreground rounded-full" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Onboarding Progress */}
          <Card className="p-6 col-span-1">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-foreground">Onboarding</h3>
                <span className="text-2xl font-bold text-foreground">18%</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="h-2 bg-primary rounded-full flex-[3]" />
                  <div className="h-2 bg-secondary rounded-full flex-[2]" />
                  <div className="h-2 bg-muted rounded-full flex-[1]" />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-2 bg-primary rounded-full flex-[5]" />
                  <div className="h-2 bg-muted rounded-full flex-[2]" />
                </div>
              </div>
              <div className="text-center mt-auto">
                <p className="text-xs text-muted-foreground">3/5 Tasks Complete</p>
              </div>
            </div>
          </Card>

          {/* Calendar/Schedule */}
          <Card className="p-6 col-span-1 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">September 2024</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">August</Button>
                <Button variant="ghost" size="sm">October</Button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-3">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-xs text-center font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {[22, 23, 24, 25, 26, 27, 28].map(day => (
                <button
                  key={day}
                  className="aspect-square rounded-lg hover:bg-accent flex items-center justify-center text-sm font-medium transition-colors"
                >
                  {day}
                </button>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-xl">
                <div className="h-12 w-1 bg-primary rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">Weekly Team Sync</p>
                  <p className="text-xs text-muted-foreground">Sep 24, 14:00 - 15:00</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2].map(i => (
                    <Avatar key={i} className="h-7 w-7 border-2 border-background">
                      <AvatarFallback className="text-xs">U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Task List - Dark Card */}
          <Card className="col-span-1 row-span-2 bg-secondary text-secondary-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Onboarding Task</h3>
                <span className="text-2xl font-bold">{tasks.filter(t => t.completed).length}/{tasks.length}</span>
              </div>
              
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start gap-3 cursor-pointer group"
                    onClick={() => toggleTask(task.id)}
                  >
                    <div className="mt-0.5">
                      <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        task.completed ? 'bg-primary border-primary' : 'border-muted-foreground group-hover:border-primary'
                      }`}>
                        {task.completed && <CheckCircle className="h-3 w-3 text-primary-foreground" />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${task.completed ? 'line-through opacity-60' : ''}`}>
                        {task.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{task.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
