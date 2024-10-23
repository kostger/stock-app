import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function MarketLosers() {
  return (
    <motion.div className="flex flex-col border-gray-600 dark:border-white  dark:bg-slate-800  border-[0.5] rounded-lg shadow-md p-4 top-10 w-full h-full ">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-gray-600 dark:text-white font-bold">TOP LOSERS</h2>
      </div>
      <motion.ul>
        {[
          {
            symbol: "XYZ",
            name: "XYZ Corp",
            price: 75.32,
            change: "-8.45 (-10.09%)",
          },
          {
            symbol: "ABC",
            name: "ABC Inc",
            price: 53.21,
            change: "-7.23 (-11.97%)",
          },
          {
            symbol: "DEF",
            name: "DEF Ltd",
            price: 24.67,
            change: "-5.12 (-9.37%)",
          },
          {
            symbol: "GHI",
            name: "GHI Solutions",
            price: 64.98,
            change: "-6.78 (-9.45%)",
          },
          {
            symbol: "JKL",
            name: "JKL Holdings",
            price: 34.12,
            change: "-4.67 (-12.03%)",
          },
        ].map((stock) => (
          <motion.li
            whileHover={{ scale: 1.02 }}
            key={stock.symbol}
            className="flex flex-row justify-between items-center w-full border-b-2  hover:bg-cyan-100 dark:hover:bg-slate-700 p-2 hover:shadow-md"
          >
            <Link
              to={`/stock/${stock.symbol}`}
              className="flex flex-col items-start justify-center w-full"
            >
              <div className="text-blue-500 font-bold">{stock.symbol}</div>
              <p className="text-gray-600 dark:text-white">{stock.name}</p>
            </Link>
            <div className="flex flex-col items-end justify-center w-full">
              <p className="text-gray-600">{stock.price}</p>
              <p className="text-red-500">{stock.change}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default MarketLosers;
