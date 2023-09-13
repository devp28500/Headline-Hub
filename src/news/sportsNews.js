import React, { useCallback, useEffect, useState } from "react";
import newsService from "../services/newsService";
import News from "./News";

const SportsNews = () => {
  const [sportsNewsData, setSportsNews] = useState([]);

  const getSportsNews = useCallback(async () => {
    const response = await newsService.getCategoryNews("sports");
    setSportsNews(response?.articles);
  }, []);

  useEffect(() => {
    getSportsNews();
  }, [getSportsNews]);

  return <News newsData={sportsNewsData} />;
};

export default SportsNews;
