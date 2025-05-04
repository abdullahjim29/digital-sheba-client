import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h2>404</h2>,
        children: [
            
        ]
    }
])

export default router;