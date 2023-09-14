import React, { useCallback, useContext, useEffect, useState } from "react";
import News from "./News";
import newsService from "../services/newsService";
import AppContext from "../AppContext";

const AllNews = () => {
  const [newsData, setNewsData] = useState([]);

  const { getCountry, updateLoading } = useContext(AppContext);

  const getAllNews = useCallback(async () => {
    updateLoading(true);
    const response = await newsService.getNews(getCountry?.code);
    setNewsData(response?.articles);
    updateLoading(false);
  }, [getCountry?.code, updateLoading]);

  useEffect(() => {
    getAllNews();
  }, [getAllNews]);
  return <News newsData={newsData} />;
};

export default AllNews;
