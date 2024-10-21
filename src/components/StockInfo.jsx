// src/components/StockInfo.jsx
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const StockInfo = ({ stockData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  if (!stockData) {
    return <div>Loading...</div>;
  }
  const filteredStocks = stockData.data.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-black">Stock Search</h1>
      <input
        type="text"
        placeholder="Search for a stock..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-gray-200 p-2 rounded-lg"
      />

      <ul className="flex flex-col justify-evenly items-start gap-3 rounded-md overflow-scroll h-[500px] w-[1200px]">
        {filteredStocks.map((stock, index) => (
          <li
            key={index}
            className="p-5 flex justify-start items-center gap-10 bg-gray-400 rounded-xl border border-gray-400 shadow-lg shadow-gray-600 w-full "
          >
            <Link
              to={`./stock/${stock.symbol}`}
              className="bg-blue-400 w-[100px] cursor-pointer text-white text-center rounded-md"
            >
              {stock.symbol}
            </Link>
            {stock.name} ({stock.exchange})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockInfo;
