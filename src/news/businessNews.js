import React, { useCallback, useContext, useEffect, useState } from "react";
import newsService from "../services/newsService";
import News from "./News";
import AppContext from "../AppContext";

const BusinessNews = () => {
  const [businessNewsData, setBusinessNews] = useState([]);

  const { getCountry, updateLoading } = useContext(AppContext);

  const getBusinessNews = useCallback(async () => {
    updateLoading(true);
    const response = await newsService.getCategoryNews(
      "business",
      getCountry?.code
    );
    setBusinessNews(response?.articles);
    updateLoading(false);
  }, [getCountry?.code, updateLoading]);

  useEffect(() => {
    getBusinessNews();
  }, [getBusinessNews]);

  return <News newsData={businessNewsData} />;
};

export default BusinessNews;
