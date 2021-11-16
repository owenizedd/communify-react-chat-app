import { getAuth } from '@firebase/auth';
import { setDoc, doc, getFirestore } from '@firebase/firestore';

import { useState } from 'react';
import EmojiList from './EmojiList';
import EmojiPicker  from './EmojiPicker';
function ChatMessage({ message }) {
  const auth = getAuth();
  const firestore = getFirestore();

  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  
  const { text, uid, photoURL, id, reaction } = message;


  const [profilePhoto, setProfilePhoto] = useState(photoURL || 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png');

  const currentUserId = auth.currentUser.uid;
  const isOwner = uid === currentUserId ? 'flex-row-reverse mr-2' : '';
  const ownerBg = isOwner ? 'bg-indigo-700' : 'bg-blue-600';

  const getEmoji =  (data) => {
    const messageRef = doc(firestore, 'messages', id);
    const newReaction = reaction ? [...reaction] : [];
    newReaction.push({reactor: auth.currentUser.displayName, emoji: data});
    toggleShowing();
    setDoc(messageRef, { reaction: newReaction }, {merge: true});
  }
  const toggleShowing = () => {
    setIsEmojiPickerVisible(prev => !prev);
  }
  return (
    <div>
      <div className={`ml-2 mt-3 w-4/5 flex relative items-center ${isOwner? 'ml-auto' : 'mr-auto'} text-message ${isOwner} space-x-2 `}>
        <picture  className={isOwner && 'ml-2'} >

            <img src={profilePhoto} width="25" height="25" alt="profile" 
            style={{minWidth: '25px'}}
            onError={(e)=>{e.target.onerror = null; setProfilePhoto("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png")}}/> 
        </picture>
        <p className={`rounded-full px-5 py-3 ${ownerBg}`}>{text}</p>
        <EmojiPicker onPick={getEmoji} isShowing={isEmojiPickerVisible} toggleShowing={toggleShowing}/>
      </div>
      <EmojiList emojis={reaction} isOwner={isOwner}/>
    </div>
  )
}
export default ChatMessage;