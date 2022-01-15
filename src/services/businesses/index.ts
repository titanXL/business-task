import { ApplicationError } from "@/utils/errors/app-error";
import API from "@/utils/api";
import { Businesses } from "@/services/businesses/types";

export const fetchBusinesses = async () => {
  try {
    const response = await API.get<Businesses>("/");
    return response.data;
  } catch (error) {
    // Handle Error.
    throw new ApplicationError();
  }
};
