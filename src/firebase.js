// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmifDxiCYTftPX8_iubOagDgi9ui9XC9M",
    authDomain: "react-script-sharing-platform.firebaseapp.com",
    projectId: "react-script-sharing-platform",
    storageBucket: "react-script-sharing-platform.appspot.com",
    messagingSenderId: "731555393463",
    appId: "1:731555393463:web:491cc5edfa2e821ff68232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }