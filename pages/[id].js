import PostFeed from "@/components/Postfeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Tweet from "@/components/Tweet";
import { db } from "@/firebase";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { doc, getDoc } from "firebase/firestore";
import Image from 'next/image';
import Moment from "react-moment";

export async function getServerSideProps(context) {
    const id = context.query.id
    const docRef = doc(db, "posts", id)
    const docSnap = await getDoc(docRef)
    const data = docSnap.data()
    const formattedData = {
        username: data.username,
        name: data.name,
        photoUrl: data.photoUrl,
        text: data.tweet,
        comments: data.comments || null,
        timestamp: JSON.stringify(data.timestamp.toDate())
    }

    return {
        props: {
            tweetData: formattedData
        }
    }

}



export default function CommentsPage({ tweetData }) {
    return (
        <div>
            <div className="bg-[#d4fdf6] min-h-screen text-[#000000]
    max-w-[1400px] mx-auto flex font-Zelda">
                <Sidebar />

                <div className="sm:ml-16 xl:ml-80 max-w-2xl flex-grow
        border-blue-500 border-x">
                    <div className="flex items-center gap-10 p-3  px-3 py-2 text-lg sm:text-xl font-bold font-Quest
            border-b border-blue-500 sticky top-0 z-50">
                        <ArrowLeftIcon className="w-7"
                        />
                        <h1>Tweet</h1>
                        <Image src={'/assets/mmtweeticon.gif'} width={34} height={34} />
                        <Image src={'/assets/commenticon2.gif'} width={34} height={34} />
                        <Image src={'/assets/dekulink.gif'} width={34} height={34} />
                    </div>

                    <div className="border-b border-blue-500">
                        <div className="flex space-x-3 p-3 border-blue-500">
                            <img src={tweetData.photoUrl}
                                className="w-11 h-11 rounded-full object-cover" />
                            <div>

                                <div className="flex items-center space-x-2 font-Quest text-gray-500 mb-1">
                                    <h1 className="text-black font-bold">{tweetData.name}</h1>
                                    <span>@{tweetData.username}</span>
                                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                    <Moment fromNow>
                                        {JSON.parse(tweetData.timestamp)}
                                    </Moment>
                                </div>
                                <span className="font-Quest">{tweetData.text}</span>

                            </div>
                        </div>



                    </div>


                    <Tweet />
                </div>

                <Trending />
            </div>
        </div>
    )
}