import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/useAuth";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ theme, setTheme }) => {
  const { user, logOutUser } = UseAuth();
  const [showDropDown, setShowDropDown] = useState(false);
  const timeOutRef = useRef(null);

  // Scroll-based navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {})
      .catch(() => {});
  };

  const dropNav = () => {
    clearTimeout(timeOutRef.current);
    setShowDropDown(true);
  };
  const hiddenDropDown = () => {
    timeOutRef.current = setTimeout(() => {
      setShowDropDown(false);
    }, 1000);
  };

  const changeTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive && theme === "light" ? "text-[#3ca200]" : ""} ${
              isActive && theme === "dark" ? "text-[#F2D701]" : ""
            }`
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive && theme === "light" ? "text-[#3ca200]" : ""} ${
              isActive && theme === "dark" ? "text-[#F2D701]" : ""
            }`
          }
          to={"/services"}
        >
          Services
        </NavLink>
      </li>
    </>
  );

  const navlinks2 = (
    <>
      <li
        className={`${
          theme === "light" ? "hover:text-[#3ca200]" : "hover:text-[#F2D701]"
        }`}
      >
        <NavLink
          className={({ isActive }) =>
            `${isActive && theme === "light" ? "text-[#3ca200]" : ""} ${
              isActive && theme === "dark" ? "text-[#F2D701]" : ""
            }`
          }
          to={"/add-service"}
        >
          Add Service
        </NavLink>
      </li>
      <li
        className={`${
          theme === "light" ? "hover:text-[#3ca200]" : "hover:text-[#F2D701]"
        }`}
      >
        <NavLink
          className={({ isActive }) =>
            `${isActive && theme === "light" ? "text-[#3ca200]" : ""} ${
              isActive && theme === "dark" ? "text-[#F2D701]" : ""
            }`
          }
          to={"/manage-services"}
        >
          Manage Service
        </NavLink>
      </li>
      <li
        className={`${
          theme === "light" ? "hover:text-[#3ca200]" : "hover:text-[#F2D701]"
        }`}
      >
        <NavLink
          className={({ isActive }) =>
            `${isActive && theme === "light" ? "text-[#3ca200]" : ""} ${
              isActive && theme === "dark" ? "text-[#F2D701]" : ""
            }`
          }
          to={"/booked/services"}
        >
          Booked-Services
        </NavLink>
      </li>
      <li
        className={`${
          theme === "light" ? "hover:text-[#3ca200]" : "hover:text-[#F2D701]"
        }`}
      >
        <NavLink
          className={({ isActive }) =>
            `${isActive && theme === "light" ? "text-[#3ca200]" : ""} ${
              isActive && theme === "dark" ? "text-[#F2D701]" : ""
            }`
          }
          to={"/service-to-do"}
        >
          Service-To-Do
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`font-o font-medium bg-base-100 transition-all duration-300 fixed top-0 left-0 w-full z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${theme === 'light' ? 'border-b border-b-gray-300' : 'border-b border-b-gray-400'}`}
    >
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          {/* menu for small devices */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow transition-colors"
            >
              {user && (
                <div
                  tabIndex={0}
                  role="button"
                  className={`btn btn-ghost btn-circle avatar block md:hidden`}
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt=""
                      src={user.photoURL}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              )}
              {navLinks}
              {user && (
                <ul className="menu menu-horizontal px-1 text-[1.1rem]">
                  <li>
                    <details>
                      <summary>Dashboard</summary>
                      <ul className="bg-[#f1fae1] rounded-t-none p-2 w-48">
                        {navlinks2}
                      </ul>
                    </details>
                  </li>
                </ul>
              )}
            </ul>
          </div>

          {/* theme toggle */}
          <label className="flex items-center cursor-pointer gap-2 text-base-content">
            <input
              type="checkbox"
              onChange={changeTheme}
              checked={theme === "dark"}
              className="hidden"
            />
            {theme === "dark" ? (
              <FiSun className="text-3xl text-[#F2D701]" />
            ) : (
              <FiMoon className="text-3xl text-[#3CA200]" />
            )}
          </label>

          <Link
            data-aos="zoom-in"
            data-aos-duration="1000"
            to={"/"}
            className="text-3xl font-semibold mx-5"
          >
            DigitalSheba
          </Link>
        </div>

        {/* menu for large devices */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="navbar-end space-x-4"
        >
          <div className="hidden lg:block">
            <ul className="flex gap-5">
              {navLinks}
              {user && (
                <li
                  className="flex items-center cursor-pointer space-x-4"
                  onMouseEnter={dropNav}
                  onMouseLeave={hiddenDropDown}
                >
                  Dashboard{" "}
                  {showDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  <ul
                    className={`absolute right-44 z-50 w-48 border border-[#3CA200] rounded-2xl px-5 py-10 space-y-2 transition-all duration-500 ease-in-out
              ${
                showDropDown
                  ? "top-[58px] opacity-100 pointer-events-auto"
                  : "-top-20 opacity-0 pointer-events-none"
              } ${theme === "light" ? "bg-[#F4F6F0]" : "bg-[#26313D]"}`}
                  >
                    {navlinks2}
                  </ul>
                </li>
              )}
            </ul>
          </div>
          {user ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost btn-circle avatar hidden md:block`}
              >
                <div className="w-10 rounded-full">
                  <img
                    alt={user?.displayName}
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
                    title={user?.email}
                  />
                </div>
              </div>

              <Link onClick={handleLogOutUser} to={"/login"}>
                <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#F2D701] px-8 font-medium text-black cursor-pointer">
                  <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                    Log Out
                  </div>
                  <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
                    Log Out
                  </div>
                </button>
              </Link>
            </>
          ) : (
            <Link to={"/login"}>
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#F2D701] px-8 font-medium text-black cursor-pointer">
                <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                  Log In
                </div>
                <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
                  Log In
                </div>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
