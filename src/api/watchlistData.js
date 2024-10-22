import axios from "axios";
const WATCHLIST_BASE_URL = "http://localhost:3000/stocks";

export const fetchWatchlistData = async () => {
  try {
    const response = await axios.get(WATCHLIST_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching watchlist data:", error);
    throw error;
  }
};
export const postWatchlistData = async (data) => {
  try {
    const response = await axios.post(WATCHLIST_BASE_URL, data);
    return response.data;
  } catch (error) {
    console.error("Error posting watchlist data:", error);
    throw error;
  }
};

export const deleteWatchlistData = async (id) => {
  try {
    const response = await axios.delete(`${WATCHLIST_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting watchlist data:", error);
    throw error;
  }
};
