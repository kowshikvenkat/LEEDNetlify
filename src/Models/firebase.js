// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyQMWoP278S4OE3ao44-UVFbRafrw7uGY",
  authDomain: "kct-leed.firebaseapp.com",
  projectId: "kct-leed",
  storageBucket: "kct-leed.appspot.com",
  messagingSenderId: "903642627589",
  appId: "1:903642627589:web:df34d42fb7abe97def266c",
  measurementId: "G-D3ZM1ZE4M5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

