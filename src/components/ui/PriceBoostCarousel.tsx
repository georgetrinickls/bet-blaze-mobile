import React from "react";
import PriceBoost from "./PriceBoost";

const priceBoosts = [
  {
    match: "England vs Argentina",
    selections: ["England To Win To Nil", "Harry Kane To Score Or Assist"],
    oldOdds: "11/5",
    newOdds: "3/1",
    bets: 120,
  },
  {
    match: "Spain vs Germany",
    selections: ["Spain To Score 2+", "Morata Anytime Scorer"],
    oldOdds: "2/1",
    newOdds: "7/2",
    bets: 96,
  },
  {
    match: "France vs Brazil",
    selections: ["Both Teams To Score", "Mbappé First Goal"],
    oldOdds: "3/1",
    newOdds: "4/1",
    bets: 134,
  },
];

const PriceBoostCarousel: React.FC = () => {
  return (
    <section className="mb-6">
      <h2 className="font-bold text-lg mb-3">Price Boosts</h2>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-4 px-1 pr-4">
          {priceBoosts.map((boost, idx) => (
            <PriceBoost
              key={idx}
              match={boost.match}
              selections={boost.selections}
              oldOdds={boost.oldOdds}
              newOdds={boost.newOdds}
              bets={boost.bets}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceBoostCarousel;
