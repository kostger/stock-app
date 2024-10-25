import React from "react";
import { motion } from "framer-motion";
function AboutScreen() {
  return (
    <div className="flex flex-col justify-start items-center p-10 gap-10 bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md dark:bg-gray-800 bg-gray-300 p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-[30px]">About Screen</h1>
        <p className="align-middle w-full ">
          MyStock App is a platform for real-time financial data and the latest
          news to enhance your investment decisions. Leveraging the Twelve Data
          API, MyStock App provides accurate stock market information, including
          live prices with graphs and historical data. Additionally, it
          integrates the Yahoo News API to keep you updated with the latest
          financial news. To further assist with analysis, the Gemini AI API is
          used for in-depth evaluation of individual stocks. Built with React
          and styled using Tailwind CSS, MyStock App is designed to offer a
          seamless and insightful user experience for investors.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutScreen;
