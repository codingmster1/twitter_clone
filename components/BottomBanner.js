export default function BottomBanner() {
    return (
        <div className="flex xl:space-x-[200px] justify-center items-center fixed w-full h-[80px] bottom-0 bg-blue-500">
            <div className="hidden xl:inline text-white">
                <h1 className="text-2xl font-Quest">Don't miss what's happening</h1>
                <span className="text-[18px] font-Quest ">Be the first to know</span>

            </div>

            <div className="space-x-3">
                <button className=" font-Quest bg-transparent border border-white text-white
                w-[160px] rounded-full h-[40px] hover:bg-[#81b6db] ">Log In</button>
                <button className="bg-white text-black font-Quest
                w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]">Sign Up</button>
            </div>
        </div>
    )
}