import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ThemeContext from "../context/ThemeContext";

const MainLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    AOS.init({});
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed bottom-0 left-0 right-0 h-[6px] z-50 bg-gradient-to-r from-yellow-400 via-lime-400 to-green-400"
      />

      {/* Layout */}
      <ThemeContext.Provider value={theme}>
        <div
          className={`min-h-screen flex flex-col transition-colors duration-500 ${
            theme === "dark" ? "bg-[#1D232A] text-white" : "bg-white text-black"
          }`}
        >
          <Navbar theme={theme} setTheme={setTheme} />
          <div className="flex-grow">
            <main>
              <Outlet />
            </main>
          </div>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default MainLayout;
