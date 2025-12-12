USE REDUCER 
- Manage complex state logic
- Good alternative to useState when state has multiple updates


import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "inc" })}>Increase</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrease</button>
    </div>
  );
}

export default UseReducerExample;

- useReducer manages state using a reducer function, where actions (inc, dec) decide how the state should change.
- The dispatch function sends these actions to the reducer, which updates state.count and re-renders the component.