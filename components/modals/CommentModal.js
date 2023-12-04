import { closeCommentModal } from '@/redux/modalSlice';
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, XIcon } from '@heroicons/react/outline';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';

export default function CommentModal() {
    const isOpen = useSelector((state) => state.modals.commentModalOpen)
    const userImg = useSelector((state) => state.user.photoUrl)
    const dispatch = useDispatch()
    const tweetDetails = useSelector(state => state.modals.commentTweetDetails)
    return (
        <>

            <Modal
                className="flex justify-center items-center"
                open={isOpen}
                onClose={() => dispatch(closeCommentModal())}

            >

                <div className="bg-white w-full h-full relative sm:w-[600px] sm:h-[386px]
                rounded-lg border border-gray-500 text-black 
                sm:p-10 p-4 outline-none">

                    <div className="absolute w-[2px] h-[77px] bg-gray-500
                    left-[40px] top-[96px] sm:left-[64px] sm:top-[120px]"></div>
                    <div
                        onClick={() => dispatch(closeCommentModal())}
                        className="absolute top-4 cursor-pointer">
                        <XIcon className="w-6" />
                    </div>


                    <div className="mt-8">
                        <div className="flex space-x-3 w-full">
                            <img
                                className="w-12 h-12 object-cover rounded-full"
                                src={tweetDetails.photoUrl} />
                            <div>
                                <div className="font-Quest flex space-x-1.5">
                                    <h1 className="font-bold">{tweetDetails.name}</h1>
                                    <h1 className="text-gray-500">@{tweetDetails.username}</h1>
                                </div>
                                <p className="mt-1">{tweetDetails.tweet}</p>
                                <h1 className="text-gray-500 text-[15px] mt-2">
                                    Replying to <span className="text-[#1b9bf0]">@{tweetDetails.username}</span>
                                </h1>

                            </div>

                        </div>
                    </div>

                    <div className="mt-11">
                        <div className="flex space-x-3">
                            <img
                                className="w-12 h-12 object-cover rounded-full"
                                src={userImg} />
                            <div className="w-full">
                                <textarea
                                    placeholder="Write your reply"
                                    className="w-full text-lg outline-none
                                bg-transparent resize-none" />

                                <div className="pt-4 flex justify-between border-t border-gray-700 font-Quest">
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
                                        className="font-Quest bg-blue-400 font-bold rounded-full px-4 py-1.5
                                     disabled:opacity-50"
                                    >Post</button>
                                </div>



                            </div>

                        </div>

                    </div>
                </div>

            </Modal>
        </>
    )
}