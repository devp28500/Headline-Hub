import React from "react";
import News from "./News";
import { NewsContextProvider } from "./context/newsContext";

const NewsWrapper = () => {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
};

export default NewsWrapper;
