/*
  This file demonstrates how to create and use a custom hook.
  A custom hook is just a function that uses other React hooks.
  It helps reuse stateful logic across multiple components.
*/

import { useState } from "react";

// Custom hook: encapsulates counter logic
function useCounter(initialValue = 0) {
  // useState stores count value and triggers re-render on update
  const [count, setCount] = useState(initialValue);

  // Functions update state using setter
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Returning values allows component to consume this logic
  return { count, increment, decrement };
}

// Component using the custom hook
function CounterComponent() {
  // Hook logic reused without duplicating code
  const { count, increment, decrement } = useCounter(5);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterComponent;
