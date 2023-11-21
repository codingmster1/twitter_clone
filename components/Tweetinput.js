export default function TweetInput() {
    return (
        <div className="flex space-x-3 p-3 border-b border-green-700">
            <img
                className="w-11 h-11 rounded-full object-cover"
                src="/assets/linkpp.png" />
            <div className="w-full">
                <textarea
                    placeholder="What's in your dungeon?"
                    className="bg-transparent resize-none outline-none w-full
                    min-h-[50px] text-lg" />



                <div className="flex justify-between border-t border-green-700 pt-4">
                    <div>

                    </div>

                    <button className="font-Quest">
                        Write
                    </button>
                </div>
            </div>
        </div>
    )
}