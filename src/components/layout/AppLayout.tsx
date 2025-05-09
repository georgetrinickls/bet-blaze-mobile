
import React from "react";
import { BottomNav } from "@/components/navigation/BottomNav";
import { Wallet } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { Link, useLocation } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AppLayout({ children, title }: AppLayoutProps) {
  const location = useLocation();
  
  // Define navigation tabs
  const tabs = [
    { name: "Sports", path: "/" },
    { name: "Casino", path: "/casino" },
    { name: "Live Casino", path: "/live-casino" },
    { name: "Promotions", path: "/promotions" }
  ];

  // Function to check if a tab is active
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 bg-virginRedNew text-white shadow-md h-[136px]">
        <div className="h-2/3 px-4 flex items-center justify-between">
          <Logo className="h-8 w-auto" />
          <div className="bg-white rounded-full px-4 py-1 flex items-center">
            <Wallet className="h-4 w-4 text-virginRedNew mr-1" />
            <span className="text-virginRedNew font-bold text-sm">£125.99</span>
          </div>
        </div>
        
        {/* Navigation tabs - updated to stretch full width with reduced font size */}
        <div className="flex h-1/3 w-full">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`flex-1 flex items-center justify-center relative text-sm ${isActive(tab.path) ? "font-bold" : ""}`}
            >
              {tab.name}
              {isActive(tab.path) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
              )}
            </Link>
          ))}
        </div>
      </header>

      <main className="flex-1 overflow-auto no-scrollbar pb-20">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
