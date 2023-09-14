import { createContext } from "react";

export const NewsContext = createContext(null);

export const NewsContextProvider = ({ children }) => {
  return <NewsContext.Provider value={{}}>{children}</NewsContext.Provider>;
};

export default NewsContext;
