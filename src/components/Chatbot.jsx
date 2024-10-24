import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion, AnimatePresence } from "framer-motion";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CancelIcon from "@mui/icons-material/Cancel";

function Chatbot({ stockName }) {
  const [response, setResponse] = useState(null);

  const GENAI_KEY = import.meta.env.VITE_GEMINI_KEY;
  const genAI = new GoogleGenerativeAI(GENAI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompts = [
    `You are a financial investor, reply in one or two paragraphs. Can you evaluate ${stockName} as an investment? Consider recent stock performance, financial health, and any upcoming events that could impact the stock's future.`,
    `You are a financial investor, reply in one or two paragraphs. What are the main factors contributing to the recent movement in ${stockName} stock price? Include recent earnings reports, news, and any other significant events.`,
    `You are a financial investor, reply in one or two paragraphs. Can you provide a long-term outlook for ${stockName}? Consider industry trends, the company's growth potential, and any risks that could affect its future value.`,
  ];

  const EvaluateStock = async () => {
    try {
      setResponse(await model.generateContent(prompts[0]));
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };
  const PerformanceAnalysis = async () => {
    try {
      setResponse(await model.generateContent(prompts[1]));
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };
  const LongtermAnalysis = async () => {
    try {
      setResponse(await model.generateContent(prompts[2]));
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="flex justify-center items-center gap-10 w-full bg-red">
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          onClick={EvaluateStock}
        >
          <AutoAwesomeIcon style={{ color: "yellow" }} />
          Evaluate Stock
        </motion.button>
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          onClick={LongtermAnalysis}
        >
          <AutoAwesomeIcon style={{ color: "yellow" }} />
          {`Longterm Outlook`}
        </motion.button>
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          onClick={PerformanceAnalysis}
        >
          <AutoAwesomeIcon style={{ color: "yellow" }} />
          Analyze Performance
        </motion.button>
      </div>

      <AnimatePresence>
        {response && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setResponse(null)}
            />

            {/* Popup container */}
            <motion.div
              className="fixed bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg shadow-lg z-50 p-6 w-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">AI Analysis</h2>
                <button onClick={() => setResponse(null)}>
                  <CancelIcon style={{ color: "red" }} />
                </button>
              </div>
              <p className="text-center">{response.response.text()}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <h1 className="mt-4">AI Analysis powered by Gemini</h1>
    </div>
  );
}

export default Chatbot;
