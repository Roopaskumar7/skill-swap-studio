import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageCircle, Star, ArrowRight, BookOpen, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-illustration.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  skillx
                </span>
                <br />
                Grow Together.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Connect with learners worldwide. Teach what you know, learn what you want. 
                Our platform makes skill exchange simple, fun, and rewarding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Students exchanging skills" 
                  className="w-full h-auto rounded-2xl shadow-primary animate-float"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-light rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How skillx Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to start your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-soft transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Smart Matching</CardTitle>
                <CardDescription>
                  Our algorithm finds perfect skill exchange partners based on your interests and expertise
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Easy Communication</CardTitle>
                <CardDescription>
                  Connect instantly with built-in chat, video calls, and scheduling tools
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-16 h-16 bg-accent-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Track Progress</CardTitle>
                <CardDescription>
                  Rate experiences, build your reputation, and see your skills grow over time
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose skillx?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Learn Anything</h3>
                    <p className="text-muted-foreground">
                      From coding to cooking, music to marketing - find experts in every field
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Perfect Matches</h3>
                    <p className="text-muted-foreground">
                      AI-powered matching ensures you find the right learning partner every time
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Completely Free</h3>
                    <p className="text-muted-foreground">
                      No subscriptions, no hidden fees. Trade knowledge, not money
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-light rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of learners already growing their skills
              </p>
              <div className="space-y-4">
                <Link to="/register">
                  <Button size="lg" className="w-full">
                    Create Free Account
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground">
                  ✓ No credit card required ✓ Start matching instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;