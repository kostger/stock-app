import React, { useEffect, useState } from "react";
import { fetchIndividualStockData } from "../api/twelveData";
import { useParams } from "react-router-dom";
import { StockGraph } from "../components/StockGraph";
import StockDataDisplay from "../components/StockDataDisplay";
import { postWatchlistData } from "../api/watchlistData";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

function IndividualStockInfo() {
  const { symbol } = useParams();
  const [data, setData] = useState(null);
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  useEffect(() => {
    const getStockData = async () => {
      try {
        const data = await fetchIndividualStockData(symbol);
        setData(data);
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
    <div className="p-4 max-w-screen-md mx-auto">
      {data ? (
        <>
          <div className="flex flex-col justify-center items-center mb-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              {data.meta.symbol}
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
                Close: {data.values[0].close} | Volume: {data.values[0].volume}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center p-2">
            <h1 className="text-xl md:text-2xl font-semibold mb-2">
              Stock Graph Data
            </h1>
            <button
              onClick={handleAddToWatchlist}
              className={`${
                addedToWatchlist ? "bg-green-500" : "bg-blue-500"
              } text-white px-4 py-2 rounded-md`}
            >
              {addedToWatchlist ? <CheckIcon /> : <AddIcon />}
              Add To Watchlist
            </button>
          </div>
          <StockGraph data={data} />

          <h1 className="text-xl md:text-2xl font-semibold mt-4 mb-2">
            Stock History
          </h1>
          <StockDataDisplay data={data} />
        </>
      ) : (
        <div className="text-center text-lg">Loading...</div>
      )}
    </div>
  );
}

export default IndividualStockInfo;
