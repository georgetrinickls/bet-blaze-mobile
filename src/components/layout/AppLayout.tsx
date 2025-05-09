
import React from "react";
import { BottomNav } from "@/components/navigation/BottomNav";

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AppLayout({ children, title }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 bg-virginRed text-white shadow-md">
        <div className="h-14 px-4 flex items-center justify-center">
          <h1 className="text-lg font-bold">{title}</h1>
        </div>
      </header>

      <main className="flex-1 overflow-auto no-scrollbar pb-20">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
