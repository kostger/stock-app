import React, { useEffect, useState, useRef } from "react";
import { fetchMainIndicesData } from "../api/twelveData";

export const ScrollBar = () => {
  const [indicesData, setIndicesData] = useState([]);
  const mainIndices = [
    "NDAQ",
    "SPGI",
    "DAX",
    "AAPL",
    "NVDA",
    "META",
    "TSLA",
    "AMZN",
    "GOOGL",
    "MSFT",
  ]; // Add more indices as needed
  const scrollRef = useRef(null); // Reference for the scroll container
  const scrollSpeed = 1; // Adjust the speed of scrolling

  useEffect(() => {
    const getIndicesData = async () => {
      try {
        const data = await fetchMainIndicesData(mainIndices);
        setIndicesData(data);
      } catch (error) {
        console.error("Error fetching main indices data:", error);
      }
    };

    getIndicesData();
  }, []);

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
      {mainIndices.map((e, index) => (
        <div
          key={index}
          style={{
            minWidth: "250px", // Set a minimum width for each item
            padding: "10px",
            border: "1px solid #ccc", // Optional: Border for item
            marginRight: "10px", // Space between items
            flexShrink: 0, // Prevent items from shrinking
            textAlign: "center", // Center align text
          }}
        >
          <h2>{e}</h2>
          {indicesData[e] && (
            <>
              <p>{indicesData[e].name}</p>
              <p>{indicesData[e].currency}</p>
              <p>{indicesData[e].values[0].close}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
