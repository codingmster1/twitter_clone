import { db } from "@/firebase";
import { openCommentModal, setCommentTweet } from "@/redux/modalSlice";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/solid";
import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline"
import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
export default function Tweet({ data, id }) {


    const dispatch = useDispatch()
    const router = useRouter()

    const user = useSelector((state) => state.user)

    const [likes, setLikes] = useState([])


    async function likeComment(e) {
        e.stopPropagation()
        if (likes.includes(user.uid)) {
            await updateDoc(doc(db, "posts", id), {
                likes: arrayRemove(user.uid),

            })
        }

        else {
            await updateDoc(doc(db, "posts", id), {
                likes: arrayUnion(user.uid),
            })
        }
    }

    useEffect(() => {

        if (!id) return;

        const unsubscribe = onSnapshot(doc(db, "posts", id), (doc) => {
            setLikes(doc.data().likes)
        })
        return unsubscribe;

    }, [])

    return (
        <div
            onClick={() => router.push("/" + id)}
            className="border-b border-blue-500 cursor-pointer">
            <TweetHeader username={data?.username} name={data?.name} timestamp={data?.timestamp?.toDate()}
                text={data?.tweet}
                photoUrl={data?.photoUrl} />
            <div className="p-5 ml-16 text-[#fa5044] flex space-x-14">
                <div
                    onClick={(e) => {
                        e.stopPropagation()
                        dispatch(setCommentTweet({
                            id: id,
                            tweet: data?.tweet,
                            photoUrl: data?.photoUrl,
                            name: data?.name,
                            username: data?.username,
                        }))
                        dispatch(openCommentModal())

                    }}
                >
                    <ChatIcon className="w-5 cursor-pointer hover:text-red-400" />
                </div>

                <div
                    className="font-Quest flex justify-center items-center space-x-2 text-pink-500"
                    onClick={likeComment}>

                    {likes.includes(user.uid) ? <FilledHeartIcon className="w-5 text-pink-500" /> :
                        <HeartIcon className="w-5 cursor-pointer hover:text-red-400" />}
                    {likes.length > 0 && <span>{likes.length}</span>}
                </div>
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