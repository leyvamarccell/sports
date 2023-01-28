// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC46wOtn3__DFMwviGg-NfxSOrm8rG64g4",
  authDomain: "remesas-859a5.firebaseapp.com",
  projectId: "remesas-859a5",
  storageBucket: "remesas-859a5.appspot.com",
  messagingSenderId: "712346785643",
  appId: "1:712346785643:web:b4f0efd687f96707e65e2e",
  measurementId: "G-X5EVWKB36X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)