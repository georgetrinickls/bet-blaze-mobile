import React from "react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const QuickLinks = () => {
  const sports = [
    { name: "Boxing", icon: "boxing.svg", path: "/sports/boxing" },
    { name: "Cricket", icon: "cricket.svg", path: "/sports/cricket" },
    { name: "Football", icon: "football.svg", path: "/sports/football" },
    { name: "Golf", icon: "golf.svg", path: "/sports/golf" },
    { name: "Greyhounds", icon: "greyhounds.svg", path: "/sports/greyhounds" },
    { name: "Horseracing", icon: "horseracing.svg", path: "/sports/horse-racing" },
    { name: "Rugby Union", icon: "rugby-union.svg", path: "/sports/rugby-union" },
    { name: "Tennis", icon: "tennis.svg", path: "/sports/tennis" }
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
              <img
                src={`/icons/streamline/${sport.icon}`}
                alt={sport.name}
                className="w-5 h-5 mb-1 object-contain"
              />
              <span className="text-xs text-center">{sport.name}</span>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default QuickLinks;
