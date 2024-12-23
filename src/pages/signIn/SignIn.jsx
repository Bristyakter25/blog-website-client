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
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-[450px]">
     <Lottie animationData={loginAnimation}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-4xl font-bold ml-8 mt-4">Sign In Here!</h1>
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </form>
      <p className="text-center my-5">
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