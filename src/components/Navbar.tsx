import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

interface NavbarProps {
  isAuthenticated?: boolean;
}

const Navbar = ({ isAuthenticated = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/7fad9778-6421-4fcd-bcb5-9aa547565a53.png" 
                alt="SkillSwap Logo" 
                className="w-8 h-8 rounded-full"
              />
              <span className="text-xl font-bold text-foreground">skillx</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button 
                    variant={isActive("/dashboard") ? "default" : "ghost"}
                    className="text-sm"
                  >
                    Dashboard
                  </Button>
                </Link>
                <Link to="/matches">
                  <Button 
                    variant={isActive("/matches") ? "default" : "ghost"}
                    className="text-sm"
                  >
                    Matches
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button 
                    variant={isActive("/chat") ? "default" : "ghost"}
                    className="text-sm"
                  >
                    Chat
                  </Button>
                </Link>
                <Button variant="outline" className="text-sm">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-sm">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" className="text-sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="block">
                  <Button 
                    variant={isActive("/dashboard") ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    Dashboard
                  </Button>
                </Link>
                <Link to="/matches" className="block">
                  <Button 
                    variant={isActive("/matches") ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    Matches
                  </Button>
                </Link>
                <Link to="/chat" className="block">
                  <Button 
                    variant={isActive("/chat") ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    Chat
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="block">
                  <Button variant="ghost" className="w-full justify-start">
                    Login
                  </Button>
                </Link>
                <Link to="/register" className="block">
                  <Button variant="default" className="w-full justify-start">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;