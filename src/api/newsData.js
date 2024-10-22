import axios from "axios";
import { XMLParser } from "fast-xml-parser";
export const fetchNewsData = async () => {
  try {
    const response = await fetch(
      "https://corsproxy.io/?https%3A%2F%2Ffinance.yahoo.com%2Fnews%2Frss"
    );
    const rssText = await response.text();

    // Create an instance of XMLParser and parse the XML to JSON
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
    });
    const jsonData = parser.parse(rssText);
    const items = jsonData.rss.channel.item; // Access the news items

    return items;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return "Failed to fetch news";
  }
};
