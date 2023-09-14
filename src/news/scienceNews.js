import React, { useCallback, useContext, useEffect, useState } from "react";
import newsService from "../services/newsService";
import News from "./News";
import AppContext from "../AppContext";

const ScienceNews = () => {
  const [scienceNewsData, setScienceNewsNews] = useState([]);

  const { getCountry, updateLoading } = useContext(AppContext);

  const getScienceNews = useCallback(async () => {
    updateLoading(true);
    const response = await newsService.getCategoryNews(
      "science",
      getCountry?.code
    );
    setScienceNewsNews(response?.articles);
    updateLoading(false);
  }, [getCountry?.code, updateLoading]);

  useEffect(() => {
    getScienceNews();
  }, [getScienceNews]);
  return <News newsData={scienceNewsData} />;
};

export default ScienceNews;
