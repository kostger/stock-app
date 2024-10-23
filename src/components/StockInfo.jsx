import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchStockData } from "../api/twelveData";

const StockInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [focus, setFocus] = useState(false);
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStockData = async () => {
      try {
        setLoading(true);
        const data = await fetchStockData();
        setStockData(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getStockData();
  }, []);

  const filteredStocks =
    stockData?.data?.filter(
      (stock) =>
        stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    if (!searchTerm) {
      setFocus(false);
    }
  };

  const handleLinkClick = () => {
    setFocus(false); // Close the dropdown
  };

  return (
    <div className="w-full  p-4">
      <input
        type="text"
        placeholder="Search for a stock or symbol..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="bg-white p-2 rounded-lg w-full max-w-xs  md:max-w-md"
      />
      {focus && searchTerm && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col top-12 left-1.3 z-50 mt-1 gap-3 overflow-y-auto w-3/5 h-[500px] md:max-w-md max-w-3xl absolute bg-white border rounded-b-lg "
        >
          {filteredStocks.slice(0, 30).map((stock, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-4 flex justify-between items-center rounded-xl border w-full hover:bg-gray-200"
            >
              <Link
                to={`./stock/${stock.symbol}`}
                onClick={handleLinkClick} // Call the function to close the dropdown
                className="w-full flex flex-row justify-between items-center"
              >
                <div className="flex flex-col justify-start items-start">
                  <div className="text-blue-600 text-center rounded-md">
                    {stock.symbol}
                  </div>
                  <span className="w-2/3 line-clamp-6 text-left ">
                    {stock.name}...
                  </span>
                </div>
                <div>{stock.exchange}</div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default StockInfo;
