import { getAuth } from '@firebase/auth';

function SignOut() {
  const auth = getAuth();
  return auth.currentUser && (
    <button class="w-1/4 flex text-xs items-center justify-center rounded-md border border-gray-300 text-white" type="button" onClick={() => auth.signOut()}>Sign Out 🚪</button>
  )
}

export default SignOut;