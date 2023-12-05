import { db } from "@/firebase";
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function TweetInput() {

    const user = useSelector(state => state.user)

    const [text, setText] = useState("")
    const [image, setImage] = useState("/assets/linkpp.png")

    async function sendTweet() {
        const docRef = await addDoc(collection(db, "posts"), {
            username: user.username,
            name: user.name,
            photoUrl: user.photoUrl,
            uid: user.uid,
            timestamp: serverTimestamp(),
            likes: [],
            tweet: text


        })
        setText("")
    }
    return (
        <div className=" flex space-x-3 p-3 border-b border-blue-500">
            <img
                className="w-11 h-11 rounded-full object-cover"
                src={user.photoUrl || "/assets/cucco2.png"} />
            <div className="w-full">
                <textarea
                    placeholder="What's in your dungeon?"
                    className="bg-transparent resize-none outline-none w-full
                    min-h-[50px] text-lg"
                    onChange={e => setText(e.target.value)}
                    value={text}
                />

                {image && (
                    <div className="relative mb-4">
                        <div
                            onClick={() => setImage(null)}
                            className="absolute top-1 left-1
                        bg-[#8c948b] rounded-full w-8 h-8 flex justify-center
                        items-center cursor-pointer hover:bg-white hover:bg-opacity-10">
                            <XIcon className="h-5" />
                        </div>
                        <img
                            className="rounded-2xl max-h-80 object-contain"
                            src={image} />
                    </div>
                )}



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

                    <button
                        onClick={sendTweet}
                        disabled={!text}
                        className="font-Quest bg-blue-400 font-bold rounded-full px-4 py-1.5
                        disabled:opacity-50">
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}