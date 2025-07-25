import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, X, BookOpen, Target, TrendingUp, Users, Calendar, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillProgress from "@/components/SkillProgress";
import PerformanceCharts from "@/components/PerformanceCharts";
import Achievements from "@/components/Achievements";
import ActivityFeed from "@/components/ActivityFeed";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [teachSkills, setTeachSkills] = useState([
    "React Development", "JavaScript", "UI/UX Design"
  ]);
  const [learnSkills, setLearnSkills] = useState([
    "Python", "Data Science", "Guitar"
  ]);
  const [newTeachSkill, setNewTeachSkill] = useState("");
  const [newLearnSkill, setNewLearnSkill] = useState("");
  const { toast } = useToast();

  const addTeachSkill = () => {
    if (newTeachSkill.trim() && !teachSkills.includes(newTeachSkill.trim())) {
      setTeachSkills([...teachSkills, newTeachSkill.trim()]);
      setNewTeachSkill("");
      toast({
        title: "Skill Added!",
        description: `Added "${newTeachSkill}" to your teaching skills.`
      });
    }
  };

  const addLearnSkill = () => {
    if (newLearnSkill.trim() && !learnSkills.includes(newLearnSkill.trim())) {
      setLearnSkills([...learnSkills, newLearnSkill.trim()]);
      setNewLearnSkill("");
      toast({
        title: "Learning Goal Added!",
        description: `Added "${newLearnSkill}" to your learning goals.`
      });
    }
  };

  const removeTeachSkill = (skill: string) => {
    setTeachSkills(teachSkills.filter(s => s !== skill));
  };

  const removeLearnSkill = (skill: string) => {
    setLearnSkills(learnSkills.filter(s => s !== skill));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-muted-foreground">
            Ready to learn something new or share your expertise?
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Progress</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Achievements</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Matches</CardTitle>
                  <Users className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    +3 from last week
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Skills Learned</CardTitle>
                  <Target className="h-4 w-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">
                    +2 this month
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
                  <BookOpen className="h-4 w-4 text-accent-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">95</div>
                  <p className="text-xs text-muted-foreground">
                    +15 this week
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rating</CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.9</div>
                  <p className="text-xs text-muted-foreground">
                    Based on 47 reviews
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Activity Feed */}
            <ActivityFeed />

            {/* Skills Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Skills I Can Teach */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span>Skills I Can Teach</span>
                  </CardTitle>
                  <CardDescription>
                    Share your expertise with other learners
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {teachSkills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="flex items-center space-x-1 pr-1"
                      >
                        <span>{skill}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0.5 hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => removeTeachSkill(skill)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add a skill you can teach..."
                      value={newTeachSkill}
                      onChange={(e) => setNewTeachSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTeachSkill()}
                      className="flex-1"
                    />
                    <Button onClick={addTeachSkill} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Skills I Want to Learn */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-secondary" />
                    <span>Skills I Want to Learn</span>
                  </CardTitle>
                  <CardDescription>
                    Set your learning goals and find teachers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {learnSkills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="flex items-center space-x-1 pr-1 border-secondary text-secondary"
                      >
                        <span>{skill}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0.5 hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => removeLearnSkill(skill)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add a skill you want to learn..."
                      value={newLearnSkill}
                      onChange={(e) => setNewLearnSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addLearnSkill()}
                      className="flex-1"
                    />
                    <Button onClick={addLearnSkill} size="sm" variant="secondary">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-8">
            <PerformanceCharts />
            
            {/* Additional Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Teaching Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Students Helped</span>
                      <span className="font-semibold">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg. Session Rating</span>
                      <span className="font-semibold">4.8/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Teaching Hours</span>
                      <span className="font-semibold">67h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Learning Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Active Goals</span>
                      <span className="font-semibold">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Completed Goals</span>
                      <span className="font-semibold">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Learning Streak</span>
                      <span className="font-semibold">12 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Network Size</span>
                      <span className="font-semibold">45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Messages Sent</span>
                      <span className="font-semibold">234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Recommendations</span>
                      <span className="font-semibold">12</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-8">
            <SkillProgress />
          </TabsContent>

          <TabsContent value="achievements" className="space-y-8">
            <Achievements />
          </TabsContent>
        </Tabs>

        {/* Quick Actions - always visible */}
        <div className="mt-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Take your next step in your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Users className="w-6 h-6" />
                  <span>Find Matches</span>
                </Button>
                <Button variant="secondary" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Calendar className="w-6 h-6" />
                  <span>Schedule Session</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Target className="w-6 h-6" />
                  <span>Set New Goal</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <BookOpen className="w-6 h-6" />
                  <span>Browse Skills</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;