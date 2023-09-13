import React, { useCallback, useEffect, useState } from "react";
import newsService from "../services/newsService";
import News from "./News";

const HealthNews = () => {
  const [healthNewsData, setHealthNews] = useState([]);

  // const { updateLoading } = useContext(NewsContext);

  const getHealthNews = useCallback(async () => {
    const response = await newsService.getCategoryNews("health");
    setHealthNews(response?.articles);
  }, []);

  useEffect(() => {
    getHealthNews();
  }, [getHealthNews]);

  return <News newsData={healthNewsData} />;
};

export default HealthNews;
