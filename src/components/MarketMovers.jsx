import React from "react";
import { Link } from "react-router-dom";

function MarketMovers() {
  return (
    <div className="flex flex-col border-gray-600  border-[0.5] rounded-lg shadow-md p-4 top-10 w-full h-full ">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-gray-600 font-bold">TOP GAINERS</h2>
      </div>
      <ul>
        {[
          {
            symbol: "PM",
            name: "Philip Morris International Inc",
            price: 131.41,
            change: "+12.45 (+10.47%)",
          },
          {
            symbol: "ARDX",
            name: "Ardelyx Inc",
            price: 5.89,
            change: "+0.78 (+15.27%)",
          },
          {
            symbol: "VTRS",
            name: "Viatris Inc",
            price: 13.52,
            change: "+1.64 (+13.81%)",
          },
          {
            symbol: "U",
            name: "Unity Software Inc",
            price: 41.72,
            change: "+4.29 (+11.46%)",
          },
          {
            symbol: "PLUG",
            name: "Plug Power Inc",
            price: 9.68,
            change: "+1.02 (+11.76%)",
          },
        ].map((stock) => (
          <li
            key={stock.symbol}
            className="flex flex-row justify-between items-center w-full border-b-2 hover:bg-cyan-100 p-2 hover:shadow-md"
          >
            <Link
              to={`/stock/${stock.symbol}`}
              className="flex flex-col items-start justify-center w-full"
            >
              <div className="text-blue-500 font-bold">{stock.symbol}</div>
              <p className="text-gray-600">{stock.name}</p>
            </Link>
            <div className="flex flex-col items-end justify-center w-full">
              <p className="text-gray-600">{stock.price}</p>
              <p className="text-green-500">{stock.change}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MarketMovers;
