import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
         <div>
      <div className="navbar bg-base-100 shadow-sm py-6 md:px-14">
        <div className="navbar-start">
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
              {/*dropdown links */}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-blue-600 border-b-2 pb-2 duration-100"
                      : "font-semibold text-neutral-600"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-blue-600 border-b-2 pb-2 duration-100"
                      : "font-semibold text-neutral-600"
                  }
                  to={"myBookings"}
                >
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-blue-600 border-b-2 pb-2 duration-100"
                      : "font-semibold text-neutral-600"
                  }
                  to={"blogs"}
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-blue-600 border-b-2 pb-2 duration-100"
                      : "font-semibold text-neutral-600"
                  }
                  to={"contact"}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <img src="/lawlogo-removebg.png" className="w-10 sm:w-15 h-10 sm:h-15" alt="" />
            <Link to={"/"} className="btn btn-ghost font-bold text-2xl sm:text-3xl">
              LawyerSpot
            </Link> 
          </div>
        </div>
        {/* links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-7 px-1 text-lg">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 border-b-2 pb-2 duration-100"
                    : "font-semibold text-neutral-600"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 border-b-2 pb-2 duration-100"
                    : "font-semibold text-neutral-600"
                }
                to={"myBookings"}
              > 
                My Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 border-b-2 pb-2 duration-100"
                    : "font-semibold text-neutral-600"
                }
                to={"blogs"}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 border-b-2 pb-2 duration-100"
                    : "font-semibold text-neutral-600"
                }
                to={"contact"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-6">
          <Link className="hidden sm:flex md:px-7 px-5 py-2 md:py-3 rounded-full font-bold bg-blue-600 text-white hover:bg-blue-700 md:text-lg ">
            Emergency
          </Link>
            
        </div>
      </div>
    </div>
    );
};

export default Navbar;