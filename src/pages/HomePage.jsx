import React, { useState, useEffect } from "react";
import { fetchStockData } from "../api/twelveData";
import StockInfo from "../components/StockInfo";
import NewsContainer from "../components/NewsContainer";

function HomePage() {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStockData = async () => {
      try {
        setLoading(true);
        const data = await fetchStockData();
        setStockData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getStockData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center  ">
      <h1 className="font-bold text-5xl text-blue-400">Stock Information</h1>
      <StockInfo stockData={stockData} />
      <hr
        style={{
          width: "100%",
          border: 0,
          height: "1px",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
        }}
      />
      <NewsContainer />
    </div>
  );
}

export default HomePage;
