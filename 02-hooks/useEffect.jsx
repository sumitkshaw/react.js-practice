USE EFFECT
- It lets you run code after the component renders — like fetching data, listening to events, updating the title, timers, etc.
- It’s React’s way of handling side effects.

import { useEffect, useState } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or updated");
  }, [count]); // runs only when count changes

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default UseEffectExample;

- useEffect here is used to log a message every time the component renders or when the count state changes.