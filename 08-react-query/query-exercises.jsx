/*
  This file combines fetch + mutation.
  Demonstrates full React Query workflow.
  No useEffect or manual state needed.
*/

import AppProvider from "./query-client";
import Users from "./query-fetch";
import AddUser from "./query-mutations";

function App() {
  return (
    <AppProvider>
      <h1>React Query Example</h1>
      <AddUser />
      <Users />
    </AppProvider>
  );
}

export default App;
