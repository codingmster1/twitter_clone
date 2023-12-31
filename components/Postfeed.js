
import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Tweet from "./Tweet";
import TweetInput from "./Tweetinput";
import Image from 'next/image';
import Link from "next/link";

export default function PostFeed() {

    const [tweets, setTweets] = useState([])


    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setTweets(snapshot.docs)
        })
        return unsubscribe

    }, [])
    return (
        <div className="sm:ml-16 xl:ml-80 max-w-2xl flex-grow
        border-blue-500 border-x bg-white" >
            <div className="p-3 flex justify-between px-3 py-2 text-lg sm:text-xl font-bold font-Quest
            border-b border-blue-500 sticky top-0 z-50 bg-white">
                Home
                <Image src={'/assets/cucco1.gif'} width={34} height={30} />
                <Image src={'/assets/wwlink.gif'} width={34} height={34} />
            </div>

            <TweetInput />

            {tweets.map((tweet) => {
                return (


                    <Tweet key={tweet.id} id={tweet.id} data={tweet.data()} />

                )
            })}

            <Tweet />
        </div>
    )
}