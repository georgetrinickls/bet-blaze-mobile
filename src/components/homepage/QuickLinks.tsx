
import React from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Bike,
  Tennis, 
  Dog, 
  GalleryThumbnails as GolfIcon, 
  Dumbbell,
  Flag
} from "lucide-react";

// Define types for our sports
interface SportLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

const QuickLinks = () => {
  const sports: SportLink[] = [
    { name: "Football", icon: GraduationCap, path: "/sports/football" },
    { name: "Horse Racing", icon: Bike, path: "/sports/horse-racing" },
    { name: "Tennis", icon: Tennis, path: "/sports/tennis" },
    { name: "Greyhounds", icon: Dog, path: "/sports/greyhounds" },
    { name: "Cricket", icon: Tennis, path: "/sports/cricket" },
    { name: "Golf", icon: GolfIcon, path: "/sports/golf" },
    { name: "Boxing", icon: Dumbbell, path: "/sports/boxing" },
    { name: "Rugby Union", icon: Flag, path: "/sports/rugby-union" },
  ];

  return (
    <section className="mb-6">
      <h2 className="font-bold text-lg mb-3">Quick Links</h2>
      <div className="grid grid-cols-4 gap-3">
        {sports.map((sport) => (
          <Link
            key={sport.name}
            to={sport.path}
            className="flex flex-col items-center justify-center w-[60px] h-[60px] rounded-lg bg-white bg-opacity-5 border border-gray-700 hover:bg-opacity-10 transition-all"
          >
            <sport.icon className="w-5 h-5 mb-1 text-virginRed" />
            <span className="text-[10px] text-center">{sport.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
