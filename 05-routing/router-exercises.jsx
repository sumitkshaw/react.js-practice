/*
  This file demonstrates protected routing usage.
  Authentication state controls route access.
  Combines routing + conditional rendering.
*/

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./protected-route";

function Home() {
  return <h2>Public Home</h2>;
}

function Dashboard() {
  return <h2>Private Dashboard</h2>;
}

function App() {
  const isAuthenticated = true; // simulate login

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuth={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
