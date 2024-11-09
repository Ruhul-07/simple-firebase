// Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-7GmQ8DPuR1SHiENyH4rh8gJ_DxopGt0",
  authDomain: "simple-firebase-a3c0f.firebaseapp.com",
  projectId: "simple-firebase-a3c0f",
  storageBucket: "simple-firebase-a3c0f.firebasestorage.app",
  messagingSenderId: "547253697393",
  appId: "1:547253697393:web:1de4349f197ff6dd4dd4d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;