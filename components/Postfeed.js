import Tweet from "./Tweet";
import TweetInput from "./Tweetinput";

export default function PostFeed() {
    return (
        <div className="sm:ml-16 xl:ml-80 max-w-2xl flex-grow
        border-blue-500 border-x">
            <div className="px-3 py-2 text-lg sm:text-xl font-bold font-Quest
            border-b border-blue-500 sticky top-0 z-50">
                Home
            </div>
            <TweetInput />

            <Tweet />
        </div>
    )
}