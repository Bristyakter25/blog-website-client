import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from '../assets/project logo.jpg'

const Navbar = () => {
  const {user,signOutUser} = useContext(AuthContext);

  const handleSignOut = () =>{
    signOutUser()
    .then(()=>{
      console.log('successfully signed out')
      .catch(error =>{
        console.log('failed to sign out',error);
      })
    })


  }
    const links = <>
    <div className="gap-x-3 flex">
    <NavLink to='/'><li>Home</li></NavLink>
    <li>Add Blogs</li>
    <li>All blogs</li>
    <li>Featured Blogs</li>
    <li>Wishlist</li>
 
    </div>
    </>
    return (
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
    <img className="w-12 h-12 rounded-full border border-cyan-500" src={logo} alt="" />
    <a className="ml-2 text-2xl font-bold">Blog Website
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-x-2">
  {user ? (
          <div className="flex items-center gap-2">
            {/* Show Profile Picture */}
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <button onClick={handleSignOut} className="btn">Sign Out</button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {/* Show Login and Register Buttons */}
            <Link to="/signIn"><button className="btn">Sign In</button></Link>
            <Link to="/register"><button className="btn">Register</button></Link>
          </div>
        )}
    
  </div>
  {/* <div className="text-3xl font-semibold flex justify-end mb-5">{user.email}</div> */}
</div>
    );
};

export default Navbar;