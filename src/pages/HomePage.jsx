import React, { useState, useEffect } from "react";
import { fetchStockData } from "../api/twelveData";
import StockInfo from "../components/StockInfo";
import NewsContainer from "../components/NewsContainer";
import MarketMovers from "../components/MarketMovers";
import MarketLosers from "../components/MarketLosers";
import VideoPlayer from "../components/VideoPlayer";
import GraphData from "../components/GraphData";
import CryptoWidget from "../components/CryptoWidget";
import { motion } from "framer-motion";
function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-black dark:text-white ">
      <hr
        style={{
          width: "100%",
          border: 0,
          height: "1px",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
        }}
      />
      <div className="w-full flex flex-col justify-evenly items-start md:flex-row">
        <div className="flex flex-col justify-center items-center w-full gap-2">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <MarketMovers />
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <MarketLosers />
          </motion.div>
          <div className="w-full flex h-full flex-col justify-evenly items-center md:flex-row ">
            <GraphData />

            <VideoPlayer url={"https://www.youtube.com/watch?v=NGaSWrOQrlU"} />
          </div>
          <CryptoWidget />
        </div>

        <NewsContainer />
      </div>
    </div>
  );
}

export default HomePage;
