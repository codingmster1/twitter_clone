import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline"

export default function Tweet() {
    return (
        <div className="border-b border-green-700">
            <TweetHeader />
            <div className="p-5 ml-16 text-[#fa5044] flex space-x-14">
                <ChatIcon className="w-5 cursor-pointer hover:text-red-400" />
                <HeartIcon className="w-5 cursor-pointer hover:text-red-400" />
                <ChartBarIcon className="w-5 cursor-not-allowed" />
                <UploadIcon className="w-5 cursor-not-allowed" />
            </div>
        </div>
    )
}

export function TweetHeader() {
    return (
        <div className="flex space-x-3 p-3 border-green-700">
            <img src="/assets/linkpp.png"
                className="w-11 h-11 rounded-full object-cover" />
            <div>

                <div className="flex items-center space-x-2 font-Quest text-gray-500">
                    <span>@link</span>
                    <div className="w-1 h-1 bg-green-700 rounded-full"></div>
                    <span>1 hour ago</span>
                </div>
                <span>text</span>

            </div>
        </div>
    )
}