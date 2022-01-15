import { useGetBusinesses } from "@/hooks/useGetBusinesses";
import { Businesses } from "@/services/businesses/types";
import { useContext, createContext } from "react";

interface Context {
  businesses?: Businesses;
  isLoading: boolean;
  isError: boolean;
}

const BusinessesContext = createContext<Context>({
  isLoading: true,
  isError: false,
});

export const BusinessesProvider: React.FC = ({ children }) => {
  const { isLoading, isError, data: businesses } = useGetBusinesses();
  const value = { isLoading, isError, businesses };

  return (
    <BusinessesContext.Provider value={value}>
      {children}
    </BusinessesContext.Provider>
  );
};

export const useBusinesses = () => useContext(BusinessesContext);
