import { auth } from '@/firebase';
import { closeLoginModal, openLoginModal } from '@/redux/modalSlice';
import Modal from '@mui/material/Modal';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginModal() {
    const isOpen = useSelector(state => state.modals.loginModalOpen)
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignIn() {
        await signInWithEmailAndPassword(auth, email, password)
    }

    async function handleGuestSignIn(email, password) {
        await signInWithEmailAndPassword(auth, "guest111100@gmail.com", "123456")
    }




    return (
        <>
            <button className=" font-Quest bg-transparent border border-white text-white
                w-[160px] rounded-full h-[40px] hover:bg-[#81b6db]"
                onClick={() => dispatch(openLoginModal())}
            >
                Login
            </button>

            <Modal
                open={isOpen}
                onClose={() => dispatch(closeLoginModal())}
                className="flex justify-center items-center">

                <div className="w-[90%] h-[600px] bg-white font-Quest md:w-[560px]
                md:h-[600px] border border-blue-500 rounded-lg
                flex justify-center">


                    <div className="w-[90%] mt-8 flex flex-col" >

                        <h1 className="text-center mt-4 font-bold font-Quest text-2xl">Sign into your Account</h1>
                        <input
                            placeholder="Email"
                            className="h-10 mt-8 rounded-md bg-transparent border border-black p-6"
                            type={"email"}
                            onChange={e => setEmail(e.target.value)} />
                        <input
                            placeholder="Password"
                            className="h-10 mt-8 rounded-md bg-transparent border border-black p-6"
                            type={"password"}
                            onChange={e => setPassword(e.target.value)} />

                        <button className="bg-black text-white w-full font-Quest font-bold
                    text-lg p-2 mt-8 rounded-md"
                            onClick={handleSignIn}
                        >
                            Login
                        </button>
                        <h1 className="text-center mt-8 font-bold font-Quest text-lg">or</h1>
                        <button className="bg-black text-white w-full font-Quest font-bold
                    text-lg p-2 rounded-md mt-8"
                            onClick={handleGuestSignIn}
                        >
                            Sign in as Guest
                        </button>

                    </div>
                </div>

            </Modal>
        </>

    )

}