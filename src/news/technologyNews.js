import React, { useCallback, useEffect, useState } from "react";
import News from "./News";
import newsService from "../services/newsService";

const TechnologyNews = () => {
  const [technologyNewsData, setTechnologyNewsNews] = useState([]);

  const getTechnologyNews = useCallback(async () => {
    const response = await newsService.getCategoryNews("technology");
    setTechnologyNewsNews(response?.articles);
  }, []);

  useEffect(() => {
    getTechnologyNews();
  }, [getTechnologyNews]);
  return <News newsData={technologyNewsData} />;
};

export default TechnologyNews;
