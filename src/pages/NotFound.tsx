
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <AppLayout title="Page Not Found">
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center p-4">
          <h1 className="text-4xl font-bold mb-4 text-virginRed">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
          <Button asChild className="bg-virginRed hover:bg-virginRed/90">
            <Link to="/my-bets">Return to My Bets</Link>
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFound;
