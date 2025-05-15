import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AddService from "../pages/AddService";
import axiosInstance from "../hooks/AxiosInstance";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import ManageServices from "../pages/ManageServices";
import BookedService from "../pages/BookedService";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>404</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => axiosInstance("/services?limit=6"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-service",
        element: <ProtectedRoute><AddService /></ProtectedRoute>,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => axiosInstance("/services"),
      },
      {
        path: "/services/:id",
        element: <ProtectedRoute><ServiceDetails /></ProtectedRoute>,
        loader: ({ params }) => axiosInstance(`/services/${params.id}`),
      },
      {
        path: "/manage-services",
        element: <ProtectedRoute><ManageServices /></ProtectedRoute>,
      },
      {
        path: '/booked/services',
        element: <ProtectedRoute><BookedService/></ProtectedRoute>,
      },
    ],
  },
]);

export default router;
