import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink>Services</NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-sm bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={'/'} className="text-3xl font-semibold">DigitalSheba</Link>
      </div>
      
      {/* menu for large devices */}
      <div className="navbar-end space-x-8">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[1rem]">
          {navLinks}
        </ul>
      </div>
        <Link to={'/login'} className="btn text-[1rem]">Log-in</Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
