// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyARpbN-qgldQRrMZjEh6t3enQow3ufypMo",
  authDomain: "neoenglish-13ac4.firebaseapp.com",
  databaseURL:
    "https://neoenglish-13ac4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "neoenglish-13ac4",
  storageBucket: "neoenglish-13ac4.appspot.com",
  messagingSenderId: "398734624852",
  appId: "1:398734624852:web:1c3704b784be8b8c8585c1",
  measurementId: "G-K2SRJTTF53",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
