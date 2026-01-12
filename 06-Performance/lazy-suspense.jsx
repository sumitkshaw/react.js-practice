/*
  Lazy loading splits bundle size.
  Components load only when needed.
  Suspense shows fallback UI while loading.
*/

import { Suspense, lazy } from "react";

// Component loaded on demand
const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HeavyComponent />
    </Suspense>
  );
}

export default App;
