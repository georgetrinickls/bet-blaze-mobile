import { AppLayout } from "@/components/layout/AppLayout";

const CashOutPage = () => {
  return (
    <AppLayout title="Cash Out">
      <div className="p-4">
        <h1 className="text-xl font-bold">Cash Out</h1>
        <p>You have no bets eligible for cash out.</p>
      </div>
    </AppLayout>
  );
};

export default CashOutPage;
