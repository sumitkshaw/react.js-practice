USE STATE
- It lets a component to store and update data that can change over time 
- When this data chanages , React re renders the UI/Component automatically.

    WORKING CODE 

import { useState } from "react";

function UseStateExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Your name: {name}</h2>

      <input
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default UseStateExample;


- useState stores the name typed by the user, and every time the input changes, React updates the name state, causing the displayed text to refresh instantly.
