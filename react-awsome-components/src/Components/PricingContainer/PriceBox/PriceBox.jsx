import { ChartNoAxesCombined, Menu } from "lucide-react";
import React from "react";

const PriceBox = ({ price }) => {
  return (
    <div className="bg-gray-900 flex flex-col p-10 m-5 rounded-2xl min-w-100 max-w-150">
      <h3>Charts Premium</h3>
      <h1 className="text-purple-400 py-5">{price.name}</h1>
      <p className="pt-bold text-lg">$0 for 1 month</p>
      <p className="text-gray-400 pb-5 border-b border-purple-400">
        ${price.price} / month after
      </p>
      {price.features.map((feature, index) => (
        <div className="flex gap-3" key={index}>
          <ChartNoAxesCombined className="w-3"></ChartNoAxesCombined>
          <p>{feature}</p>
        </div>
      ))}
      <button className="rounded-4xl bg-purple-400 py-4 text-black text-2xl pt-bolder my-7 hover:bg-purple-600 focus:outline-2 focus:outline-offset-2 focus:outline-purple-400 active:bg-purple-700">
        Try 1 month for $0
      </button>
      <p className="text-[10px]  text-center text-gray-400">
        $0 for 1 month, then $11.99 per month after. Offer only available if you
        haven't tried Premium before.<a>Terms apply.</a>{" "}
      </p>
    </div>
  );
};

export default PriceBox;
