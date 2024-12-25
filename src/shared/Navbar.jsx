
import {  NavLink } from "react-router-dom";



const Navbar = () => {
  
    const links = <>
    
    <div className="gap-x-5 flex">
    <NavLink to='/'><li className="text-xl font-semibold hover:text-purple-600">Home</li></NavLink>
    <NavLink to='addBlogs'><li className="hover:text-purple-600 text-xl font-semibold">Add Blogs</li></NavLink>
    <NavLink to='allBlogs'> <li className="text-xl font-semibold hover:text-purple-600">All blogs</li></NavLink>
    <li className="text-xl font-semibold hover:text-purple-600">Featured Blogs</li>
    <NavLink to='wishList'><li className="text-xl font-semibold hover:text-purple-600">Wishlist</li></NavLink>
 
    </div>
    </>
    return (
      <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>

  </div>
 
  <div className="navbar-end gap-x-2">
  
  </div>
  {/* <div className="text-3xl font-semibold flex justify-end mb-5">{user.email}</div> */}
</div>
<div className="divider "></div>
</div>
    );
};

export default Navbar;