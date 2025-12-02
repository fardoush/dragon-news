import { use } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";



const SocialLogin = () => {
const {user, signInWithGoogle, signInWithGithub} = use(AuthContext);
  
  //  const { signIn } = use(AuthContext);

  const handleGoogleLogin = () => {
    
    signInWithGoogle()
    .then(result => {
      const user = result.user;
      console.log("User:", user);
    })
    .catch(error => {
      console.log(error);
    })
  }

  // github 

  const handleGithubLogin = () => {
    signInWithGithub()
    .then(result => {
      const user = result.user;
      console.log("User:", user);
    })
    .catch(error => {
      console.log(error);
    })

  }

    // 🚫 User logged in → hide login buttons
  if (user) {
    return null;
  }

  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full">
          <FaGoogle size={24} /> Login With Google
        </button>
        <button onClick={handleGithubLogin} className="btn btn-outline btn-primary w-full ">
          <FaGithub size={24} />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
