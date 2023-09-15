import axios from "axios";
const api = axios.create({});

api.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = `application/json`;
    config.headers["Access-Control-Allow-Origin"] =
      "https://newsapi.org/v2/top-headlines";
    config.headers["Access-Control-Allow-Methods"] = "GET";
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
const apiService = {
  get: async (url, config) => {
    try {
      const response = await api.get(url, config);
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  post: async (url, data, config) => {
    try {
      const response = await api.post(url, data, config);
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  delete: async (url, config) => {
    try {
      const response = await api.delete(url, config);
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};

export default apiService;
