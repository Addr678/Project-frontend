// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZooHic_-vU37s9wpkTsg8vXnQ_uun9fs",
  authDomain: "personalfinancetrackerap-89a01.firebaseapp.com",
  projectId: "personalfinancetrackerap-89a01",
  storageBucket: "personalfinancetrackerap-89a01.appspot.com",
  messagingSenderId: "840105961964",
  appId: "1:840105961964:web:8c41e242719f346b2b38c9",
  measurementId: "G-EKL52RN2F0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };