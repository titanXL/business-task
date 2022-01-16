import { useGetBusinesses } from "@/hooks/useGetBusinesses";
import { Businesses } from "@/services/businesses/types";
import { useContext, createContext, useMemo } from "react";

interface Context {
  businesses?: Array<Businesses>;
  isLoading: boolean;
  isError: boolean;
}

const BusinessesContext = createContext<Context>({
  isLoading: true,
  isError: false,
});

export const BusinessesProvider: React.FC = ({ children }) => {
  const { isLoading, isError, data: businesses } = useGetBusinesses();
  const value = useMemo(
    () => ({ isLoading, isError, businesses }),
    [businesses, isError, isLoading]
  );

  return (
    <BusinessesContext.Provider value={value}>
      {children}
    </BusinessesContext.Provider>
  );
};

export const useBusinesses = () => useContext(BusinessesContext);
