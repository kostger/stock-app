import React, { useState } from "react";
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
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full bg-red">
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 w-[200px] h-[70px] md:w-[400px] md:h-[80px]"
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
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 w-[200px] h-[70px] md:w-[400px] md:h-[80px]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          onClick={LongtermAnalysis}
        >
          <AutoAwesomeIcon style={{ color: "yellow" }} />
          Longterm Outlook
        </motion.button>
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 w-[200px] h-[70px] md:w-[400px] md:h-[80px]"
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
              className=" bg-white dark:bg-slate-700 overflow-y-auto text-black dark:text-white rounded-lg shadow-lg z-50 w-[400px] md:w-full h-full md:h-auto absolute "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4 bg-gray-500  p-4">
                <div className="flex items-center justify-between gap-2">
                  <AutoAwesomeIcon style={{ color: "yellow" }} />
                  <h1 className="text-xl font-semibold">AI Analysis</h1>
                </div>

                <button onClick={() => setResponse(null)}>
                  <CancelIcon style={{ color: "#D22B2B" }} />
                </button>
              </div>
              <p className="text-center p-6">{response.response.text()}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <h1 className="mt-4">AI Analysis powered by Gemini</h1>
    </div>
  );
}

export default Chatbot;
