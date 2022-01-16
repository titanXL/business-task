import { QueryClient } from "react-query";

const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // retry: false,
        useErrorBoundary: true,
      },
    },
  });
export default getQueryClient;
