import PostFeed from "@/components/Postfeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Tweet from "@/components/Tweet";
import { db } from "@/firebase";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { doc, getDoc } from "firebase/firestore";
import Image from 'next/image';
import Link from "next/link";
import Moment from "react-moment";
import { useSelector } from "react-redux";

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
        timestamp: JSON.stringify(data.timestamp.toDate()),
        image: data.image || null,
    }

    return {
        props: {
            tweetData: formattedData
        }
    }

}



export default function CommentsPage({ tweetData }) {
    const user = useSelector(state => state.user)
    return (
        <div>
            <div className="bg-[#d4fdf6] min-h-screen text-[#000000]
    max-w-[1400px] mx-auto flex font-Zelda">
                <Sidebar />

                <div className="sm:ml-16 xl:ml-80 max-w-2xl flex-grow
        border-blue-500 border-x bg-white" >
                    <div className="flex items-center  gap-6 p-3  px-3 py-2 text-lg sm:text-xl font-bold font-Quest
            border-b border-blue-500 sticky top-0 z-50 bg-white">
                        <Link href={"/"}>
                            <ArrowLeftIcon className="w-7 cursor-pointer"
                            />
                        </Link>
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
                                <span className="text-2xl font-Quest">{tweetData.text}</span>

                                {tweetData.image &&
                                    <img
                                        className="object-cover rounded-md mt-3 max-h-80"
                                        src={tweetData.image} />}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center font-Quest p-2 border-b border-white">
                        <div className="flex justify-center items-center p-1 space-x-2">
                            <img className="w-12 h-12 rounded-full object-cover" src={user.photoUrl} />
                            <h1 className="text-1xl text-gray-500">Write your reply</h1>
                        </div>

                        <button
                            disabled={true}
                            className="font-Quest bg-blue-400 font-bold rounded-full px-4 py-1.5
                        disabled:opacity-50">
                            Post
                        </button>
                    </div>


                    {tweetData.comments?.map(comment => (
                        <div className="border-b border-blue-500">
                            <div className="flex space-x-3 p-3 border-blue-500">
                                <img src={comment.photoUrl}
                                    className="w-11 h-11 rounded-full object-cover" />
                                <div>

                                    <div className="flex items-center space-x-2 font-Quest text-gray-500 mb-1">
                                        <h1 className="text-black font-bold">{comment.name}</h1>
                                        <span>@{comment.username}</span>
                                    </div>
                                    <span className="font-Quest">{comment.comment}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <Trending />
            </div>
        </div>
    )
}