import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const { user } = useContext(AuthContext);

  const publicLinks = (
    <div className="gap-x-5 lg:flex mr-5">
      <NavLink to="/">
        <li className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          Home
        </li>
      </NavLink>
      <NavLink to="allBlogs">
        <li className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          All Blogs
        </li>
      </NavLink>
      <NavLink to="trendingTechnology">
        <li className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          Trending Technology
        </li>
      </NavLink>
    </div>
  );

  const privateLinks = (
    <div className="gap-x-5 lg:flex">
      <NavLink to="addBlogs">
        <li className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          Add Blogs
        </li>
      </NavLink>
      <NavLink to="/featuredBlogs">
        <li className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          Featured Blogs
        </li>
      </NavLink>
      <NavLink to="/wishList">
        <li className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          Wishlist
        </li>
      </NavLink>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100 dark:bg-gray-900 dark:text-white">
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
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {publicLinks}
              {user && privateLinks} {/* Show private links only if user is logged in */}
            </ul>
          </div>
        </div>

        {/* Centered Navbar Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {publicLinks}
            {user && privateLinks}
          </ul>
        </div>

        {/* Navbar End - Dark Mode Toggle */}
        <div className="navbar-end flex gap-x-2 mr-20">
          <button
            onClick={toggleTheme}
            className="p-4 rounded btn-lg  bg-purple-300 dark:bg-purple-700"
          >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>

      <div className="lg:divider"></div>
    </div>
  );
};

export default Navbar;
