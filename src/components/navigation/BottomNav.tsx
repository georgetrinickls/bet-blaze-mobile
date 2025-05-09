
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home, Search, FileText, Diamond, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export type TabItem = {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
};

const TAB_ITEMS: TabItem[] = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "A-Z Find",
    path: "/find",
    icon: Search,
  },
  {
    name: "Bet Slip",
    path: "/bet-slip",
    icon: FileText,
  },
  {
    name: "Casino",
    path: "/casino",
    icon: Diamond,
  },
  {
    name: "My Bets",
    path: "/my-bets",
    icon: Award,
  },
];

export function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg h-16">
      <div className="grid h-full grid-cols-5">
        {TAB_ITEMS.map((tab) => {
          const isActive = 
            tab.path === "/" 
              ? currentPath === "/" 
              : currentPath.startsWith(tab.path);

          return (
            <Link
              key={tab.name}
              to={tab.path}
              className={cn(
                "flex flex-col items-center justify-center transition-colors",
                isActive
                  ? "text-virginRed"
                  : "text-gray-600 hover:text-virginRed"
              )}
            >
              <tab.icon
                className={cn(
                  "h-5 w-5 mb-1",
                  isActive ? "text-virginRed" : "text-gray-600"
                )}
              />
              <span className="text-xs font-medium">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
