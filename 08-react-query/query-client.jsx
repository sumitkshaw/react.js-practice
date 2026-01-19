/*
  QueryClient manages cache and queries.
  It is required once at the app root.
  All queries use this client internally.
*/

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function AppProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default AppProvider;
