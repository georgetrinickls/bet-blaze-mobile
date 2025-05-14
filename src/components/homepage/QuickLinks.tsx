import React from "react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import StreamlineIcon from "@/components/ui/StreamlineIcon";
import { cn } from "@/lib/utils";

const QuickLinks = () => {
  const sports = [
    { name: "Football", icon: "soccer-ball", path: "/sports/football" },
    { name: "Horse Racing", icon: "horse-silhouette", path: "/sports/horse-racing" },
    { name: "Tennis", icon: "tennis-ball", path: "/sports/tennis" },
    { name: "Greyhounds", icon: "dog-silhouette-running", path: "/sports/greyhounds" },
    { name: "Cricket", icon: "cricket-ball", path: "/sports/cricket" },
    { name: "Golf", icon: "golf-flag", path: "/sports/golf" },
    { name: "Boxing", icon: "boxing-glove", path: "/sports/boxing" },
    { name: "Rugby Union", icon: "rugby-ball", path: "/sports/rugby-union" }
  ];

  return (
    <section className="mb-6">
      <h2 className="font-bold text-lg mb-3">Quick Links</h2>
      <ScrollArea className="w-full" orientation="horizontal">
        <div className="flex space-x-3 pb-4 px-1 pr-5">
          {sports.map((sport) => (
            <Link
              key={sport.name}
              to={sport.path}
              className={cn(
                "flex-shrink-0 flex flex-col items-center justify-center",
                "min-w-[70px] h-[70px] p-2",
                "rounded-lg bg-card shadow-sm",
                "border border-border hover:bg-accent transition-all"
              )}
            >
              <StreamlineIcon name={sport.icon} alt={sport.name} />
              <span className="text-xs text-center">{sport.name}</span>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default QuickLinks;
