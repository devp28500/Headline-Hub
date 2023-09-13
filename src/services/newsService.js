import apiService from "./apiService";
import { API_KEY } from "../constants/common-constants";

const newsService = {
  getNews: async () => {
    const response =
      await apiService.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}

    `);
    return response;
  },
  getCategoryNews: async (category) => {
    const response =
      await apiService.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}
`);
    return response;
  },
};

export default newsService;
