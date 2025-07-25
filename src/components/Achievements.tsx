import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Zap, Clock, Users, BookOpen, Award } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  earned: boolean;
  progress?: number;
  total?: number;
  earnedDate?: string;
}

const achievements: Achievement[] = [
  {
    id: "1",
    title: "First Connection",
    description: "Made your first skill exchange match",
    icon: <Users className="w-6 h-6" />,
    earned: true,
    earnedDate: "2024-01-15"
  },
  {
    id: "2", 
    title: "Quick Learner",
    description: "Completed 5 learning sessions",
    icon: <Zap className="w-6 h-6" />,
    earned: true,
    earnedDate: "2024-02-03"
  },
  {
    id: "3",
    title: "Time Master",
    description: "Accumulated 50 learning hours",
    icon: <Clock className="w-6 h-6" />,
    earned: false,
    progress: 35,
    total: 50
  },
  {
    id: "4",
    title: "Skill Collector",
    description: "Learn 10 different skills",
    icon: <Target className="w-6 h-6" />,
    earned: false,
    progress: 3,
    total: 10
  },
  {
    id: "5",
    title: "Super Teacher",
    description: "Help 20 people learn new skills",
    icon: <BookOpen className="w-6 h-6" />,
    earned: false,
    progress: 8,
    total: 20
  },
  {
    id: "6",
    title: "Five Star Teacher",
    description: "Maintain 5-star rating for 10 sessions",
    icon: <Star className="w-6 h-6" />,
    earned: true,
    earnedDate: "2024-03-10"
  }
];

const Achievements = () => {
  const earnedCount = achievements.filter(a => a.earned).length;
  const totalCount = achievements.length;

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-accent-foreground" />
          <span>Achievements</span>
          <Badge variant="secondary" className="ml-auto">
            {earnedCount}/{totalCount}
          </Badge>
        </CardTitle>
        <CardDescription>
          Track your milestones and unlock new badges
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                achievement.earned
                  ? 'bg-accent/20 border-accent-foreground/30 hover:bg-accent/30'
                  : 'bg-muted/20 border-border hover:bg-muted/30'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-full ${
                  achievement.earned 
                    ? 'bg-accent-foreground/10 text-accent-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {achievement.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium text-sm ${
                    achievement.earned ? 'text-accent-foreground' : 'text-muted-foreground'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {achievement.description}
                  </p>
                  {achievement.earned ? (
                    <Badge variant="secondary" className="text-xs mt-2">
                      <Award className="w-3 h-3 mr-1" />
                      Earned {achievement.earnedDate}
                    </Badge>
                  ) : achievement.progress !== undefined ? (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Progress</span>
                        <span>{achievement.progress}/{achievement.total}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="bg-primary rounded-full h-1.5 transition-all duration-300"
                          style={{ width: `${(achievement.progress! / achievement.total!) * 100}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <Badge variant="outline" className="text-xs mt-2">
                      Not Started
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievements;