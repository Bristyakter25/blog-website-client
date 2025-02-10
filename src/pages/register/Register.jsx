import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import registerAnimation from "../../assets/lottie files/register animation.json";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin";

const Register = () => {
    const {createUser,setUser,user} = useContext(AuthContext);
  const [error, setError] = useState("");

  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email, password);

    // firebase authentication
    createUser(email,password)
    .then(result =>{
       const createdUser = result.user;

       return updateProfile(createdUser, {
        displayName: name,
        photoURL: photo,
      }).then(() => {
        setUser({ ...createdUser, displayName: name, photoURL: photo });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are Successfully Registered!",
          showConfirmButton: false,
          timer: 1500
        });
      });

    })
    .catch(error =>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email Address Already Exist!",
       
      });
    })

    // Validation Process
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError("Password must include at least one numeric digit.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!specialCharacterRegex.test(password)) {
      setError(
        "Password must include at least one special character (e.g., !, @, #, $, etc.)."
      );
      return;
    }

    setError("");
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-40 lg:mt-32">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-[250px] lg:w-96 ml-5">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full  shadow-2xl">
          <h1 className="text-4xl font-bold  mt-4 text-center">Register Here!</h1>

          <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
           
            {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center my-5">
            Already Registered?{" "}
            <Link to="/signIn" className="text-red-500">
              Sign In
            </Link>{" "}
            here !
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
