import { emojiUnicodes } from '../utils/messaging-helper';


export default function EmojiPicker({onPick, isShowing, toggleShowing}){
    const handleEmojiPick = (emoji) => {
        onPick(emoji);
    }
    return (
        <div className="emoji-picker  opacity-1">
            
            <p className="emoji-picker--button cursor-pointer bg-gray-800 rounded-lg pl-2 text-xl" onClick={toggleShowing}>+</p>
            {   
                isShowing &&
                <div className="emoji-picker--list rounded-lg bg-gray-900 bg-opacity-75 px-3 py-1 pt-12">
                    <div className='absolute flex w-11/12 justify-between pr-1 left-0 top-0 text-lg ml-5 mt-2'>
                        <span className="font-bold">Pick an emoji to react</span>
                        <span className="text-3xl -top-2 relative rounded-lg bg-gray-900 py-1 px-5" onClick={toggleShowing}>x</span>
                    </div>
                    { emojiUnicodes.map(emoji => <span className='lg:text-lg cursor-pointer mx-1' onClick={() => handleEmojiPick(emoji)}>{emoji}</span>)}
                </div>
            }
        </div>
    )
}