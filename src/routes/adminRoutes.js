import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Settings from "../components/Admin/Settings/Settings";
import Infor from "../components/Admin/Infor/Infor";
import Bins from "../components/Admin/Bins/Bins";
import Products from "../components/Admin/Products/Products";
import Create from "../components/Admin/Products/Create";
import CreateBlog from "../components/Admin/Blog/Create";
import Blog from "../components/Admin/Blog/Blog";

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
        path="/admin/blog"
        element={
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/blog/create"
        element={
          <ProtectedRoute>
            <CreateBlog />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/course/create"
        element={
          <ProtectedRoute>
            <Create />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/course"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/infor"
        element={
          <ProtectedRoute>
            <Infor />
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
