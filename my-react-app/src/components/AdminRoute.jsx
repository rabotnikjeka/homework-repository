import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

function AdminRoute() {
  const { isAuth, role } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
}

export default AdminRoute;
