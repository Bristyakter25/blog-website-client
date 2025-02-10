import { useContext } from "react";
import logo from "../assets/logo/project logo.png";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Successfully signed out");
      })
      .catch((error) => {
        console.log("Failed to sign out", error);
      });
  };

  return (
    <div className="bg-[#493D9E] p-3 md:p-4  flex items-center justify-between lg:px-[340px]">
      
      {/* Logo & Website Name */}
      <div className="flex items-center gap-2">
        <img
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border border-cyan-500"
          src={logo}
          alt="Logo"
        />
        <a className="text-[14px] md:text-xl lg:text-2xl text-indigo-200 font-extrabold">
          WebSophist
        </a>
      </div>

      {/* Authentication Section */}
      <div className="flex items-center lg:mr-0 mr-10 gap-3  md:gap-5">
        {user ? (
          <div className="flex items-center gap-2">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full"
            />
            <button
              onClick={handleSignOut}
              className="btn bg-purple-400 hover:bg-purple-500 text-white text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-5 py-1 md:py-2"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/signIn">
              <button className="btn bg-purple-400 hover:bg-purple-500 text-white text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-5 py-1 md:py-2">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="btn bg-purple-400 hover:bg-purple-500 text-white text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-5 py-1 md:py-2">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
