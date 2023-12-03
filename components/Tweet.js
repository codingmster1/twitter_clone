import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline"

export default function Tweet({ data }) {
    return (
        <div className="border-b border-blue-500">
            <TweetHeader username={data?.username} name={data?.name} //timestamp={data?.timestamp} 
                text={data?.tweet} />
            <div className="p-5 ml-16 text-[#fa5044] flex space-x-14">
                <ChatIcon className="w-5 cursor-pointer hover:text-red-400" />
                <HeartIcon className="w-5 cursor-pointer hover:text-red-400" />
                <ChartBarIcon className="w-5 cursor-not-allowed" />
                <UploadIcon className="w-5 cursor-not-allowed" />
            </div>
        </div>
    )
}

export function TweetHeader({ username, name, timestamp, text }) {
    return (
        <div className="flex space-x-3 p-3 border-blue-500">
            <img src="/assets/linkpp.png"
                className="w-11 h-11 rounded-full object-cover" />
            <div>

                <div className="flex items-center space-x-2 font-Quest text-gray-500 mb-1">
                    <h1>{name}</h1>
                    <span>@{username}</span>
                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    <span>{timestamp}</span>
                </div>
                <span className="font-Quest">{text}</span>

            </div>
        </div>
    )
}