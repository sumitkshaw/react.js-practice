/*
  React.memo prevents unnecessary re-renders.
  Component re-renders only when props change.
  Useful for pure, reusable components.
*/

import { memo, useState } from "react";

// Child component wrapped with memo
const Child = memo(function Child({ value }) {
  console.log("Child rendered");
  return <h3>Value: {value}</h3>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child value={count} />

      {/* Parent re-render does not re-render Child unnecessarily */}
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Parent;
