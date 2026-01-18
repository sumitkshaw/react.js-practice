/*
  This file connects React with Redux.
  useSelector reads global state.
  useDispatch triggers state updates.
*/

import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increase
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrease
      </button>
    </div>
  );
}

function App() {
  // Provider makes store available to entire app
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
