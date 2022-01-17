import { useGetBusinesses } from "@/hooks/useGetBusinesses";
import {
  Business,
  BusinessDetails,
  Businesses,
} from "@/services/businesses/types";
import { useContext, createContext, useMemo, useCallback } from "react";

const NO_OP = () => {
  return null;
};

interface Context {
  businesses?: Businesses;
  isLoading: boolean;
  isError: boolean;
  getBusinessDetailsById: (id: Business["id"]) => BusinessDetails | null;
}

const BusinessesContext = createContext<Context>({
  isLoading: true,
  isError: false,
  getBusinessDetailsById: NO_OP,
});

export const BusinessesProvider: React.FC = ({ children }) => {
  const { isLoading, isError, data: businesses } = useGetBusinesses();

  const getNearbyPlaces = useCallback(
    (business: Business): BusinessDetails["nearBy"] => {
      return businesses!
        .filter((b) => b.id !== business.id)
        .filter((b) => b.address.city === business.address.city)
        .map((b) => ({
          id: b.id,
          name: b.name,
          address: `${b.address.number} ${b.address.street} ${b.address.city} ${b.address.country}`,
        }));
    },
    [businesses]
  );

  const makeBusinessDetails = useCallback(
    (business: Business): BusinessDetails => {
      const { description, ...rest } = business;
      const nearBy = getNearbyPlaces(business);
      return { ...rest, nearBy };
    },
    [getNearbyPlaces]
  );

  const getBusinessDetailsById = useCallback(
    (id: Business["id"]) => {
      const business = businesses?.find((b) => b.id === id);
      if (business) return makeBusinessDetails(business);
      return null;
    },
    [businesses, makeBusinessDetails]
  );

  const value = useMemo(
    () => ({ isLoading, isError, businesses, getBusinessDetailsById }),
    [businesses, isError, isLoading, getBusinessDetailsById]
  );

  return (
    <BusinessesContext.Provider value={value}>
      {children}
    </BusinessesContext.Provider>
  );
};

export const useBusinesses = () => useContext(BusinessesContext);
