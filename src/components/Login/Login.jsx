import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    console.log('google comming soon')
  }
    return (
        <div className="text-center">
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;