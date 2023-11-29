// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVPNtUhzzkTzRVxdpK-XV8ZF-HOvW6HMo",
    authDomain: "twitterclone-53240.firebaseapp.com",
    projectId: "twitterclone-53240",
    storageBucket: "twitterclone-53240.appspot.com",
    messagingSenderId: "764641875884",
    appId: "1:764641875884:web:ab077c947b636f227e0c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)