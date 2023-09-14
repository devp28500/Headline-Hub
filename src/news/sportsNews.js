import React, { useCallback, useContext, useEffect, useState } from "react";
import newsService from "../services/newsService";
import News from "./News";
import AppContext from "../AppContext";

const SportsNews = () => {
  const [sportsNewsData, setSportsNews] = useState([]);

  const { getCountry, updateLoading } = useContext(AppContext);

  const getSportsNews = useCallback(async () => {
    updateLoading(true);
    const response = await newsService.getCategoryNews(
      "sports",
      getCountry?.code
    );
    setSportsNews(response?.articles);
    updateLoading(false);
  }, [getCountry?.code, updateLoading]);

  useEffect(() => {
    getSportsNews();
  }, [getSportsNews]);

  return <News newsData={sportsNewsData} />;
};

export default SportsNews;
