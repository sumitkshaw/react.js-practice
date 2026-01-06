/*
  Protected routes restrict access.
  They check authentication before rendering.
  Commonly used for dashboards and admin pages.
*/

import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuth, children }) {
  // Redirect user if not authenticated
  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
