import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import ServicesSearchPanel from "../components/ServicesSearchPanel";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    AOS.init({

    });
  }, [])

  return (
    <>
    <ServicesSearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed bottom-0 left-0 right-0 h-[6px] z-50 bg-gradient-to-r from-yellow-400 via-lime-400 to-green-400"
      />

      {/* Layout */}
      <div className="min-h-screen flex flex-col">
        <Navbar  onSearchClick={() => setIsSearchOpen(true)}/>
        <div className="flex-grow">
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;