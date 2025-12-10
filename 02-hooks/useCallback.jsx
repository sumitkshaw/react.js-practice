USE CALLBACK
- Prevent function recreation on every render
- Useful when passing functions to child components

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default UseCallbackExample;

- useCallback memoizes a function so it is not recreated on every render.
- Here, increment stays the same function across renders, improving performance.