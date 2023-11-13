// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCGetiYH6MTkLt3Izl0ZY2hMfnUKrP2-Is",
  authDomain: "netflixgpt-bff0b.firebaseapp.com",
  projectId: "netflixgpt-bff0b",
  storageBucket: "netflixgpt-bff0b.appspot.com",
  messagingSenderId: "504190333146",
  appId: "1:504190333146:web:bcc1d93399d4c59c69f5e3",
  measurementId: "G-6V49FCC99C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();