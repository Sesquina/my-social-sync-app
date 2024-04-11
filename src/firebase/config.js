// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPStAbCf_FeIIbTNRYurKb9txnEGoVOaw",
  authDomain: "ai-social-sync-888.firebaseapp.com",
  projectId: "ai-social-sync-888",
  storageBucket: "ai-social-sync-888.appspot.com",
  messagingSenderId: "103460921122",
  appId: "1:103460921122:web:aab3edb6cf117ef8b48f7b",
  measurementId: "G-ZGTBJYXR3Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
