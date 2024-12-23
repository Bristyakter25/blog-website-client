
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
    <div className="w-28 mx-auto">
        <div className="divider ">OR</div>
       
      <button onClick={handleGoogleSignIn} className="btn m-4 bg-teal-700 text-white">Google</button>
    </div>
  );
};

export default SocialLogin;
