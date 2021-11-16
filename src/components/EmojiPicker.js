import { emojiUnicodes } from '../utils/messaging-helper';


export default function EmojiPicker({onPick, isShowing, toggleShowing}){
    const handleEmojiPick = (emoji) => {
        onPick(emoji);
    }
    return (
        <div className="emoji-picker  opacity-1">
            <p className="emoji-picker--button cursor-pointer bg-gray-800 rounded-lg pl-1" onClick={toggleShowing}>☺️ +</p>
            {   
                isShowing &&
                <div className="emoji-picker--list rounded-lg bg-gray-900 px-3 py-1">
                    { emojiUnicodes.map(emoji => <span className='text-lg cursor-pointer mx-1' onClick={() => handleEmojiPick(emoji)}>{emoji}</span>)}
                </div>
            }
        </div>
    )
}