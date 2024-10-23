import React, { useEffect, useState } from "react";
import { fetchCryptoData } from "../api/cryptoData";

function CryptoWidget() {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const getCryptoData = async () => {
      try {
        const data = await fetchCryptoData();
        setCryptoData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCryptoData();
  }, []);

  return (
    <div className="w-full bg-white dark:bg-gray-900 text-black dark:text-white rounded shadow-md">
      {cryptoData && (
        <div className="flex">
          <div className="w-1/2">
            {cryptoData.slice(0, 5).map((crypto) => (
              <div
                key={crypto.id}
                className="flex flex-col justify-center items-center p-4"
              >
                <h2 className="text-2xl font-bold">{crypto.name}</h2>
                <p className="text-lg">
                  Symbol: {crypto.symbol} | Price: ${crypto.price_usd}
                </p>
                <p className="text-lg">
                  Market Cap: ${crypto.market_cap_usd} | 24 Hour Volume: $
                  {crypto.volume24}
                </p>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            {cryptoData.slice(5, 10).map((crypto) => (
              <div
                key={crypto.id}
                className="flex flex-col justify-center items-center p-4"
              >
                <h2 className="text-2xl font-bold">{crypto.name}</h2>
                <p className="text-lg">
                  Symbol: {crypto.symbol} | Price: ${crypto.price_usd}
                </p>
                <p className="text-lg">
                  Market Cap: ${crypto.market_cap_usd} | 24 Hour Volume: $
                  {crypto.volume24}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CryptoWidget;
