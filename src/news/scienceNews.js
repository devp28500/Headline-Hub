import React, { useCallback, useEffect, useState } from "react";
import newsService from "../services/newsService";
import News from "./News";

const ScienceNews = () => {
  const [scienceNewsData, setScienceNewsNews] = useState([]);

  const getScienceNews = useCallback(async () => {
    const response = await newsService.getCategoryNews("science");
    setScienceNewsNews(response?.articles);
  }, []);

  useEffect(() => {
    getScienceNews();
  }, [getScienceNews]);
  return <News newsData={scienceNewsData} />;
};

export default ScienceNews;
