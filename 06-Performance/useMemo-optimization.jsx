/*
  useMemo caches expensive calculations.
  Recomputes only when dependencies change.
  Avoids blocking the UI.
*/

import { useMemo, useState } from "react";

function ExpensiveComponent() {
  const [num, setNum] = useState(1);

  // Cached calculation
  const result = useMemo(() => {
    console.log("Heavy calculation running");
    return num * 1000000;
  }, [num]);

  return (
    <div>
      <h2>Result: {result}</h2>
      <button onClick={() => setNum(num + 1)}>
        Increase
      </button>
    </div>
  );
}

export default ExpensiveComponent;
