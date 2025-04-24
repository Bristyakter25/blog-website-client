import loginAnimation from '../../assets/lottie files/login animation.json'
import Lottie from "lottie-react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin';
const SignIn = () => {
  const {signInUser} = useContext(AuthContext);
    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then(result =>{
          console.log('sign in',result.user)
          Swal.fire({
            title: "SuccessFully Signed In!",
            icon: "success",
            draggable: true
          });
        })
        .catch(error=>{
         Swal.fire({
                 icon: "error",
                 title: "Oops...",
                 text: "Something went Wrong!!!",
                
               });;
        })
    }
    return (
        <div className="hero bg-gray-100 dark:bg-black min-h-screen mt-40 lg:mt-32">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-[250px] lg:w-[500px] ml-5">
     <Lottie animationData={loginAnimation}></Lottie>
    </div>
    <div className="card bg-white dark:bg-purple-400 w-full   shadow-2xl">
    <h1 className="text-4xl font-bold dark:text-black  text-center mt-4">Sign In Here!</h1>
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered bg-white dark:text-black" required />
        </div>

      
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input bg-white dark:text-black input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white hover:bg-purple-800 dark:hover:bg-purple-800 bg-purple-400 dark:bg-purple-500">Sign In</button>
        </div>
      </form>
      <p className="text-center dark:text-black my-5">
            Don't have an account?{" "}
            <Link to="/register" className="text-red-500">
              Register
            </Link>{" "}
            here !
          </p>
          <SocialLogin></SocialLogin>
    </div>
   
  </div>
</div>
    );
};

export default SignIn;