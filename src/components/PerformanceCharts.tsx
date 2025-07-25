import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { TrendingUp, Clock, Users, Star } from "lucide-react";

const weeklyData = [
  { day: "Mon", hours: 2, matches: 1 },
  { day: "Tue", hours: 1.5, matches: 0 },
  { day: "Wed", hours: 3, matches: 2 },
  { day: "Thu", hours: 2.5, matches: 1 },
  { day: "Fri", hours: 1, matches: 0 },
  { day: "Sat", hours: 4, matches: 3 },
  { day: "Sun", hours: 2, matches: 1 }
];

const monthlyProgress = [
  { month: "Jan", skillsLearned: 2, sessionsCompleted: 12 },
  { month: "Feb", skillsLearned: 3, sessionsCompleted: 18 },
  { month: "Mar", skillsLearned: 1, sessionsCompleted: 15 },
  { month: "Apr", skillsLearned: 4, sessionsCompleted: 22 },
  { month: "May", skillsLearned: 2, sessionsCompleted: 20 },
  { month: "Jun", skillsLearned: 3, sessionsCompleted: 25 }
];

const PerformanceCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Weekly Activity */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>Weekly Activity</span>
          </CardTitle>
          <CardDescription>
            Your learning hours and new matches this week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="day" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="hours" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Learning Hours"
              />
              <Line 
                type="monotone" 
                dataKey="matches" 
                stroke="hsl(var(--secondary))" 
                strokeWidth={2}
                name="New Matches"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly Progress */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-secondary" />
            <span>Monthly Progress</span>
          </CardTitle>
          <CardDescription>
            Skills learned and sessions completed over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={monthlyProgress}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }}
              />
              <Area
                type="monotone"
                dataKey="sessionsCompleted"
                stackId="1"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary) / 0.2)"
                name="Sessions"
              />
              <Area
                type="monotone"
                dataKey="skillsLearned"
                stackId="1"
                stroke="hsl(var(--secondary))"
                fill="hsl(var(--secondary) / 0.2)"
                name="Skills Learned"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceCharts;