import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser } = UseAuth();

  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {})
      .catch(() => {});
  };

  const dropNav = () => {
    document.querySelector("#dropDown").className = "block";
  };
  const hiddenDropDown = () => {
    document.querySelector("#dropDown").className = "hidden";
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
      <li>
        <NavLink to={"/add-service"}>Add Service</NavLink>
      </li>
      <li>
        <NavLink to={"/manage-services"}>Manage Service</NavLink>
      </li>
      <li>
        <NavLink to={"/booked/services"}>Booked-Services</NavLink>
      </li>
      <li>
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
              className="menu menu-sm dropdown-content bg-[#ffedeb] rounded-box z-1 mt-3 w-52 p-2 shadow"
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
                  <li className="">
                    <details>
                      <summary>Dashboard</summary>
                      <ul className="bg-[#ffedeb] rounded-t-none p-2 w-48 text-[1.1rem]">
                        {navlinks2}
                      </ul>
                    </details>
                  </li>
                </ul>
              )}
            </ul>
          </div>
          <Link to={"/"} className="text-3xl font-semibold">
            DigitalSheba
          </Link>
        </div>

        {/* menu for large devices */}
        <div className="navbar-end space-x-4">
          {/* <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[16px]">
              {navLinks}
            </ul>
            {user && (
              <ul onMouseEnter={dropNav} className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary>Dashboard</summary>
                    <ul id="dropDown" className="bg-[#ffedeb] rounded-t-none p-2 w-40">
                      {navlinks2}
                    </ul>
                  </details>
                </li>
              </ul>
            )}
          </div> */}

          <div>
            <ul className="flex gap-5">
              {navLinks}
              {user && (
                <li onMouseEnter={dropNav} onMouseLeave={hiddenDropDown}>
                  Dashboard
                  <ul id="dropDown" className="hidden">
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
