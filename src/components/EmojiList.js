

export default function EmojiList({emojis, className, isOwner}){
    const emojiList = emojis ? emojis : [];
    return (
        <div className={`emoji-list relative flex ${isOwner ? 'justify-end' : 'justify-start left-12'} -bottom-2 right-10 `}>
            {
                emojiList.map(data => (
                    <div className="emoji-list--data">
                        <span className='rounded-full bg-white p-1' title={data.reactor}>{data.emoji}</span>
                        <span className='emoji-list--author'>{data.reactor}</span>
                    </div>
                ))
            }
        </div>
    )
}