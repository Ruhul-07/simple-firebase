import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console,log(result)
    })
    .catch(error => {
        console.log('ERROR', error);
    })
  };
  return (
    <div className="text-center">
      <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  );
};

export default Login;
