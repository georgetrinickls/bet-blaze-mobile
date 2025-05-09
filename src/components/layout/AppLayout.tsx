
import React from "react";
import { BottomNav } from "@/components/navigation/BottomNav";
import { Wallet } from "lucide-react";
import Logo from "@/components/ui/Logo";

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AppLayout({ children, title }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 bg-virginRed text-white shadow-md">
        <div className="h-14 px-4 flex items-center justify-between">
          <Logo className="h-8 w-auto" />
          <h1 className="text-lg font-bold">{title}</h1>
          <div className="bg-white rounded-full px-4 py-1 flex items-center">
            <Wallet className="h-4 w-4 text-virginRed mr-1" />
            <span className="text-virginRed font-bold">£125.99</span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto no-scrollbar pb-20">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
