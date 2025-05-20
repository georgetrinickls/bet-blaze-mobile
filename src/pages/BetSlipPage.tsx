
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import BetSlipSheet from "@/components/betslip/BetSlipSheet";
import { Button } from "@/components/ui/button";

// This page now just redirects to the homepage and triggers the BetSlipSheet
const BetSlipPage = () => {
  return (
    <AppLayout title="Bet Slip">
      <div className="p-4 flex flex-col items-center justify-center h-full">
        <p className="text-gray-500 mb-4 text-center">
          The bet slip is now available as a bottom sheet.
        </p>
        <BetSlipSheet>
          <Button variant="outline">Open Bet Slip</Button>
        </BetSlipSheet>
      </div>
    </AppLayout>
  );
};

export default BetSlipPage;
