import React from "react";
import { BottomNav } from "@/components/navigation/BottomNav";
import { useLocation, Link } from "react-router-dom";
import Logo from "@/components/ui/Logo";
import BalanceIcon from "@/components/ui/BalanceIcon";

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AppLayout({ children, title }: AppLayoutProps) {
  const location = useLocation();

  const isMyBetsPage = location.pathname.startsWith("/my-bets");

  const tabs = isMyBetsPage
    ? [
        { name: "Open", path: "/my-bets" },
        { name: "Cash Out", path: "/my-bets/cash-out" },
        { name: "History", path: "/my-bets/history" },
        { name: "Bonuses", path: "/my-bets/bonuses" }
      ]
    : [
        { name: "Sports", path: "/" },
        { name: "Casino", path: "/casino" },
        { name: "Live Casino", path: "/live-casino" },
        { name: "Promotions", path: "/promotions" }
      ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 bg-virginRedNew text-white shadow-md h-[136px]">
        <div className="h-2/3 px-4 flex items-center justify-between">
          <Logo className="h-8 w-auto" />
          <BalanceIcon />
        </div>

        <div className="flex h-1/3 w-full">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`flex-1 flex items-center justify-center relative text-sm ${
                isActive(tab.path) ? "font-bold" : ""
              }`}
            >
              {tab.name}
              {isActive(tab.path) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
              )}
            </Link>
          ))}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <BottomNav />
    </div>
  );
}
