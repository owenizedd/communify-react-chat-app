import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { getAuth } from '@firebase/auth';
function SignIn() {
  const auth = getAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }
  return (
    <button onClick={signInWithGoogle} className="mx-auto mt-10 rounded-lg  btn btn--secondary items-center flex space-x-3">
      <span className='ml-2'>Sign in with Google</span>
      <img className='mx-3 block' width='30' alt='google' className="ml-3"  height='30' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"/>
    </button>
  )
}
export default SignIn;
