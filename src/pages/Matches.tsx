import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, User, Star, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface MatchProps {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  location: string;
  canTeach: string[];
  wantsToLearn: string[];
  matchPercentage: number;
  bio: string;
}

const matches: MatchProps[] = [
  {
    id: "1",
    name: "Sarah Chen",
    rating: 4.9,
    location: "San Francisco, CA",
    canTeach: ["Python", "Data Science", "Machine Learning"],
    wantsToLearn: ["React", "UI/UX Design"],
    matchPercentage: 95,
    bio: "Data scientist with 5+ years experience. Love teaching complex concepts in simple ways!"
  },
  {
    id: "2", 
    name: "Marcus Johnson",
    rating: 4.8,
    location: "New York, NY",
    canTeach: ["Guitar", "Music Theory", "Songwriting"],
    wantsToLearn: ["JavaScript", "Web Development"],
    matchPercentage: 88,
    bio: "Professional musician and music teacher. Excited to learn coding while sharing my musical knowledge."
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    rating: 4.7,
    location: "Austin, TX",
    canTeach: ["Spanish", "Photography", "Digital Marketing"],
    wantsToLearn: ["Python", "Data Analysis"],
    matchPercentage: 82,
    bio: "Bilingual marketing professional with a passion for visual storytelling and data insights."
  },
  {
    id: "4",
    name: "David Kim",
    rating: 4.9,
    location: "Seattle, WA", 
    canTeach: ["Korean", "Cooking", "Business Strategy"],
    wantsToLearn: ["Guitar", "Music Production"],
    matchPercentage: 76,
    bio: "Former startup founder turned chef. Always learning and teaching something new!"
  }
];

const Matches = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Your Skill Matches
          </h1>
          <p className="text-muted-foreground">
            Connect with learners who share complementary skills
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="cursor-pointer">All Matches</Badge>
                <Badge variant="outline" className="cursor-pointer">High Match %</Badge>
                <Badge variant="outline" className="cursor-pointer">Near Me</Badge>
                <Badge variant="outline" className="cursor-pointer">Recently Active</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {matches.map((match) => (
            <Card key={match.id} className="border-border/50 hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={match.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {match.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{match.name}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{match.location}</span>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{match.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-primary text-primary-foreground"
                  >
                    {match.matchPercentage}% Match
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{match.bio}</p>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Can Teach:</h4>
                  <div className="flex flex-wrap gap-1">
                    {match.canTeach.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Wants to Learn:</h4>
                  <div className="flex flex-wrap gap-1">
                    {match.wantsToLearn.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-secondary text-secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Link to={`/chat?user=${match.id}`} className="flex-1">
                    <Button className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Start Chat
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Matches
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Matches;