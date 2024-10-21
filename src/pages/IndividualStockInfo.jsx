import React, { useEffect, useState } from "react";
import { fetchIndividualStockData } from "../api/twelveData";
import { useParams } from "react-router-dom";
import { StockGraph } from "../components/StockGraph";
import StockDataDisplay from "../components/StockDataDisplay";

function IndividualStockInfo() {
  const { symbol } = useParams();
  const [data, setData] = useState(null);

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

  return (
    <div>
      {data ? (
        <>
          <StockGraph data={data} />
          <StockDataDisplay data={data} />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default IndividualStockInfo;
