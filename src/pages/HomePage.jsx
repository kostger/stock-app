import React from "react";

import NewsContainer from "../components/NewsContainer";
import MarketMovers from "../components/MarketMovers";
import MarketLosers from "../components/MarketLosers";
import VideoPlayer from "../components/VideoPlayer";
import GraphData from "../components/GraphData";
import CryptoWidget from "../components/CryptoWidget";
import { motion } from "framer-motion";
import { Slideshow } from "../components/SlideShow";
import image1 from "../assets/pic1.jpg";
import image2 from "../assets/pic2.jpg";
import image3 from "../assets/pic3.jpg";

function HomePage() {
  const images = [
    {
      src: image1,
      caption: "Analyze Stocks with AI",
      subheader:
        "Use cutting-edge AI tools to gain insights into stock trends.",
    },
    {
      src: image2,
      caption: "Check Historic Data ",
      subheader:
        "Review past performance to make informed investment decisions.",
    },
    {
      src: image3,
      caption: "Add Stocks to Your Watchlist",
      subheader:
        "Track your favorite stocks and stay updated on their performance.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-black dark:text-white ">
      <hr
        style={{
          width: "100%",
          border: 0,
          height: "1px",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
        }}
      />
      <Slideshow images={images} interval={5000} />
      <div className="w-full flex flex-col justify-evenly items-start md:flex-row">
        <div className="flex flex-col justify-center items-center w-full gap-2">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <MarketMovers />
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <MarketLosers />
          </motion.div>
          <div className="w-full flex h-full flex-col justify-evenly items-center md:flex-row ">
            <GraphData />

            <VideoPlayer url={"https://www.youtube.com/watch?v=NGaSWrOQrlU"} />
          </div>
          <CryptoWidget />
        </div>

        <NewsContainer />
      </div>
    </div>
  );
}

export default HomePage;
