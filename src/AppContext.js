import { createContext, useCallback, useMemo, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState({
    name: "India",
    code: "IN",
  });

  const getLoading = useMemo(() => {
    return loading;
  }, [loading]);

  const updateLoading = useCallback((value) => {
    setLoading(value);
  }, []);

  const getCountry = useMemo(() => {
    return country;
  }, [country]);

  const updateCountry = useCallback((value) => {
    setCountry(value);
  }, []);

  return (
    <AppContext.Provider
      value={{ getCountry, updateCountry, getLoading, updateLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
