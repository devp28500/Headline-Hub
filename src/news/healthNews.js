import React, { useCallback, useContext, useEffect, useState } from "react";
import newsService from "../services/newsService";
import News from "./News";
import AppContext from "../AppContext";

const HealthNews = () => {
  const [healthNewsData, setHealthNews] = useState([]);

  const { getCountry, updateLoading } = useContext(AppContext);

  const getHealthNews = useCallback(async () => {
    updateLoading(true);
    const response = await newsService.getCategoryNews(
      "health",
      getCountry?.code
    );
    setHealthNews(response?.articles);
    updateLoading(false);
  }, [getCountry?.code, updateLoading]);

  useEffect(() => {
    getHealthNews();
  }, [getHealthNews]);

  return <News newsData={healthNewsData} />;
};

export default HealthNews;
