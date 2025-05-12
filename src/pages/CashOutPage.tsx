import { AppLayout } from "@/components/layout/AppLayout";

const CashOutPage = () => {
  return (
    <AppLayout title="Cash Out">
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-2">Cash Out</h1>
        <p className="text-sm text-gray-600">You have no bets eligible for cash out at this time.</p>
      </div>
    </AppLayout>
  );
};

export default CashOutPage;
