// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0ZmGkfqmkWA2Hlzzgcm317bYrPf7tZzs",
  authDomain: "mahsezs.firebaseapp.com",
  projectId: "mahsezs",
  storageBucket: "mahsezs.appspot.com",
  messagingSenderId: "984038588638",
  appId: "1:984038588638:web:f12ec1821418ec4c0a024f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;