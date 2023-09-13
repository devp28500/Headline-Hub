import React, { useCallback, useEffect, useState } from "react";
import News from "./News";
import newsService from "../services/newsService";

const EntertainmentNews = () => {
  const [entertainmentNewsData, setEntertainmentNews] = useState([]);

  const getEntertainmentNews = useCallback(async () => {
    const response = await newsService.getCategoryNews("entertainment");
    setEntertainmentNews(response?.articles);
  }, []);

  useEffect(() => {
    getEntertainmentNews();
  }, [getEntertainmentNews]);

  return <News newsData={entertainmentNewsData} />;
};

export default EntertainmentNews;
