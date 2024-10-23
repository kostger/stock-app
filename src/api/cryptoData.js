import axios from "axios";

const CRYPTO_BASE_URL = "https://api.coinlore.net/api/tickers/";

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(CRYPTO_BASE_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    throw error;
  }
};
