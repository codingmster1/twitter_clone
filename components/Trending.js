import { DotsCircleHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function Trending() {
    return (
        <div className="lg:flex font-Quest">
            Trending

            <div className="flex space-x-3 bg-white
            w-[300px] h-[44px] p-3 rounded-3xl">
                <SearchIcon className="w-6" />
                <input
                    className="bg-transparent
                    focus:outline-none
                    "
                    placeholder="Search here"

                />
            </div>
            <div className="w-[300px] h-[500px] bg-white rounded-3xl mt-3">
                <h1 className="font-Quest text-xl p-3">Whats been up</h1>
                <div className="p-3 relative">
                    <DotsCircleHorizontalIcon className="w-5 absolute right-4" />
                    <p className="text-xs text-gray-500 font-Quest">Trending in US</p>
                    <h1 className="text-[15px] font-bold font-Quest">China</h1>
                    <p className="text-xs text-gray-500 font-Quest">340k Tweets</p>
                </div>
                <div className="p-3 relative">
                    <DotsCircleHorizontalIcon className="w-5 absolute right-4" />
                    <p className="text-xs text-gray-500 font-Quest">Trending in US</p>
                    <h1 className="text-[15px] font-bold font-Quest">China</h1>
                    <p className="text-xs text-gray-500 font-Quest">340k Tweets</p>
                </div>
                <div className="p-3 relative">
                    <DotsCircleHorizontalIcon className="w-5 absolute right-4" />
                    <p className="text-xs text-gray-500 font-Quest">Trending in US</p>
                    <h1 className="text-[15px] font-bold font-Quest">China</h1>
                    <p className="text-xs text-gray-500 font-Quest">340k Tweets</p>
                </div>
                <div className="p-3 relative">
                    <DotsCircleHorizontalIcon className="w-5 absolute right-4" />
                    <p className="text-xs text-gray-500 font-Quest">Trending in US</p>
                    <h1 className="text-[15px] font-bold font-Quest">China</h1>
                    <p className="text-xs text-gray-500 font-Quest">340k Tweets</p>
                </div>
                <div className="p-3 relative">
                    <DotsCircleHorizontalIcon className="w-5 absolute right-4" />
                    <p className="text-xs text-gray-500 font-Quest">Trending in US</p>
                    <h1 className="text-[15px] font-bold font-Quest">China</h1>
                    <p className="text-xs text-gray-500 font-Quest">340k Tweets</p>
                </div>





            </div>

            <div className="w-[300px] h-[300px] bg-white rounded-3xl mt-3">
                <h1 className="font-Quest text-xl p-3">Who to follow</h1>

                <div>
                    <div className="flex space-x-3 p-3">
                        <img className="w-11 h-11 object-cover rounded-full" src="/assets/beedle.jpg" />
                        <div>
                            <h1 className="font-bold">Beedle</h1>
                            <BadgeCheckIcon className="w-[18px] text-blue-400" />
                        </div>

                    </div>
                    <button>
                        Follow
                    </button>
                </div>




            </div>
        </div>
    )
}