import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon } from "@heroicons/react/outline";

export default function TweetInput() {
    return (
        <div className="flex space-x-3 p-3 border-b border-blue-500">
            <img
                className="w-11 h-11 rounded-full object-cover"
                src="/assets/linkpp.png" />
            <div className="w-full">
                <textarea
                    placeholder="What's in your dungeon?"
                    className="bg-transparent resize-none outline-none w-full
                    min-h-[50px] text-lg" />



                <div className="flex justify-between border-t border-blue-500 pt-4">
                    <div className="flex space-x-0 ">
                        <div className="iconAnimation">
                            <PhotographIcon className="h-[22px] text-[#fa5044]" />
                        </div>
                        <div className="iconAnimation">
                            <ChartBarIcon className="h-[22px] text-[#fa5044]" />
                        </div>
                        <div className="iconAnimation">
                            <EmojiHappyIcon className="h-[22px] text-[#fa5044]" />
                        </div>
                        <div className="iconAnimation">
                            <CalendarIcon className="h-[22px] text-[#fa5044]" />
                        </div>
                        <div className="iconAnimation">
                            <LocationMarkerIcon className="h-[22px] text-[#fa5044]" />
                        </div>

                    </div>

                    <button className="font-Quest bg-blue-400 font-bold rounded-full px-4 py-1.5">
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}