import { Navigate, createBrowserRouter } from "react-router-dom";
import { AuthLayout, MainLayout } from "../Layouts";
import { LoginPage, MainPage, RegisterPage } from "../Views";
import DetailPage from "../Views/DetailPage";

const mainRoutes = [
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />,
  },
  {
    index: true,
    path: "home",
    element: <MainPage />,
  },
  {
    path: "posts/:id",
    element: <DetailPage />,
  },
  {
    path: "*",
    element: <Navigate to="/home" replace={true} />,
  },
];

const authRoutes = [
  {
    path: "/auth",
    element: <Navigate to="/auth/login" replace={true} />,
  },
  {
    index: true,
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <Navigate to="/auth/login" replace={true} />,
  },
];

const mainLayouts = [
  { path: "", element: <MainLayout />, children: mainRoutes },
  { path: "/auth", element: <AuthLayout />, children: authRoutes },
];

const router = createBrowserRouter(mainLayouts);

export default router;
