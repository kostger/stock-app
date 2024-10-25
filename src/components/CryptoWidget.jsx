import React, { useEffect, useState } from "react";
import { fetchCryptoData } from "../api/cryptoData";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full bg-white dark:bg-gray-900 text-black dark:text-white rounded shadow-md p-6 justify-center items-center flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-[24px] text-slate-600 dark:text-white">
        CRYPTOCURRENCY OVERVIEW
      </h1>
      {cryptoData && (
        <div className="flex flex-wrap">
          {cryptoData.slice(0, 9).map((crypto, index) => (
            <motion.div
              key={crypto.id}
              className="w-full sm:w-1/2 lg:w-1/3 p-4"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold text-blue-600">
                  {crypto.name}
                </h2>
                <p className={`text-lg mt-2 `}>
                  Symbol: {crypto.symbol} | Price: $
                  {parseFloat(crypto.price_usd)}
                </p>
                <p className="text-lg">
                  Market Cap: ${parseFloat(crypto.market_cap_usd)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default CryptoWidget;
