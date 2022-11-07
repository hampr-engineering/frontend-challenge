import type { PropsWithChildren } from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      staleTime: 3 * 60 * 1000,
      refetchOnWindowFocus: false,
      cacheTime: 5 * 60 * 1000,
      retry: false,
    },
  },
});

export const QueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
