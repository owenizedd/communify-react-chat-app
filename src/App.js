import './App.css';
import {initializeApp} from 'firebase/app';
import { getAuth } from '@firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';

initializeApp({
  apiKey: "AIzaSyCsum_ofUBGa2RRbi2v0LVxGENZ4_qFckY",
  authDomain: "owen-communify.firebaseapp.com",
  projectId: "owen-communify",
  storageBucket: "owen-communify.appspot.com",
  messagingSenderId: "779750148827",
  appId: "1:779750148827:web:d6985d865544a651a65afe",
  measurementId: "G-FBJXXZDD3B"
})


function App() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  console.log(user);
  return (
    <div className="App bg-indigo-900 ">
      <header className="flex sticky top-0 App-header text-indigo-100 text-opacity-75 bg-indigo-500 justify-between py-2 px-5">
        <div className='flex space-x-4'>
          <img src="/images.jpeg" width='30' height='30' alt='logo'/>
          <h1 className="text-2xl font-light">Communify</h1>
        </div>
        <SignOut/>
      </header>
      
      {
        !loading ? (
          <section>
            {user? <ChatRoom/> : <SignIn/>}
          </section>
        )
        :
        (
          <div class="loader mx-auto mt-20">
            <div class="loader-wheel"></div>
            <div class="loader-text"></div>
          </div>
        )
      }
    </div>
  );
}





export default App;
