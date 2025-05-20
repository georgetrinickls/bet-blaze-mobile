
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Mail, ChevronRight, Settings, ArrowUpRight, Shield, HelpCircle, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <AppLayout hideHeader>
      {/* Custom header */}
      <div className="bg-virginRedNew text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="text-white p-0 mr-2" onClick={handleBack}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-bold">Hi User</h1>
          </div>
          <div className="relative">
            <Mail className="h-6 w-6" />
            <Badge className="absolute -top-1 -right-1 bg-white text-virginRedNew text-xs min-w-5 h-5 flex items-center justify-center rounded-full p-0">
              2
            </Badge>
          </div>
        </div>
        <p className="text-sm opacity-80">Welcome back to Virgin Bet</p>
      </div>
      
      {/* Balance section */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Available Balance</p>
            <h2 className="text-2xl font-bold">£125.99</h2>
          </div>
          <Button className="bg-virginRed hover:bg-virginRed/90">Deposit</Button>
        </div>
      </div>
      
      {/* Account Summary Tiles */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold mb-2">Account Summary</h3>
        
        <Card>
          <CardContent className="p-0">
            {["Open Bets", "Cash Out", "History", "Bonuses", "Live Alerts"].map((item, index) => (
              <React.Fragment key={item}>
                <div className="flex items-center justify-between p-4 relative">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-virginRed">{item.charAt(0)}</span>
                    </div>
                    <span>{item}</span>
                    {item === "Bonuses" && (
                      <Badge className="ml-2 bg-virginRed text-xs">2</Badge>
                    )}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <span className="mr-2 text-sm">{item === "Open Bets" ? "4" : ""}</span>
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
                {index < 4 && <Separator />}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
        
        {/* Promotions Section */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Promotions</h3>
            <Button variant="link" className="text-virginRed p-0 h-auto">View All</Button>
          </div>
          
          <div className="flex overflow-x-auto space-x-3 pb-2 -mx-4 px-4">
            {[1, 2, 3].map((promo) => (
              <Card key={promo} className="min-w-[230px] overflow-hidden flex-shrink-0">
                <CardContent className="p-0">
                  <Badge className="absolute top-2 left-2 bg-virginRed">Football</Badge>
                  <div className="h-28 bg-gray-200"></div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm">Premier League Offer</h4>
                    <Button variant="link" className="text-xs text-virginRed p-0 h-auto mt-1">Terms apply</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Quick Actions */}
        <h3 className="font-semibold mt-4 mb-2">Settings</h3>
        <Card>
          <CardContent className="p-0">
            {[
              { label: "Account Settings", icon: Settings },
              { label: "Withdraw", icon: ArrowUpRight },
              { label: "Safer Gambling", icon: Shield },
              { label: "Help & Info", icon: HelpCircle },
              { label: "Logout", icon: LogOut }
            ].map((item, index, arr) => (
              <React.Fragment key={item.label}>
                <div className="flex items-center justify-between p-4">
                  <span>{item.label}</span>
                  <item.icon className="h-5 w-5 text-gray-500" />
                </div>
                {index < arr.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AccountPage;
