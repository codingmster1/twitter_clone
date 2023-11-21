export default function Tweet() {
    return (
        <div>
            <TweetHeader />
        </div>
    )
}

export function TweetHeader() {
    return (
        <div className="flex space-x-3 p-3 border-b border-green-700">
            <img src="/assets/linkpp.png"
                className="w-11 h-11 rounded-full object-cover" />
            <div>

                <div className="flex items-center space-x-2 font-Quest text-gray-500">
                    <span>@link</span>
                    <div className="w-1 h-1 bg-green-700 rounded-full"></div>
                    <span>1 hour ago</span>
                </div>
                <span>text</span>

            </div>
        </div>
    )
}