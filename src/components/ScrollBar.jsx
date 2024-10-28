import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ScrollBar = () => {
  const showcasedIndices = [
    { symbol: "NDAQ", price: 13085.52, change: "up" }, // Nasdaq Composite
    { symbol: "SPGI", price: 4224.16, change: "down" }, // S&P 500
    { symbol: "DAX", price: 14812.98, change: "down" }, // DAX Index
    { symbol: "AAPL", price: 174.78, change: "up" }, // Apple Inc.
    { symbol: "NVDA", price: 413.63, change: "up" }, // NVIDIA Corporation
    { symbol: "META", price: 312.84, change: "down" }, // Meta Platforms Inc.
    { symbol: "TSLA", price: 241.13, change: "down" }, // Tesla Inc.
    { symbol: "AMZN", price: 127.12, change: "up" }, // Amazon.com Inc.
    { symbol: "GOOGL", price: 138.47, change: "up" }, // Alphabet Inc. (Google)
    { symbol: "MSFT", price: 328.39, change: "up" }, // Microsoft Corporation
    { symbol: "DJIA", price: 33800.23, change: "up" }, // Dow Jones Industrial Average
    { symbol: "FTSE", price: 7584.37, change: "down" }, // FTSE 100 Index
    { symbol: "NIKKEI", price: 30970.99, change: "up" }, // Nikkei 225 Index
    { symbol: "BABA", price: 85.35, change: "down" }, // Alibaba Group
    { symbol: "ORCL", price: 109.62, change: "up" }, // Oracle Corporation
    { symbol: "NFLX", price: 396.78, change: "up" }, // Netflix Inc.
    { symbol: "BRK_A", price: 525000.0, change: "down" }, // Berkshire Hathaway Inc.
    { symbol: "JPM", price: 146.78, change: "up" }, // JPMorgan Chase & Co.
    { symbol: "UNH", price: 524.65, change: "down" }, // UnitedHealth Group Inc.
    { symbol: "VISA", price: 235.89, change: "up" }, // Visa Inc.
  ];

  const scrollRef = useRef(null);
  const scrollSpeed = 1;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const resetScroll = () => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0; // Reset to start
      }
    };

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollBy(scrollSpeed, 0); // Scrolls horizontally
        resetScroll(); // Check and reset scroll position if needed
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        width: "100%",
      }}
      className="scroll-container bg-white dark:bg-gray-800 p-4 text-black dark:text-white"
    >
      {showcasedIndices.map((e, index) => (
        <Link key={index} to={`/stock/${e.symbol}`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              minWidth: "250px",
              padding: "10px",
              border: "1px solid #ccc",
              marginRight: "10px",
              flexShrink: 0,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <h2>{e.symbol}: </h2>
            <p>$</p>
            <p style={{ color: e.change === "up" ? "green" : "red" }}>
              {e.price}
            </p>
          </motion.button>
        </Link>
      ))}
    </div>
  );
};
