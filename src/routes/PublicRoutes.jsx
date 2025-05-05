import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout'
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h2>404</h2>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router;