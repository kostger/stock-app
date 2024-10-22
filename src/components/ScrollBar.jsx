import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

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

  const scrollRef = useRef(null); // Reference for the scroll container
  const scrollSpeed = 1; // Adjust the speed of scrolling

  // Automatically scroll the bar
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
        resetScroll(); // Check and reset scroll position
      }
    }, 20); // Adjust the interval for smoother scrolling

    return () => clearInterval(scrollInterval); // Clean up on component unmount
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        width: "100%", // Set the desired width for your scrollbar
        backgroundColor: "#f4f4f4", // Optional: Change background color
      }}
    >
      {showcasedIndices.map((e, index) => (
        <Link key={index} to={`/stock/${e.symbol}`}>
          <div
            style={{
              minWidth: "250px", // Set a minimum width for each item
              padding: "10px",
              border: "1px solid #ccc", // Optional: Border for item
              marginRight: "10px", // Space between items
              flexShrink: 0, // Prevent items from shrinking
              textAlign: "center", // Center align text
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
          </div>
        </Link>
      ))}
    </div>
  );
};
