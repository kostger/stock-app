import React, { useEffect, useState } from "react";
import { fetchIndividualStockData } from "../api/twelveData";
import { useParams } from "react-router-dom";
import { StockGraph } from "../components/StockGraph";
import StockDataDisplay from "../components/StockDataDisplay";
import { postWatchlistData } from "../api/watchlistData";
import AddIcon from "@mui/icons-material/Add";
import { fetchStockQuote } from "../api/twelveData";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";

function IndividualStockInfo() {
  const { symbol } = useParams();
  const [data, setData] = useState(null);
  const [quoteData, setQuoteData] = useState(null);
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  useEffect(() => {
    const getStockData = async () => {
      try {
        const data = await fetchIndividualStockData(symbol);
        setData(data);
        const quoteData = await fetchStockQuote(symbol);
        setQuoteData(quoteData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    getStockData();
  }, [symbol]);

  const handleAddToWatchlist = async () => {
    postWatchlistData({
      symbol: data.meta.symbol,
      open: data.values[0].open,
      close: data.values[0].close,
      high: data.values[0].high,
      low: data.values[0].low,
    });
    setAddedToWatchlist(true);
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="p-4 max-w-screen-md mx-auto ">
        {data && quoteData ? (
          <>
            <div className="flex flex-col justify-center items-center mb-4 border rounded-lg shadow-lg bg-gray-100 dark:bg-slate-700 mt-4 p-4 ">
              <h1 className="text-2xl md:text-4xl font-bold">
                {quoteData.name}
              </h1>
              <div className="flex flex-col justify-center items-center text-center">
                <p className="text-lg md:text-xl">
                  {data.meta.exchange} - {data.meta.currency}
                </p>
                <p className="text-lg md:text-xl">
                  Date: {new Date(data.values[0].datetime).toLocaleDateString()}
                </p>
                <p className="text-md md:text-lg">
                  Open: {data.values[0].open} | High: {data.values[0].high} |
                  Close: {data.values[0].close} | Volume:{" "}
                  {data.values[0].volume}
                </p>
                <div className="flex justify-center items-center gap-10">
                  <p
                    style={{
                      color: parseFloat(quoteData.change) > 0 ? "green" : "red",
                    }}
                  >
                    Change: {parseFloat(quoteData.change)}
                  </p>
                  <p
                    style={{
                      color: quoteData.is_market_open ? "green" : "black",
                    }}
                  >
                    Market: {quoteData.is_market_open ? "Open" : "Closed"}
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              className="flex justify-between items-center p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-xl md:text-2xl font-semibold mb-2"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Stock Graph Data
              </motion.h1>

              <motion.button
                onClick={handleAddToWatchlist}
                className={`${
                  addedToWatchlist ? "bg-green-500" : "bg-blue-500"
                } text-white px-4 py-2 rounded-md flex items-center gap-2`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <motion.div
                  key={addedToWatchlist ? "check" : "add"}
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {addedToWatchlist ? <CheckIcon /> : <AddIcon />}
                </motion.div>
                Add To Watchlist
              </motion.button>
            </motion.div>
            <StockGraph data={data} />
            <div className="mt-4 p-4 border rounded-lg shadow-lg bg-gray-100 dark:bg-slate-700 ">
              <h2 className="text-lg md:text-xl font-semibold">
                52-Week Range
              </h2>
              <p className="text-md md:text-lg">
                <span className="font-bold">52-Week High:</span>{" "}
                {quoteData.fifty_two_week.high} |
                <span className="font-bold"> 52-Week Low:</span>{" "}
                {quoteData.fifty_two_week.low}
              </p>
            </div>
            <div>Ask the bot</div>
            <h1 className="text-xl md:text-2xl font-semibold mt-4 mb-2">
              Stock History
            </h1>
            <StockDataDisplay data={data} />
          </>
        ) : (
          <div className="text-center text-lg">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default IndividualStockInfo;
