import { useContext } from 'react';
import logo from '../assets/logo/project logo.png'
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
       
         <div className="navbar bg-[#474E93] p-4">
        
  <div className="navbar-start">
  </div>
  <div className="navbar-center">
    <img className="w-12 h-12 rounded-full border border-cyan-500" src={logo} alt="" />
    <a className="ml-2 text-[12px] lg:text-2xl text-white">WebSophist</a>
  </div>
  <div className="navbar-end mr-20">
  {user ? (
          <div className="flex items-center gap-2">
            {/* Show Profile Picture */}
            <img
              src={user.photoURL}
              alt="Profile"
              className="lg:w-10 w-7 h-7 lg:h-10 rounded-full"
            />
            <button onClick={handleSignOut} className="btn bg-purple-400 text-white ">Sign Out</button>
          </div>
        ) : (
          <div className="flex items-center gap-2 mr-5">
            
            <Link to="/signIn"><button className="btn bg-purple-400 text-white ">Sign In</button></Link>
            <Link to="/register"><button className="btn bg-purple-400 text-white ">Register</button></Link>
          </div>
        )}
  </div>
</div>
      
       
    );
   
};
export default Header;