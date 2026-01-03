/*
  This exercise demonstrates full Context flow.
  Provider wraps the app.
  Any nested component can access shared state.
*/

import ThemeProvider from "./context-setup";
import ThemeButton from "./context-usecase";

function App() {
  // ThemeProvider wraps components needing global state
  return (
    <ThemeProvider>
      <h1>Context API Example</h1>
      <ThemeButton />
    </ThemeProvider>
  );
}

export default App;
