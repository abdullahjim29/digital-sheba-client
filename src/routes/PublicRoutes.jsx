import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout'
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AddService from "../pages/AddService";
import axiosInstance from "../hooks/AxiosInstance";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import ManageServices from "../pages/ManageServices";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h2>404</h2>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => axiosInstance('/services?limit=6'),
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/add-service',
                element: <AddService/>
            },
            {
                path: '/services',
                element: <Services/>,
                loader: () => axiosInstance('/services'),
            },
            {
                path: '/services/:id',
                element: <ServiceDetails/>,
                loader: ({params}) => axiosInstance(`/services/${params.id}`)
            },
            {
                path: '/manage-services',
                element: <ManageServices/>,
            }
        ]
    }
])

export default router;