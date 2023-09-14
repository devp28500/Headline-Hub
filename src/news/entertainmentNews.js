import React, { useCallback, useContext, useEffect, useState } from "react";
import News from "./News";
import newsService from "../services/newsService";
import AppContext from "../AppContext";

const EntertainmentNews = () => {
  const [entertainmentNewsData, setEntertainmentNews] = useState([]);

  const { getCountry, updateLoading } = useContext(AppContext);

  const getEntertainmentNews = useCallback(async () => {
    updateLoading(true);
    const response = await newsService.getCategoryNews(
      "entertainment",
      getCountry?.code
    );
    setEntertainmentNews(response?.articles);
    updateLoading(false);
  }, [getCountry?.code, updateLoading]);

  useEffect(() => {
    getEntertainmentNews();
  }, [getEntertainmentNews]);

  return <News newsData={entertainmentNewsData} />;
};

export default EntertainmentNews;
