import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import Settings from "../components/Admin/Settings/Settings";
import Infor from "../components/Admin/Infor/Infor";
import Ssl from "../components/Admin/Ssl/Ssl";
import Bins from "../components/Admin/Bins/Bins";
import Web from "../components/Admin/Web/Web";

export const adminRoutesValidate = ["/admin/*"];

export const isAdminRoute = (pathname) => {
  return adminRoutesValidate.some((route) => {
    if (route.includes("*")) {
      return pathname.startsWith("/admin");
    }
    return pathname === route;
  });
};

// Component bảo vệ route
const ProtectedRoute = ({ children }) => {
  const role = useSelector((state) => state.user.account.role);

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AdminRoutes = (props) => {
  return (
    <Routes>
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/settings/infor"
        element={
          <ProtectedRoute>
            <Infor />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/settings/ssl"
        element={
          <ProtectedRoute>
            <Ssl />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/settings/web"
        element={
          <ProtectedRoute>
            <Web />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/bins"
        element={
          <ProtectedRoute>
            <Bins />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
};

export default AdminRoutes;
