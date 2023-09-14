import apiService from "./apiService";
import { API_KEY } from "../constants/common-constants";

const newsService = {
  getNews: async (country) => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${API_KEY}`;

    // Check if a country is provided and add it to the URL if it exists
    if (country) {
      apiUrl += `&country=${country}`;
    }
    const response = await apiService.get(apiUrl);
    return response;
  },
  getCategoryNews: async (category, country) => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${API_KEY}`;

    // Check if a country is provided and add it to the URL if it exists
    if (country) {
      apiUrl += `&country=${country}`;
    }
    const response = await apiService.get(apiUrl);
    return response;
  },
};

export default newsService;
