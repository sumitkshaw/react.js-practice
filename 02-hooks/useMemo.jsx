USE MEMO
- useMemo caches a computed value so it doesn’t re-calculate on every render.
- It only re-runs when its dependencies change, boosting performance.

import { useMemo, useState } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);

  const squared = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h2>Number: {number}</h2>
      <h3>Squared: {squared}</h3>

      <button onClick={() => setNumber(number + 1)}>Increase</button>
    </div>
  );
}

export default UseMemoExample;

- useMemo memoizes the square of the number and only recomputes it when the number changes.
- This avoids unnecessary recalculations during re-renders and improves performance.