
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home, Search, FileText, Diamond, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBetSlip } from "@/context/BetSlipContext";
import { Badge } from "@/components/ui/badge";

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
  const { betCount } = useBetSlip();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg pt-4 pb-2">
      <div className="grid h-full grid-cols-5">
        {TAB_ITEMS.map((tab) => {
          const isActive = 
            tab.path === "/" 
              ? currentPath === "/" 
              : currentPath.startsWith(tab.path);
          
          const isBetSlip = tab.path === "/bet-slip";
          const showBadge = isBetSlip && betCount > 0;

          return (
            <Link
              key={tab.name}
              to={tab.path}
              className={cn(
                "flex flex-col items-center justify-center transition-colors relative",
                isActive
                  ? "text-white"
                  : "text-gray-600 hover:text-virginRed"
              )}
            >
              {showBadge && (
                <Badge 
                  className="absolute -top-1 -right-1 bg-virginRed text-white text-xs min-w-5 h-5 flex items-center justify-center rounded-full p-0"
                >
                  {betCount}
                </Badge>
              )}
              {isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="bg-[#303F6B] rounded-full w-16 h-12 flex items-center justify-center"
                  ></div>
                </div>
              )}
              <div className={cn(
                "relative z-10 flex flex-col items-center justify-center",
                isActive ? "text-white" : ""
              )}>
                <tab.icon
                  className={cn(
                    "h-5 w-5 mb-1",
                    isActive ? "text-white" : "text-gray-600"
                  )}
                />
                <span className="text-xs font-medium">{tab.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
