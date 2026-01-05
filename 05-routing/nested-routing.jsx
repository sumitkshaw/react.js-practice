/*
  Nested routing allows routes inside routes.
  Useful for dashboards and layouts.
  Parent route renders common UI.
*/

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="profile">Profile</Link> |{" "}
      <Link to="settings">Settings</Link>

      {/* Outlet renders child routes */}
      <Outlet />
    </div>
  );
}

function Profile() {
  return <p>Profile Page</p>;
}

function Settings() {
  return <p>Settings Page</p>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
