
import { useState, useRef } from 'react';
import { collection, query, limit, orderBy, addDoc, serverTimestamp, getFirestore } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getAuth } from '@firebase/auth';
import ChatMessage from './ChatMessage';

function ChatRoom() {
  const firestore = getFirestore();
  const auth = getAuth();
  const messagesRef = collection(firestore, 'messages');
  const bottomMessage = useRef();
  const q = query(messagesRef, orderBy('createdAt'));

  const [messages, , error] = useCollectionData(q, { idField: 'id' });
  if (!!error) {
    console.log(error);
  }

  const [messageForm, setMessageForm] = useState('');
  const submitMessage = async (e) => {
    e.preventDefault();
    
    const { uid, photoURL } = auth.currentUser;
    await addDoc(messagesRef, {
      text: messageForm,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    })

    setMessageForm('');
    bottomMessage.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div className="h-4/5 mb-12 text-white">
        {messages &&
          messages.map(msg => (
            <ChatMessage key={msg.id} message={msg} />))
        }
        <div ref={bottomMessage} />
      </div>
      <form className="fixed w-full bg-indigo-900 flex justify-between bottom-0 left-0 text-white p-1" onSubmit={submitMessage}>
        <input type="text" className="flex-auto px-2 bg-indigo-600" value={messageForm} onChange={(e) => setMessageForm(e.target.value)} />
        <button className="flex-auto btn btn--primary items-center justify-center text-white border border-white shadow-offset-white " type="submit" > Send 📨 </button>
      </form>
    </>
  )
}

export default ChatRoom;