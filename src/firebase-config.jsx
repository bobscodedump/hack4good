// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDACiNCgR9qkJ3K0El2L1y88kCNfO4a_NQ",
  authDomain: "nkf-platform.firebaseapp.com",
  projectId: "nkf-platform",
  storageBucket: "nkf-platform.appspot.com",
  messagingSenderId: "765989520597",
  appId: "1:765989520597:web:38b83fa2b41c9b35bc4e5c",
  measurementId: "G-CWQC3RW3WE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
