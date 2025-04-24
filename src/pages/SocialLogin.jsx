
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result =>{
        console.log(result.user);
    })
   .catch(error => {
    console.log(error.message);
   })
  };
  return (
    <div className="w-full dark:text-black mx-auto flex flex-col items-center">
  <div className="divider">OR</div>
  <button onClick={handleGoogleSignIn} className="btn text-white hover:bg-purple-800 dark:hover:bg-purple-800 bg-purple-400 dark:bg-purple-500 mb-10">Sign up with Google</button>
</div>
  );
};

export default SocialLogin;
