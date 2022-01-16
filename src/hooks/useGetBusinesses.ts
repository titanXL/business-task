import { fetchBusinesses } from "@/services/businesses";
import { Businesses } from "@/services/businesses/types";
import { useQuery } from "react-query";

export const useGetBusinesses = () =>
  useQuery<Array<Businesses>, Error>("businesses", fetchBusinesses);
