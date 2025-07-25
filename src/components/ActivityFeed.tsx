import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calendar, Clock, Video, BookOpen, Star } from "lucide-react";

interface ActivityItem {
  id: string;
  type: "session" | "match" | "message" | "achievement";
  title: string;
  description: string;
  timestamp: string;
  user?: {
    name: string;
    avatar?: string;
  };
  skill?: string;
  rating?: number;
}

const recentActivity: ActivityItem[] = [
  {
    id: "1",
    type: "session",
    title: "Python Session Completed",
    description: "1-hour data structures lesson with Sarah",
    timestamp: "2 hours ago",
    user: {
      name: "Sarah Chen",
      avatar: ""
    },
    skill: "Python",
    rating: 5
  },
  {
    id: "2",
    type: "match",
    title: "New Match Found",
    description: "David wants to learn React in exchange for Korean lessons",
    timestamp: "5 hours ago",
    user: {
      name: "David Kim",
      avatar: ""
    },
    skill: "Korean"
  },
  {
    id: "3",
    type: "achievement",
    title: "Achievement Unlocked!",
    description: "Earned 'Five Star Teacher' badge",
    timestamp: "1 day ago"
  },
  {
    id: "4",
    type: "message",
    title: "New Message",
    description: "Elena shared some great photography resources",
    timestamp: "1 day ago",
    user: {
      name: "Elena Rodriguez",
      avatar: ""
    }
  },
  {
    id: "5",
    type: "session",
    title: "Guitar Lesson Scheduled",
    description: "Upcoming lesson with Marcus tomorrow at 3 PM",
    timestamp: "2 days ago",
    user: {
      name: "Marcus Johnson",
      avatar: ""
    },
    skill: "Guitar"
  }
];

const upcomingSessions = [
  {
    id: "1",
    title: "Advanced React Patterns",
    student: "Sarah Chen",
    time: "Today, 2:00 PM",
    duration: "1 hour",
    type: "teaching"
  },
  {
    id: "2",
    title: "Guitar Fundamentals",
    teacher: "Marcus Johnson", 
    time: "Tomorrow, 3:00 PM",
    duration: "45 mins",
    type: "learning"
  },
  {
    id: "3",
    title: "Python Data Analysis",
    teacher: "Sarah Chen",
    time: "Friday, 10:00 AM", 
    duration: "1.5 hours",
    type: "learning"
  }
];

const ActivityFeed = () => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "session":
        return <Video className="w-4 h-4" />;
      case "match":
        return <BookOpen className="w-4 h-4" />;
      case "message":
        return <MessageCircle className="w-4 h-4" />;
      case "achievement":
        return <Star className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recent Activity */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>Recent Activity</span>
          </CardTitle>
          <CardDescription>
            Your latest learning interactions and achievements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="p-2 bg-primary/10 rounded-full text-primary flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm text-foreground">{activity.title}</h4>
                  <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                <div className="flex items-center space-x-2 mt-2">
                  {activity.user && (
                    <div className="flex items-center space-x-1">
                      <Avatar className="w-5 h-5">
                        <AvatarImage src={activity.user.avatar} />
                        <AvatarFallback className="text-xs bg-primary/10 text-primary">
                          {activity.user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{activity.user.name}</span>
                    </div>
                  )}
                  {activity.skill && (
                    <Badge variant="outline" className="text-xs">
                      {activity.skill}
                    </Badge>
                  )}
                  {activity.rating && (
                    <div className="flex items-center text-xs">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{activity.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-secondary" />
            <span>Upcoming Sessions</span>
          </CardTitle>
          <CardDescription>
            Your scheduled learning and teaching sessions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingSessions.map((session) => (
            <div key={session.id} className="p-3 border border-border/50 rounded-lg hover:bg-muted/20 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-sm text-foreground">{session.title}</h4>
                <Badge variant={session.type === "teaching" ? "secondary" : "outline"} className="text-xs">
                  {session.type === "teaching" ? "Teaching" : "Learning"}
                </Badge>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{session.time}</span>
                  <span>•</span>
                  <span>{session.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-3 h-3" />
                  <span>
                    {session.type === "teaching" ? `with ${session.student}` : `by ${session.teacher}`}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2 mt-3">
                <Button size="sm" variant="outline" className="text-xs">
                  <Video className="w-3 h-3 mr-1" />
                  Join
                </Button>
                <Button size="sm" variant="ghost" className="text-xs">
                  Reschedule
                </Button>
              </div>
            </div>
          ))}
          
          <Button variant="outline" className="w-full text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule New Session
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivityFeed;