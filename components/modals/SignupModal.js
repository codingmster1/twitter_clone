import { closeSignupModal, openSignupModal } from '@/redux/modalSlice';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';

export default function SignupModal() {
    const isOpen = useSelector(state => state.modals.signupModalOpen)
    const dispatch = useDispatch()
    console.log(isOpen)
    return (
        <>
            <button className="bg-white text-black font-Quest
                w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
                onClick={() => dispatch(openSignupModal())}
            >
                Sign Up
            </button>

            <Modal
                open={isOpen}
                onClose={() => dispatch(closeSignupModal())}
                className="flex justify-center items-center">

                <div className="w-[90%] h-[400px] bg-white font-Quest md:w-[560px]
                md:h-[600px] border border-blue-500 rounded-lg">


                    <div className="w-[90%]" >
                        <button className="bg-black text-white w-full font-Quest font-bold
                    text-lg p-2">
                            Sign in as Guest
                        </button>
                    </div>
                </div>

            </Modal>
        </>

    )
}