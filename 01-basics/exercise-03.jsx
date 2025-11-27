**State And Events**

  State : It refers to a plain javascript object that holds information about component current situation.
  Event : It refers to an action or occurrence within application that can be responded to.

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state

  function handleIncrement() {           // Event Handler (Function handler)
    setCount(count + 1); // update state
  }

  return (
    <div>
      <h2>Counter: {count}</h2>

      {/* Button to increment */}
      <button onClick={handleIncrement}>Increase</button>    onclick event listener 
    </div>
  );
}

export default Counter;

==> HOW USESTATE IS BEING USED HERE 
      count → current value (initial = 0)
      setCount → function to update that value
      useState re-renders the component whenever setCount is called
