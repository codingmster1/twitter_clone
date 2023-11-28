import Modal from '@mui/material/Modal';
import { useState } from "react";

export default function SignupModal() {

    //const [isOpen, setIsOpen] = useState(false)
    //const handleClose = () => setIsOpen(false)
    //const handleOpen = () => setIsOpen(true)

    const isOpen = useSelector(state => state.modals.signupModalOpen)

    return (
        <>
            <button className="bg-white text-black font-Quest
                w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
                onClick={handleOpen}
            >
                Sign Up
            </button>

            <Modal
                open={isOpen}
                onClose={handleClose}
                className="flex justify-center items-center">

                <div className="w-[400px] h-[200px] bg-white">
                    Sign Up
                </div>

            </Modal>
        </>

    )
}