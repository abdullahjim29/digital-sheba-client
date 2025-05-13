import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser } = UseAuth();

  const handleLogOutUser = () => {
    logOutUser()
    .then(() => {
      
    })
    .catch(() => {
      
    })
  }

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/services'}>Services</NavLink>
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
        <NavLink to={"/booked-services"}>Booked-Services</NavLink>
      </li>
      <li>
        <NavLink to={"/service-to-do"}>Service-To-Do</NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-sm bg-[#FFEDEB]">
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
              {user && <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost btn-circle avatar block md:hidden`}
              >
                <div className="w-10 rounded-full">
                  <img
                    alt=""
                    src={user.photoURL}
                    referrerPolicy='no-referrer'
                  />
                </div>
              </div>}
              {navLinks}
              {user && (
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <details>
                      <summary>Dashboard</summary>
                      <ul className="bg-[#ffedeb] rounded-t-none p-2 w-48">
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
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[1rem]">
              {navLinks}
            </ul>
            {user && (
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary>Dashboard</summary>
                    <ul className="bg-[#ffedeb] rounded-t-none p-2 w-40">
                      {navlinks2}
                    </ul>
                  </details>
                </li>
              </ul>
            )}
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
                    referrerPolicy='no-referrer'
                  />
                </div>
              </div>
              <button onClick={handleLogOutUser} className="btn text-[1rem] bg-[#FF6B6B] text-white hover:bg-[#E63946]"><Link to={'/login'}>Log-out</Link></button>
            </>
          ) : (
            <Link to={"/login"} className="btn text-[1rem] bg-[#FF6B6B] text-white hover:bg-[#E63946]">
              Log-in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
