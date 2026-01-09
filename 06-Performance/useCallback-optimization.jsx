/*
  useCallback memoizes functions.
  Prevents function recreation on every render.
  Important when passing functions to memoized children.
*/

import { useCallback, useState, memo } from "react";

const Button = memo(function Button({ onClick }) {
  console.log("Button rendered");
  return <button onClick={onClick}>Click</button>;
});

function App() {
  const [count, setCount] = useState(0);

  // Function reference remains stable
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <Button onClick={increment} />
    </div>
  );
}

export default App;
