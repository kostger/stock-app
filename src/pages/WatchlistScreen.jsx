import React, { useEffect, useState } from "react";
import { fetchWatchlistData, deleteWatchlistData } from "../api/watchlistData";
import { Link } from "react-router-dom";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { motion } from "framer-motion";
function WatchlistScreen() {
  const [watchlistData, setWatchlistData] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const data = await fetchWatchlistData();
        setWatchlistData(data);
      } catch (error) {
        console.error("Error fetching watchlist data:", error);
      }
    };
    fetchWatchlist();
  }, []);

  const handleToggleDeleteMode = () => {
    setDeleteMode(!deleteMode);
  };

  const handleDeleteStock = async (id) => {
    try {
      await deleteWatchlistData(id); // Call the API to delete the stock
      // Filter out the deleted stock from the state
      setWatchlistData(watchlistData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting stock:", error);
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold mb-4">My Watchlist</h1>
        <button
          onClick={handleToggleDeleteMode}
          className={`${
            deleteMode ? "bg-green-500" : "bg-red-500"
          } text-white px-4 py-2 rounded-md`}
        >
          {deleteMode ? "Cancel" : "Remove Stocks"}
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="overflow-x-auto"
      >
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 dark:bg-slate-800">
              <th className="border border-gray-300 p-2 text-left">Symbol</th>
              <th className="border border-gray-300 p-2 text-left">Close</th>
              <th className="border border-gray-300 p-2 text-left">Open</th>
              <th className="border border-gray-300 p-2 text-left">High</th>
              <th className="border border-gray-300 p-2 text-left">Low</th>
              {deleteMode && (
                <th className="border border-gray-300 p-2 text-left">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {watchlistData.length > 0 ? (
              watchlistData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  <td className="border border-gray-300 p-2">
                    <Link to={`/stock/${item.symbol}`}>{item.symbol}</Link>
                  </td>
                  <td
                    className={`border border-gray-300 p-2 ${
                      item.close > item.open ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    <Link to={`/stock/${item.symbol}`}>${item.close}</Link>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <Link to={`/stock/${item.symbol}`}>${item.open}</Link>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <Link to={`/stock/${item.symbol}`}>${item.high}</Link>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <Link to={`/stock/${item.symbol}`}>${item.low}</Link>
                  </td>
                  {deleteMode && (
                    <td className="border border-gray-300 p-2 text-center">
                      <button
                        onClick={() => handleDeleteStock(item.id)}
                        className="text-red-500"
                      >
                        <RemoveCircleIcon />
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={deleteMode ? 7 : 6}
                  className="border border-gray-300 p-2 text-center"
                >
                  No items in the watchlist.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

export default WatchlistScreen;
