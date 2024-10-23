import React, { useEffect, useState } from "react";
import { fetchNewsData } from "../api/newsData";
const NewsContainer = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNewsData().then((data) => {
      if (data === "Failed to fetch news") {
        setError("Failed to fetch news");
        return;
      }
      setNewsItems(data);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-start p-4 gap-4">
      <h2 className="text-3xl font-bold text-purple-700 pt-4">
        Yahoo Finance News
      </h2>
      {error && <p className="text-red-600">{error}</p>}
      <ul className="w-full max-w-3xl">
        {newsItems.map((item, index) => (
          <li key={index} className="mb-4">
            <a
              href={item.link}
              className="flex flex-col md:flex-row justify-between items-start border border-gray-300 rounded-lg shadow-md p-4 transition duration-200 hover:bg-gray-100 dark:hover:bg-slate-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item["media:content"] && (
                <img
                  src={item["media:content"].url}
                  alt={item.title}
                  className="w-full h-auto max-w-[200px] mb-2 md:mb-0 md:mr-4" // Responsive image
                />
              )}
              <div className="flex flex-col justify-center flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(item.pubDate).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Source: {item.source["#text"]}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsContainer;
