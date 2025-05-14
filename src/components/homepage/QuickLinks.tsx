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
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Soccer-Ball--Streamline-Ultimate" height="24" width="24"><desc>Soccer Ball Streamline Icon: https://streamlinehq.com</desc><path d="M12 0.5A11.5 11.5 0 1 0 23.5 12 11.5 11.5 0 0 0 12 0.5Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M8.855 16.859 6.9 10.828l5.113 -3.726 5.113 3.726 -1.952 6.031 -6.319 0z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m16.41 1.376 -4.397 1.878 -4.395 -1.878" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m3.315 4.462 0.426 4.822L0.54 12.968" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m2.165 17.95 4.736 1.091 2.487 4.161" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m14.647 23.194 2.479 -4.155 4.715 -1.086" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m23.462 12.939 -3.178 -3.658 0.424 -4.792" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m12.013 3.254 0 3.848" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m17.126 10.828 3.158 -1.547" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m15.174 16.859 1.952 2.18" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="m8.855 16.859 -1.954 2.182" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M3.741 9.284 6.9 10.828" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></svg>,
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
      }} className="flex space-x-3 pb-4 px-1">
          {sports.map(sport => <Link key={sport.name} to={sport.path} className={cn("flex-shrink-0 flex flex-col items-center justify-center", "min-w-[70px] h-[70px] p-2", "rounded-lg bg-card shadow-sm", "border border-border hover:bg-accent transition-all")}>
              <sport.icon className="w-5 h-5 mb-1 text-foreground" />
              <span className="text-xs text-center">{sport.name}</span>
            </Link>)}
        </div>
      </ScrollArea>
    </section>;
};
export default QuickLinks;
