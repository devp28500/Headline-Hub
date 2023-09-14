import { createContext, useCallback, useMemo, useState } from "react";

export const NewsContext = createContext(null);

export const NewsContextProvider = ({ children }) => {
  const [showLoading, setShowLoading] = useState(false);

  const loading = useMemo(() => {
    return showLoading;
  }, [showLoading]);

  const updateLoading = useCallback((value) => {
    setShowLoading(value);
  }, []);

  return (
    <NewsContext.Provider value={{ loading, updateLoading }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
