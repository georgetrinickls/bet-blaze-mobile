import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Bike, Rocket, Dog, GalleryThumbnails as GolfIcon, Dumbbell, Flag } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// Define types for our sports
interface SportLink {
  name: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  path: string;
}
const QuickLinks = () => {
  const sports: SportLink[] = [{
    name: "Football",
    icon: GraduationCap,
    path: "/sports/football"
  }, {
    name: "Horse Racing",
    icon: Bike,
    path: "/sports/horse-racing"
  }, {
    name: "Tennis",
    icon: Rocket,
    path: "/sports/tennis"
  }, {
    name: "Greyhounds",
    icon: Dog,
    path: "/sports/greyhounds"
  }, {
    name: "Cricket",
    icon: Rocket,
    path: "/sports/cricket"
  }, {
    name: "Golf",
    icon: GolfIcon,
    path: "/sports/golf"
  }, {
    name: "Boxing",
    icon: Dumbbell,
    path: "/sports/boxing"
  }, {
    name: "Rugby Union",
    icon: Flag,
    path: "/sports/rugby-union"
  }];
  return <section className="mb-6">
      <h2 className="font-bold text-lg mb-3">Quick Links</h2>
      <ScrollArea className="w-full" orientation="horizontal">
        <div style={{
        paddingRight: "20px"
      }} className="flex space-x-3 pb-2 px-1">
          {sports.map(sport => {
          const SportIcon = sport.icon;
          return <Link key={sport.name} to={sport.path} className={cn("flex-shrink-0 flex flex-col items-center justify-center", "min-w-[70px] h-[70px] p-2", "rounded-lg bg-card shadow-sm", "border border-border hover:bg-accent transition-all")}>
                <SportIcon className="w-5 h-5 mb-1 text-foreground" />
                <span className="text-xs text-center">{sport.name}</span>
              </Link>;
        })}
        </div>
      </ScrollArea>
    </section>;
};
export default QuickLinks;