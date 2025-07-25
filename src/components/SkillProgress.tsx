import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Clock, TrendingUp } from "lucide-react";

interface SkillProgressProps {
  skill: string;
  progress: number;
  totalHours: number;
  level: string;
  nextMilestone: string;
}

const skillsProgress: SkillProgressProps[] = [
  {
    skill: "Python",
    progress: 75,
    totalHours: 45,
    level: "Intermediate",
    nextMilestone: "Complete Data Structures Module"
  },
  {
    skill: "Guitar",
    progress: 60,
    totalHours: 30,
    level: "Beginner",
    nextMilestone: "Learn 10 Chords"
  },
  {
    skill: "Data Science",
    progress: 40,
    totalHours: 20,
    level: "Beginner",
    nextMilestone: "First Project Completion"
  }
];

const SkillProgress = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Target className="w-5 h-5 text-secondary" />
          <span>Learning Progress</span>
        </CardTitle>
        <CardDescription>
          Track your skill development journey
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {skillsProgress.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-foreground">{skill.skill}</h4>
                <p className="text-sm text-muted-foreground">
                  {skill.totalHours} hours • {skill.level}
                </p>
              </div>
              <Badge variant="outline" className="text-xs">
                {skill.progress}%
              </Badge>
            </div>
            <Progress value={skill.progress} className="h-2" />
            <div className="flex items-center text-xs text-muted-foreground">
              <Target className="w-3 h-3 mr-1" />
              <span>Next: {skill.nextMilestone}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SkillProgress;