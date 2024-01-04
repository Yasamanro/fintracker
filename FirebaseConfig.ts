// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf1FDFxeFD5amjUSpaAOrDcE3CZQbMCjg",
  authDomain: "finance-tracker-68c5f.firebaseapp.com",
  projectId: "finance-tracker-68c5f",
  storageBucket: "finance-tracker-68c5f.appspot.com",
  messagingSenderId: "768977913440",
  appId: "1:768977913440:web:2640d4f5ed2c47ebbde505",
  measurementId: "G-5NLPXQQ8KJ"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
