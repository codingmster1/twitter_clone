import { openCommentModal } from "@/redux/modalSlice";
import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline"
import Moment from "react-moment";
import { useDispatch } from "react-redux";
export default function Tweet({ data }) {


    const dispatch = useDispatch()

    return (
        <div className="border-b border-blue-500">
            <TweetHeader username={data?.username} name={data?.name} timestamp={data?.timestamp?.toDate()}
                text={data?.tweet}
                photoUrl={data?.photoUrl} />
            <div className="p-5 ml-16 text-[#fa5044] flex space-x-14">
                <div
                    onClick={() => dispatch(openCommentModal())}
                >
                    <ChatIcon className="w-5 cursor-pointer hover:text-red-400" />
                </div>
                <HeartIcon className="w-5 cursor-pointer hover:text-red-400" />
                <ChartBarIcon className="w-5 cursor-not-allowed" />
                <UploadIcon className="w-5 cursor-not-allowed" />
            </div>
        </div>
    )
}

export function TweetHeader({ username, name, timestamp, text, photoUrl }) {
    return (
        <div className="flex space-x-3 p-3 border-blue-500">
            <img src={photoUrl}
                className="w-11 h-11 rounded-full object-cover" />
            <div>

                <div className="flex items-center space-x-2 font-Quest text-gray-500 mb-1">
                    <h1 className="text-black font-bold">{name}</h1>
                    <span>@{username}</span>
                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    <Moment fromNow>
                        {timestamp}
                    </Moment>
                </div>
                <span className="font-Quest">{text}</span>

            </div>
        </div>
    )
}