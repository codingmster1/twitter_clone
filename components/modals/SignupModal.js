import { closeSignupModal, openSignupModal } from '@/redux/modalSlice';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

export default function SignupModal() {

    //const [isOpen, setIsOpen] = useState(false)
    //const handleClose = () => setIsOpen(false)
    //const handleOpen = () => setIsOpen(true)

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

                <div className="w-[400px] h-[200px] bg-white">
                    Sign Up
                </div>

            </Modal>
        </>

    )
}