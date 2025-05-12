import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BetSlipProvider } from "./context/BetSlipContext";

import HomePage from "./pages/HomePage";
import FindPage from "./pages/FindPage";
import BetSlipPage from "./pages/BetSlipPage";
import CasinoPage from "./pages/CasinoPage";
import LiveCasinoPage from "./pages/LiveCasinoPage";
import MyBetsPage from "./pages/MyBetsPage";
import PromotionsPage from "./pages/PromotionsPage";
import CashOutPage from "./pages/CashOutPage";
import HistoryPage from "./pages/HistoryPage";
import BonusesPage from "./pages/BonusesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BetSlipProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find" element={<FindPage />} />
            <Route path="/bet-slip" element={<BetSlipPage />} />
            <Route path="/casino" element={<CasinoPage />} />
            <Route path="/live-casino" element={<LiveCasinoPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/my-bets" element={<MyBetsPage />} />
            <Route path="/my-bets/cash-out" element={<CashOutPage />} />
            <Route path="/my-bets/history" element={<HistoryPage />} />
            <Route path="/my-bets/bonuses" element={<BonusesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </BetSlipProvider>
  </QueryClientProvider>
);

export default App;
