import { fetchBusinesses } from "@/services/businesses";
import { useQuery } from "react-query";

export const useGetBusinesses = () => {
  return useQuery("businesses", fetchBusinesses);
};
