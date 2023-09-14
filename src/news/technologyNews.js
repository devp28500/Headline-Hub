import React, { useCallback, useContext, useEffect, useState } from "react";
import News from "./News";
import newsService from "../services/newsService";
import AppContext from "../AppContext";

const TechnologyNews = () => {
  const [technologyNewsData, setTechnologyNewsNews] = useState([]);

  const { getCountry, updateLoading } = useContext(AppContext);

  const getTechnologyNews = useCallback(async () => {
    updateLoading(true);
    const response = await newsService.getCategoryNews(
      "technology",
      getCountry?.code
    );
    setTechnologyNewsNews(response?.articles);
    updateLoading(false);
  }, [getCountry?.code, updateLoading]);

  useEffect(() => {
    getTechnologyNews();
  }, [getTechnologyNews]);
  return <News newsData={technologyNewsData} />;
};

export default TechnologyNews;
