import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
        <div className="max-w-7xl mx-auto">
            <Navbar/>
            <main className="h-[calc(100vh-205px)] ">
            <Outlet/>
            </main>
        </div>
            <Footer/>
        </>
    );
};

export default MainLayout;