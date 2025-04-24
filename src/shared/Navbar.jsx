import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const publicLinks = (
    <>
      <li>
        <NavLink to="/" className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allBlogs" className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          All Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/trendingTechnology" className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          Trending Technology
        </NavLink>
      </li>
    </>
  );

  const privateLinks = (
    <>
      <li>
        <NavLink to="/addBlogs" className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          Add Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/featuredBlogs" className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          Featured Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/wishList" className="text-2xl font-semibold hover:text-purple-600 dark:text-white">
          Wishlist
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white  text-purple-400 dark:bg-gray-900 dark:text-white">
      <div className=" w-[1124px] mx-auto">
        
        {/* Mobile Dropdown - Left side */}
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52 z-[999]"
            >
              {publicLinks}
              {user && privateLinks}
            </ul>
          </div>
        </div>

        {/* Centered Navbar - Large Devices */}
        <div className=" hidden  lg:flex">
          <ul className="menu menu-horizontal  gap-x-5 px-1">
            {publicLinks}
            {user && privateLinks}
          </ul>
        </div>

        
        <div className="navbar-end hidden lg:flex">
        
        </div>
      </div>

      <div className="divider lg:divider"></div>
    </div>
  );
};

export default Navbar;
