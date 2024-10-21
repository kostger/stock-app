import axios from "axios";

const API_BASE_URL = "https://api.twelvedata.com";
const API_KEY = "e66d30f69d04446f860713324751732e";

export const fetchIndividualStockData = async (symbol) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/time_series`, {
      params: {
        symbol,
        interval: "1day",
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};

export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stocks`, {
      params: {
        country: "United States",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};
export const fetchMainIndicesData = async (symbols) => {
  try {
    const symbolString = symbols.join(",");
    const response = await axios.get(`${API_BASE_URL}/time_series`, {
      params: {
        symbol: symbolString,
        interval: "1day",
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching main indices data:", error);
    throw error;
  }
};
