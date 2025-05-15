
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PromotionCard } from "@/components/promotions/PromotionCard";
import { 
  ChevronLeft, 
  Inbox, 
  Settings, 
  ArrowUpRight, 
  Shield, 
  HelpCircle, 
  LogOut,
  Award,
  Wallet,
  History,
  Bell
} from "lucide-react";

const AccountPage = () => {
  const navigate = useNavigate();
  
  const username = "John";
  const balance = "£125.99";
  const unreadMessages = 3;
  
  const accountTiles = [
    { 
      title: "Open Bets", 
      icon: <Award className="h-5 w-5" />, 
      count: "4", 
      path: "/my-bets",
      notifications: 0
    },
    { 
      title: "Cash Out", 
      icon: <Wallet className="h-5 w-5" />, 
      count: "2", 
      path: "/my-bets/cash-out",
      notifications: 2
    },
    { 
      title: "History", 
      icon: <History className="h-5 w-5" />, 
      count: "24", 
      path: "/my-bets/history",
      notifications: 0
    },
    { 
      title: "Bonuses", 
      icon: <Award className="h-5 w-5" />, 
      count: "1", 
      path: "/my-bets/bonuses",
      notifications: 1
    },
    { 
      title: "Live Alerts", 
      icon: <Bell className="h-5 w-5" />, 
      count: "On", 
      path: "#",
      notifications: 0
    }
  ];
  
  const promotions = [
    {
      title: "Free £10 Bet",
      category: "Football",
      valueProposition: "Bet £20, Get £10 Free Bet",
      betType: "Any" as const,
      expiryDate: "2025-05-30",
      status: "new" as const,
      imageSrc: "https://placehold.co/600x400/333/white?text=Premier+League"
    },
    {
      title: "Acca Boost",
      category: "Horse Racing",
      valueProposition: "Get 10% extra on winning accas",
      betType: "Acca" as const,
      expiryDate: "2025-05-25",
      imageSrc: "https://placehold.co/600x400/333/white?text=Horse+Racing"
    },
    {
      title: "Happy Hour",
      category: "In-Play",
      valueProposition: "Double odds between 6-7pm today",
      betType: "In-Play" as const,
      expiryDate: "2025-05-20",
      status: "expiring" as const,
      imageSrc: "https://placehold.co/600x400/333/white?text=Live+Sports"
    }
  ];
  
  const settingsItems = [
    {
      title: "Account Settings",
      icon: <Settings className="h-5 w-5" />,
      path: "#"
    },
    {
      title: "Withdraw",
      icon: <ArrowUpRight className="h-5 w-5" />,
      path: "#"
    },
    {
      title: "Safer Gambling",
      icon: <Shield className="h-5 w-5" />,
      path: "#"
    },
    {
      title: "Help & Info",
      icon: <HelpCircle className="h-5 w-5" />,
      path: "#"
    },
    {
      title: "Logout",
      icon: <LogOut className="h-5 w-5" />,
      path: "#"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-virginRedNew text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <button 
            onClick={() => navigate(-1)}
            className="p-1 rounded-full hover:bg-white/10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-semibold">Hi {username}</h1>
          <div className="relative">
            <Inbox className="h-6 w-6" />
            {unreadMessages > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 bg-white text-virginRedNew text-xs min-w-5 h-5 flex items-center justify-center rounded-full p-0"
              >
                {unreadMessages}
              </Badge>
            )}
          </div>
        </div>
        <p className="text-sm opacity-90">Welcome back to Virgin Bet</p>
      </header>
      
      {/* Main Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Balance Section */}
        <Card className="overflow-hidden bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Available Balance</p>
                <p className="text-2xl font-bold">{balance}</p>
              </div>
              <Button className="bg-virginRedNew hover:bg-virginRedNew/90">
                Deposit
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Account Tiles */}
        <div className="space-y-3">
          {accountTiles.map((tile, index) => (
            <Link to={tile.path} key={index}>
              <Card className="overflow-hidden bg-white shadow-sm hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {tile.icon}
                      <span className="font-medium">{tile.title}</span>
                      {tile.notifications > 0 && (
                        <div className="w-2 h-2 bg-virginRedNew rounded-full"></div>
                      )}
                    </div>
                    <div className="flex items-center">
                      <span className={`mr-2 ${tile.notifications > 0 ? 'font-semibold' : ''}`}>
                        {tile.count}
                      </span>
                      <ChevronLeft className="h-4 w-4 rotate-180" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* Promotions */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Promotions</h2>
            <Link to="/promotions" className="text-sm font-medium text-virginRedNew">View All</Link>
          </div>
          
          <div className="overflow-x-auto no-scrollbar -mx-4 px-4">
            <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
              {promotions.map((promo, index) => (
                <div key={index} className="w-72 flex-shrink-0">
                  <PromotionCard {...promo} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Settings */}
        <Card className="overflow-hidden bg-white shadow-sm">
          <CardContent className="p-0">
            {settingsItems.map((item, index) => (
              <Link 
                to={item.path} 
                key={index}
                className={`flex items-center justify-between p-4 hover:bg-gray-50 ${
                  index !== settingsItems.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <span className="font-medium">{item.title}</span>
                {item.icon}
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
      
      {/* Bottom Nav and Balance are already fixed in the app layout */}
    </div>
  );
};

export default AccountPage;
