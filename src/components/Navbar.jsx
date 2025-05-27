import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/useAuth";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useRef, useState } from "react";

const Navbar = () => {
  const { user, logOutUser } = UseAuth();
  const [showDropDown, setShowDropDown] = useState(false);
  const timeOutRef = useRef(null);

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

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
    </>
  );

  const navlinks2 = (
    <>
      <li className="drop">
        <NavLink to={"/add-service"}>Add Service</NavLink>
      </li>
      <li className="drop">
        <NavLink to={"/manage-services"}>Manage Service</NavLink>
      </li>
      <li className="drop">
        <NavLink to={"/booked/services"}>Booked-Services</NavLink>
      </li>
      <li className="drop">
        <NavLink to={"/service-to-do"}>Service-To-Do</NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-sm bg-[#FFFFFF] font-o font-medium">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#F4F6F0] rounded-box z-1 mt-3 w-52 p-2 shadow"
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
          <Link data-aos="zoom-in"
          data-aos-duration="1000" to={"/"} className="text-3xl font-semibold">
            DigitalSheba
          </Link>
        </div>

        {/* menu for large devices */}
        <div data-aos="zoom-in"
          data-aos-duration="1000" className="navbar-end space-x-4">
          <div className="hidden lg:block">
            <ul className="flex gap-5">
              {navLinks}
              {user && (
                <li
                  className="flex items-center cursor-pointer space-x-4"
                  onMouseEnter={dropNav}
                  onMouseLeave={hiddenDropDown}
                >
                  Dashboard {showDropDown ? <IoIosArrowUp/>  : <IoIosArrowDown />}
                  <ul
                    className={`absolute right-60 -z-50 w-48 border border-[#3CA200] bg-[#F4F6F0] rounded-2xl px-5 py-10 space-y-2 transition-all duration-500 ease-in-out
              ${
                showDropDown
                  ? "top-14 opacity-100 pointer-events-auto"
                  : "-top-20 opacity-0 pointer-events-none"
              }`}
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
                    alt=""
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
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
