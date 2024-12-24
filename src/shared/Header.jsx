import { useContext } from 'react';
import logo from '../assets/project logo.jpg'
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {

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
    return (
        <div className="navbar bg-black p-4">
  <div className="navbar-start">
  </div>
  <div className="navbar-center">
    <img className="w-12 h-12 rounded-full border border-cyan-500" src={logo} alt="" />
    <a className="btn btn-ghost text-2xl text-white">Blog Website</a>
  </div>
  <div className="navbar-end">
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
          <div className="flex items-center gap-2 mr-5">
            {/* Show Login and Register Buttons */}
            <Link to="/signIn"><button className="btn">Sign In</button></Link>
            <Link to="/register"><button className="btn">Register</button></Link>
          </div>
        )}
  </div>
</div>
       
    );
};

export default Header;