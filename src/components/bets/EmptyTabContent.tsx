
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface EmptyTabContentProps {
  message: string;
}

export const EmptyTabContent: React.FC<EmptyTabContentProps> = ({ message }) => {
  return (
    <Card className="bg-gray-50 border border-gray-200">
      <CardContent className="p-8 text-center">
        <p className="text-gray-600">{message}</p>
      </CardContent>
    </Card>
  );
};
