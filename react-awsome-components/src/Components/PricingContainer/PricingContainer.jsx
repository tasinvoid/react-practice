import React, { useEffect, useState } from "react";
import PriceBox from "./PriceBox/PriceBox";

const PricingContainer = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetchPricing();
  }, []);
  async function fetchPricing() {
    let res = await fetch("pricing.json");
    let data = await res.json();
    setPrices(data);
  }

  return (
    <div className="flex flex-col  gap-10 px-20 items-center4 lg:flex-row">
      {prices.map((price, index) => (
        <PriceBox price={price} key={index} className="-z-10"></PriceBox>
      ))}
    </div>
  );
};

export default PricingContainer;
