import { getAuth } from '@firebase/auth';
import { useState } from 'react';
function ChatMessage({ message }) {

  const auth = getAuth();
  const { text, uid, photoURL } = message;
  const [profilePhoto, setProfilePhoto] = useState(photoURL || 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png');
  const isOwner = uid === auth.currentUser.uid ? 'flex-row-reverse mr-2' : '';
  const ownerBg = isOwner ? 'bg-indigo-700' : 'bg-blue-600';
  return (
    <div className={`ml-2 mt-3  flex  items-center ${isOwner} space-x-2 `}>
      <picture  className={isOwner && 'ml-2'} >

          <img src={profilePhoto} width="25" height="25" alt="profile" 
          onError={(e)=>{e.target.onerror = null; setProfilePhoto("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png")}}/> 
      </picture>
      <p className={`rounded-full p-3 ${ownerBg} `}>{text}</p>
    </div>
  )
}
export default ChatMessage;