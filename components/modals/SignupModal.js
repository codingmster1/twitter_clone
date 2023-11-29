import { closeSignupModal, openSignupModal } from '@/redux/modalSlice';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '@/firebase';

export default function SignupModal() {
    const isOpen = useSelector(state => state.modals.signupModalOpen)
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignUp() {

        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) return
            console.log(currentUser)

        })
        return unsubscribe

    }, [])
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

                <div className="w-[90%] h-[600px] bg-white font-Quest md:w-[560px]
                md:h-[600px] border border-blue-500 rounded-lg
                flex justify-center">


                    <div className="w-[90%] mt-8 flex flex-col" >
                        <button className="bg-black text-white w-full font-Quest font-bold
                    text-lg p-2 rounded-md">
                            Sign in as Guest
                        </button>
                        <h1 className="text-center mt-4 font-bold font-Quest text-lg">or</h1>
                        <h1 className="text-center mt-4 font-bold font-Quest text-2xl">Create your Account</h1>
                        <input placeholder="Full Name"
                            className="h-10 mt-8 rounded-md bg-transparent border border-black p-6"
                            type={"text"} />
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
                            onClick={handleSignUp}>
                            Create Account
                        </button>
                    </div>
                </div>

            </Modal>
        </>

    )
}