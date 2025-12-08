USE REF 
- useRef is used to store a mutable value that does NOT trigger re-renders.
- It is also used to directly access and control DOM elements in React.

import { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // directly accessing the DOM element
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type something..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefExample;

- useRef creates a reference to store a DOM element without causing re-renders.
- Here, it is used to directly focus the input field using inputRef.current.focus().

