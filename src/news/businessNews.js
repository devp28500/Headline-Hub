import React, { useCallback, useEffect, useState } from "react";
import newsService from "../services/newsService";
import News from "./News";

const BusinessNews = () => {
  const [businessNewsData, setBusinessNews] = useState([]);

  // const { updateLoading } = useContext(NewsContext);

  const getBusinessNews = useCallback(async () => {
    const response = await newsService.getCategoryNews("business");
    setBusinessNews(response?.articles);
  }, []);

  useEffect(() => {
    getBusinessNews();
  }, [getBusinessNews]);

  return <News newsData={businessNewsData} />;
};

export default BusinessNews;
