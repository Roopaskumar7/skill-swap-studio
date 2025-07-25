import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Phone, Video, MoreVertical, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link, useSearchParams } from "react-router-dom";

interface Message {
  id: string;
  sender: "me" | "other";
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("user") || "1";
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "other",
      content: "Hi! I saw your profile and would love to exchange skills. I can teach you Python in exchange for React lessons!",
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: "2",
      sender: "me", 
      content: "That sounds perfect! I've been wanting to learn Python for data analysis. When would be a good time to start?",
      timestamp: new Date(Date.now() - 3000000)
    },
    {
      id: "3",
      sender: "other",
      content: "Great! How about we start with a 1-hour session this weekend? We can do 30 mins Python and 30 mins React.",
      timestamp: new Date(Date.now() - 1800000)
    },
    {
      id: "4",
      sender: "me",
      content: "Perfect! Saturday afternoon works well for me. Should we use video call?",
      timestamp: new Date(Date.now() - 900000)
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        sender: "me",
        content: newMessage,
        timestamp: new Date()
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Mock user data based on userId
  const currentUser = {
    name: userId === "1" ? "Sarah Chen" : "Marcus Johnson",
    avatar: "",
    status: "online"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Card className="h-[calc(100vh-200px)] flex flex-col border-border/50">
          {/* Chat Header */}
          <CardHeader className="border-b border-border/50 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/matches">
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </Link>
                <Avatar className="w-10 h-10">
                  <AvatarImage src={currentUser.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {currentUser.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">{currentUser.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {currentUser.status}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages Area */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.sender === 'me'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'me' 
                      ? 'text-primary-foreground/70' 
                      : 'text-muted-foreground/70'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Message Input */}
          <div className="border-t border-border/50 p-4 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button 
                onClick={sendMessage}
                disabled={!newMessage.trim()}
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button variant="outline" className="text-sm">
            📅 Schedule Session
          </Button>
          <Button variant="outline" className="text-sm">
            📁 Share Resources
          </Button>
          <Button variant="outline" className="text-sm">
            ⭐ Rate Experience
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;