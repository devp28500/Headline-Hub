import React, { useCallback, useEffect, useState } from "react";
import News from "./News";
import newsService from "../services/newsService";

const AllNews = () => {
  const [newsData, setNewsData] = useState([]);

  const getAllNews = useCallback(async () => {
    const response = await newsService.getNews();
    setNewsData(response?.articles);
  }, []);

  useEffect(() => {
    getAllNews();
  }, [getAllNews]);
  return <News newsData={newsData} />;
};

export default AllNews;
