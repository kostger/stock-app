import React, { useState } from "react";
import { Link } from "react-router-dom";

const StockInfo = ({ stockData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [focus, setFocus] = useState(false);

  if (!stockData) {
    return <div>Loading...</div>;
  }

  const filteredStocks = stockData.data.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    // Hide the list if searchTerm is empty when the input loses focus
    if (!searchTerm) {
      setFocus(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 relative">
      <h1 className="font-bold text-3xl text-black text-center mb-4">
        Stock Search
      </h1>
      <input
        type="text"
        placeholder="Search for a stock or symbol..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="bg-gray-200 p-2 rounded-lg w-full max-w-xs mb-4"
      />
      {focus && searchTerm && (
        <ul className="flex flex-col top-full mt-1 gap-3 overflow-y-auto w-[400px] h-[500px] max-w-3xl absolute bg-white border border-black rounded-xl">
          {filteredStocks.slice(0, 10).map(
            (
              stock,
              index // Limit to first 10 items
            ) => (
              <li
                key={index}
                className="p-4 flex justify-between items-center bg-gray-200 rounded-xl border border-gray-400 w-full"
              >
                <Link
                  to={`./stock/${stock.symbol}`}
                  className="bg-blue-400 w-[100px] cursor-pointer text-white text-center rounded-md"
                >
                  {stock.symbol}
                </Link>
                <span className="text-left">
                  {stock.name} ({stock.exchange})
                </span>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default StockInfo;
