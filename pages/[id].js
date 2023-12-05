import PostFeed from "@/components/Postfeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Tweet from "@/components/Tweet";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Image from 'next/image';

export default function CommentsPage() {
    return (
        <div>
            <div className="bg-[#d4fdf6] min-h-screen text-[#000000]
    max-w-[1400px] mx-auto flex font-Zelda">
                <Sidebar />

                <div className="sm:ml-16 xl:ml-80 max-w-2xl flex-grow
        border-blue-500 border-x">
                    <div className="flex items-center gap-12 p-3  px-3 py-2 text-lg sm:text-xl font-bold font-Quest
            border-b border-blue-500 sticky top-0 z-50">
                        <ArrowLeftIcon className="w-7"
                        />
                        Tweet
                        <Image src={'/assets/mmtweeticon.gif'} width={34} height={34} />
                        <Image src={'/assets/commenticon2.gif'} width={34} height={34} />
                        <Image src={'/assets/dekulink.gif'} width={34} height={34} />
                    </div>





                    <Tweet />
                </div>

                <Trending />
            </div>
        </div>
    )
}