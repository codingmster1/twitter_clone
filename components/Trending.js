import { DotsCircleHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import Image from 'next/image';

export default function Trending() {
    return (
        <div className="hidden lg:flex flex-col ml-5 mt-4 overflow-hidden font-Quest">
            <h1 className="mb-3 flex items-center">Trending
                <Image src={'/assets/navi.gif'} width={34} height={34} />
            </h1>

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
            <div className="w-[300px] h-[500px] bg-white rounded-3xl mr-3 mt-3">
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

            <div className="w-[300px] h-[300px] bg-white rounded-3xl mb-3 mt-3">
                <h1 className="font-Quest text-xl p-3">Who to follow</h1>

                <div className="flex justify-between p-3">
                    <div className="flex space-x-3">
                        <img className="w-11 h-11 object-cover rounded-full" src="/assets/beedle.jpg" />
                        <div>
                            <div className="flex space-x-1">
                                <h1 className="font-bold">Beedle</h1>
                                <BadgeCheckIcon className="w-[18px] text-blue-400" />
                            </div>
                            <h1 className="text-[12px] mt-1 text-gray-500">@beedle</h1>

                        </div>


                    </div>
                    <button className="bg-blue-300 text-black text-sm w-20 h-8
                    rounded-3xl font-bold">
                        Follow
                    </button>
                </div>

                <div className="flex justify-between p-3">
                    <div className="flex space-x-3">
                        <img className="w-11 h-11 object-cover rounded-full" src="/assets/beedle.jpg" />
                        <div>
                            <div className="flex space-x-1">
                                <h1 className="font-bold">Beedle</h1>
                                <BadgeCheckIcon className="w-[18px] text-blue-400" />
                            </div>
                            <h1 className="text-[12px] mt-1 text-gray-500">@beedle</h1>

                        </div>


                    </div>
                    <button className="bg-blue-300 text-black text-sm w-20 h-8
                    rounded-3xl font-bold">
                        Follow
                    </button>
                </div>

                <div className="flex justify-between p-3">
                    <div className="flex space-x-3">
                        <img className="w-11 h-11 object-cover rounded-full" src="/assets/beedle.jpg" />
                        <div>
                            <div className="flex space-x-1">
                                <h1 className="font-bold">Beedle</h1>
                                <BadgeCheckIcon className="w-[18px] text-blue-400" />
                            </div>
                            <h1 className="text-[12px] mt-1 text-gray-500">@beedle</h1>

                        </div>


                    </div>
                    <button className="bg-blue-300 text-black text-sm w-20 h-8
                    rounded-3xl font-bold">
                        Follow
                    </button>
                </div>




            </div>
        </div>
    )
}